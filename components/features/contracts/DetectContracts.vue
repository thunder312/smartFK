<script setup lang="ts">
import { CheckCircle2, Search } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const detectedContracts = ref([
  { name: 'Netflix', detected: '15.01.2026', amount: '12,99 €/Monat', status: 'neu' },
  { name: 'Spotify', detected: '10.01.2026', amount: '9,99 €/Monat', status: 'bestätigt' },
  { name: 'Vodafone', detected: '05.01.2026', amount: '39,99 €/Monat', status: 'bestätigt' },
  { name: 'Amazon Prime', detected: '01.01.2026', amount: '8,99 €/Monat', status: 'bestätigt' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Scan Status -->
    <div class="p-3 border-2 border-emerald-300 bg-emerald-50 rounded-lg flex items-center gap-3">
      <Search class="w-5 h-5 text-emerald-600" />
      <div>
        <div class="font-mono text-sm font-bold text-emerald-800">4 Verträge erkannt</div>
        <div class="text-xs text-emerald-600">Zuletzt gescannt: Heute</div>
      </div>
    </div>

    <!-- Detected Contracts -->
    <div
      v-for="contract in detectedContracts"
      :key="contract.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-sm font-bold">{{ contract.name }}</span>
        <span
          class="text-xs px-2 py-1 rounded"
          :class="contract.status === 'neu' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'"
        >
          {{ contract.status === 'neu' ? 'Neu erkannt' : 'Bestätigt' }}
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-500">Erkannt am {{ contract.detected }}</span>
        <span class="font-mono text-sm">{{ contract.amount }}</span>
      </div>
    </div>
  </div>
</template>
