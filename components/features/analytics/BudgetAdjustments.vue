<script setup lang="ts">
import { Sparkles, ArrowRight } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const suggestions = ref([
  {
    category: 'Restaurant',
    current: 150,
    suggested: 180,
    reason: 'Regelmäßig überschritten in den letzten 3 Monaten'
  },
  {
    category: 'Shopping',
    current: 200,
    suggested: 150,
    reason: 'Durchschnittlich nur 95€ ausgegeben'
  },
  {
    category: 'Transport',
    current: 100,
    suggested: 80,
    reason: 'Weniger Fahrten durch Home-Office'
  }
])
</script>

<template>
  <div class="space-y-3">
    <!-- AI Suggestion Header -->
    <div class="p-3 border-2 border-purple-300 bg-purple-50 rounded-lg flex items-center gap-2">
      <Sparkles class="w-5 h-5 text-purple-600" />
      <span class="font-mono text-sm text-purple-800">Smarte Budget-Vorschläge</span>
    </div>

    <!-- Suggestions -->
    <div
      v-for="item in suggestions"
      :key="item.category"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-sm font-bold">{{ item.category }}</span>
        <div class="flex items-center gap-2 text-sm">
          <span class="text-gray-500">{{ item.current }} €</span>
          <ArrowRight class="w-4 h-4 text-purple-600" />
          <span class="text-purple-600 font-bold">{{ item.suggested }} €</span>
        </div>
      </div>
      <p class="text-xs text-gray-500">{{ item.reason }}</p>
      <button class="mt-2 w-full p-2 bg-purple-100 text-purple-700 rounded-lg text-xs font-mono active:bg-purple-200 ios-transition touch-target">
        Anwenden
      </button>
    </div>
  </div>
</template>
