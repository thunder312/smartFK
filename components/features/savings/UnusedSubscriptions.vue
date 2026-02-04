<script setup lang="ts">
import { AlertCircle, Trash2 } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const subscriptions = ref([
  { name: 'Disney+', price: '8,99 €', lastUsed: 'Vor 45 Tagen', potential: '107,88 €/Jahr' },
  { name: 'Apple Music', price: '10,99 €', lastUsed: 'Vor 60 Tagen', potential: '131,88 €/Jahr' },
  { name: 'Zeitschriften-Abo', price: '4,99 €', lastUsed: 'Nie genutzt', potential: '59,88 €/Jahr' }
])

const totalPotential = '299,64 €'
</script>

<template>
  <div class="space-y-3">
    <!-- Savings Potential -->
    <div class="p-4 border-2 border-amber-400 bg-amber-50 rounded-lg">
      <div class="flex items-center gap-2 text-amber-700">
        <AlertCircle class="w-5 h-5" />
        <span class="font-mono text-sm font-bold">Einsparpotential</span>
      </div>
      <div class="text-2xl font-mono mt-1 text-amber-800">{{ totalPotential }}/Jahr</div>
    </div>

    <!-- Unused Subscriptions -->
    <div
      v-for="sub in subscriptions"
      :key="sub.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-sm font-bold">{{ sub.name }}</span>
        <span class="font-mono text-sm text-red-600">{{ sub.price }}/Monat</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-500">{{ sub.lastUsed }}</span>
        <button class="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded text-xs active:bg-red-200 ios-transition">
          <Trash2 class="w-3 h-3" />
          Kündigen
        </button>
      </div>
    </div>
  </div>
</template>
