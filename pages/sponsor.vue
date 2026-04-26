<script setup lang="ts">
useHead({
  title: 'Sponsor Hoodik - Keep encrypted storage independent',
  meta: [
    {
      name: 'description',
      content:
        'Hoodik is built by one developer in Osijek, Croatia. Your sponsorship keeps it independent, open-source, and end-to-end encrypted — funded directly by the people who use it.',
    },
    { property: 'og:title', content: 'Sponsor Hoodik' },
    {
      property: 'og:description',
      content: 'Keep self-hosted, end-to-end encrypted cloud storage independent.',
    },
    { property: 'og:url', content: 'https://hoodik.io/sponsor' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'canonical', href: 'https://hoodik.io/sponsor' },
  ],
})

const tiers = [
  {
    name: 'Supporter',
    price: '€5',
    period: '/ month',
    perks: [
      'Name in SPONSORS.md',
      'Sponsor badge on your GitHub profile',
      'The warm feeling of keeping encryption honest',
    ],
  },
  {
    name: 'Backer',
    price: '€25',
    period: '/ month',
    perks: [
      'Everything in Supporter',
      'Logo or avatar in the repo README',
      'Priority on issues you file',
    ],
  },
  {
    name: 'Sustainer',
    price: '€100',
    period: '/ month',
    highlight: true,
    perks: [
      'Everything in Backer',
      'Direct email access to the maintainer',
      'Early access to new features',
      'Your feedback shapes the roadmap',
    ],
  },
  {
    name: 'Business',
    price: '€500',
    period: '/ month',
    perks: [
      'Everything in Sustainer',
      'Logo on hoodik.io',
      'Quarterly roadmap call (video)',
      'Priority bug fixes for issues affecting your deployment',
    ],
  },
]

const funds = [
  'Apple Developer Program (€99 / year) and Google Play Console',
  'Infrastructure: demo server, landing page, CI, domain, certificates',
  'Time on features the community votes for — notes editor, knowledge graph, mobile polish',
  'Independent security audits as the project grows',
  'Moving toward sustainable full-time development',
]

const faqs = [
  {
    q: 'Is this tax-deductible?',
    a: 'No. Hudik d.o.o. is a Croatian for-profit company — sponsorships are not charitable donations. Businesses can expense them as a service or marketing cost; consult your accountant for your jurisdiction.',
  },
  {
    q: 'Can I sponsor anonymously?',
    a: 'Yes. GitHub Sponsors lets you choose whether to appear publicly. You can also skip the profile perks entirely and just support the work.',
  },
  {
    q: 'I need a proper VAT invoice — can you do direct bank transfer?',
    a: 'Yes. Email hello@hudik.eu from your business account and we will handle it as a B2B transfer from Hudik d.o.o. with a proper invoice (reverse charge for EU VAT-registered businesses).',
  },
  {
    q: 'What happens if you stop maintaining Hoodik?',
    a: 'The server stays open-source under CC BY-NC 4.0. The community can fork and continue. Sponsorship is what makes continued maintenance by the original author possible, not a condition for the code to keep existing.',
  },
  {
    q: 'How does sponsorship fit with paid products like the mobile app?',
    a: 'They complement each other. The paid apps and future managed hosting fund the commercial product work. Sponsorship funds the open-source server itself — the core Rust crates, the Docker image, the WASM crypto, the things that benefit every self-hosted user whether they buy anything or not. Both streams are part of keeping Hoodik sustainable in the long run.',
  },
  {
    q: 'Can my company sponsor instead of me?',
    a: 'Please do. The Business tier is designed for this. Many companies use Hoodik internally and can expense sponsorship as part of their open-source budget.',
  },
]
</script>

<template>
  <div class="mx-auto max-w-screen-lg px-3 py-16">
    <!-- Hero -->
    <div class="text-center mb-16 max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Keep Hoodik <span class="text-orangy-400">independent</span>.
      </h1>
      <p class="text-lg md:text-xl text-brownish-50 mb-8">
        Hoodik is built by one developer in Osijek, Croatia. Your sponsorship
        helps keep it open-source, end-to-end encrypted, and sustainable —
        and directly shapes what gets built next.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="https://github.com/sponsors/hudikhq"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-redish-400 hover:bg-redish-300 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-redish-400/20"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          Sponsor on GitHub
        </a>
        <a
          href="mailto:hello@hudik.eu?subject=Hoodik%20sponsorship%20%E2%80%94%20invoice%20request"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brownish-800 hover:bg-brownish-600 text-dirty-white font-semibold border border-brownish-500 transition-all duration-200"
        >
          Request invoice (EU business)
        </a>
      </div>
    </div>

    <!-- Why this matters -->
    <div class="mb-16">
      <div class="rounded-xl bg-brownish-900 border border-brownish-600 p-8 md:p-10">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Why sponsorship</h2>
        <div class="space-y-4 text-brownish-50 leading-relaxed">
          <p>
            Hoodik is infrastructure. It is the kind of software that needs
            to be maintained carefully for years — security patches, crypto
            upgrades, platform updates, new clients. The best open-source
            infrastructure tends to be funded by the people and companies
            that actually depend on it.
          </p>
          <p>
            Sponsorship is a direct, aligned way for the community to support
            that work. It pays for the non-glamorous parts — the
            demo server, the app store fees, the CI, the hours spent on
            audits and reviews — so development stays steady and the project
            keeps its long-term character.
          </p>
          <p>
            <strong class="text-dirty-white">Every sponsor extends the runway.</strong>
            Ten sustainers cover the infrastructure. A hundred make this a
            full-time project.
          </p>
        </div>
      </div>
    </div>

    <!-- Tiers -->
    <div class="mb-16">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold">
          Pick a <span class="text-orangy-400">tier</span>
        </h2>
        <p class="mt-3 text-brownish-100">
          All tiers are configured on GitHub Sponsors. You can change or cancel
          at any time.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="tier in tiers"
          :key="tier.name"
          :class="[
            'rounded-xl bg-brownish-900 p-6 flex flex-col transition-all duration-300',
            tier.highlight
              ? 'border-2 border-redish-400 hover:border-redish-300 relative'
              : 'border border-brownish-600 hover:border-brownish-400',
          ]"
        >
          <div
            v-if="tier.highlight"
            class="absolute -top-3 left-1/2 -translate-x-1/2"
          >
            <span
              class="rounded-full px-3 py-1 text-xs font-semibold bg-redish-400 text-white"
            >Most sustainable</span>
          </div>
          <div class="mb-4">
            <h3 class="text-xl font-bold">{{ tier.name }}</h3>
          </div>
          <div class="mb-6">
            <span class="text-3xl font-bold text-dirty-white">{{ tier.price }}</span>
            <span class="text-brownish-100 text-sm ml-1">{{ tier.period }}</span>
          </div>
          <ul class="space-y-3 mb-6 flex-1">
            <li
              v-for="perk in tier.perks"
              :key="perk"
              class="flex items-start gap-2.5 text-sm"
            >
              <svg
                class="h-5 w-5 flex-shrink-0 text-greeny-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-brownish-50">{{ perk }}</span>
            </li>
          </ul>
          <a
            href="https://github.com/sponsors/hudikhq"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'block w-full text-center px-5 py-3 rounded-lg font-semibold transition-all duration-200',
              tier.highlight
                ? 'bg-redish-400 hover:bg-redish-300 text-white hover:shadow-lg hover:shadow-redish-400/20'
                : 'bg-brownish-800 hover:bg-brownish-600 text-dirty-white border border-brownish-500',
            ]"
          >
            Choose {{ tier.name }}
          </a>
        </div>
      </div>
      <p class="text-center text-sm text-brownish-100 mt-6">
        A custom amount works too — any sponsorship helps.
      </p>
    </div>

    <!-- Corporate / invoice -->
    <div class="mb-16">
      <div
        class="rounded-xl bg-brownish-900 border border-brownish-600 p-6 md:p-8"
      >
        <div class="flex flex-col md:flex-row md:items-center gap-6">
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-2">Sponsoring as a business?</h2>
            <p class="text-brownish-50">
              Many EU companies need a proper VAT invoice instead of GitHub's
              receipt. We are happy to handle sponsorship as a direct B2B
              transfer from Hudik d.o.o. — including reverse-charge invoicing
              for VAT-registered EU businesses.
            </p>
          </div>
          <a
            href="mailto:hello@hudik.eu?subject=Hoodik%20sponsorship%20%E2%80%94%20invoice%20request"
            class="inline-flex items-center justify-center whitespace-nowrap px-6 py-3 rounded-lg bg-redish-400 hover:bg-redish-300 text-white font-semibold transition-all duration-200"
          >
            Email hello@hudik.eu
          </a>
        </div>
      </div>
    </div>

    <!-- Where the money goes -->
    <div class="mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center">
        Where the money goes
      </h2>
      <div
        class="rounded-xl bg-brownish-900 border border-brownish-600 p-6 md:p-8"
      >
        <ul class="space-y-3">
          <li
            v-for="item in funds"
            :key="item"
            class="flex items-start gap-3"
          >
            <svg
              class="h-5 w-5 flex-shrink-0 text-orangy-400 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <span class="text-brownish-50">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- FAQ -->
    <div class="mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">
        Frequently asked
      </h2>
      <div class="space-y-4">
        <details
          v-for="item in faqs"
          :key="item.q"
          class="group rounded-xl bg-brownish-900 border border-brownish-600 p-5 transition-colors hover:border-brownish-400"
        >
          <summary
            class="flex items-center justify-between cursor-pointer font-semibold text-dirty-white list-none"
          >
            <span>{{ item.q }}</span>
            <svg
              class="h-5 w-5 text-brownish-100 transition-transform duration-200 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p class="mt-3 text-brownish-50 leading-relaxed">{{ item.a }}</p>
        </details>
      </div>
    </div>

    <!-- Closing CTA -->
    <div class="text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">
        Even €5 / month matters.
      </h2>
      <p class="text-brownish-50 mb-6 max-w-xl mx-auto">
        Every sponsor directly extends how long Hoodik keeps being
        maintained, audited, and improved.
      </p>
      <a
        href="https://github.com/sponsors/hudikhq"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-redish-400 hover:bg-redish-300 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-redish-400/20"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        Sponsor on GitHub
      </a>
    </div>
  </div>
</template>
