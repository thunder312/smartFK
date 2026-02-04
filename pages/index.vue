<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { useNavigationStore } from '~/stores/navigation'
import { useSectionsStore } from '~/stores/sections'
import { useHaptics } from '~/composables/useHaptics'

const navigation = useNavigationStore()
const sections = useSectionsStore()
const haptics = useHaptics()

// Reset navigation state on home page
onMounted(() => {
  navigation.goHome()
})

function handleSectionClick(sectionId: string) {
  haptics.impact('medium')
  navigation.navigateToSection(sectionId)
  navigateTo(`/${sectionId}`)
}
</script>

<template>
  <div class="min-h-screen min-h-dvh bg-gray-50">
    <!-- Header -->
    <MobileHeader title="smartFK" subtitle="Ihre Finanzen im Überblick" />

    <!-- Main Content -->
    <main class="px-4 py-6 pb-8 safe-area-bottom">
      <h2 class="font-mono text-sm text-gray-600 mb-4">KERNFUNKTIONEN</h2>

      <div class="space-y-3">
        <button
          v-for="(section, index) in sections.mainSections"
          :key="section.id"
          class="w-full p-4 rounded-xl text-left ios-transition active:scale-[0.98]"
          :class="`${sections.sectionColors[section.id].light} border-2 ${sections.sectionColors[section.id].border}`"
          @click="handleSectionClick(section.id)"
        >
          <div class="flex items-center gap-4">
            <!-- Section Number Badge -->
            <div
              class="w-12 h-12 rounded-lg flex items-center justify-center"
              :class="sections.sectionColors[section.id].bg"
            >
              <span class="text-white font-mono font-bold text-lg">
                {{ sections.toRoman(index + 1) }}
              </span>
            </div>

            <!-- Section Info -->
            <div class="flex-1 min-w-0">
              <div
                class="font-mono text-base font-bold"
                :class="sections.sectionColors[section.id].text"
              >
                <span class="opacity-60 mr-2">{{ sections.toRoman(index + 1) }}</span>
                {{ section.title }}
              </div>
              <div class="text-sm text-gray-600">{{ section.description }}</div>
              <div class="text-xs text-gray-400 mt-1">
                {{ section.subSections.length }} Unterbereiche
              </div>
            </div>

            <!-- Arrow -->
            <ChevronRight
              class="w-5 h-5 flex-shrink-0"
              :class="sections.sectionColors[section.id].text"
            />
          </div>
        </button>
      </div>
    </main>
  </div>
</template>
