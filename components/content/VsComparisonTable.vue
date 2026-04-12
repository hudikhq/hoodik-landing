<template>
  <div class="rounded-xl bg-brownish-900 border border-brownish-600 overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-brownish-600">
            <th class="text-left px-4 py-3 text-brownish-100 font-medium">Feature</th>
            <th class="text-center px-4 py-3 text-dirty-white font-bold">Hoodik</th>
            <th class="text-center px-4 py-3 text-dirty-white font-bold">{{ competitor }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(feature, i) in features"
            :key="feature.name"
            :class="i % 2 === 0 ? 'bg-brownish-900' : 'bg-brownish-800/50'"
            class="border-b border-brownish-600/50 last:border-0"
          >
            <td class="px-4 py-3">
              <span class="text-dirty-white">{{ feature.name }}</span>
              <span v-if="feature.note" class="block text-xs text-brownish-100 mt-0.5">{{ feature.note }}</span>
            </td>
            <td class="text-center px-4 py-3">
              <FeatureValue :value="feature.hoodik" />
            </td>
            <td class="text-center px-4 py-3">
              <FeatureValue :value="feature.competitor" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  features: Array<{
    name: string;
    hoodik: boolean | string;
    competitor: boolean | string;
    note?: string;
  }>;
  competitor: string;
}>();
</script>
