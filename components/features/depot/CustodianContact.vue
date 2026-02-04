<script setup lang="ts">
import { Phone, Mail, Globe } from 'lucide-vue-next'
import type { SectionColors } from '~/types'

defineProps<{
  colors: SectionColors
}>()

const contacts = ref([
  {
    name: 'FNZ Bank',
    phone: '+49 69 123456',
    email: 'service@fnz.de',
    website: 'www.fnz.de'
  },
  {
    name: 'DWS',
    phone: '+49 69 789012',
    email: 'kundenservice@dws.de',
    website: 'www.dws.de'
  }
])
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="contact in contacts"
      :key="contact.name"
      class="p-4 border-2 border-gray-300 bg-white rounded-lg ios-card"
    >
      <div class="font-mono text-sm font-bold mb-3">{{ contact.name }}</div>

      <div class="space-y-2">
        <a
          :href="`tel:${contact.phone}`"
          class="flex items-center gap-3 p-2 rounded-lg active:bg-indigo-50 ios-transition"
        >
          <Phone class="w-4 h-4 text-indigo-600" />
          <span class="text-sm">{{ contact.phone }}</span>
        </a>

        <a
          :href="`mailto:${contact.email}`"
          class="flex items-center gap-3 p-2 rounded-lg active:bg-indigo-50 ios-transition"
        >
          <Mail class="w-4 h-4 text-indigo-600" />
          <span class="text-sm">{{ contact.email }}</span>
        </a>

        <a
          :href="`https://${contact.website}`"
          target="_blank"
          class="flex items-center gap-3 p-2 rounded-lg active:bg-indigo-50 ios-transition"
        >
          <Globe class="w-4 h-4 text-indigo-600" />
          <span class="text-sm">{{ contact.website }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
