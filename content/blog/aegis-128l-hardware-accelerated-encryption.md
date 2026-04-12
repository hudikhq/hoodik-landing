---
title: "AEGIS-128L: Why Hoodik Uses the Fastest Modern Cipher"
description: "AEGIS-128L is 2-4x faster than AES-256-GCM while providing the same security guarantees. Here's why we chose it and what it means for your file encryption."
date: 2026-04-12
author: "Hoodik Team"
category: "Technical"
tags: ["aegis-128l", "encryption", "aead", "aes-ni", "cryptography", "performance"]
image: "/images/screenshot.png"
draft: false
---

# AEGIS-128L: Why Hoodik Uses the Fastest Modern Cipher

When you're encrypting and decrypting every file that passes through your storage system, the speed of your cipher matters. Not in a theoretical "shave off a few microseconds" way, but in a practical "can I upload a 4 GB video without my browser tab freezing" way.

That's why Hoodik uses AEGIS-128L as its default cipher. It's a modern authenticated encryption algorithm that's 2-4x faster than the industry-standard AES-256-GCM on any CPU made in the last decade -- and it does this while providing equivalent (or stronger) security guarantees. Here's what that means in plain language.

## The Speed Problem with File Encryption

End-to-end encryption for cloud storage means every file gets encrypted on your device before upload, and decrypted on your device after download. The server never touches plaintext.

This sounds simple, but consider what happens when you upload a large file:

1. Your browser reads the file from disk
2. It encrypts every byte of that file
3. It uploads the encrypted result

Steps 1 and 3 are limited by your disk speed and internet connection. Step 2 is limited by how fast your CPU can run the encryption algorithm. If the cipher is slow, it becomes the bottleneck. Your gigabit internet and NVMe SSD sit idle while your CPU churns through encryption.

With AES-256-GCM (the most common choice), a modern laptop encrypts at roughly 2-4 GB/s. That's decent. But AEGIS-128L on the same hardware hits 8-16 GB/s. For a 4 GB video file, that's the difference between 1-2 seconds of encryption time and under half a second.

## What is AEGIS-128L?

AEGIS-128L is an **AEAD cipher** (Authenticated Encryption with Associated Data).

**Authenticated** means every encrypted message includes a tag that proves it hasn't been tampered with. If even a single bit of the ciphertext is changed, decryption fails rather than producing garbled output. This prevents an attacker from subtly modifying your encrypted files.

**Encryption** is the obvious part -- it turns plaintext into ciphertext that's indistinguishable from random noise.

**Associated Data** lets you bind unencrypted metadata (like a file ID or chunk number) to the ciphertext. The metadata isn't hidden, but it is authenticated -- an attacker can't swap one encrypted chunk for another without detection.

AEGIS was designed by Hongjun Wu and Bart Mennink. It was a finalist in the CAESAR competition (a multi-year effort to identify next-generation authenticated ciphers, concluded in 2019), where it was selected for the high-performance use case profile. It has since been standardized through the IETF process.

The key insight in AEGIS-128L's design: it uses the **AES round function** as its core building block, but arranges it differently than AES-GCM does. Where AES-GCM processes one block at a time through a chain of AES rounds, AEGIS-128L maintains a larger internal state (8 AES blocks) and processes two blocks of input simultaneously. This means it can do more useful work per clock cycle.

## Why It's So Fast

AEGIS-128L's speed comes from exploiting hardware that already exists in your CPU.

Since 2010, virtually every x86 CPU (Intel and AMD) has included **AES-NI** -- dedicated hardware instructions for computing AES rounds. These are incredibly fast: a single AES round instruction (`AESENC`) achieves roughly 1-cycle throughput on modern pipelined hardware.

AES-GCM uses these instructions, but it's limited by how many AES rounds it needs per block of data (10 rounds for AES-128, 14 for AES-256), plus it needs a separate GCM multiplication for authentication.

AEGIS-128L uses fewer AES round operations per byte of input because of its wider state. It processes 32 bytes of plaintext per step by applying the AES round function 8 times across its internal state, allowing CPU instruction-level pipelining. The authentication is built into the same structure -- no separate step needed. The result: more data encrypted per clock cycle.

Here's a rough comparison on a modern laptop (Intel 12th gen or AMD Zen 3+):

| Cipher | Speed | Notes |
|--------|-------|-------|
| AES-256-GCM | ~3 GB/s | Industry standard, well-trusted |
| AES-128-GCM | ~4 GB/s | Faster due to fewer rounds |
| ChaCha20-Poly1305 | ~2 GB/s | No AES-NI needed |
| AEGIS-128L | ~10 GB/s | Same AES-NI hardware, better utilization |

AEGIS-128L typically achieves 2-4x the throughput of AES-256-GCM on the same CPU.

## What About Security?

Speed is meaningless if the cipher is weak. So how does AEGIS-128L compare on security?

**Key size**: 128 bits, providing 128-bit security against brute force. 128-bit keys are already computationally infeasible to break -- 2^128 operations would take longer than the age of the universe on all computers ever built, running simultaneously. 256-bit keys guard against quantum computers running Grover's algorithm, which halves effective key length, but AEGIS-256 exists for that scenario.

**Nonce size**: 128 bits (vs. 96 bits for AES-GCM). A larger nonce means less risk of nonce reuse, which is the primary way GCM-based ciphers can catastrophically fail in practice.

**Authentication tag**: 128 bits (256-bit tags are also defined in the spec). Hoodik uses the 128-bit tag. The tag proves data integrity -- if anything was modified, decryption fails.

**Security proofs**: AEGIS-128L has formal security proofs showing it meets standard AEAD security definitions. It's been analyzed extensively since its publication in 2014 and has no known weaknesses.

The one caveat: AEGIS is newer than AES-GCM (which has been standard since 2007). Some organizations require 15+ years of public scrutiny before adopting a cipher. For those use cases, AES-GCM remains perfectly fine. But AEGIS has a decade of analysis with no issues found, backing from respected cryptographers, and IETF standardization.

## Hoodik's Multi-Cipher Approach

Not every device has AES-NI. Older phones, some ARM processors, and embedded devices might not have hardware acceleration for AES operations. That's why Hoodik supports multiple ciphers:

**AEGIS-128L** (default): For any device with AES-NI (virtually all modern x86 CPUs and recent ARM chips with crypto extensions). Maximum speed.

**ChaCha20-Poly1305**: For devices without AES-NI. ChaCha20 is a software-friendly cipher that's fast even without hardware acceleration. It's the same cipher used in TLS when AES-NI isn't available, and it powers WireGuard VPN. On hardware without AES-NI, ChaCha20 is typically faster than software AES.

**Ascon-128a**: For constrained devices. Ascon won the NIST Lightweight Cryptography Competition in 2023. It's designed for environments with limited CPU and memory -- think IoT devices and low-power microcontrollers. Not as fast as AEGIS on powerful hardware, but efficient where resources are scarce.

## Forward Compatibility

Every encrypted file records which cipher was used to encrypt it, stored in the file's metadata in the database.

Why does this matter? Because ciphers evolve. Five years from now, there might be an even better option. When that happens, Hoodik can adopt the new cipher for new files without breaking access to old ones. Your file from 2024 encrypted with AEGIS-128L will still decrypt correctly in 2034, because the system knows exactly which cipher to use.

This also means that if you connect from a device without AES-NI, files can be encrypted with ChaCha20-Poly1305, and they'll decrypt correctly on any device -- each device just needs to support the cipher used for that specific file.

## What This Means in Practice

For day-to-day usage, AEGIS-128L's speed means:

- **Large file uploads feel instant** (the encryption step, at least -- your internet is still the bottleneck for actual transfer)
- **Photo libraries encrypt quickly** when uploading hundreds of files
- **Browser-based encryption** is viable even for large files (WASM can't use AES-NI directly, but AEGIS's structure still provides excellent performance in WASM compared to alternatives)
- **Battery life** on mobile devices is preserved because encryption completes faster, letting the CPU return to idle sooner

The goal of choosing AEGIS-128L isn't to win a benchmark. It's to make end-to-end encryption invisible -- fast enough that you never think about it, never wait for it, and never feel tempted to turn it off for performance reasons.

## Where This Lands

AEGIS-128L represents where symmetric cryptography is heading: using existing hardware (AES-NI) more efficiently rather than requiring new instructions. It's standardized, well-analyzed, and dramatically faster than the previous generation of AEAD ciphers.

For Hoodik, it means end-to-end encryption without a performance tax. Your files are encrypted with a modern, vetted algorithm that's as fast as your hardware allows -- and if your hardware doesn't support it, the system falls back to the best alternative for your device.

Encryption should be fast enough to forget it's happening. AEGIS-128L gets there.
