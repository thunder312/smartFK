<script setup lang="ts">
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const stats = ref([
  { count: 12, label: 'Monatlich' },
  { count: 3, label: 'Jährlich' },
  { count: 2, label: 'Quartal' }
])

const transactions = ref([
  { name: 'Miete', interval: 'Monatlich', amount: '-850,00 €' },
  { name: 'Spotify', interval: 'Monatlich', amount: '-9,99 €' },
  { name: 'Haftpflicht', interval: 'Jährlich', amount: '-89,00 €' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Stats Grid -->
    <div class="grid grid-cols-3 gap-2 text-center">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
      >
        <div class="text-xl font-mono font-bold">{{ stat.count }}</div>
        <div class="text-xs text-gray-500">{{ stat.label }}</div>
      </div>
    </div>

    <!-- Transaction List -->
    <div class="space-y-2">
      <div
        v-for="item in transactions"
        :key="item.name"
        class="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between ios-card"
      >
        <div>
          <div class="font-mono text-sm">{{ item.name }}</div>
          <div class="text-xs text-gray-500">{{ item.interval }}</div>
        </div>
        <span class="font-mono text-sm font-bold">{{ item.amount }}</span>
      </div>
    </div>
  </div>
</template>
