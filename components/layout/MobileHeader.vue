<script setup lang="ts">
import { Menu, ArrowLeft } from 'lucide-vue-next'
import { useNavigationStore } from '~/stores/navigation'
import { useSectionsStore } from '~/stores/sections'
import { useHaptics } from '~/composables/useHaptics'

interface Props {
  showBack?: boolean
  title?: string
  subtitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  showBack: false,
  title: 'smartFK',
  subtitle: ''
})

const router = useRouter()
const navigation = useNavigationStore()
const sections = useSectionsStore()
const haptics = useHaptics()

const colors = computed(() => {
  if (navigation.activeSection) {
    return sections.getColorsForSection(navigation.activeSection)
  }
  return null
})

function handleBackClick() {
  haptics.impact('light')
  // iOS HIG: Zurück-Button navigiert zur vorherigen Seite
  router.back()
}

function handleMenuClick() {
  haptics.impact('light')
  navigation.openMenu()
}
</script>

<template>
  <header
    class="sticky top-0 z-40 safe-area-top"
    :class="colors ? colors.bg : 'bg-gray-900'"
  >
    <div class="px-4 py-4 flex items-center gap-3 text-white">
      <!-- Back Button or Menu Button -->
      <button
        v-if="showBack"
        class="p-2 border-2 border-white/30 active:bg-white/20 touch-target flex items-center justify-center rounded ios-transition"
        @click="handleBackClick"
      >
        <ArrowLeft class="w-5 h-5" />
      </button>
      <button
        v-else
        class="p-2 border-2 border-white/30 active:bg-white/20 touch-target flex items-center justify-center rounded ios-transition"
        @click="handleMenuClick"
      >
        <Menu class="w-5 h-5" />
      </button>

      <!-- Title -->
      <div class="flex-1 min-w-0">
        <h1 class="text-lg font-mono font-bold truncate">{{ title }}</h1>
        <p v-if="subtitle" class="text-xs opacity-70 truncate">{{ subtitle }}</p>
      </div>
    </div>
  </header>
</template>
