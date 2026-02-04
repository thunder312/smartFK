<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { useNavigationStore } from '~/stores/navigation'
import { useSectionsStore } from '~/stores/sections'
import { useHaptics } from '~/composables/useHaptics'

const route = useRoute()
const navigation = useNavigationStore()
const sections = useSectionsStore()
const haptics = useHaptics()

// Get current section from route
const sectionId = computed(() => route.params.section as string)
const currentSection = computed(() => sections.getSectionById(sectionId.value))
const colors = computed(() => sections.getColorsForSection(sectionId.value))
const sectionIndex = computed(() => sections.getSectionIndex(sectionId.value))
const sectionRoman = computed(() => sections.toRoman(sectionIndex.value))

// Set active section in store
watch(sectionId, (id) => {
  navigation.setActiveSection(id)
}, { immediate: true })

// Redirect if section not found
onMounted(() => {
  if (!currentSection.value) {
    navigateTo('/')
  }
})

function handleSubSectionClick(subSectionId: string) {
  haptics.impact('light')
  navigation.setSelectedSubSection(subSectionId)
}

function handleFeatureClick(featureId: string) {
  haptics.impact('medium')
  navigation.setSelectedFeature(featureId)
  navigateTo(`/${sectionId.value}/${featureId}`)
}
</script>

<template>
  <div v-if="currentSection && colors" class="min-h-screen min-h-dvh bg-gray-50">
    <!-- Header -->
    <MobileHeader
      show-back
      :title="currentSection.title"
      :subtitle="currentSection.description"
    />

    <!-- Main Content -->
    <main class="px-4 py-4 pb-8 safe-area-bottom">
      <div class="space-y-3">
        <!-- Section Title -->
        <div :class="`border-b-2 ${colors.border} pb-2 mb-3`">
          <h2 :class="`font-mono text-sm ${colors.text}`">
            UNTERBEREICHE ({{ sectionRoman }})
          </h2>
        </div>

        <!-- SubSections -->
        <div v-for="(subSection, subIndex) in currentSection.subSections" :key="subSection.id">
          <!-- SubSection Button -->
          <button
            class="w-full p-3 border-2 text-left ios-transition rounded-lg min-h-[56px]"
            :class="
              navigation.selectedSubSection === subSection.id
                ? `${colors.bg} text-white ${colors.border}`
                : `bg-white border-gray-300 active:${colors.border} active:${colors.light}`
            "
            @click="handleSubSectionClick(subSection.id)"
          >
            <div class="flex items-start gap-2">
              <!-- SubSection Number -->
              <div
                class="w-8 h-8 rounded flex items-center justify-center font-mono text-xs font-bold flex-shrink-0"
                :class="
                  navigation.selectedSubSection === subSection.id
                    ? 'bg-white/20 text-white'
                    : `${colors.light} ${colors.text}`
                "
              >
                {{ sectionRoman }}.{{ subIndex + 1 }}
              </div>

              <!-- Icon -->
              <component
                :is="subSection.icon"
                class="w-5 h-5 flex-shrink-0 mt-1"
                :class="navigation.selectedSubSection !== subSection.id ? colors.text : ''"
              />

              <!-- SubSection Info -->
              <div class="flex-1 min-w-0">
                <div class="font-mono text-sm">{{ subSection.title }}</div>
                <div class="text-xs opacity-70">{{ subSection.description }}</div>
              </div>

              <!-- Arrow -->
              <ChevronRight
                class="w-4 h-4 flex-shrink-0 ios-transition"
                :class="navigation.selectedSubSection === subSection.id ? 'rotate-90' : ''"
              />
            </div>
          </button>

          <!-- Features List (Expanded) -->
          <Transition name="expand">
            <div
              v-if="navigation.selectedSubSection === subSection.id"
              class="ml-4 mt-2 mb-2 space-y-2"
            >
              <h4 :class="`font-mono text-xs ${colors.text} mb-2`">
                FUNKTIONEN ({{ sectionRoman }}.{{ subIndex + 1 }})
              </h4>

              <button
                v-for="(feature, featureIndex) in subSection.features"
                :key="feature.id"
                :class="`w-full p-3 border-2 ${colors.border} ${colors.light} active:opacity-80 ios-transition text-left rounded-lg min-h-[48px]`"
                @click="handleFeatureClick(feature.id)"
              >
                <div class="flex items-center gap-2">
                  <!-- Feature Number -->
                  <div
                    :class="`min-w-[40px] h-6 px-1 rounded border-2 ${colors.border} bg-white flex items-center justify-center font-mono text-xs flex-shrink-0 ${colors.text}`"
                  >
                    {{ sectionRoman }}.{{ subIndex + 1 }}.{{ sections.toLetter(featureIndex + 1) }}
                  </div>

                  <!-- Feature Title -->
                  <p class="font-mono text-xs flex-1 text-gray-800">
                    {{ feature.title }}
                  </p>

                  <!-- Arrow -->
                  <ChevronRight :class="`w-4 h-4 ${colors.text} flex-shrink-0`" />
                </div>
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
