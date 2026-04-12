---
title: "Why Your Cloud Provider Can Read Your Files"
description: "Most cloud storage encryption only protects against stolen hard drives, not the provider itself. Here's how it actually works and what zero-knowledge means."
date: 2026-04-12
author: "Hoodik Team"
category: "Privacy"
tags: ["privacy", "encryption", "cloud storage", "zero-knowledge", "end-to-end encryption"]
image: "/images/screenshot.png"
draft: false
---

# Why Your Cloud Provider Can Read Your Files

There's a comforting phrase that shows up on nearly every cloud storage marketing page: "Your files are encrypted." It sounds reassuring. It makes you think your vacation photos, tax documents, and private notes are locked away where nobody can peek at them.

**Encryption doesn't mean privacy** unless you control the keys. Most providers don't lead with that distinction.

## What "Encryption at Rest" Actually Means

When Google Drive, Dropbox, or OneDrive say your files are "encrypted at rest," they're telling you the truth. Your files are indeed encrypted when they sit on their hard drives. The part they don't emphasize: **they hold the encryption keys**.

Think of it like a hotel safe. Yes, your valuables are locked up. But the hotel has a master key. The safe protects your stuff from other guests and random break-ins, but not from the hotel itself.

"Encryption at rest" protects against one specific threat: someone physically stealing a hard drive from a data center. It doesn't protect your data from:

- The provider's employees
- Automated scanning systems
- Government requests with valid warrants
- Internal policy enforcement bots
- Data breaches where encryption keys are also compromised

This isn't a theoretical concern. It's how these services operate every day.

## Real Examples of Providers Reading Your Files

### Google Photos and Drive

Google actively scans files stored in your account. Their CSAM (Child Sexual Abuse Material) detection system analyzes every photo you upload. In 2022, a father in San Francisco had his Google account permanently banned after taking photos of his child's medical condition to send to a doctor. Google's automated system flagged the images, reported them to NCMEC, and locked his entire digital life -- email, photos, documents, phone number -- with no appeal.

Beyond CSAM detection, Google's terms of service grant a license to use your content to "provide, maintain, and improve" their services. Their automated systems analyze content as it's received and stored — for spam detection, malware scanning, and policy enforcement. Google holds the keys that make this analysis possible.

### Microsoft OneDrive

Microsoft's terms of service reserve the right to scan content for policy violations. Microsoft scans OneDrive content for policy violations, and users have documented cases of losing access to personal files — including family photos and creative writing — when automated systems triggered false positives. Because Microsoft holds the encryption keys, their systems can read and evaluate any file in your account.

### Dropbox

Dropbox's privacy policy permits personnel access to file contents when legally required, for debugging, and to enforce their Terms of Service. They've implemented hash-matching systems and employ trust & safety teams who review flagged content.

Their deduplication feature -- where uploading a file someone else already has doesn't consume extra storage -- is actually a reveal in itself. It means Dropbox can tell when two users have identical files, which requires them to read (or at least hash) your plaintext data.

## The Server-Side Encryption Illusion

Typical cloud storage encryption works like this:

1. You upload a file
2. The provider's server receives your plaintext file
3. The server encrypts it with a key the provider generates and controls
4. The encrypted file is stored on disk
5. When you want it back, the server decrypts it and sends it to you

At step 2 and step 5, your file exists in plaintext on their servers. The encryption only exists between steps 3 and 5 — and the provider holds the key the entire time.

It's like sending a postcard, having the post office put it in an envelope for storage, then taking it back out to deliver it. The envelope didn't stop the post office from reading it.

## What Zero-Knowledge Architecture Looks Like

The alternative is what's called **zero-knowledge** or **end-to-end encryption** for storage. The principle: encryption and decryption happen on your device, and the server never sees the keys.

1. Your device encrypts the file with a key that only you have
2. The encrypted ciphertext is uploaded to the server
3. The server stores the encrypted blob — it literally cannot decrypt it
4. When you want your file back, the server sends the encrypted blob
5. Your device decrypts it locally

The server in this model is a dumb storage box. It doesn't know if you stored a photo, a document, or random noise. It can't scan your content because it can't read your content.

This is the approach Hoodik takes. Every file is encrypted on your device using RSA-2048 for key exchange and AEGIS-128L for file encryption before it ever touches the server. The server stores ciphertext and has no mechanism to decrypt it -- even if someone got full access to the server and its database, they'd get nothing but encrypted noise.

Even search is privacy-preserving: file names are tokenized and hashed before being sent to the server, so the server can help you find files without ever knowing what they're called.

## "But I Have Nothing to Hide"

This is the most common response, and it misses the point. Privacy isn't about hiding wrongdoing.

That father who lost his entire Google account wasn't doing anything wrong. Automated systems make errors, and when the provider can read your files, those errors have real consequences — locked accounts, reports to law enforcement, no meaningful appeal process.

Content policies also change. Governments change. Data that was fine to store last year might trigger a violation next year. If someone else can read, scan, and make decisions about your files, are they really yours? You're renting space under someone else's rules, which can change at any time.

There's also a practical security argument: in a data breach, if the provider has your keys, the attacker gets your keys too. With zero-knowledge encryption, a server breach exposes encrypted blobs that are useless without your private key.

## What to Look For

When evaluating cloud storage for privacy, four questions cut through most of the marketing:

1. Who holds the encryption keys? If it's the provider, they can read your files.
2. Where does encryption happen? "On our servers" means your plaintext passes through their infrastructure.
3. Can they reset your password and give you back your files? If yes, they have your keys. True zero-knowledge means losing your key means losing your data — there's no backdoor by design.
4. Do they offer features that require reading your content? Server-side search, thumbnails generated on the server, AI categorization — these all require access to plaintext.

The tradeoff with zero-knowledge is real. You're responsible for your own keys, and some convenience features (server-generated previews, full-text search of document contents) aren't possible without more complex engineering. For a lot of people, that tradeoff is worth it.

## Encrypted vs. Private

"Encrypted" and "private" are not the same thing. Most cloud storage is encrypted in a way that protects the provider's liability, not your privacy. If the provider holds your encryption keys, they can read your files — and in many cases, they actively do.

Zero-knowledge architecture, where encryption happens on your device and only you hold the keys, is the only model where "encrypted" actually means "private." It's not the most convenient option for every use case, but it's the only one where your files are genuinely yours.
