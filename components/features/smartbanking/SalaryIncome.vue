<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const nextSalary = {
  date: '28.02.2026',
  amount: '+2.850,00 €'
}

const history = ref([
  { date: '28.01.2026', amount: '+2.850,00 €', employer: 'Musterfirma GmbH' },
  { date: '28.12.2025', amount: '+2.850,00 €', employer: 'Musterfirma GmbH' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Next Salary Card -->
    <div class="p-4 border-2 border-green-500 bg-green-50 rounded-lg">
      <div class="flex items-center gap-2 text-green-700">
        <CheckCircle2 class="w-5 h-5" />
        <div>
          <div class="font-mono text-sm font-bold">Nächster Eingang</div>
          <div class="text-xs">{{ nextSalary.date }}</div>
        </div>
      </div>
      <div class="text-2xl font-mono mt-2 text-green-800">{{ nextSalary.amount }}</div>
    </div>

    <!-- History -->
    <div class="space-y-2">
      <div
        v-for="(entry, idx) in history"
        :key="idx"
        class="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between ios-card"
      >
        <div>
          <div class="font-mono text-sm">{{ entry.employer }}</div>
          <div class="text-xs text-gray-500">{{ entry.date }}</div>
        </div>
        <span class="font-mono text-sm font-bold text-green-600">{{ entry.amount }}</span>
      </div>
    </div>
  </div>
</template>
