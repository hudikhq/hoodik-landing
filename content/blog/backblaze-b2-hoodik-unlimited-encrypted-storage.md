---
title: "Backblaze B2 + Hoodik: Encrypted Storage at $6/TB"
description: "Set up truly private cloud storage with Backblaze B2 and Hoodik. End-to-end encrypted, S3-compatible, and a fraction of the cost of Google Drive."
date: 2026-04-12
author: "Hoodik Team"
category: "Guides"
tags: ["backblaze b2", "s3", "self-hosted", "tutorial", "encrypted storage", "docker"]
image: "/images/screenshot.png"
draft: false
---

# Backblaze B2 + Hoodik: Encrypted Storage at $6/TB

Pair Backblaze B2 with Hoodik and you get unlimited encrypted cloud storage for a fraction of what Google or Dropbox charges -- with the guarantee that nobody, not even the storage provider, can read your files. B2 handles the cheap, reliable object storage. Hoodik handles the encryption, access control, and user interface. B2 only ever sees encrypted noise.

## What is Backblaze B2?

Backblaze B2 is an S3-compatible object storage service. Think of it like AWS S3 but dramatically cheaper and simpler. There are no complicated storage tiers, no confusing pricing calculators, no surprise egress fees that bankrupt your side project.

The pricing is straightforward:

- **Storage**: $6 per TB per month
- **Downloads**: First 3x your average monthly storage is free per month (store 1 TB, download up to 3 TB/month free)
- **API calls**: First 2,500 class B calls free per day, then $0.004 per 1,000
- **Uploads**: Free

No "retrieval fees," no "minimum storage duration charges," no nickel-and-diming.

## The Cost Comparison

| Storage | Google One | Dropbox Plus | B2 + Hoodik |
|---------|-----------|--------------|-------------|
| 100 GB  | $2/mo     | --           | $0.60/mo    |
| 2 TB    | $10/mo    | $12/mo*      | $12/mo      |
| 5 TB    | --        | --           | $30/mo      |
| 10 TB   | --        | --           | $60/mo      |

*Dropbox Plus includes 2 TB. Google One's consumer plans top out at 2 TB ($10/mo). Beyond that, pricing varies by plan tier.

Google and Dropbox can read your files. With B2 + Hoodik, files are encrypted before they leave your device -- B2 stores ciphertext. Even if someone compromised your B2 bucket, they'd get meaningless encrypted blobs.

And there's no hard cap. Need 50 TB? That's $300/mo. Need 100 TB? $600/mo. You scale linearly without hitting artificial walls.

## Why This Combination Works

Each piece has a clear job.

**Hoodik** runs on a small server (a $5/mo VPS works fine -- it uses about 20 MB of RAM). It handles user authentication, access control, end-to-end encryption (RSA-2048 + AEGIS-128L), the web interface and API, encrypted file metadata and folder structure, and privacy-preserving search.

**Backblaze B2** handles storing the actual encrypted file blobs, with reliable and redundant storage across multiple data centers.

When you upload a file through Hoodik:
1. Your browser encrypts the file with AEGIS-128L
2. The encrypted data is sent to the Hoodik server
3. Hoodik streams the ciphertext to your B2 bucket
4. B2 stores it, having no idea what's inside

The Hoodik server never sees plaintext either -- encryption happens in your browser before the data is transmitted.

## Step-by-Step Setup

### 1. Create a Backblaze B2 Bucket

Sign up at [backblaze.com](https://www.backblaze.com) (if you haven't already), then:

1. Go to **B2 Cloud Storage** > **Buckets**
2. Click **Create a Bucket**
3. Name it something like `hoodik-storage`
4. Set it to **Private** (very important -- this bucket should never be publicly accessible)
5. Disable **Object Lock** (not needed)
6. Note your bucket name and the **Endpoint** URL (looks like `s3.us-west-004.backblazeb2.com`)

### 2. Create Application Keys

1. Go to **Account** > **Application Keys**
2. Click **Add a New Application Key**
3. Give it a name like `hoodik-access`
4. Restrict it to your `hoodik-storage` bucket
5. Allow both **Read** and **Write**
6. Save the **keyID** and **applicationKey** -- you won't see the application key again

The keyID is your `AWS_ACCESS_KEY_ID` and the applicationKey is your `AWS_SECRET_ACCESS_KEY` (B2 is S3-compatible, so it uses the same terminology).

### 3. Deploy Hoodik with Docker

The docker run command with S3/B2 configuration:

```bash
docker run -d \
  --name hoodik \
  -p 5443:5443 \
  -e DATA_DIR=/data \
  -e APP_URL=https://your-domain.com \
  -e STORAGE_PROVIDER=s3 \
  -e S3_ENDPOINT=https://s3.us-west-004.backblazeb2.com \
  -e S3_REGION=us-west-004 \
  -e S3_BUCKET=hoodik-storage \
  -e S3_ACCESS_KEY=your-key-id \
  -e S3_SECRET_KEY=your-application-key \
  -v hoodik_data:/data \
  hudik/hoodik:latest
```

Replace the values:
- `APP_URL`: your server's public URL
- `S3_ENDPOINT`: your B2 bucket's S3 endpoint
- `S3_REGION`: the region from your endpoint URL
- `S3_BUCKET`: your bucket name
- `S3_ACCESS_KEY`: your keyID
- `S3_SECRET_KEY`: your applicationKey

Hoodik will now store all file data in your B2 bucket.

### 4. Using Docker Compose (Recommended)

For a production setup, docker-compose is cleaner:

```yaml
version: "3.8"
services:
  hoodik:
    image: hudik/hoodik:latest
    container_name: hoodik
    restart: unless-stopped
    ports:
      - "5443:5443"
    environment:
      DATA_DIR: /data
      APP_URL: https://your-domain.com
      STORAGE_PROVIDER: s3
      S3_ENDPOINT: https://s3.us-west-004.backblazeb2.com
      S3_REGION: us-west-004
      S3_BUCKET: hoodik-storage
      S3_ACCESS_KEY: ${B2_KEY_ID}
      S3_SECRET_KEY: ${B2_APP_KEY}
    volumes:
      - hoodik_data:/data

volumes:
  hoodik_data:
```

Store your B2 credentials in a `.env` file next to your compose file:

```
B2_KEY_ID=your-key-id
B2_APP_KEY=your-application-key
```

### 5. Verify It's Working

1. Open your Hoodik instance in a browser
2. Create an account and upload a test file
3. Go to your B2 bucket in the Backblaze dashboard
4. You should see new objects appearing -- if you try to download one directly from B2, it'll be unintelligible encrypted data

That last point is the proof: B2 is storing your files, but it has absolutely no idea what they are.

## Already Using Hoodik with Local Storage?

If you've been running Hoodik with local disk storage and want to migrate to B2, there's a built-in command for that:

```bash
docker exec hoodik hoodik migrate-storage
```

This will move all existing file data from your local `DATA_DIR` to the configured S3 backend. **Important:** Stop the Hoodik server before running the migration to avoid data inconsistencies. If files are being uploaded while chunks are being migrated, some chunks may be missed.

## Bandwidth Considerations

B2's free download allowance is generous: you get 3x your average monthly storage in free downloads per month. If you store 1 TB, you can download up to 3 TB per month at no cost. For most personal or small-team use, you'll never pay for bandwidth.

If you do exceed the free tier, downloads are $0.01/GB. Still dramatically cheaper than most alternatives.

For context: actively streaming 4K video from your storage all day would be the kind of usage that might generate bandwidth fees. Normal file access -- opening documents, downloading photos, syncing to your phone -- typically stays well within the free allowance.

## Other S3-Compatible Backends

While this guide focuses on Backblaze B2, Hoodik works with any S3-compatible storage:

- **Wasabi**: ~$7/TB/mo, no egress fees, minimum 1 TB billing, 90-day minimum storage duration
- **AWS S3**: more expensive but global presence
- **MinIO**: self-hosted, zero cost beyond your own hardware
- **Cloudflare R2**: $0.015/GB/mo, zero egress fees

The setup is identical -- just swap the endpoint, region, bucket, and credentials.

## Why It Actually Matters

Saving money is nice, but the more important part is the architecture. You own the encryption keys -- not Backblaze, not Google. B2 stores encrypted blobs with no plaintext metadata; from Backblaze's perspective, your bucket is unreadable noise. Hoodik itself runs on 20 MB of RAM, so a $5/mo VPS is genuinely sufficient.

Storage scales linearly with no plan upgrades or artificial caps. And if Backblaze raises prices or disappears, you swap to Wasabi or MinIO -- your encryption keys and metadata live on your Hoodik server, not the storage backend.

That's the difference between cloud storage and private cloud storage.
