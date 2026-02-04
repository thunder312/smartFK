<script setup lang="ts">
import { CheckCircle2, AlertCircle } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const transactions = ref([
  { name: 'REWE Markt', category: 'Lebensmittel', confidence: 98, auto: true },
  { name: 'Shell Tankstelle', category: 'Transport', confidence: 95, auto: true },
  { name: 'AMZN*123ABC', category: 'Shopping', confidence: 72, auto: false },
  { name: 'Überweisung Max', category: 'Unbekannt', confidence: 0, auto: false }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Auto-categorized Transactions -->
    <div
      v-for="tx in transactions"
      :key="tx.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-sm">{{ tx.name }}</span>
        <component
          :is="tx.auto ? CheckCircle2 : AlertCircle"
          class="w-4 h-4"
          :class="tx.auto ? 'text-green-500' : 'text-orange-500'"
        />
      </div>
      <div class="flex items-center justify-between">
        <span
          class="text-xs px-2 py-1 rounded"
          :class="tx.category !== 'Unbekannt' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-500'"
        >
          {{ tx.category }}
        </span>
        <span v-if="tx.confidence > 0" class="text-xs text-gray-500">
          {{ tx.confidence }}% sicher
        </span>
      </div>
    </div>
  </div>
</template>
