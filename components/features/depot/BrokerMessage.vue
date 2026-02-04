<script setup lang="ts">
import { Send, Paperclip } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const message = ref('')

const quickMessages = ref([
  'Rückruf erbeten',
  'Frage zur Depot-Performance',
  'Beratungstermin gewünscht',
  'Dokumente anfordern'
])
</script>

<template>
  <div class="space-y-3">
    <!-- Quick Messages -->
    <div class="p-3 border-2 border-indigo-300 bg-indigo-50 rounded-lg">
      <div class="font-mono text-xs text-indigo-700 mb-2">Schnellauswahl</div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="quick in quickMessages"
          :key="quick"
          class="text-xs px-3 py-1 bg-white border border-indigo-300 text-indigo-700 rounded-full active:bg-indigo-100 ios-transition"
          @click="message = quick"
        >
          {{ quick }}
        </button>
      </div>
    </div>

    <!-- Message Input -->
    <div class="p-3 border-2 border-gray-300 bg-white rounded-lg ios-card">
      <textarea
        v-model="message"
        placeholder="Ihre Nachricht..."
        rows="4"
        class="w-full border-0 resize-none focus:outline-none font-mono text-sm"
      />

      <div class="flex items-center justify-between mt-2 pt-2 border-t">
        <button class="p-2 text-gray-500 active:bg-gray-100 rounded ios-transition touch-target">
          <Paperclip class="w-5 h-5" />
        </button>
        <button class="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-mono active:bg-indigo-700 ios-transition touch-target">
          <Send class="w-4 h-4" />
          Senden
        </button>
      </div>
    </div>
  </div>
</template>
