<script setup lang="ts">
import { TrendingDown, ArrowRight } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const contracts = ref([
  {
    name: 'Vodafone Mobilfunk',
    current: '49,99 €',
    market: '29,99 €',
    overpriced: '20,00 €'
  },
  {
    name: 'Hausratversicherung',
    current: '18,50 €',
    market: '12,00 €',
    overpriced: '6,50 €'
  }
])

const totalOverpriced = '318 €/Jahr'
</script>

<template>
  <div class="space-y-3">
    <!-- Summary -->
    <div class="p-4 border-2 border-amber-400 bg-amber-50 rounded-lg">
      <div class="flex items-center gap-2 text-amber-700">
        <TrendingDown class="w-5 h-5" />
        <span class="font-mono text-sm font-bold">Überteuerte Verträge</span>
      </div>
      <div class="text-2xl font-mono mt-1 text-amber-800">{{ totalOverpriced }}</div>
      <div class="text-xs text-amber-600 mt-1">mehr als nötig</div>
    </div>

    <!-- Expensive Contracts -->
    <div
      v-for="contract in contracts"
      :key="contract.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="font-mono text-sm font-bold mb-2">{{ contract.name }}</div>
      <div class="flex items-center justify-between text-sm">
        <div class="text-center">
          <div class="text-xs text-gray-500">Sie zahlen</div>
          <div class="font-mono text-red-600">{{ contract.current }}</div>
        </div>
        <ArrowRight class="w-4 h-4 text-amber-600" />
        <div class="text-center">
          <div class="text-xs text-gray-500">Marktpreis</div>
          <div class="font-mono text-green-600">{{ contract.market }}</div>
        </div>
      </div>
      <div class="text-center mt-2">
        <span class="text-xs px-2 py-1 rounded bg-red-100 text-red-700">
          {{ contract.overpriced }}/Monat zu viel
        </span>
      </div>
    </div>
  </div>
</template>
