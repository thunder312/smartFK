<script setup lang="ts">
import { Building2, ExternalLink } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const custodians = ref([
  { name: 'FNZ Bank', type: 'Depotführung', assets: '45.230,00 €', accounts: 2 },
  { name: 'DWS', type: 'Fondsverwahrung', assets: '12.500,00 €', accounts: 1 }
])

const totalAssets = '57.730,00 €'
</script>

<template>
  <div class="space-y-3">
    <!-- Total Assets -->
    <div class="p-4 border-2 border-indigo-600 bg-indigo-50 rounded-lg">
      <div class="text-xs font-mono text-indigo-700">Gesamtvermögen</div>
      <div class="text-2xl font-mono mt-1 text-indigo-800">{{ totalAssets }}</div>
    </div>

    <!-- Custodian List -->
    <div
      v-for="custodian in custodians"
      :key="custodian.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
          <Building2 class="w-5 h-5 text-indigo-600" />
        </div>
        <div class="flex-1">
          <div class="font-mono text-sm font-bold">{{ custodian.name }}</div>
          <div class="text-xs text-gray-500">{{ custodian.type }}</div>
        </div>
        <ExternalLink class="w-4 h-4 text-gray-400" />
      </div>
      <div class="mt-3 flex items-center justify-between border-t pt-2">
        <span class="text-xs text-gray-500">{{ custodian.accounts }} Depots</span>
        <span class="font-mono text-sm">{{ custodian.assets }}</span>
      </div>
    </div>
  </div>
</template>
