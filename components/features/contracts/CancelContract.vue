<script setup lang="ts">
import { FileText, Send, CheckCircle2 } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const contracts = ref([
  { name: 'Vodafone Internet', cancellable: true, deadline: '15.03.2026' },
  { name: 'Netflix', cancellable: true, deadline: 'Jederzeit' },
  { name: 'Fitnessstudio', cancellable: false, deadline: 'Erst ab 01.10.2026' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Info -->
    <div class="p-3 border-2 border-emerald-300 bg-emerald-50 rounded-lg">
      <div class="flex items-center gap-2 text-emerald-700">
        <FileText class="w-5 h-5" />
        <span class="font-mono text-sm">Kündigung mit einem Klick</span>
      </div>
    </div>

    <!-- Cancellable Contracts -->
    <div
      v-for="contract in contracts"
      :key="contract.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-sm font-bold">{{ contract.name }}</span>
        <span
          class="text-xs px-2 py-1 rounded"
          :class="contract.cancellable ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'"
        >
          {{ contract.cancellable ? 'Kündbar' : 'Noch nicht' }}
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-500">Frist: {{ contract.deadline }}</span>
        <button
          v-if="contract.cancellable"
          class="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded text-xs active:bg-red-200 ios-transition"
        >
          <Send class="w-3 h-3" />
          Kündigen
        </button>
      </div>
    </div>
  </div>
</template>
