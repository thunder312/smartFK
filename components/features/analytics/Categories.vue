<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const categories = ref([
  { name: 'Lebensmittel', color: 'bg-green-500', count: 45 },
  { name: 'Mobilität', color: 'bg-blue-500', count: 12 },
  { name: 'Freizeit', color: 'bg-purple-500', count: 23 },
  { name: 'Wohnen', color: 'bg-orange-500', count: 8 },
  { name: 'Gesundheit', color: 'bg-red-500', count: 5 }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Category List -->
    <div
      v-for="cat in categories"
      :key="cat.name"
      class="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center gap-3 ios-card"
    >
      <div :class="`w-4 h-4 rounded-full ${cat.color}`" />
      <span class="font-mono text-sm flex-1">{{ cat.name }}</span>
      <span class="text-xs text-gray-500">{{ cat.count }} Transaktionen</span>
    </div>

    <!-- Add Category Button -->
    <button
      class="w-full p-3 border-2 border-dashed border-purple-400 text-purple-600 active:bg-purple-50 flex items-center justify-center gap-2 rounded-lg touch-target ios-transition"
    >
      <Plus class="w-5 h-5" />
      <span class="font-mono text-sm">Kategorie hinzufügen</span>
    </button>
  </div>
</template>
