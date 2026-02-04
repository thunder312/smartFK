<script setup lang="ts">
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const totalMonthly = '334,42 €'

const contracts = ref([
  { name: 'Miete', amount: '850,00 €', category: 'Wohnen' },
  { name: 'Strom', amount: '95,00 €', category: 'Energie' },
  { name: 'Vodafone Internet', amount: '39,99 €', category: 'Internet' },
  { name: 'Vodafone Mobilfunk', amount: '29,99 €', category: 'Mobilfunk' },
  { name: 'Netflix', amount: '12,99 €', category: 'Streaming' },
  { name: 'Spotify', amount: '9,99 €', category: 'Streaming' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Total Card -->
    <div class="p-4 border-2 border-emerald-600 bg-emerald-50 rounded-lg">
      <div class="text-xs font-mono text-emerald-700">Monatliche Fixkosten</div>
      <div class="text-2xl font-mono mt-1 text-emerald-800">{{ totalMonthly }}</div>
    </div>

    <!-- Contract List -->
    <div
      v-for="contract in contracts"
      :key="contract.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between ios-card"
    >
      <div>
        <div class="font-mono text-sm">{{ contract.name }}</div>
        <div class="text-xs text-gray-500">{{ contract.category }}</div>
      </div>
      <span class="font-mono text-sm font-bold">{{ contract.amount }}</span>
    </div>
  </div>
</template>
