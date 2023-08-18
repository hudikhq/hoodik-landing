<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <div
      class="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24"
    >
      <div>
        <h1 class="text-3xl font-bold">
          Hi there, I'm
          <span class="text-redish-200"> Hoodik </span>
          👋
        </h1>
        <p class="mt-6 text-xl leading-9">
          Hoodik is a lightweight, secure, and self-hosted cloud storage
          solution that we've built using Rust and Vue. With end-to-end
          encryption, your data is shielded from prying eyes and hackers. Hoodik
          supports file uploading and downloading - making it easy for you to
          share files with other users.
        </p>
      </div>
      <div class="shrink-0">
        <img
          class="h-64"
          src="/images/hoodik-lg.svg"
          alt="Avatar image"
          loading="lazy"
        />
      </div>
    </div>

    <div
      class="flex flex-col items-center gap-x-8 rounded-md pt-10 md:flex-row"
    >
      <img src="/images/screenshot.png" alt="Hoodik Screenshot" />
    </div>
  </div>
</template>
