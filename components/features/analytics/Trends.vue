<script setup lang="ts">
import { TrendingUp, TrendingDown, Minus } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const trends = ref([
  { category: 'Lebensmittel', direction: 'up', percent: 15, insight: 'Steigende Ausgaben seit 3 Monaten' },
  { category: 'Transport', direction: 'down', percent: 22, insight: 'Deutlich gesunken durch Home-Office' },
  { category: 'Streaming', direction: 'stable', percent: 0, insight: 'Konstant bei 35€/Monat' },
  { category: 'Restaurant', direction: 'up', percent: 8, insight: 'Leicht gestiegen' }
])

const trendIcon = (direction: string) => {
  if (direction === 'up') return TrendingUp
  if (direction === 'down') return TrendingDown
  return Minus
}

const trendColor = (direction: string) => {
  if (direction === 'up') return 'text-red-500'
  if (direction === 'down') return 'text-green-500'
  return 'text-gray-500'
}
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="trend in trends"
      :key="trend.category"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-sm font-bold">{{ trend.category }}</span>
        <div class="flex items-center gap-1" :class="trendColor(trend.direction)">
          <component :is="trendIcon(trend.direction)" class="w-4 h-4" />
          <span v-if="trend.percent > 0" class="text-sm">{{ trend.percent }}%</span>
        </div>
      </div>
      <p class="text-xs text-gray-500">{{ trend.insight }}</p>
    </div>
  </div>
</template>
