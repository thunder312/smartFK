<script setup lang="ts">
import { Target, Plus } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const goals = ref([
  { name: 'Urlaub 2026', target: 2000, saved: 1250, deadline: 'Juni 2026' },
  { name: 'Notgroschen', target: 5000, saved: 3800, deadline: 'Dezember 2026' },
  { name: 'Neues Laptop', target: 1500, saved: 450, deadline: 'September 2026' }
])

const getProgress = (saved: number, target: number) => (saved / target) * 100
</script>

<template>
  <div class="space-y-3">
    <!-- Goals List -->
    <div
      v-for="goal in goals"
      :key="goal.name"
      class="p-4 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2">
          <Target class="w-4 h-4 text-amber-600" />
          <span class="font-mono text-sm font-bold">{{ goal.name }}</span>
        </div>
        <span class="text-xs text-gray-500">Bis {{ goal.deadline }}</span>
      </div>

      <!-- Progress Bar -->
      <div class="h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          class="h-full bg-amber-500 rounded-full transition-all duration-300"
          :style="{ width: `${getProgress(goal.saved, goal.target)}%` }"
        />
      </div>

      <div class="flex items-center justify-between text-sm">
        <span class="font-mono text-amber-700">{{ goal.saved.toLocaleString('de-DE') }} €</span>
        <span class="text-gray-500">von {{ goal.target.toLocaleString('de-DE') }} €</span>
      </div>
    </div>

    <!-- Add Goal Button -->
    <button class="w-full p-3 border-2 border-dashed border-amber-400 text-amber-600 active:bg-amber-50 flex items-center justify-center gap-2 rounded-lg touch-target ios-transition">
      <Plus class="w-5 h-5" />
      <span class="font-mono text-sm">Neues Sparziel</span>
    </button>
  </div>
</template>
