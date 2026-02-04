<script setup lang="ts">
import { Calendar, Plus, Repeat } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const plans = ref([
  { name: 'Wachstum Portfolio', rate: '150 €', interval: 'Monatlich', nextDate: '01.03.2026' }
])

const availablePortfolios = ref([
  { name: 'Ausgewogen Portfolio', minRate: '50 €' },
  { name: 'Konservativ Portfolio', minRate: '25 €' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Active Plans -->
    <div class="p-3 border-2 border-indigo-300 bg-indigo-50 rounded-lg">
      <div class="flex items-center gap-2 text-indigo-700">
        <Repeat class="w-5 h-5" />
        <span class="font-mono text-sm font-bold">Aktive Portfolio-Sparpläne</span>
      </div>
    </div>

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
        <span>{{ plan.interval }}</span>
        <div class="flex items-center gap-1">
          <Calendar class="w-3 h-3" />
          {{ plan.nextDate }}
        </div>
      </div>
    </div>

    <!-- Add New Plan -->
    <div class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card">
      <div class="font-mono text-sm font-bold mb-3">Neuen Sparplan erstellen</div>
      <div class="space-y-2">
        <div
          v-for="portfolio in availablePortfolios"
          :key="portfolio.name"
          class="flex items-center justify-between p-2 border border-gray-200 rounded-lg"
        >
          <span class="text-sm">{{ portfolio.name }}</span>
          <button class="flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs active:bg-indigo-200 ios-transition">
            <Plus class="w-3 h-3" />
            Ab {{ portfolio.minRate }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
