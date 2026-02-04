<script setup lang="ts">
import { Brain, CheckCircle2, Circle } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const habits = ref([
  { name: '7 Tage unter Budget bleiben', progress: 5, total: 7, completed: false },
  { name: 'Keine Impulskäufe diese Woche', progress: 3, total: 7, completed: false },
  { name: '100€ gespart', progress: 100, total: 100, completed: true },
  { name: 'Alle Rechnungen pünktlich bezahlt', progress: 3, total: 3, completed: true }
])

const tips = ref([
  'Warten Sie 24 Stunden vor größeren Käufen',
  'Nutzen Sie Cashback-Programme beim Einkaufen',
  'Prüfen Sie wöchentlich Ihre Ausgaben'
])
</script>

<template>
  <div class="space-y-3">
    <!-- Coach Header -->
    <div class="p-3 border-2 border-amber-300 bg-amber-50 rounded-lg flex items-center gap-2">
      <Brain class="w-5 h-5 text-amber-600" />
      <div>
        <div class="font-mono text-sm font-bold text-amber-800">Ihre Gewohnheiten</div>
        <div class="text-xs text-amber-600">2 von 4 Zielen erreicht</div>
      </div>
    </div>

    <!-- Habits -->
    <div
      v-for="habit in habits"
      :key="habit.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="flex items-center gap-2 mb-2">
        <component
          :is="habit.completed ? CheckCircle2 : Circle"
          class="w-4 h-4"
          :class="habit.completed ? 'text-green-500' : 'text-gray-300'"
        />
        <span class="font-mono text-sm" :class="habit.completed ? 'text-green-700' : ''">
          {{ habit.name }}
        </span>
      </div>
      <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-300"
          :class="habit.completed ? 'bg-green-500' : 'bg-amber-500'"
          :style="{ width: `${(habit.progress / habit.total) * 100}%` }"
        />
      </div>
    </div>

    <!-- Tips Section -->
    <div class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card">
      <div class="font-mono text-sm font-bold mb-2">Tipps für Sie</div>
      <ul class="space-y-2">
        <li v-for="tip in tips" :key="tip" class="text-xs text-gray-600 flex items-start gap-2">
          <span class="text-amber-500">•</span>
          {{ tip }}
        </li>
      </ul>
    </div>
  </div>
</template>
