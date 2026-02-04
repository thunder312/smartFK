<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const banks = ref([
  { name: 'Sparkasse', status: 'verbunden', connected: true },
  { name: 'DKB', status: 'verbunden', connected: true },
  { name: 'ING', status: 'nicht verbunden', connected: false },
  { name: 'Commerzbank', status: 'nicht verbunden', connected: false }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Bank List -->
    <div class="grid grid-cols-1 gap-3">
      <div
        v-for="bank in banks"
        :key="bank.name"
        class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
      >
        <div class="flex items-center justify-between">
          <span class="font-mono text-sm">{{ bank.name }}</span>
          <span
            class="text-xs px-2 py-1 rounded"
            :class="bank.connected ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'"
          >
            {{ bank.status }}
          </span>
        </div>
      </div>
    </div>

    <!-- Add Bank Button -->
    <button
      class="w-full p-4 border-2 border-dashed border-purple-400 text-purple-600 active:bg-purple-50 flex items-center justify-center gap-2 rounded-lg touch-target ios-transition"
    >
      <Plus class="w-5 h-5" />
      <span class="font-mono text-sm">Neue Bank hinzufügen</span>
    </button>
  </div>
</template>
