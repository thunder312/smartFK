<script setup lang="ts">
import { User, Award, Calendar } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const broker = ref({
  name: 'Max Mustermann',
  title: 'Zertifizierter Finanzberater',
  company: 'Finanzberatung GmbH',
  since: 'Seit 2018',
  specializations: ['Vermögensaufbau', 'Altersvorsorge', 'ETF-Strategien']
})
</script>

<template>
  <div class="space-y-3">
    <!-- Broker Card -->
    <div class="p-4 border-2 border-indigo-600 bg-indigo-50 rounded-lg">
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded-full bg-indigo-200 flex items-center justify-center">
          <User class="w-8 h-8 text-indigo-600" />
        </div>
        <div>
          <div class="font-mono text-lg font-bold text-indigo-800">{{ broker.name }}</div>
          <div class="text-sm text-indigo-600">{{ broker.title }}</div>
          <div class="text-xs text-gray-500">{{ broker.company }}</div>
        </div>
      </div>
    </div>

    <!-- Details -->
    <div class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card">
      <div class="flex items-center gap-2 mb-3">
        <Calendar class="w-4 h-4 text-indigo-600" />
        <span class="text-sm">{{ broker.since }} Ihr Berater</span>
      </div>

      <div class="flex items-center gap-2 mb-2">
        <Award class="w-4 h-4 text-indigo-600" />
        <span class="text-sm font-bold">Spezialisierungen</span>
      </div>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="spec in broker.specializations"
          :key="spec"
          class="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded"
        >
          {{ spec }}
        </span>
      </div>
    </div>
  </div>
</template>
