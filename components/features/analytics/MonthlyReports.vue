<script setup lang="ts">
import { FileText, Download } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const reports = ref([
  { month: 'Februar 2026', income: '+3.200,00 €', expenses: '-2.145,50 €', savings: '+1.054,50 €' },
  { month: 'Januar 2026', income: '+3.150,00 €', expenses: '-2.890,00 €', savings: '+260,00 €' },
  { month: 'Dezember 2025', income: '+3.500,00 €', expenses: '-3.120,00 €', savings: '+380,00 €' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Report Cards -->
    <div
      v-for="report in reports"
      :key="report.month"
      class="p-4 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <FileText class="w-4 h-4 text-purple-600" />
          <span class="font-mono text-sm font-bold">{{ report.month }}</span>
        </div>
        <button class="p-2 text-purple-600 active:bg-purple-50 rounded touch-target">
          <Download class="w-4 h-4" />
        </button>
      </div>
      <div class="grid grid-cols-3 gap-2 text-center">
        <div>
          <div class="text-xs text-gray-500">Einnahmen</div>
          <div class="font-mono text-sm text-green-600">{{ report.income }}</div>
        </div>
        <div>
          <div class="text-xs text-gray-500">Ausgaben</div>
          <div class="font-mono text-sm text-red-600">{{ report.expenses }}</div>
        </div>
        <div>
          <div class="text-xs text-gray-500">Ersparnis</div>
          <div class="font-mono text-sm text-blue-600">{{ report.savings }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
