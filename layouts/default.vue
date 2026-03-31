<template>
  <div class="flex min-h-screen flex-col bg-background text-dirty-white">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
