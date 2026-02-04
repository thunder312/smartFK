<script setup lang="ts">
import { Layers, ArrowRight } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const portfolios = ref([
  { name: 'Wachstum', risk: 'Hoch', minInvest: '500 €', return: '+12% p.a.' },
  { name: 'Ausgewogen', risk: 'Mittel', minInvest: '250 €', return: '+8% p.a.' },
  { name: 'Konservativ', risk: 'Niedrig', minInvest: '100 €', return: '+4% p.a.' }
])
</script>

<template>
  <div class="space-y-3">
    <div class="p-3 border-2 border-indigo-300 bg-indigo-50 rounded-lg flex items-center gap-2">
      <Layers class="w-5 h-5 text-indigo-600" />
      <span class="font-mono text-sm text-indigo-800">Vorgefertigte Portfolios</span>
    </div>

    <div
      v-for="portfolio in portfolios"
      :key="portfolio.name"
      class="p-4 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-3">
        <span class="font-mono text-sm font-bold">{{ portfolio.name }}</span>
        <span
          class="text-xs px-2 py-1 rounded"
          :class="{
            'bg-red-100 text-red-700': portfolio.risk === 'Hoch',
            'bg-amber-100 text-amber-700': portfolio.risk === 'Mittel',
            'bg-green-100 text-green-700': portfolio.risk === 'Niedrig'
          }"
        >
          Risiko: {{ portfolio.risk }}
        </span>
      </div>

      <div class="flex items-center justify-between text-sm mb-3">
        <div>
          <div class="text-xs text-gray-500">Mind. Anlage</div>
          <div class="font-mono">{{ portfolio.minInvest }}</div>
        </div>
        <div class="text-right">
          <div class="text-xs text-gray-500">Erwartete Rendite</div>
          <div class="font-mono text-green-600">{{ portfolio.return }}</div>
        </div>
      </div>

      <button class="w-full p-2 bg-indigo-600 text-white rounded-lg text-sm font-mono flex items-center justify-center gap-2 active:bg-indigo-700 ios-transition touch-target">
        Investieren
        <ArrowRight class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
