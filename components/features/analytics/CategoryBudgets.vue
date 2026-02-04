<script setup lang="ts">
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const budgets = ref([
  { category: 'Lebensmittel', budget: 400, spent: 342, color: 'bg-green-500' },
  { category: 'Restaurant', budget: 150, spent: 156, color: 'bg-orange-500' },
  { category: 'Shopping', budget: 200, spent: 89, color: 'bg-purple-500' },
  { category: 'Transport', budget: 100, spent: 67, color: 'bg-blue-500' }
])

const getProgress = (spent: number, budget: number) => Math.min((spent / budget) * 100, 100)
const isOverBudget = (spent: number, budget: number) => spent > budget
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="item in budgets"
      :key="item.category"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-sm font-bold">{{ item.category }}</span>
        <span
          class="font-mono text-sm"
          :class="isOverBudget(item.spent, item.budget) ? 'text-red-600' : 'text-gray-600'"
        >
          {{ item.spent }} € / {{ item.budget }} €
        </span>
      </div>
      <!-- Progress Bar -->
      <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-300"
          :class="isOverBudget(item.spent, item.budget) ? 'bg-red-500' : item.color"
          :style="{ width: `${getProgress(item.spent, item.budget)}%` }"
        />
      </div>
      <div class="text-xs text-gray-500 mt-1">
        {{ isOverBudget(item.spent, item.budget) ? 'Budget überschritten!' : `${item.budget - item.spent} € verbleibend` }}
      </div>
    </div>
  </div>
</template>
