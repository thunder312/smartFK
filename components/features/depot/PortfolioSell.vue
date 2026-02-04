<script setup lang="ts">
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const holdings = ref([
  { name: 'Wachstum Portfolio', value: '15.000,00 €', shares: '150', profit: '+1.800 €' },
  { name: 'Ausgewogen Portfolio', value: '10.000,00 €', shares: '100', profit: '+650 €' }
])
</script>

<template>
  <div class="space-y-3">
    <div class="p-3 border-2 border-indigo-300 bg-indigo-50 rounded-lg">
      <span class="font-mono text-sm text-indigo-800">Ihre Portfolio-Anteile</span>
    </div>

    <div
      v-for="holding in holdings"
      :key="holding.name"
      class="p-4 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-sm font-bold">{{ holding.name }}</span>
        <span class="font-mono text-sm">{{ holding.value }}</span>
      </div>
      <div class="flex items-center justify-between text-xs text-gray-500 mb-3">
        <span>{{ holding.shares }} Anteile</span>
        <span class="text-green-600">{{ holding.profit }} Gewinn</span>
      </div>
      <button class="w-full p-2 bg-red-600 text-white rounded-lg text-sm font-mono active:bg-red-700 ios-transition touch-target">
        Anteile verkaufen
      </button>
    </div>
  </div>
</template>
