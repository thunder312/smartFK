<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { useNavigationStore } from '~/stores/navigation'
import { useSectionsStore } from '~/stores/sections'
import { useHaptics } from '~/composables/useHaptics'

const navigation = useNavigationStore()
const sections = useSectionsStore()
const haptics = useHaptics()

function handleClose() {
  haptics.impact('light')
  navigation.closeMenu()
}

function handleSectionClick(sectionId: string) {
  haptics.impact('medium')
  navigation.navigateToSection(sectionId)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="menu">
      <div
        v-if="navigation.menuOpen"
        class="fixed inset-0 z-50"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-sm"
          @click="handleClose"
        />

        <!-- Menu Panel -->
        <Transition name="slide">
          <div
            v-if="navigation.menuOpen"
            class="absolute left-0 top-0 bottom-0 w-72 bg-white overflow-y-auto safe-area-inset"
          >
            <!-- Header -->
            <div class="p-4 bg-gray-900 text-white flex items-center justify-between safe-area-top">
              <h2 class="font-mono font-bold">Kernfunktionen</h2>
              <button
                class="p-2 touch-target flex items-center justify-center active:bg-white/20 rounded ios-transition"
                @click="handleClose"
              >
                <X class="w-5 h-5" />
              </button>
            </div>

            <!-- Navigation Items -->
            <nav class="p-2">
              <button
                v-for="(section, index) in sections.mainSections"
                :key="section.id"
                class="w-full px-4 py-3 text-left rounded-lg min-h-[56px] flex items-center gap-3 mb-1 ios-transition"
                :class="
                  navigation.activeSection === section.id
                    ? `${sections.sectionColors[section.id].bg} text-white`
                    : `active:${sections.sectionColors[section.id].light} border-l-4 ${sections.sectionColors[section.id].border}`
                "
                @click="handleSectionClick(section.id)"
              >
                <!-- Roman Numeral Badge -->
                <div
                  class="w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-sm flex-shrink-0"
                  :class="
                    navigation.activeSection === section.id
                      ? 'bg-white/20'
                      : `${sections.sectionColors[section.id].light} ${sections.sectionColors[section.id].text}`
                  "
                >
                  {{ sections.toRoman(index + 1) }}
                </div>

                <!-- Section Info -->
                <div>
                  <div class="font-mono text-sm">{{ section.title }}</div>
                  <div
                    class="text-xs"
                    :class="navigation.activeSection === section.id ? 'text-white/70' : 'text-gray-500'"
                  >
                    {{ section.description }}
                  </div>
                </div>
              </button>
            </nav>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Menu fade transition */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

/* Slide panel transition */
.slide-enter-active {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-leave-active {
  transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
