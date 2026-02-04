<script setup lang="ts">
import { TrendingUp, TrendingDown } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const positions = ref([
  { name: 'MSCI World ETF', shares: '250', value: '18.500,00 €', profit: '+2.150 €', positive: true },
  { name: 'DAX ETF', shares: '60', value: '8.200,00 €', profit: '+420 €', positive: true },
  { name: 'Apple Inc.', shares: '35', value: '6.800,00 €', profit: '+1.200 €', positive: true }
])
</script>

<template>
  <div class="space-y-3">
    <div class="p-3 border-2 border-indigo-300 bg-indigo-50 rounded-lg">
      <span class="font-mono text-sm text-indigo-800">Wählen Sie eine Position zum Verkaufen</span>
    </div>

    <div
      v-for="pos in positions"
      :key="pos.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <div>
          <div class="font-mono text-sm font-bold">{{ pos.name }}</div>
          <div class="text-xs text-gray-500">{{ pos.shares }} Anteile</div>
        </div>
        <div class="text-right">
          <div class="font-mono text-sm">{{ pos.value }}</div>
          <div class="flex items-center gap-1 text-xs" :class="pos.positive ? 'text-green-600' : 'text-red-600'">
            <component :is="pos.positive ? TrendingUp : TrendingDown" class="w-3 h-3" />
            {{ pos.profit }}
          </div>
        </div>
      </div>
      <button class="w-full p-2 bg-red-600 text-white rounded-lg text-sm font-mono active:bg-red-700 ios-transition touch-target">
        Verkaufen
      </button>
    </div>
  </div>
</template>
