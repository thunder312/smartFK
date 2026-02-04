<script setup lang="ts">
import { Euro, Wallet, TrendingUp } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const totalBalance = '12.847,53 €'

const accounts = ref([
  { name: 'Sparkasse Girokonto', balance: '3.241,87 €', icon: Euro },
  { name: 'DKB Girokonto', balance: '1.892,16 €', icon: Euro },
  { name: 'Sparkasse Tagesgeld', balance: '5.000,00 €', icon: Wallet },
  { name: 'DKB Depot', balance: '2.713,50 €', icon: TrendingUp }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Total Balance Card -->
    <div class="p-4 border-2 border-gray-900 bg-gray-900 text-white rounded-lg">
      <div class="text-xs font-mono opacity-70">Gesamtvermögen</div>
      <div class="text-2xl font-mono mt-1">{{ totalBalance }}</div>
    </div>

    <!-- Account List -->
    <div class="space-y-2">
      <div
        v-for="account in accounts"
        :key="account.name"
        class="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between ios-card"
      >
        <div class="flex items-center gap-2">
          <component :is="account.icon" class="w-4 h-4 text-gray-500" />
          <span class="font-mono text-xs">{{ account.name }}</span>
        </div>
        <span class="font-mono text-sm font-bold">{{ account.balance }}</span>
      </div>
    </div>
  </div>
</template>
