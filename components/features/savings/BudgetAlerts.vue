<script setup lang="ts">
import { Bell, AlertTriangle, CheckCircle2 } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const alerts = ref([
  { category: 'Restaurant', type: 'warning', message: '80% des Budgets erreicht', date: 'Heute' },
  { category: 'Shopping', type: 'danger', message: 'Budget überschritten!', date: 'Gestern' },
  { category: 'Lebensmittel', type: 'success', message: 'Im Rahmen geblieben', date: '01.02.2026' }
])

const alertStyles = {
  warning: { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-700', icon: AlertTriangle },
  danger: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-700', icon: AlertTriangle },
  success: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', icon: CheckCircle2 }
}
</script>

<template>
  <div class="space-y-3">
    <!-- Alert Settings -->
    <div class="p-3 border-2 border-amber-300 bg-amber-50 rounded-lg flex items-center gap-2">
      <Bell class="w-5 h-5 text-amber-600" />
      <span class="font-mono text-sm text-amber-800">Benachrichtigungen aktiv</span>
    </div>

    <!-- Alert List -->
    <div
      v-for="alert in alerts"
      :key="`${alert.category}-${alert.date}`"
      class="p-3 border-2 rounded-lg"
      :class="[alertStyles[alert.type as keyof typeof alertStyles].bg, alertStyles[alert.type as keyof typeof alertStyles].border]"
    >
      <div class="flex items-center gap-2 mb-1">
        <component
          :is="alertStyles[alert.type as keyof typeof alertStyles].icon"
          class="w-4 h-4"
          :class="alertStyles[alert.type as keyof typeof alertStyles].text"
        />
        <span class="font-mono text-sm font-bold" :class="alertStyles[alert.type as keyof typeof alertStyles].text">
          {{ alert.category }}
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-xs" :class="alertStyles[alert.type as keyof typeof alertStyles].text">
          {{ alert.message }}
        </span>
        <span class="text-xs text-gray-500">{{ alert.date }}</span>
      </div>
    </div>
  </div>
</template>
