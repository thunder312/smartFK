<script setup lang="ts">
import { Calendar } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const weeklyTotal = '487,50 €'

const expenses = ref([
  { name: 'Miete', amount: '-850,00 €', date: '01.03.2026', status: 'fällig' },
  { name: 'Stromabschlag', amount: '-75,00 €', date: '03.03.2026', status: 'bald' },
  { name: 'Netflix', amount: '-12,99 €', date: '05.03.2026', status: 'bald' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Weekly Summary -->
    <div class="p-3 border-2 border-orange-300 bg-orange-50 rounded-lg">
      <div class="flex items-center gap-2 text-orange-700">
        <Calendar class="w-4 h-4" />
        <span class="font-mono text-sm font-bold">Diese Woche: {{ weeklyTotal }}</span>
      </div>
    </div>

    <!-- Expense List -->
    <div class="space-y-2">
      <div
        v-for="item in expenses"
        :key="item.name"
        class="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between ios-card"
      >
        <div>
          <div class="font-mono text-sm">{{ item.name }}</div>
          <div class="text-xs text-gray-500">{{ item.date }}</div>
        </div>
        <div class="text-right">
          <div class="font-mono text-sm font-bold text-red-600">{{ item.amount }}</div>
          <div
            class="text-xs"
            :class="item.status === 'fällig' ? 'text-orange-600' : 'text-gray-400'"
          >
            {{ item.status }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
