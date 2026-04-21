---
title: "Leaving Google Drive: A Complete Migration Guide"
description: "Step-by-step guide to exporting your files from Google Drive and migrating to private, self-hosted encrypted storage without losing anything."
date: 2026-04-12
author: "Hoodik Team"
category: "Guides"
tags: ["google drive", "migration", "self-hosted", "privacy", "tutorial", "google takeout"]
image: "/images/screenshot.png"
draft: false
---

# Leaving Google Drive: A Complete Migration Guide

You've decided to leave Google Drive. Maybe you're tired of Google scanning your files. Maybe you hit the 15 GB free tier limit and don't want to pay $10/month for 2 TB of storage where Google still holds the keys. Maybe you just want to own your data without depending on a company that might lock your account over an automated false positive.

This guide walks you through the full migration without losing anything. It's a planned process: extract everything, set up your new home, and move in at your own pace. Not a "delete everything and start over" situation.

## Step 1: Export Everything with Google Takeout

Google provides a tool called **Takeout** that lets you export all your data from every Google service. To use it for Drive specifically:

1. Go to [takeout.google.com](https://takeout.google.com)
2. Click **Deselect all** (by default it selects every Google service)
3. Scroll down and select only **Drive**
4. Click **All Drive data included** to verify it's exporting everything (you can exclude specific folders if needed)
5. Click **Next step**
6. Choose your export settings:
   - **Delivery method**: "Send download link via email" is simplest
   - **Frequency**: "Export once"
   - **File type**: ZIP
   - **File size**: Choose the largest option (50 GB) to minimize the number of split archives
7. Click **Create export**

Google will process your export and email you download links when it's ready. This can take hours or even days for large accounts -- they're not in a rush to help you leave.

### What You Get

Your export will be one or more ZIP files containing:

- All your regular files (PDFs, images, documents, videos) in their original format
- Your folder structure preserved as filesystem directories
- Google Docs converted to Microsoft Office format (.docx, .xlsx, .pptx) or PDF
- Google Sheets as .xlsx files
- Google Slides as .pptx files
- Google Drawings as .png or .svg

**Important**: Google's proprietary formats (Docs, Sheets, Slides) don't exist as files -- they're database entries that Google renders as documents. Takeout converts them to equivalent formats. The conversion is usually good, but complex formatting might shift slightly.

### Download and Extract

Download all the ZIP files to your computer and extract them. You'll end up with a folder structure like:

```
Takeout/
  Drive/
    My Drive/
      Documents/
        report.pdf
        notes.docx
      Photos/
        vacation-2024/
          IMG_001.jpg
          IMG_002.jpg
      Projects/
        budget.xlsx
```

Take a moment to browse through it. Make sure everything looks right. This is your complete archive -- once you're confident it's all here, you're ready to set up your new storage.

## Step 2: Figure Out Your Storage Needs

Before setting up anything, answer one question: **how much data do you actually have?**

Check the size of your extracted Takeout folder. Then decide where you want to store it:

**Local disk** (files stored on your Hoodik server's drive):
- Best for: small to medium collections (under 500 GB), single-server setups
- Cost: just your server hardware/VPS
- Simplest to set up

**S3-compatible storage** (Backblaze B2, Wasabi, MinIO):
- Best for: large collections, scalable storage, redundancy
- Cost: $6/TB/month with Backblaze B2
- Separates your storage from your server

For most people leaving Google Drive's 15 GB free tier or 100 GB plan, local disk on a small VPS is plenty. If you're on the 2 TB plan, an S3 backend makes more sense for both cost and reliability.

## Step 3: Set Up Hoodik

### Option A: Quick Start with Docker

If you have a server (VPS, Raspberry Pi, NAS, old laptop in a closet), you can have Hoodik running in under a minute:

```bash
docker run -d \
  --name hoodik \
  -p 5443:5443 \
  -e DATA_DIR=/data \
  -e APP_URL=https://your-domain.com \
  -v hoodik_data:/data \
  hudik/hoodik:latest
```

Hoodik runs with about 20 MB of RAM. A $5/month VPS handles it comfortably.

### Option B: With S3 Storage Backend

If you're using Backblaze B2 or another S3-compatible backend:

```bash
docker run -d \
  --name hoodik \
  -p 5443:5443 \
  -e DATA_DIR=/data \
  -e APP_URL=https://your-domain.com \
  -e STORAGE_PROVIDER=s3 \
  -e S3_ENDPOINT=https://s3.us-west-004.backblazeb2.com \
  -e S3_REGION=us-west-004 \
  -e S3_BUCKET=your-bucket-name \
  -e S3_ACCESS_KEY=your-key \
  -e S3_SECRET_KEY=your-secret \
  -v hoodik_data:/data \
  hudik/hoodik:latest
```

### First Account Setup

Open your Hoodik instance in a browser. The first account you create automatically becomes the admin. During signup:

1. Choose a strong password -- this password (combined with your email) derives your encryption keys
2. Your browser will generate an RSA-2048 key pair
3. The private key is encrypted with your password and stored on the server
4. The server never sees your unencrypted private key

If you lose your password and haven't exported your private key, your files are permanently unrecoverable. This is the tradeoff of real encryption -- there's no "reset password" backdoor. Write it down somewhere safe.

## Step 4: Upload Your Files

Time to move your data into its new encrypted home.

### Via the Web Interface

1. Open Hoodik in your browser
2. Create your folder structure (or just start uploading -- Hoodik preserves folder structure from drag-and-drop)
3. **Drag and drop** folders from your extracted Takeout directory directly into the browser window
4. Hoodik will encrypt each file in your browser and upload the ciphertext

For large migrations, this is best done on a wired connection. Each file gets encrypted locally before upload, so the process is: read from disk, encrypt in browser, upload encrypted data.

**Tip**: Do it in batches. Start with your most important folder, verify everything uploaded correctly, then continue with the rest. Don't try to drag 500 GB all at once.

### Via the Mobile App

If you've already moved files to your phone, the Hoodik Android app supports uploading files and photos (iOS is in the pipeline). The app handles encryption through the same Rust code as the web version (via native FFI), so security is identical.

### Organization Strategy

You don't have to replicate your Google Drive structure exactly. This is a good time to reorganize:

- Combine scattered documents into logical folders
- Archive old projects you'll rarely access
- Create a clear top-level structure (Documents, Photos, Projects, Archive)

## Step 5: Invite Your People

If you shared Google Drive files with family or colleagues, you'll need to bring them along.

Hoodik supports multiple user accounts. As admin, you can:

1. Enable user registration (or create accounts manually)
2. Create public links (with optional expiration dates and password protection) so anyone can download specific files
3. Manage storage quotas and user permissions from the admin dashboard

Each user gets their own encryption keys. All encryption happens on the device — the server never sees plaintext data.

Note: sharing files directly between accounts on the same server isn't available yet. Each user's storage is private to them. You can share files externally via public links — these support expiration dates and optional password protection (the link key acts as the password; exclude it from the URL to require manual entry).

## What You Gain

**Real privacy**: Your files are encrypted before they leave your device. The server stores ciphertext. Even if someone compromised the server hardware, they'd get meaningless encrypted data.

**No storage caps**: Whether you use local disk or S3, you're limited only by what you're willing to pay for, not by an arbitrary plan tier.

**No scanning**: Nobody is running your photos through image classifiers, analyzing your documents for ad targeting, or flagging your files for "policy violations."

**Control**: You decide what software runs, what gets stored, who has access, and what the rules are. No terms of service that change without notice.

**Your infrastructure**: Your data lives on hardware you control. If you decide to stop using Hoodik someday, your data and the open source code to decrypt it are both in your hands -- no vendor lock-in.

## What You Lose (Honestly)

It would be dishonest not to mention the tradeoffs:

**Google Docs collaboration**: Real-time collaborative editing doesn't exist in a zero-knowledge system (the server can't mediate edits it can't read). Hoodik does include a built-in rich text editor for encrypted notes with full-text search — great for personal notes and documentation. But if you depend on multiple people editing the same document simultaneously, you'll need a separate tool for that (like CryptPad for privacy-respecting collaboration, or just sharing Office files).

**Google-format files**: Those converted .docx and .xlsx files from Takeout work fine in LibreOffice, Microsoft Office, or any standard office suite. But they're no longer "live" Google Docs with comment histories and suggestion mode.

**Zero effort maintenance**: Google Drive just works. Self-hosting means keeping a server running, doing occasional updates, and managing backups of your database. It's minimal work (Hoodik is a single Docker container), but it's not zero.

**Deep mobile integration**: Google Drive is baked into Android at the OS level. Hoodik ships a dedicated Android app (iOS and desktop clients are on the way) that works well, but it isn't integrated into the OS the way Google's apps are.

**AI features**: Google's AI-powered search, suggested files, and smart categorization all require reading your files. Privacy and AI convenience are currently at odds.

## Step 6: The Transition Period

Don't delete your Google Drive immediately. Run both systems in parallel for a while:

1. Upload everything to Hoodik
2. Verify you can access and open all your files
3. Start using Hoodik for new files
4. After a month of no issues, start removing data from Google Drive
5. Eventually, downgrade or close your Google storage plan

This gives you a safety net. If you discover a file didn't export properly or something is missing, you can still grab it from Google.

## Wrapping Up

Migrating from Google Drive to self-hosted encrypted storage is less dramatic than it sounds. Export your data (Google makes this easy with Takeout), run a Docker container, drag and drop your files. The whole process takes an afternoon for smaller accounts, or a weekend for larger ones.

The result is cloud storage that works like you'd expect -- files go up, files come down -- but with a fundamental difference: nobody else can read them. Not the server, not the storage provider, not an automated scanning system.
