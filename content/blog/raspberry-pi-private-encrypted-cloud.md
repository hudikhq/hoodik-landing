---
title: "Turn Your Raspberry Pi Into a Private, Encrypted Cloud Storage Server"
description: "Your Raspberry Pi deserves a project that actually solves a problem. Here's how to turn it into a private, end-to-end encrypted cloud storage server."
date: 2026-04-12
author: "Hoodik Team"
category: "Guides"
tags: ["raspberry pi", "self-hosted", "cloud storage", "docker", "privacy", "NAS"]
image: "/images/screenshot.png"
draft: false
---

You just got a Raspberry Pi. Or maybe you've had one for a while, and it's been sitting in a drawer since that initial burst of enthusiasm wore off. Either way, you're looking at this little single-board computer and thinking: "What should I actually do with this thing?"

## The Classic Raspberry Pi Projects (And Why Most Gather Dust)

The usual suspects all have the same problem: after the initial setup, they fade into the background.

Pi-hole is genuinely useful — configure your router to use it as DNS and ads disappear across your whole network. But it takes about 20 minutes to set up, then runs silently forever. Your Pi becomes a $50 DNS server touching maybe 1% of its capabilities.

A media server sounds great until a Pi tries to transcode a video and struggles. You end up needing files pre-encoded in the right format, which defeats half the convenience. Streaming services have also made the local media library workflow less compelling for most people.

Retro gaming (RetroPi) is a fun weekend project. Then it sits there because SNES games are harder to actually sit down and play than they seem in theory.

Home automation is useful if you're already deep into smart home hardware, but it's a rabbit hole with no bottom and a lot of frustrating edge cases.

All of these are fine. The problem is that none of them solve something you run into every day. A private encrypted cloud does.

## Why a Raspberry Pi Is Perfect for Cloud Storage

Think about what cloud storage actually needs from hardware:

- **Always on** — your files should be accessible whenever you need them
- **Network connected** — needs to serve files over your local network or the internet
- **Decent storage I/O** — needs to read and write files without painful delays
- **Low power consumption** — running 24/7 shouldn't cost a fortune in electricity

A Raspberry Pi checks every box.

### It's Always On (For Pennies)

A Raspberry Pi 4 or 5 consumes about 3-7 watts under typical load. The cost of running it 24/7:

| Device | Typical Power Draw | Annual Cost (at $0.15/kWh) |
|--------|-------------------|---------------------------|
| Raspberry Pi 4/5 | 5W average | **$6.57/year** |
| Old laptop as server | 30-50W | $39-66/year |
| Desktop PC as server | 80-150W | $105-197/year |
| NAS device (2-bay) | 15-25W | $20-33/year |

Under $7 per year in electricity for a 24/7 cloud server. Leave a desktop running instead and you'd spend more on electricity than a cloud storage subscription.

### Just Enough Power

A Raspberry Pi 5 has a quad-core ARM Cortex-A76 processor and up to 8GB of RAM — vastly more than a cloud storage server needs. Hoodik uses about 20MB of RAM for its server process. The Pi's gigabit Ethernet and USB 3.0 ports give you plenty of bandwidth; you'll saturate your internet upload speed long before you saturate the Pi's local I/O.

### What About Performance?

The Pi handles documents, photos, and music collections without issue — uploads and downloads are fast, browsing is responsive, and 2-5 simultaneous users is no problem. Large video files work too, just limited by your network speed rather than the Pi.

Where it gets slow is directory listings with 10,000+ files, and it's not the right tool if you need video transcoding or 50+ simultaneous heavy transfers. For a household or small team storing everyday files, it's more than capable.

## Before You Start: Hardware Setup Tips

A few hardware decisions make a significant difference in reliability and performance for an always-on server.

### Use a USB SSD, Not the SD Card

This is the single most important hardware decision. SD cards are designed for cameras and phones — they wear out quickly under the constant read/write patterns of a server, and when they fail they often fail corrupted. An SSD connected via USB 3.0 is 10-20x faster for random I/O, far more durable under continuous use, and you won't lose data to a corrupted card.

A 256GB USB SSD costs about $25-35. A 1TB model is $60-80. This is where your files live, so it's not the place to cut corners.

You can still boot from the SD card and mount the SSD for data, or (better) configure the Pi to boot directly from the USB SSD. The Raspberry Pi 4 and 5 both support USB boot natively.

### Go Headless

You don't need a monitor, keyboard, or mouse connected to a server. Set up your Pi headless from the start:

1. Flash Raspberry Pi OS Lite (no desktop environment — saves resources)
2. Enable SSH during the flashing process (Raspberry Pi Imager makes this easy)
3. Connect via SSH from your laptop/desktop

This frees up all the Pi's resources for actually serving files instead of rendering a desktop nobody's looking at.

### Set a Static IP

Your router assigns dynamic IPs by default, which means your Pi's address might change after a reboot. For a server you want to reliably connect to, assign it a static IP either through your router's DHCP reservation settings or in the Pi's network configuration.

Pick something memorable like `192.168.1.50` and you'll always know where your cloud is.

### Consider a UPS (Optional But Smart)

A small USB UPS (like a PiSugar or similar) costs about $30 and gives your Pi a few minutes of battery backup during power outages. This prevents SD card/SSD corruption from sudden power loss — the Pi can shut down gracefully instead of just dying mid-write.

## What You're Building

This is a proper home server setup — the same architecture you'd end up with if you got serious about self-hosting, running on a $60 board. The full stack:

- **Docker + Portainer** — container management with a nice web UI
- **Pi-hole** — network-wide ad blocker + local DNS resolver
- **Caddy** — reverse proxy with automatic TLS certificates
- **Cloudflare Tunnel** — secure external access without opening ports
- **Hoodik** — your private, end-to-end encrypted cloud storage

When it's all running you get:

- A private cloud accessible from any browser, phone, or tablet — at home and away
- End-to-end encryption: files are encrypted on your device before upload, the Pi only stores ciphertext
- Multi-user support with no per-user fees — set up accounts for family members
- Public link sharing with expiration dates and optional password protection
- Built-in rich text editor for encrypted notes with full-text search
- An Android app (iOS and desktop on the way) that connects to the same server
- A clean URL like `cloud.yourdomain.com` that works everywhere
- Network-wide ad blocking thrown in for free

The total hardware cost:

| Component | Cost |
|-----------|------|
| Raspberry Pi 5 (4GB) | $60 |
| USB-C power supply | $12 |
| 512GB USB SSD | $40 |
| MicroSD card (for initial setup) | $8 |
| Case with passive cooling | $10 |
| **Total** | **~$130** |

That's a one-time cost. You'll need a domain name (around $10/year) and a free Cloudflare account for the tunnel. No monthly subscriptions beyond that.

## The Architecture (How It All Fits Together)

Worth understanding before you start installing things, because the pieces connect in a way that's actually elegant — and it's the same pattern real homelabs use at any scale:

**When you're at home (WiFi or wired):**

Your device → Pi-hole DNS (resolves `cloud.yourdomain.com` to Pi's local IP) → Caddy reverse proxy → Hoodik

Traffic never leaves your local network. It's fast, direct, and the TLS certificate from Caddy keeps everything encrypted even on your LAN.

**When you're away from home:**

Your device → Cloudflare's network → Cloudflare Tunnel → Caddy reverse proxy → Hoodik

Cloudflare tunnels the traffic straight into your Pi. No ports opened on your router. No exposing your home IP address. Cloudflare handles TLS on their end, your Caddy handles TLS internally, and Hoodik generates its own self-signed cert for the last hop — but that's fine for local network traffic between the reverse proxy and Hoodik.

The result: one URL (`cloud.yourdomain.com`) works whether you're on your couch or across the world. At home it resolves locally and never touches the internet. Away from home it routes through Cloudflare with a bit more latency, but the same interface.

## Step 1: Base Setup

Flash Raspberry Pi OS Lite on your Pi, enable SSH, boot it up, and connect via SSH. Use a USB SSD for storage (see the hardware tips above).

Install Docker:

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

Log out and back in so the Docker group takes effect.

## Step 2: Portainer (Docker Management UI)

Portainer gives you a web UI to manage all your containers. You'll thank yourself later when you want to check logs or restart something without SSH-ing in.

```bash
docker volume create portainer_data
docker run -d \
  --name portainer \
  --restart unless-stopped \
  -p 9443:9443 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data \
  portainer/portainer-ce:latest
```

Visit `https://your-pi-ip:9443` and set up your admin account. From here on, you can manage everything through Portainer's UI if you prefer — but we'll use command line for the initial setup since it's easier to follow.

## Step 3: Pi-hole (Ad Blocking + Local DNS)

Pi-hole blocks ads across your entire network and — crucially for our setup — will handle local DNS resolution so `cloud.yourdomain.com` points to your Pi's local IP when you're at home.

```bash
docker run -d \
  --name pihole \
  --restart unless-stopped \
  --cap-add NET_ADMIN \
  -p 53:53/tcp -p 53:53/udp \
  -p 8080:80 \
  -e TZ='Europe/Berlin' \
  -e WEBPASSWORD='your-pihole-password' \
  -v pihole_etc:/etc/pihole \
  -v pihole_dnsmasq:/etc/dnsmasq.d \
  pihole/pihole:latest
```

After it starts, configure your router to use the Pi's IP as the primary DNS server. This routes all DNS queries through Pi-hole — ads disappear and you get local DNS control.

**Add local DNS entry:** Open Pi-hole's admin panel at `http://your-pi-ip:8080/admin`, go to **Local DNS → DNS Records**, and add:

- Domain: `cloud.yourdomain.com`
- IP: your Pi's local IP (e.g., `192.168.1.50`)

Now every device on your network will resolve `cloud.yourdomain.com` to the Pi directly — no internet roundtrip.

## Step 4: Caddy (Reverse Proxy with Auto-TLS)

Caddy is a modern reverse proxy that automatically obtains and renews TLS certificates. It's simpler than nginx and handles HTTPS out of the box.

Create a Caddyfile:

```bash
mkdir -p /opt/caddy
```

Create the file `/opt/caddy/Caddyfile` with:

```
cloud.yourdomain.com {
    reverse_proxy localhost:5443 {
        transport http {
            tls_insecure_skip_verify
        }
    }
}
```

The `tls_insecure_skip_verify` is needed because Hoodik generates a self-signed certificate. Caddy handles the real TLS certificate that your browser sees — the connection between Caddy and Hoodik is on localhost anyway, so the self-signed cert just keeps the internal hop encrypted.

Run Caddy:

```bash
docker run -d \
  --name caddy \
  --restart unless-stopped \
  --network host \
  -v /opt/caddy/Caddyfile:/etc/caddy/Caddyfile \
  -v caddy_data:/data \
  -v caddy_config:/config \
  caddy:latest
```

We use `--network host` so Caddy can reach Hoodik on localhost:5443 and bind to ports 80/443 directly.

## Step 5: Cloudflare Tunnel (External Access)

This is the magic piece. Cloudflare Tunnel creates a secure outbound connection from your Pi to Cloudflare's network — no incoming ports needed, no exposing your home IP.

**Prerequisites:** You need a domain on Cloudflare (free plan works). Go to Cloudflare dashboard → Zero Trust → Networks → Tunnels → Create a tunnel.

Cloudflare will give you a tunnel token. Run:

```bash
docker run -d \
  --name cloudflare-tunnel \
  --restart unless-stopped \
  --network host \
  cloudflare/cloudflared:latest \
  tunnel --no-autoupdate run --token YOUR_TUNNEL_TOKEN
```

In the Cloudflare dashboard, configure the tunnel's public hostname:

- Subdomain: `cloud`
- Domain: `yourdomain.com`
- Service: `https://localhost:443`

Now `cloud.yourdomain.com` is accessible from anywhere in the world, tunneled securely through Cloudflare to your Pi's Caddy instance.

## Step 6: Hoodik (Your Encrypted Cloud)

The final piece. The full setup details are in our [getting started guide](/get-started), but here's the command:

```bash
docker run -d \
  --name hoodik \
  --restart unless-stopped \
  -e DATA_DIR='/data' \
  -e APP_URL='https://cloud.yourdomain.com' \
  -v /mnt/ssd/hoodik:/data \
  -p 5443:5443 \
  hudik/hoodik:latest
```

Point the data volume (`/mnt/ssd/hoodik`) at your USB SSD.

Open `https://cloud.yourdomain.com` — you should see Hoodik's registration page. The first account becomes admin. Your encryption keys are generated right in your browser — the Pi never sees them.

## The Finished Setup

You now have a full home server running on a $130 Raspberry Pi:

| Service | What it does | Port |
|---------|-------------|------|
| **Portainer** | Container management UI | 9443 |
| **Pi-hole** | Ad blocking + local DNS | 53, 8080 |
| **Caddy** | Reverse proxy, auto-TLS | 80, 443 |
| **Cloudflare Tunnel** | External access | outbound only |
| **Hoodik** | Encrypted cloud storage | 5443 (internal) |

All of this uses maybe 200-300MB of RAM and barely tickles the Pi's CPU. You have headroom for more services later.

## Growing Beyond the Pi

This setup is a real homelab foundation. When you outgrow the Pi — if you start adding more services, more users, or more storage — the migration path is natural.

Need more storage? Add an S3 backend like Backblaze B2. Your Pi still runs Hoodik, but the encrypted chunks live in the cloud. There's a [B2 setup guide](/blog/backblaze-b2-hoodik-unlimited-encrypted-storage) for exactly this.

Need more compute? The Docker containers move to a mini PC, an old laptop, or a NAS like Unraid without any architectural changes.

Going full homelab? Proxmox for VMs, a proper rack, a UniFi router handling DNS instead of Pi-hole — the architecture stays the same. Reverse proxy in front, services behind it, tunnel for external access. Just bigger hardware.

You're not locked into the Pi. It's a starting point that teaches you the patterns used by serious homelabs, and everything you learn here scales up.

## A Pi Project That Keeps Giving

Unlike retro gaming (fun for a weekend) or a media server (limited by transcoding), this setup gets daily use. Every photo you take, every document you want to keep private — it all has a home that you control.

The whole stack just sits there, quietly serving your files, blocking ads, and handling TLS. It draws less power than a nightlight and cost less than a nice dinner out.

Check out the [getting started guide](/get-started) for more details on Hoodik's configuration, or the [Backblaze B2 guide](/blog/backblaze-b2-hoodik-unlimited-encrypted-storage) if you want virtually unlimited storage on top of your Pi setup.
