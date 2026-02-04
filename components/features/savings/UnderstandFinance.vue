<script setup lang="ts">
import { BookOpen, Play, CheckCircle2 } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const lessons = ref([
  { title: 'Grundlagen: Was ist ein Budget?', duration: '3 Min', completed: true },
  { title: 'Schulden verstehen & abbauen', duration: '5 Min', completed: true },
  { title: 'Notgroschen aufbauen', duration: '4 Min', completed: false },
  { title: 'Altersvorsorge einfach erklärt', duration: '6 Min', completed: false },
  { title: 'Investieren für Anfänger', duration: '8 Min', completed: false }
])

const glossary = ref([
  { term: 'Liquidität', definition: 'Wie schnell Sie auf Ihr Geld zugreifen können' },
  { term: 'Rendite', definition: 'Der Gewinn aus einer Geldanlage in Prozent' },
  { term: 'Diversifikation', definition: 'Risiko streuen durch verschiedene Anlagen' }
])
</script>

<template>
  <div class="space-y-3">
    <!-- Progress -->
    <div class="p-3 border-2 border-amber-300 bg-amber-50 rounded-lg">
      <div class="flex items-center gap-2 text-amber-700">
        <BookOpen class="w-5 h-5" />
        <span class="font-mono text-sm font-bold">Finanzwissen</span>
      </div>
      <div class="text-xs text-amber-600 mt-1">2 von 5 Lektionen abgeschlossen</div>
    </div>

    <!-- Lessons -->
    <div class="space-y-2">
      <div
        v-for="lesson in lessons"
        :key="lesson.title"
        class="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center gap-3 ios-card"
      >
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center"
          :class="lesson.completed ? 'bg-green-100' : 'bg-amber-100'"
        >
          <component
            :is="lesson.completed ? CheckCircle2 : Play"
            class="w-4 h-4"
            :class="lesson.completed ? 'text-green-600' : 'text-amber-600'"
          />
        </div>
        <div class="flex-1">
          <div class="font-mono text-sm">{{ lesson.title }}</div>
          <div class="text-xs text-gray-500">{{ lesson.duration }}</div>
        </div>
      </div>
    </div>

    <!-- Glossary -->
    <div class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card">
      <div class="font-mono text-sm font-bold mb-3">Glossar</div>
      <div class="space-y-2">
        <div v-for="item in glossary" :key="item.term">
          <div class="font-mono text-xs text-amber-700">{{ item.term }}</div>
          <div class="text-xs text-gray-600">{{ item.definition }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
