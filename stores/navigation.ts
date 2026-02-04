import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  // State
  const activeSection = ref<string | null>(null)
  const selectedSubSection = ref<string | null>(null)
  const selectedFeature = ref<string | null>(null)
  const menuOpen = ref(false)

  // Actions
  function setActiveSection(sectionId: string | null) {
    activeSection.value = sectionId
    selectedSubSection.value = null
    selectedFeature.value = null
  }

  function setSelectedSubSection(subSectionId: string | null) {
    selectedSubSection.value = selectedSubSection.value === subSectionId ? null : subSectionId
    selectedFeature.value = null
  }

  function setSelectedFeature(featureId: string | null) {
    selectedFeature.value = featureId
  }

  function toggleMenu() {
    menuOpen.value = !menuOpen.value
  }

  function closeMenu() {
    menuOpen.value = false
  }

  function openMenu() {
    menuOpen.value = true
  }

  function goBack() {
    if (selectedFeature.value) {
      selectedFeature.value = null
    } else if (selectedSubSection.value) {
      selectedSubSection.value = null
    } else if (activeSection.value) {
      activeSection.value = null
    }
  }

  function goHome() {
    activeSection.value = null
    selectedSubSection.value = null
    selectedFeature.value = null
    menuOpen.value = false
  }

  function navigateToSection(sectionId: string) {
    setActiveSection(sectionId)
    closeMenu()
  }

  return {
    // State
    activeSection,
    selectedSubSection,
    selectedFeature,
    menuOpen,
    // Actions
    setActiveSection,
    setSelectedSubSection,
    setSelectedFeature,
    toggleMenu,
    closeMenu,
    openMenu,
    goBack,
    goHome,
    navigateToSection
  }
})
