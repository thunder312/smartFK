/**
 * iOS Haptic Feedback Composable
 * Provides haptic feedback for touch interactions following Apple HIG
 */
export function useHaptics() {
  const isSupported = ref(false)

  onMounted(() => {
    isSupported.value = 'vibrate' in navigator
  })

  /**
   * Trigger impact feedback
   * @param style - 'light' | 'medium' | 'heavy' - intensity of feedback
   */
  function impact(style: 'light' | 'medium' | 'heavy' = 'light') {
    if (!isSupported.value) return

    const duration = style === 'light' ? 10 : style === 'medium' ? 20 : 30
    navigator.vibrate(duration)
  }

  /**
   * Trigger selection feedback (very light tap)
   */
  function selection() {
    if (!isSupported.value) return
    navigator.vibrate(5)
  }

  /**
   * Trigger notification feedback
   * @param type - 'success' | 'warning' | 'error'
   */
  function notification(type: 'success' | 'warning' | 'error') {
    if (!isSupported.value) return

    switch (type) {
      case 'success':
        navigator.vibrate([10, 50, 10])
        break
      case 'warning':
        navigator.vibrate([20, 30, 20])
        break
      case 'error':
        navigator.vibrate([30, 50, 30, 50, 30])
        break
    }
  }

  return {
    isSupported,
    impact,
    selection,
    notification
  }
}
