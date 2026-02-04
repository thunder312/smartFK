<script setup lang="ts">
import { PieChart } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const totalValue = '57.730,00 €'

const allocation = ref([
  { name: 'Aktien', percent: 55, value: '31.750,00 €', color: 'bg-blue-500' },
  { name: 'ETFs', percent: 30, value: '17.320,00 €', color: 'bg-indigo-500' },
  { name: 'Anleihen', percent: 10, value: '5.770,00 €', color: 'bg-green-500' },
  { name: 'Rohstoffe', percent: 5, value: '2.890,00 €', color: 'bg-amber-500' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Total -->
    <div class="p-4 border-2 border-indigo-600 bg-indigo-50 rounded-lg">
      <div class="flex items-center gap-2 text-indigo-700">
        <PieChart class="w-5 h-5" />
        <span class="font-mono text-sm font-bold">Gesamtportfolio</span>
      </div>
      <div class="text-2xl font-mono mt-1 text-indigo-800">{{ totalValue }}</div>
    </div>

    <!-- Allocation -->
    <div class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card">
      <div class="font-mono text-sm font-bold mb-3">Asset Allocation</div>

      <!-- Progress Bars -->
      <div class="h-4 rounded-full overflow-hidden flex mb-3">
        <div
          v-for="item in allocation"
          :key="item.name"
          :class="item.color"
          :style="{ width: `${item.percent}%` }"
        />
      </div>

      <!-- Legend -->
      <div class="space-y-2">
        <div
          v-for="item in allocation"
          :key="item.name"
          class="flex items-center justify-between"
        >
          <div class="flex items-center gap-2">
            <div :class="`w-3 h-3 rounded-full ${item.color}`" />
            <span class="text-sm">{{ item.name }}</span>
          </div>
          <div class="text-right">
            <span class="font-mono text-sm">{{ item.percent }}%</span>
            <span class="text-xs text-gray-500 ml-2">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
