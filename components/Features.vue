<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <div class="mb-6 text-2xl font-bold">Features</div>
    <div class="flex flex-col gap-6">
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-brownish-900 p-3 md:flex-row"
      >
        <div class="shrink-0">
          <span class="text-[100px]"> 🔐 </span>
        </div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <div class="text-xl font-semibold">End To End Encryption</div>
            <div class="ml-3 flex gap-2">
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-redish-400 text-fuchsia-900"
              >
                RSA
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-greeny-400 text-lime-900"
              >
                AES
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400">
            With hybrid cryptography and key wrapping, your data is encrypted in
            the browser and is decrypted only again in the browser. The server
            knows only your public key.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-brownish-900 p-3 md:flex-row"
      >
        <div class="shrink-0">
          <span class="text-[100px]"> 🔎 </span>
        </div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <div class="text-xl font-semibold">Search</div>
          </div>
          <p class="mt-3 text-gray-400">
            Metadata is tokenized and stored so it can easily be searched
            without needing to decrypt, offering fast and easy way to find your
            files.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-brownish-900 p-3 md:flex-row"
      >
        <div class="shrink-0">
          <span class="text-[100px]"> 🔗 </span>
        </div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <div class="text-xl font-semibold">Public link sharing</div>
          </div>
          <p class="mt-3 text-gray-400">
            You can easily share your files with anyone by creating a public
            link. Sharing is done by encrypting the file key with a public link
            key which is then shared with anyone, you can easily set the expiry
            of your link or delete it when you want without revealing the actual
            file key.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-brownish-900 p-3 md:flex-row"
      >
        <div class="shrink-0">
          <span class="text-[100px]"> 🚀 </span>
        </div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <div class="text-xl font-semibold">
              Low footprint and fast performance
            </div>
            <div class="ml-3 flex gap-2">
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-orangy-400 text-fuchsia-900"
              >
                Rust
              </div>
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-redish-200 text-lime-900"
              >
                Vue.js
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400">
            Built with backend in Rust and frontend in Vue.js, the app is
            lightweight and fast. The app is also built with performance in mind
            and is optimized for fast loading and rendering. With less then 20mb
            ram usage it can run on (almost) any x86 server instance. ARM coming
            soon...
          </p>
        </div>
      </div>
      <div
        class="flex flex-col items-center gap-x-8 rounded-md bg-brownish-900 p-3 md:flex-row"
      >
        <div class="shrink-0">
          <span class="text-[100px]"> 🛠️ </span>
        </div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <div class="text-xl font-semibold">Easy install</div>
            <div class="ml-3 flex gap-2">
              <div
                class="rounded-md px-2 py-1 text-xs font-semibold bg-blueish-400 text-fuchsia-900"
              >
                Docker
              </div>
            </div>
          </div>
          <p class="mt-3 text-gray-400">
            Installs with a simple Docker command and is ready to use instantly.
            No need for additional configurations. But if you want, there are
            plenty of options to configure it perfectly for your use case.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
