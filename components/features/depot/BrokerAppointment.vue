<script setup lang="ts">
import { Calendar, Clock, Video, Phone, MapPin } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const selectedType = ref<string | null>(null)

const appointmentTypes = ref([
  { id: 'video', name: 'Videoberatung', icon: Video, duration: '30-60 Min' },
  { id: 'phone', name: 'Telefonat', icon: Phone, duration: '15-30 Min' },
  { id: 'office', name: 'Vor Ort', icon: MapPin, duration: '60 Min' }
])

const availableSlots = ref([
  { date: 'Mo, 03.03.2026', time: '10:00 Uhr' },
  { date: 'Mo, 03.03.2026', time: '14:00 Uhr' },
  { date: 'Di, 04.03.2026', time: '11:00 Uhr' },
  { date: 'Mi, 05.03.2026', time: '09:00 Uhr' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Appointment Type -->
    <div class="p-3 border-2 border-indigo-300 bg-indigo-50 rounded-lg">
      <div class="font-mono text-xs text-indigo-700 mb-2">Beratungsart wählen</div>
      <div class="grid grid-cols-3 gap-2">
        <button
          v-for="type in appointmentTypes"
          :key="type.id"
          class="p-3 border-2 rounded-lg text-center ios-transition"
          :class="selectedType === type.id ? 'border-indigo-600 bg-indigo-100' : 'border-gray-200 bg-white'"
          @click="selectedType = type.id"
        >
          <component :is="type.icon" class="w-5 h-5 mx-auto mb-1" :class="selectedType === type.id ? 'text-indigo-600' : 'text-gray-500'" />
          <div class="text-xs font-mono">{{ type.name }}</div>
        </button>
      </div>
    </div>

    <!-- Available Slots -->
    <div v-if="selectedType" class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card">
      <div class="flex items-center gap-2 mb-3">
        <Calendar class="w-4 h-4 text-indigo-600" />
        <span class="font-mono text-sm font-bold">Verfügbare Termine</span>
      </div>

      <div class="space-y-2">
        <button
          v-for="slot in availableSlots"
          :key="`${slot.date}-${slot.time}`"
          class="w-full p-3 border border-gray-200 rounded-lg flex items-center justify-between active:bg-indigo-50 ios-transition"
        >
          <span class="text-sm">{{ slot.date }}</span>
          <div class="flex items-center gap-1 text-indigo-600">
            <Clock class="w-4 h-4" />
            <span class="font-mono text-sm">{{ slot.time }}</span>
          </div>
        </button>
      </div>
    </div>

    <!-- Placeholder if no type selected -->
    <div v-else class="p-4 text-center text-gray-500 text-sm">
      Bitte wählen Sie eine Beratungsart
    </div>
  </div>
</template>
