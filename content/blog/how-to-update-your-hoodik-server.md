---
title: "How to Update Your Hoodik Server (Manual or Auto-Update with Watchtower)"
description: "Keep your self-hosted Hoodik server current — a 30-second Docker update, fully automatic background updates with Watchtower, or notification-only options if you'd rather review releases yourself."
date: 2026-04-25
author: "Hoodik Team"
category: "Guides"
tags: ["docker", "watchtower", "self-hosted", "updates", "maintenance", "tutorial"]
image: "/images/screenshot.png"
draft: false
---

Self-hosting your own cloud means you also own the update schedule. The good news: with Docker, updating Hoodik is a 30-second operation. The better news: if you'd rather not think about it at all, Watchtower can handle it for you in the background.

This guide covers both — the manual route for people who like to see what's happening, and the hands-off route for people who'd rather just have it stay current.

## Why Bother Updating

Cloud providers update their software whether you want it or not. Self-hosting flips the responsibility — and the control — back to you. Updates bring three things worth caring about:

- **Security fixes.** Vulnerabilities found in dependencies (the database driver, TLS stack, image libraries) get patched in new releases. Older builds keep the bug.
- **New features.** Background sync, the markdown editor, S3 storage, public links, the mobile app — every release tends to add something. The mobile app also follows the latest release closely; older servers fall back to slower or simpler paths.
- **Bug fixes.** Edge cases people hit in the wild get cleaned up. If you've been seeing something odd, the fix may already be out.

Updates ship as new tags on the [hudik/hoodik](https://hub.docker.com/r/hudik/hoodik) Docker image. The `latest` tag always points at the newest stable release.

## Check What Version You're Running

Hoodik exposes the running version on its `/api/liveness` endpoint:

```bash
curl https://your-hoodik-host/api/liveness
```

The response includes a `version` field:

```json
{
  "METHOD": "GET",
  "message": "I am alive",
  "version": "1.15.0"
}
```

Compare that against the [latest release on GitHub](https://github.com/hudikhq/hoodik/releases/latest). If you're behind, read on.

If the response has no `version` field at all, you're on a build older than v1.16.0 — definitely worth updating.

## Back Up Before You Update

Two minutes of prevention. Hoodik stores its database and (with local storage) your encrypted file blobs under `DATA_DIR`. With S3 storage, the blobs live in your bucket and only the database is local.

A simple backup before an update:

```bash
docker exec hoodik tar czf - /data > hoodik-backup-$(date +%F).tar.gz
```

Store it somewhere off the server. If anything goes sideways during the update, restoring is just untarring back into the same volume.

If you're running with PostgreSQL instead of SQLite, dump it the usual way:

```bash
pg_dump -h db -U hoodik hoodik > hoodik-db-$(date +%F).sql
```

You almost certainly won't need the backup. But the one time you do, you'll be glad it took two minutes.

## The Manual Update (Docker)

Three commands, in order:

```bash
docker pull hudik/hoodik:latest
docker stop hoodik
docker rm hoodik
```

Then re-run with your existing configuration. If you're using the basic local-storage setup:

```bash
docker run -d \
  --name hoodik \
  --restart unless-stopped \
  -p 5443:5443 \
  -e DATA_DIR=/data \
  -e APP_URL=https://your-domain.com \
  -v hoodik_data:/data \
  hudik/hoodik:latest
```

The named volume (`hoodik_data` here) carries your data across the recreation. Nothing is lost — you're just swapping the binary.

### Docker Compose Is Cleaner

If you're using `docker-compose.yml`, two commands cover it:

```bash
docker compose pull
docker compose up -d
```

Compose handles the stop/remove/recreate automatically and only restarts containers whose images actually changed. This is the recommended setup for anything you plan to run for more than a few weeks.

## Verify the Update Worked

After the container is up, hit `/api/liveness` again and confirm the version moved:

```bash
curl https://your-hoodik-host/api/liveness
```

Open the web UI and log in. If you can see your files and the encryption tests pass on first load, you're done. The Hoodik mobile app also surfaces an in-app banner when your server is behind the latest release, so you'll know without checking manually.

## Auto-Updates with Watchtower

Manual updates are fine when you're paying attention. For most self-hosters, "I'll update when I get around to it" turns into "wait, I'm two versions behind." [Watchtower](https://containrrr.dev/watchtower/) solves this by polling Docker Hub on a schedule, pulling new image versions, and recreating the affected containers automatically.

The minimal setup is one container:

```bash
docker run -d \
  --name watchtower \
  --restart unless-stopped \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --cleanup --schedule "0 0 4 * * *"
```

That schedule runs at 4 AM every day. Watchtower checks every running container's image, pulls any updates, and recreates the container with the same config. The `--cleanup` flag deletes the old image so you don't accumulate gigabytes of stale layers.

By default Watchtower watches every container on the host. To only update specific ones, add a label to the containers you want managed and tell Watchtower to be label-aware.

In your Hoodik compose file:

```yaml
services:
  hoodik:
    image: hudik/hoodik:latest
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
```

Then run Watchtower with the label-only flag:

```bash
docker run -d \
  --name watchtower \
  --restart unless-stopped \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --label-enable --cleanup --schedule "0 0 4 * * *"
```

Now Watchtower only touches containers you explicitly opted in.

### Get Notified When It Updates

Watchtower can ping you on Slack, Discord, email, or any [shoutrrr](https://containrrr.dev/shoutrrr/) target whenever it pulls a new image. Useful so a silent update doesn't surprise you when something looks different the next morning.

```yaml
services:
  watchtower:
    image: containrrr/watchtower
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      WATCHTOWER_NOTIFICATIONS: shoutrrr
      WATCHTOWER_NOTIFICATION_URL: "discord://token@channel"
      WATCHTOWER_CLEANUP: "true"
      WATCHTOWER_SCHEDULE: "0 0 4 * * *"
      WATCHTOWER_LABEL_ENABLE: "true"
```

Swap the URL for your own webhook. The shoutrrr docs cover every supported transport.

### Caveats

Watchtower is great, but a few things to keep in mind:

- It updates `latest` (or whatever tag you've pinned). If you've pinned `hudik/hoodik:1.14.0`, Watchtower won't move you to 1.15.0 — that's by design. Use `latest` if you want true auto-updates, or pin to a major version like `1` if you want patches but not minor/major bumps.
- It restarts the container when an update lands. There will be a few seconds of downtime while it swaps. Schedule it for a quiet hour.
- It does not back up before updating. Combine it with a daily volume snapshot if your storage stack supports one (Btrfs, ZFS, restic to S3, etc.).

## If You'd Rather Just Be Notified

Some people want updates to land only after they've read the release notes. [Diun](https://crazymax.dev/diun/) is the equivalent of Watchtower but notification-only — it watches your images and tells you when a newer one is available without touching anything.

```yaml
services:
  diun:
    image: crazymax/diun:latest
    restart: unless-stopped
    environment:
      DIUN_WATCH_SCHEDULE: "0 0 */6 * * *"
      DIUN_PROVIDERS_DOCKER: "true"
      DIUN_NOTIF_DISCORD_WEBHOOKURL: "https://discord.com/api/webhooks/..."
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - diun_data:/data
```

You get a ping when a new Hoodik release is published. You decide when to actually pull it.

## Updating on Unraid

If you're running Hoodik via the [Hoodik Unraid template](https://github.com/hudikhq/hoodik-unraid), the Docker tab in Unraid's web UI handles manual updates. Click **Check for Updates** at the bottom of the Docker page; if a new image is available, the entry shows "update ready" and an **Apply Update** button does the rest.

Unraid does not ship with a built-in auto-update mechanism for containers. Two well-trodden paths if you want one:

- **CA Auto Update Applications plugin.** Install it from the Apps tab (Community Applications). It adds a settings page where you pick which containers and plugins should auto-update, on what schedule. This is the most "Unraid-native" option.
- **Watchtower in a container on the Unraid host itself.** The Docker setup from earlier in this post works on Unraid the same way it works anywhere else — add the container via the Docker tab and it'll keep your other containers updated. Useful if you already use Watchtower elsewhere and want one consistent setup.

## Updating on a Raspberry Pi or Mini-Server

If you followed the [Raspberry Pi setup guide](/blog/raspberry-pi-private-encrypted-cloud), you're already running Docker. Either approach above works — Watchtower in particular runs comfortably on a Pi (about 20 MB of RAM idle) and is the lowest-friction way to keep a small home server current.

If your Pi is the only server you maintain, just dropping Watchtower on it once and forgetting about it is probably the right move.

## What About Breaking Changes?

Hoodik follows semver: `1.x.y` releases never break the database schema or API in ways that lose data. Migrations run automatically on startup — if a release adds a column or new table, the server applies the migration before serving requests.

That said: read the [release notes](https://github.com/hudikhq/hoodik/releases) before any major version bump (e.g. `1.x` → `2.0`). Major bumps are the only ones that may require manual config changes, and they're rare. For minor and patch releases, you can update with confidence.

## The Short Version

- **Manual:** `docker compose pull && docker compose up -d`. Two commands, zero downtime worth caring about.
- **Hands-off:** Run Watchtower with the label-enable pattern and pick a quiet hour for the schedule.
- **Conservative:** Run Diun and read each release before pulling.
- **Always:** Take a backup before major version bumps. The one time you regret skipping it is enough.

You're self-hosting because you wanted control. Updates are the part of that control most people forget about until something prompts them. Pick whichever style fits how you like to run things, set it up once, and your Hoodik server stays current without becoming a chore.
