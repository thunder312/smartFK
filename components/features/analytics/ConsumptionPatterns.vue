<script setup lang="ts">
import { TrendingUp, TrendingDown } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const patterns = ref([
  { category: 'Lebensmittel', amount: '342,50 €', trend: 'up', change: '+12%' },
  { category: 'Restaurant', amount: '156,80 €', trend: 'down', change: '-8%' },
  { category: 'Shopping', amount: '89,00 €', trend: 'up', change: '+5%' },
  { category: 'Transport', amount: '67,50 €', trend: 'down', change: '-15%' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Pattern Cards -->
    <div
      v-for="pattern in patterns"
      :key="pattern.category"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between">
        <div>
          <div class="font-mono text-sm font-bold">{{ pattern.category }}</div>
          <div class="text-xs text-gray-500">Diesen Monat</div>
        </div>
        <div class="text-right flex items-center gap-2">
          <span class="font-mono text-sm">{{ pattern.amount }}</span>
          <div
            class="flex items-center text-xs"
            :class="pattern.trend === 'up' ? 'text-red-500' : 'text-green-500'"
          >
            <component :is="pattern.trend === 'up' ? TrendingUp : TrendingDown" class="w-3 h-3" />
            <span>{{ pattern.change }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
