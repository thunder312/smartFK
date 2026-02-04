<script setup lang="ts">
import { Search, ShoppingCart } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const searchQuery = ref('')

const suggestions = ref([
  { name: 'MSCI World ETF', isin: 'IE00B4L5Y983', price: '78,50 €' },
  { name: 'S&P 500 ETF', isin: 'IE00B5BMR087', price: '485,20 €' },
  { name: 'DAX ETF', isin: 'DE0005933931', price: '142,30 €' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Search -->
    <div class="relative">
      <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Wertpapier suchen..."
        class="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg font-mono text-sm focus:border-indigo-600 focus:outline-none"
      >
    </div>

    <!-- Suggestions -->
    <div class="p-3 border-2 border-indigo-300 bg-indigo-50 rounded-lg">
      <div class="font-mono text-xs text-indigo-700 mb-2">Beliebte Wertpapiere</div>
    </div>

    <div
      v-for="item in suggestions"
      :key="item.isin"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <div>
          <div class="font-mono text-sm font-bold">{{ item.name }}</div>
          <div class="text-xs text-gray-500">{{ item.isin }}</div>
        </div>
        <span class="font-mono text-sm">{{ item.price }}</span>
      </div>
      <button class="w-full p-2 bg-indigo-600 text-white rounded-lg text-sm font-mono flex items-center justify-center gap-2 active:bg-indigo-700 ios-transition touch-target">
        <ShoppingCart class="w-4 h-4" />
        Kaufen
      </button>
    </div>
  </div>
</template>
