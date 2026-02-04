<script setup lang="ts">
import { Wifi, Smartphone, Tv, Shield, Zap } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const types = ref([
  { name: 'Internet & Telefon', icon: Wifi, count: 2, total: '59,98 €/Monat' },
  { name: 'Mobilfunk', icon: Smartphone, count: 2, total: '49,98 €/Monat' },
  { name: 'Streaming', icon: Tv, count: 4, total: '41,96 €/Monat' },
  { name: 'Versicherungen', icon: Shield, count: 3, total: '87,50 €/Monat' },
  { name: 'Strom & Gas', icon: Zap, count: 1, total: '95,00 €/Monat' }
])
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="type in types"
      :key="type.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center gap-3 ios-card"
    >
      <div class="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
        <component :is="type.icon" class="w-5 h-5 text-emerald-600" />
      </div>
      <div class="flex-1">
        <div class="font-mono text-sm font-bold">{{ type.name }}</div>
        <div class="text-xs text-gray-500">{{ type.count }} Verträge</div>
      </div>
      <span class="font-mono text-sm">{{ type.total }}</span>
    </div>
  </div>
</template>
