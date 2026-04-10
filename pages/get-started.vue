<template>
  <div class="mx-auto max-w-screen-md px-3 py-16">
    <div class="text-center mb-12">
      <div class="inline-flex items-center gap-2 rounded-full bg-brownish-800 px-4 py-1.5 mb-6 text-sm text-brownish-50 border border-brownish-600">
        <span class="inline-block h-2 w-2 rounded-full bg-greeny-300 animate-pulse"></span>
        ~10 minutes to your own cloud
      </div>
      <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-4">
        Deploy Hoodik on <span class="guide-gradient">any VPS</span>
      </h1>
      <p class="text-lg text-brownish-100 max-w-xl mx-auto">
        Get your own end-to-end encrypted cloud storage running in minutes.
        All you need is a cheap VPS, a domain, and 10 minutes.
      </p>
    </div>

    <!-- What you need -->
    <div class="rounded-xl bg-brownish-900 border border-brownish-600 p-6 mb-8">
      <h2 class="text-xl font-bold mb-4">What you'll need</h2>
      <ul class="space-y-3">
        <li class="flex items-start gap-3">
          <span class="text-orangy-400 mt-0.5 flex-shrink-0">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
          </span>
          <div>
            <strong class="text-dirty-white">A VPS</strong>
            <span class="text-brownish-100"> &mdash; any provider works (Hetzner, DigitalOcean, Linode, Contabo, etc.). Even the smallest plan is enough &mdash; Hoodik idles at around 20 MB of RAM.</span>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-orangy-400 mt-0.5 flex-shrink-0">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
          </span>
          <div>
            <strong class="text-dirty-white">A domain name</strong>
            <span class="text-brownish-100"> &mdash; e.g. <code class="text-greeny-200">cloud.yourdomain.com</code>. Needed for HTTPS certificates.</span>
          </div>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-orangy-400 mt-0.5 flex-shrink-0">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
          </span>
          <div>
            <strong class="text-dirty-white">SSH access</strong>
            <span class="text-brownish-100"> &mdash; a terminal to connect to your server.</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- Steps -->
    <div class="space-y-8">

      <!-- Step 1 -->
      <div class="relative pl-10">
        <div class="absolute left-0 top-0 h-8 w-8 rounded-full bg-redish-400 flex items-center justify-center text-white font-bold text-sm">1</div>
        <h2 class="text-xl font-bold mb-3">Point your domain to the server</h2>
        <p class="text-brownish-100 mb-4">
          Go to your domain registrar's DNS settings and create an <strong class="text-dirty-white">A record</strong>
          pointing to your VPS IP address.
        </p>
        <div class="rounded-lg bg-brownish-900 border border-brownish-600 overflow-hidden">
          <div class="flex items-center justify-between px-4 py-2 bg-brownish-800 border-b border-brownish-600">
            <span class="text-xs text-brownish-100">DNS Record</span>
          </div>
          <div class="px-4 py-3 text-sm overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="text-brownish-50">
                  <th class="pr-6 pb-2">Type</th>
                  <th class="pr-6 pb-2">Name</th>
                  <th class="pb-2">Value</th>
                </tr>
              </thead>
              <tbody class="text-greeny-200">
                <tr>
                  <td class="pr-6">A</td>
                  <td class="pr-6">cloud</td>
                  <td>your-server-ip</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p class="text-sm text-brownish-100 mt-2">
          DNS propagation can take a few minutes. You can verify with:
          <code class="text-greeny-200">ping cloud.yourdomain.com</code>
        </p>
      </div>

      <!-- Step 2 -->
      <div class="relative pl-10">
        <div class="absolute left-0 top-0 h-8 w-8 rounded-full bg-redish-400 flex items-center justify-center text-white font-bold text-sm">2</div>
        <h2 class="text-xl font-bold mb-3">Install Docker</h2>
        <p class="text-brownish-100 mb-4">
          SSH into your server and install Docker with one command:
        </p>
        <div class="rounded-lg bg-brownish-900 border border-brownish-600 overflow-hidden">
          <div class="flex items-center justify-between px-4 py-2 bg-brownish-800 border-b border-brownish-600">
            <span class="text-xs text-brownish-100">Terminal</span>
          </div>
          <pre class="px-4 py-3 text-sm overflow-x-auto"><code class="text-greeny-200">curl -fsSL https://get.docker.com | sh</code></pre>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="relative pl-10">
        <div class="absolute left-0 top-0 h-8 w-8 rounded-full bg-redish-400 flex items-center justify-center text-white font-bold text-sm">3</div>
        <h2 class="text-xl font-bold mb-3">Install Caddy (reverse proxy)</h2>
        <p class="text-brownish-100 mb-4">
          Caddy automatically handles HTTPS certificates for you. No manual SSL setup needed.
        </p>
        <div class="rounded-lg bg-brownish-900 border border-brownish-600 overflow-hidden mb-4">
          <div class="flex items-center justify-between px-4 py-2 bg-brownish-800 border-b border-brownish-600">
            <span class="text-xs text-brownish-100">Install Caddy (Ubuntu/Debian)</span>
          </div>
          <pre class="px-4 py-3 text-sm overflow-x-auto"><code class="text-greeny-200">sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy</code></pre>
        </div>
        <p class="text-brownish-100 mb-4">
          Then configure Caddy to proxy traffic to Hoodik. Replace <code class="text-greeny-200">cloud.yourdomain.com</code> with your actual domain:
        </p>
        <div class="rounded-lg bg-brownish-900 border border-brownish-600 overflow-hidden">
          <div class="flex items-center justify-between px-4 py-2 bg-brownish-800 border-b border-brownish-600">
            <span class="text-xs text-brownish-100">/etc/caddy/Caddyfile</span>
          </div>
          <pre class="px-4 py-3 text-sm overflow-x-auto"><code class="text-greeny-200">cloud.yourdomain.com {
    reverse_proxy localhost:5443 {
        transport http {
            tls_insecure_skip_verify
        }
    }
}</code></pre>
        </div>
        <div class="rounded-lg bg-brownish-900 border border-brownish-600 overflow-hidden mt-4">
          <div class="flex items-center justify-between px-4 py-2 bg-brownish-800 border-b border-brownish-600">
            <span class="text-xs text-brownish-100">Restart Caddy</span>
          </div>
          <pre class="px-4 py-3 text-sm overflow-x-auto"><code class="text-greeny-200">sudo systemctl restart caddy</code></pre>
        </div>
        <p class="text-sm text-brownish-100 mt-2">
          Caddy will automatically obtain and renew a Let's Encrypt certificate for your domain.
          The <code class="text-greeny-200">tls_insecure_skip_verify</code> is needed because Hoodik uses a self-signed cert internally.
        </p>
      </div>

      <!-- Step 4 -->
      <div class="relative pl-10">
        <div class="absolute left-0 top-0 h-8 w-8 rounded-full bg-redish-400 flex items-center justify-center text-white font-bold text-sm">4</div>
        <h2 class="text-xl font-bold mb-3">Start Hoodik</h2>
        <p class="text-brownish-100 mb-4">
          Run Hoodik with Docker. Replace <code class="text-greeny-200">cloud.yourdomain.com</code> with your domain:
        </p>
        <div class="rounded-lg bg-brownish-900 border border-brownish-600 overflow-hidden">
          <div class="flex items-center justify-between px-4 py-2 bg-brownish-800 border-b border-brownish-600">
            <span class="text-xs text-brownish-100">Terminal</span>
            <div class="flex gap-1.5">
              <span class="h-2.5 w-2.5 rounded-full bg-redish-400"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-orangy-400"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-greeny-400"></span>
            </div>
          </div>
          <pre class="px-4 py-3 text-sm overflow-x-auto"><code class="text-greeny-200">docker run --name hoodik -d \
  --restart unless-stopped \
  -e DATA_DIR='/data' \
  -e APP_URL='https://cloud.yourdomain.com' \
  -v /opt/hoodik/data:/data \
  -p 5443:5443 \
  hudik/hoodik:latest</code></pre>
        </div>
        <p class="text-sm text-brownish-100 mt-2">
          Your data is stored in <code class="text-greeny-200">/opt/hoodik/data</code>. Hoodik uses SQLite by default &mdash; no database setup required.
        </p>
      </div>

      <!-- Step 5 -->
      <div class="relative pl-10">
        <div class="absolute left-0 top-0 h-8 w-8 rounded-full bg-redish-400 flex items-center justify-center text-white font-bold text-sm">5</div>
        <h2 class="text-xl font-bold mb-3">Create your account</h2>
        <p class="text-brownish-100 mb-4">
          Open <code class="text-greeny-200">https://cloud.yourdomain.com</code> in your browser and register.
          The <strong class="text-dirty-white">first user automatically becomes the admin</strong>.
        </p>
        <div class="rounded-xl bg-gradient-to-br from-brownish-800 to-brownish-900 border border-brownish-600 p-5">
          <div class="flex items-start gap-3">
            <span class="text-orangy-400 mt-0.5 flex-shrink-0">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <div class="text-sm text-brownish-100 space-y-2">
              <p>
                During registration, a <strong class="text-dirty-white">private key</strong> will be generated in your browser. This key encrypts all your files.
              </p>
              <p>
                <strong class="text-dirty-white">Store your private key somewhere safe</strong> (e.g. a password manager). If you ever forget your password, the private key is the only way to recover your account. Without it, your encrypted data is unrecoverable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 6 -->
      <div class="relative pl-10">
        <div class="absolute left-0 top-0 h-8 w-8 rounded-full bg-greeny-400 flex items-center justify-center text-brownish-900 font-bold text-sm">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 class="text-xl font-bold mb-3">Connect the app</h2>
        <p class="text-brownish-100 mb-4">
          Download the Hoodik app, enter your server URL, and log in. Your files are encrypted on your device before they ever reach the server.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.hudikhq.hoodik"
          target="_blank"
          class="inline-block transition-opacity hover:opacity-80"
        >
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            class="h-16"
          />
        </a>
        <p class="text-sm text-brownish-100 mt-1">
          <svg class="inline-block h-4 w-4 mr-1 -mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          iOS &amp; macOS coming soon
        </p>
      </div>
    </div>

    <!-- Tips section -->
    <div class="mt-12 rounded-xl bg-brownish-900 border border-brownish-600 p-6">
      <h2 class="text-xl font-bold mb-4">Tips</h2>
      <ul class="space-y-3 text-sm text-brownish-100">
        <li class="flex items-start gap-3">
          <span class="text-greeny-300 mt-0.5 flex-shrink-0">&bull;</span>
          <span><strong class="text-dirty-white">Backups:</strong> Your encrypted files and database live in <code class="text-greeny-200">/opt/hoodik/data</code>. Back up this directory regularly.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-greeny-300 mt-0.5 flex-shrink-0">&bull;</span>
          <span><strong class="text-dirty-white">Updates:</strong> Pull the latest image and restart &mdash; <code class="text-greeny-200">docker pull hudik/hoodik:latest &amp;&amp; docker restart hoodik</code></span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-greeny-300 mt-0.5 flex-shrink-0">&bull;</span>
          <span><strong class="text-dirty-white">Invite users:</strong> As admin, go to the Admin Dashboard to create invitation links for family or team members.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-greeny-300 mt-0.5 flex-shrink-0">&bull;</span>
          <span><strong class="text-dirty-white">Storage:</strong> Hoodik idles at around 20 MB of RAM. Your storage limit is the size of your VPS disk &mdash; or virtually unlimited with S3 storage.</span>
        </li>
      </ul>
    </div>

    <!-- S3 storage -->
    <div class="mt-8 rounded-xl bg-gradient-to-br from-brownish-800 to-brownish-900 border border-blueish-400/30 p-6">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-blueish-400/10 flex items-center justify-center">
          <span class="text-2xl">☁️</span>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-2">Scale with S3 storage</h2>
          <p class="text-brownish-100 text-sm leading-relaxed mb-4">
            VPS disks are small and expensive. Instead of paying for a bigger server, connect Hoodik
            to any <strong class="text-dirty-white">S3-compatible storage</strong> and get terabytes
            of encrypted storage for a fraction of the cost. Your VPS still runs the server &mdash;
            the encrypted file chunks just live in the cloud. S3 only ever sees ciphertext.
          </p>
          <p class="text-brownish-100 text-sm leading-relaxed mb-4">
            Services like <strong class="text-dirty-white">Backblaze B2</strong> ($6/TB/mo),
            <strong class="text-dirty-white">Wasabi</strong> ($7/TB/mo), or
            <strong class="text-dirty-white">AWS S3</strong> work out of the box. You can also
            self-host with <strong class="text-dirty-white">MinIO</strong>.
          </p>
          <div class="rounded-lg bg-brownish-900 border border-brownish-600 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-brownish-800 border-b border-brownish-600">
              <span class="text-xs text-brownish-100">Add to your docker run command</span>
            </div>
            <pre class="px-4 py-3 text-sm overflow-x-auto"><code class="text-greeny-200">-e STORAGE_PROVIDER='s3' \
-e S3_BUCKET='my-hoodik-bucket' \
-e S3_REGION='us-east-1' \
-e S3_ACCESS_KEY='your-access-key' \
-e S3_SECRET_KEY='your-secret-key'</code></pre>
          </div>
          <p class="text-sm text-brownish-100 mt-3">
            Already have local data? Run
            <code class="text-greeny-200">docker exec hoodik hoodik migrate-storage</code>
            to move existing encrypted chunks to S3. The migration is idempotent &mdash; safe to re-run
            if interrupted.
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="mt-12 text-center">
      <p class="text-brownish-100 mb-4">Need help or have questions?</p>
      <a
        href="https://github.com/hudikhq/hoodik/issues"
        target="_blank"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brownish-800 hover:bg-brownish-600 text-dirty-white font-semibold border border-brownish-500 transition-all duration-200"
      >
        <img src="/images/github-mark-white.png" alt="GitHub" class="h-5 w-5" />
        Open an issue on GitHub
      </a>
    </div>
  </div>
</template>

<style scoped>
.guide-gradient {
  background: linear-gradient(135deg, #EE8434, #D1F0B1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
