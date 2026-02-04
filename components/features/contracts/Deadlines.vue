<script setup lang="ts">
import { AlertTriangle, Calendar } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const deadlines = ref([
  { name: 'Vodafone Internet', deadline: '15.03.2026', notice: '3 Monate', urgent: true },
  { name: 'Haftpflicht', deadline: '01.06.2026', notice: '1 Monat', urgent: false },
  { name: 'Fitnessstudio', deadline: '31.12.2026', notice: '3 Monate', urgent: false },
  { name: 'Stromvertrag', deadline: '01.01.2027', notice: '6 Wochen', urgent: false }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Urgent Warning -->
    <div class="p-3 border-2 border-orange-300 bg-orange-50 rounded-lg flex items-center gap-2">
      <AlertTriangle class="w-5 h-5 text-orange-600" />
      <span class="font-mono text-sm text-orange-800">1 Vertrag bald kündbar</span>
    </div>

    <!-- Deadlines List -->
    <div
      v-for="item in deadlines"
      :key="item.name"
      class="p-3 border-2 bg-white rounded-lg ios-card"
      :class="item.urgent ? 'border-orange-400' : 'border-gray-300'"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-sm font-bold">{{ item.name }}</span>
        <span
          v-if="item.urgent"
          class="text-xs px-2 py-1 rounded bg-orange-100 text-orange-700"
        >
          Bald!
        </span>
      </div>
      <div class="flex items-center justify-between text-xs text-gray-500">
        <div class="flex items-center gap-1">
          <Calendar class="w-3 h-3" />
          <span>{{ item.deadline }}</span>
        </div>
        <span>Kündigungsfrist: {{ item.notice }}</span>
      </div>
    </div>
  </div>
</template>
