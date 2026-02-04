<script setup lang="ts">
import { ArrowRightLeft, Sparkles } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const suggestions = ref([
  {
    current: 'Vodafone Internet',
    currentPrice: '39,99 €',
    alternative: 'O2 DSL',
    newPrice: '29,99 €',
    savings: '120 €/Jahr'
  },
  {
    current: 'E.ON Strom',
    currentPrice: '95,00 €',
    alternative: 'Vattenfall',
    newPrice: '82,00 €',
    savings: '156 €/Jahr'
  }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Savings Potential -->
    <div class="p-3 border-2 border-emerald-300 bg-emerald-50 rounded-lg flex items-center gap-2">
      <Sparkles class="w-5 h-5 text-emerald-600" />
      <div>
        <div class="font-mono text-sm font-bold text-emerald-800">276 € sparen möglich</div>
        <div class="text-xs text-emerald-600">Durch Anbieterwechsel</div>
      </div>
    </div>

    <!-- Switch Suggestions -->
    <div
      v-for="item in suggestions"
      :key="item.current"
      class="p-4 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-3">
        <div class="text-center flex-1">
          <div class="text-xs text-gray-500">Aktuell</div>
          <div class="font-mono text-sm">{{ item.current }}</div>
          <div class="font-mono text-sm text-red-600">{{ item.currentPrice }}</div>
        </div>
        <ArrowRightLeft class="w-5 h-5 text-emerald-600 mx-2" />
        <div class="text-center flex-1">
          <div class="text-xs text-gray-500">Empfehlung</div>
          <div class="font-mono text-sm">{{ item.alternative }}</div>
          <div class="font-mono text-sm text-green-600">{{ item.newPrice }}</div>
        </div>
      </div>
      <div class="text-center">
        <span class="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
          {{ item.savings }} sparen
        </span>
      </div>
      <button class="mt-3 w-full p-2 bg-emerald-600 text-white rounded-lg text-sm font-mono active:bg-emerald-700 ios-transition touch-target">
        Jetzt wechseln
      </button>
    </div>
  </div>
</template>
