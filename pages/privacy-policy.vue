<script setup lang="ts">
useHead({
  title: 'Privacy Policy - Hoodik',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'description', content: 'Privacy Policy for Hoodik - End-to-End Encrypted Cloud Storage' },
  ],
})
</script>

<template>
  <div class="mx-auto max-w-screen-lg px-3 py-16">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
      <p class="text-brownish-100 text-sm mb-10">Effective: March 31, 2026</p>

      <div
        class="prose max-w-none prose-headings:text-dirty-white prose-p:text-brownish-50 prose-a:text-redish-200 hover:prose-a:text-redish-100 prose-strong:text-dirty-white prose-li:text-brownish-50 prose-hr:border-brownish-600"
      >
        <h2>1. Introduction</h2>
        <p>
          This privacy policy describes how Hudik d.o.o. ("we", "us", "our") handles information
          in connection with the Hoodik mobile and desktop application ("App") and the Hoodik
          self-hosted cloud storage software ("Software"). By using the App or Software, you
          acknowledge this policy.
        </p>

        <h2>2. What Hoodik Is</h2>
        <p>
          Hoodik is a self-hosted, end-to-end encrypted cloud storage system. You run the server
          software on your own hardware. All encryption and decryption happens on your device —
          the server never has access to your plaintext data, file names, or encryption keys.
        </p>
        <p>
          <strong>We do not operate servers on behalf of users.</strong> We build and distribute
          the software. You provide and manage your own infrastructure.
        </p>

        <h2>3. Information We Collect</h2>

        <h3>3.1 The Hoodik App</h3>
        <p>The App stores the following data <strong>locally on your device only</strong>:</p>
        <ul>
          <li>Your server URL and email address (for connecting to your server)</li>
          <li>Your encrypted private key (encrypted with your password or PIN, never stored in plaintext)</li>
          <li>Cached encrypted file data for offline access</li>
        </ul>
        <p>This data never leaves your device except when authenticating with your own server.</p>
        <p>
          <strong>Subscription data:</strong> If you purchase a subscription, payment is processed
          by Apple (App Store) or Google (Google Play). We use
          <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer">RevenueCat</a>,
          a third-party subscription management service, to manage subscription status. RevenueCat
          receives:
        </p>
        <ul>
          <li>An anonymous app user ID</li>
          <li>Purchase receipts and subscription status</li>
          <li>Basic device information (platform, OS version, app version)</li>
        </ul>
        <p>
          RevenueCat does <strong>not</strong> receive your files, server URL, encryption keys,
          or any content stored in your Hoodik instance.
        </p>
        <p>
          <strong>No analytics or crash reporting:</strong> The App does not include any analytics
          SDKs, crash reporting tools, or advertising frameworks. We do not track your usage of
          the App.
        </p>

        <h3>3.2 The Hoodik Server Software</h3>
        <p>
          The server software runs entirely on hardware you control. We have <strong>no access</strong>
          to any data stored on your server. File content is encrypted before it reaches the server —
          the server stores only ciphertext. The server stores user account information (email,
          hashed password, public key) as configured by the server administrator.
        </p>

        <h3>3.3 This Website</h3>
        <p>
          This website is a static site. It does not use cookies, analytics, or tracking of any kind.
        </p>

        <h2>4. How We Use Information</h2>
        <p>
          The only information we process is subscription data through RevenueCat, used solely to
          manage your app subscription status. We do not use any information for advertising,
          profiling, or any purpose beyond providing the service.
        </p>

        <h2>5. Third-Party Services</h2>
        <ul>
          <li>
            <strong>RevenueCat</strong> — subscription management. Receives anonymous user ID,
            platform info, and purchase receipts.
            <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer">RevenueCat Privacy Policy</a>.
          </li>
          <li>
            <strong>Apple App Store / Google Play</strong> — payment processing. Subject to
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple's</a>
            and
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's</a>
            respective privacy policies.
          </li>
        </ul>
        <p>No other third-party services are integrated into the App.</p>

        <h2>6. Data Storage and Security</h2>
        <ul>
          <li>All file data is end-to-end encrypted using RSA-2048 and AEGIS-128L (with support for Ascon-128a and ChaCha20-Poly1305).</li>
          <li>Your private encryption key never leaves your device in plaintext.</li>
          <li>Local data on your device is stored in an app-sandboxed SQLite database.</li>
          <li>PIN/biometric unlock uses Ascon-128a encryption for the private key at rest on-device.</li>
        </ul>

        <h2>7. Data Retention</h2>
        <ul>
          <li><strong>App data:</strong> Stored locally on your device and deleted when you uninstall the App or remove your account.</li>
          <li><strong>Subscription data:</strong> Retained by RevenueCat per their <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer">retention policy</a>.</li>
          <li><strong>Server data:</strong> Controlled entirely by the server administrator — that's you or whoever runs your server. We have no involvement.</li>
        </ul>

        <h2>8. Your Rights (GDPR)</h2>
        <p>
          Hudik d.o.o. is based in Croatia (EU). Under GDPR, you have the right to access, rectify,
          and delete your personal data.
        </p>
        <ul>
          <li>For subscription-related data, contact us at <a href="mailto:hello@hudik.eu">hello@hudik.eu</a>.</li>
          <li>For data stored on your Hoodik server, contact your server administrator (which is likely you).</li>
          <li>You have the right to lodge a complaint with AZOP (Croatian Personal Data Protection Agency).</li>
        </ul>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. The effective date at the top indicates the
          latest revision. Continued use of the App after changes constitutes acceptance of the
          updated policy.
        </p>

        <h2>10. Contact</h2>
        <p>
          Hudik d.o.o.<br />
          Email: <a href="mailto:hello@hudik.eu">hello@hudik.eu</a> (general inquiries)<br />
          Email: <a href="mailto:security@hudik.eu">security@hudik.eu</a> (security matters)
        </p>
      </div>
    </div>
  </div>
</template>
