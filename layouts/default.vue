<script setup lang="ts">
import { useNavigationStore } from '~/stores/navigation'

const navigation = useNavigationStore()
</script>

<template>
  <div class="min-h-screen min-h-dvh bg-gray-50">
    <!-- Mobile Menu Overlay -->
    <MobileMenu />

    <!-- Main Content -->
    <div class="max-w-mobile mx-auto bg-gray-50 min-h-screen min-h-dvh relative">
      <slot />
    </div>
  </div>
</template>
