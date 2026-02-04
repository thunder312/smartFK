<script setup lang="ts">
import { TrendingUp, TrendingDown } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const depot = ref({
  totalValue: '45.230,00 €',
  profit: '+3.450,00 €',
  profitPercent: '+8,26%',
  isPositive: true
})

const positions = ref([
  { name: 'MSCI World ETF', value: '18.500,00 €', change: '+12,5%', positive: true },
  { name: 'DAX ETF', value: '8.200,00 €', change: '+5,2%', positive: true },
  { name: 'Apple Inc.', value: '6.800,00 €', change: '+18,3%', positive: true },
  { name: 'Anleihen ETF', value: '5.500,00 €', change: '-1,2%', positive: false },
  { name: 'Gold ETC', value: '6.230,00 €', change: '+3,8%', positive: true }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Depot Summary -->
    <div class="p-4 border-2 border-indigo-600 bg-indigo-50 rounded-lg">
      <div class="text-xs font-mono text-indigo-700">Depotwert</div>
      <div class="text-2xl font-mono mt-1 text-indigo-800">{{ depot.totalValue }}</div>
      <div class="flex items-center gap-2 mt-2">
        <component :is="depot.isPositive ? TrendingUp : TrendingDown" class="w-4 h-4 text-green-600" />
        <span class="font-mono text-sm text-green-600">{{ depot.profit }} ({{ depot.profitPercent }})</span>
      </div>
    </div>

    <!-- Positions -->
    <div
      v-for="pos in positions"
      :key="pos.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between">
        <div>
          <div class="font-mono text-sm font-bold">{{ pos.name }}</div>
          <div class="font-mono text-sm text-gray-600">{{ pos.value }}</div>
        </div>
        <div class="flex items-center gap-1" :class="pos.positive ? 'text-green-600' : 'text-red-600'">
          <component :is="pos.positive ? TrendingUp : TrendingDown" class="w-4 h-4" />
          <span class="font-mono text-sm">{{ pos.change }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
