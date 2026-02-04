<script setup lang="ts">
import { RefreshCw, Clock } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const syncHistory = ref([
  { time: '14:32', status: 'OK', changes: '+3 Umsätze' },
  { time: '12:00', status: 'OK', changes: '+1 Umsatz' },
  { time: '08:15', status: 'OK', changes: 'Keine' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Sync Status -->
    <div class="p-3 border-2 border-blue-300 bg-blue-50 rounded-lg flex items-center gap-3">
      <RefreshCw class="w-5 h-5 text-blue-600 animate-spin" />
      <div>
        <div class="font-mono text-sm font-bold text-blue-800">Sync aktiv</div>
        <div class="text-xs text-blue-600">Vor 2 Minuten</div>
      </div>
    </div>

    <!-- Sync History -->
    <div class="space-y-2">
      <div
        v-for="(entry, idx) in syncHistory"
        :key="idx"
        class="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between ios-card"
      >
        <div class="flex items-center gap-2">
          <Clock class="w-4 h-4 text-gray-400" />
          <span class="font-mono text-sm">{{ entry.time }}</span>
        </div>
        <div class="text-right">
          <span class="text-xs text-green-600">{{ entry.status }}</span>
          <div class="text-xs text-gray-500">{{ entry.changes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
