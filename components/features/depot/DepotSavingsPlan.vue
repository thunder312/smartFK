<script setup lang="ts">
import { Calendar, Plus, Repeat } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const plans = ref([
  { name: 'MSCI World ETF', rate: '200 €', interval: 'Monatlich', nextDate: '01.03.2026' },
  { name: 'DAX ETF', rate: '100 €', interval: 'Monatlich', nextDate: '01.03.2026' }
])

const totalMonthly = '300 €'
</script>

<template>
  <div class="space-y-3">
    <!-- Summary -->
    <div class="p-4 border-2 border-indigo-600 bg-indigo-50 rounded-lg">
      <div class="flex items-center gap-2 text-indigo-700">
        <Repeat class="w-5 h-5" />
        <span class="font-mono text-sm font-bold">Aktive Sparpläne</span>
      </div>
      <div class="text-2xl font-mono mt-1 text-indigo-800">{{ totalMonthly }}/Monat</div>
    </div>

    <!-- Active Plans -->
    <div
      v-for="plan in plans"
      :key="plan.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-sm font-bold">{{ plan.name }}</span>
        <span class="font-mono text-sm text-indigo-600">{{ plan.rate }}</span>
      </div>
      <div class="flex items-center justify-between text-xs text-gray-500">
        <div class="flex items-center gap-1">
          <Repeat class="w-3 h-3" />
          {{ plan.interval }}
        </div>
        <div class="flex items-center gap-1">
          <Calendar class="w-3 h-3" />
          Nächste: {{ plan.nextDate }}
        </div>
      </div>
    </div>

    <!-- Add Plan Button -->
    <button class="w-full p-3 border-2 border-dashed border-indigo-400 text-indigo-600 active:bg-indigo-50 flex items-center justify-center gap-2 rounded-lg touch-target ios-transition">
      <Plus class="w-5 h-5" />
      <span class="font-mono text-sm">Neuen Sparplan anlegen</span>
    </button>
  </div>
</template>
