---
title: "End-to-End Encryption Explained: What It Actually Means for Your Files"
description: "A clear explanation of end-to-end encryption vs encryption at rest, zero-knowledge architecture, and why who holds the keys matters more than the algorithm."
date: 2026-04-12
author: "Hoodik Team"
category: "Privacy"
tags: ["encryption", "end-to-end encryption", "zero knowledge", "privacy", "security"]
image: "/images/screenshot.png"
draft: false
---

Every cloud storage provider says they "encrypt your data." It's right there on their marketing page, usually with a padlock icon and a reassuring shade of green. That statement is technically true, but it often means something very different from what you'd expect.

Encryption in the context of cloud storage is genuinely nuanced. The algorithm matters far less than who holds the keys — and most providers aren't eager to explain that part.

## The Locked Box vs. The Transparent Envelope

Imagine you need to send a private document to yourself for safekeeping. You have two options:

**Option A: The Transparent Envelope.** You put your document in a transparent envelope and hand it to a courier service. They promise to put the envelope in a locked warehouse. The document is "secured" — the warehouse has guards, cameras, and strong locks. But the courier saw your document. The warehouse workers can see it. Anyone with a master key to the warehouse can read it. You're trusting a lot of people and systems.

**Option B: The Locked Box.** You put your document in a locked box that only you have the key to, then hand the locked box to the courier. They put it in their warehouse. Nobody — not the courier, not the warehouse workers, not even the warehouse owner — can read your document. They can see that you stored a box. They know how big it is. But the contents are completely opaque to everyone except you.

Most cloud storage providers operate like Option A. They tell you your files are "encrypted at rest" and "encrypted in transit" — and they are. But the provider holds the keys. They can decrypt your files whenever they want (or whenever they're compelled to).

End-to-end encryption is Option B. You hold the only key. The server stores your locked box without ever being able to peek inside.

## "Encryption at Rest" — What It Actually Protects

When a provider says "your files are encrypted at rest," they mean the physical hard drives in their data center are encrypted. If someone physically steals a hard drive, they can't read the raw data on it.

This protects against one specific threat: physical theft of storage hardware.

It does **not** protect against:

- The company itself reading your files
- Employees accessing your data
- Government requests or subpoenas
- Hackers who gain access to the application layer (where decryption keys are accessible)
- Data being used for advertising, AI training, or analytics

The server decrypts your files every time you (or anyone with server access) requests them. The encryption keys sit right next to the encrypted data, managed by the same systems. It's like storing your valuables in a safe but leaving the combination taped to the door.

## "Encryption in Transit" — What That Covers

"Encrypted in transit" means your files are protected while traveling between your device and the server (using TLS/HTTPS). This prevents someone from intercepting your data in flight — like on a coffee shop's WiFi network.

This is important, but it's also the absolute bare minimum. Every website you visit uses HTTPS. Your bank does, your email does, even most spam websites do. It's table stakes, not a differentiator.

Once your data arrives at the server, transit encryption's job is done. The server has your data in plaintext and can do whatever it wants with it.

## End-to-End Encryption: The Key Never Leaves Your Device

End-to-end encryption (E2E) means your data is encrypted **on your device, before it leaves**. The encrypted data travels to the server. The server stores the encrypted data. When you want your files back, the server sends the encrypted data to your device, and your device decrypts it locally.

At no point does the server have access to:

- Your unencrypted files
- Your encryption keys
- Your file names (in properly implemented systems)
- Any information about the content of your files

The server is purely a storage medium — like a safety deposit box where even the bank can't see what's inside.

## Who Holds the Keys? That's the Whole Question

The simplest way to evaluate any storage provider's encryption claims: **ask who holds the decryption keys.**

| Scenario | Who holds the key | What it means |
|----------|------------------|---------------|
| Encryption at rest | The provider | They can read your files anytime |
| "Customer-managed keys" | Usually still the provider's infrastructure | Slightly better, but keys are often accessible to the provider's systems |
| End-to-end encryption | Only you | Nobody else can read your files, period |

Some providers offer "customer-managed keys" or "bring your own key" features. These sound good but often still involve the provider's infrastructure managing or having access to the keys at some point during processing. Read the fine print carefully.

True end-to-end encryption means the keys are generated on your device, live only on your device, and never travel to the server in any form the server can use.

## Zero-Knowledge Architecture

You might also hear the term "zero-knowledge" used alongside E2E encryption. This is a stronger claim: it means the server doesn't just lack access to your file contents — it knows essentially **nothing** about what you're storing.

In a zero-knowledge system:

- File names are encrypted before upload
- Folder structures are encrypted
- File metadata is encrypted
- Search happens through privacy-preserving methods (like tokenized, hashed queries)
- The server couldn't comply with a data request even if it wanted to, because it genuinely doesn't have the information

This is fundamentally different from a system that encrypts file contents but stores metadata in plaintext. If someone can see that you have a file called "tax-return-2025.pdf" in a folder called "Financial/IRS," they've learned something significant about you — even without seeing the file contents.

## The Technical Side (Without Getting Too Deep)

For the curious, here's how a well-implemented E2E encrypted storage system actually works under the hood:

1. **Account creation:** Your browser generates a key pair (public key + private key). The private key is encrypted with a key derived from your password and stored on the server. The server has the encrypted private key but cannot decrypt it without your password — which is never sent to the server.

2. **File upload:** Your browser generates a random symmetric encryption key for this specific file. The file is encrypted locally with this key. The symmetric key is then encrypted with your public key. Both the encrypted file and the encrypted key are uploaded.

3. **File download:** The server sends you the encrypted file and the encrypted key. Your browser decrypts the key using your private key, then decrypts the file using the symmetric key. All of this happens in your browser — the server just shuffles encrypted bytes around.

4. **Sharing via public links:** When you create a public link, a special link key is generated and placed in the URL fragment (`#key`). This key encrypts the file's symmetric key. When a recipient opens the link, the server uses the link key to decrypt and stream the file — this is a deliberate, scoped tradeoff that protects the actual file encryption key from being publicly exposed. Links can be set to expire, and if you share the URL without the fragment, the recipient must enter the link key manually via a password prompt — giving you control over how the key is distributed.

The server's only job is storage and delivery. For regular file access, it never performs decryption. Public link downloads are the one intentional exception — the server temporarily handles plaintext in memory during the stream to protect the underlying file key from exposure.

## Common Objections and Honest Answers

**"If I lose my password, I lose my files."**

Yes. This is the fundamental tradeoff. In a true E2E system, there's no "forgot password" button that magically recovers everything, because the server can't decrypt your data to re-encrypt it with a new password. Some systems mitigate this with recovery keys you store separately, but the core principle remains: you are responsible for your keys.

**"Isn't this slower?"**

Marginally. Modern encryption algorithms (like AEGIS-128L, which uses hardware acceleration on modern processors) add negligible overhead. You won't notice the difference for typical file sizes. For very large files, the overhead is still small — a few percent at most.

**"Can I still search my files?"**

Yes, but it requires clever engineering. You can't just search an encrypted index on the server. Privacy-preserving search uses techniques like tokenizing file names, hashing those tokens, and searching the hashes. The server never sees your search terms in plaintext — it just matches hashes. Hoodik even supports full-text search across encrypted notes using the same approach.

## How Hoodik Implements This

Hoodik is built from the ground up as a zero-knowledge, end-to-end encrypted storage system. Concretely:

- Key generation happens in your browser using WebCrypto and compiled Rust code (WASM). Your private key is encrypted with a key derived from your password before storage — the server gets the encrypted blob, not the key itself.
- Files are encrypted client-side with AEGIS-128L (a modern, hardware-accelerated AEAD cipher) using per-file symmetric keys.
- File names and metadata are encrypted before they leave your device.
- The server stores only ciphertext — encrypted files, encrypted names, encrypted keys. For regular file access, it has no way to decrypt any of it. (The one exception: public link downloads, where the server uses a link key to stream files to recipients — a deliberate tradeoff to protect the underlying file key.)
- Search is privacy-preserving: file names are tokenized with a BERT tokenizer, hashed with SHA256, and only hashes are sent to the server. Notes support full-text search through the same mechanism.
- RSA-2048 handles asymmetric operations (key wrapping, key exchange).

The server is written in Rust — chosen specifically because memory safety matters enormously when you're handling cryptographic operations. The entire system is open source, so you can verify these claims yourself.

## Evaluating Claims

When a cloud storage provider talks about encryption, don't settle for "we encrypt your data." Ask the harder questions:

1. Who holds the decryption keys?
2. Can your employees access my files?
3. What happens when you receive a legal request for my data?
4. Are file names and metadata also encrypted?
5. Is the system open source so I can verify the claims?

If the answer to #1 isn't "only you," everything else is window dressing. End-to-end encryption isn't just a feature — it's the only architecture that makes the other promises enforceable by math rather than by policy.

Your files should be readable by you, and only you.
