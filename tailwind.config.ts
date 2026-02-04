import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './stores/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  // Safelist für dynamisch verwendete Klassen (Section Colors)
  safelist: [
    // Blue (Smartbanking)
    'bg-blue-600', 'bg-blue-50', 'bg-blue-900',
    'border-blue-600', 'text-blue-600',
    // Purple (Analytics)
    'bg-purple-600', 'bg-purple-50', 'bg-purple-900',
    'border-purple-600', 'text-purple-600',
    // Emerald (Contracts) - III
    'bg-emerald-600', 'bg-emerald-50', 'bg-emerald-900',
    'border-emerald-600', 'text-emerald-600',
    // Amber (Savings)
    'bg-amber-600', 'bg-amber-50', 'bg-amber-900',
    'border-amber-600', 'text-amber-600',
    // Indigo (Depot) - V
    'bg-indigo-600', 'bg-indigo-50', 'bg-indigo-900',
    'border-indigo-600', 'text-indigo-600',
    // Active states
    'active:bg-blue-50', 'active:bg-purple-50', 'active:bg-emerald-50',
    'active:bg-amber-50', 'active:bg-indigo-50',
    'active:border-blue-600', 'active:border-purple-600', 'active:border-emerald-600',
    'active:border-amber-600', 'active:border-indigo-600',
  ],
  theme: {
    extend: {
      // Apple Human Interface Guidelines - System Fonts
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'SF Pro Display',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'SF Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      // iOS Safe Area spacing
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)'
      },
      // Apple HIG minimum touch target
      minHeight: {
        'touch': '44px',
        'touch-lg': '48px'
      },
      minWidth: {
        'touch': '44px',
        'touch-lg': '48px'
      },
      // iOS-style animations
      transitionTimingFunction: {
        'ios': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ios-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      },
      // Max width for mobile-first design
      maxWidth: {
        'mobile': '28rem', // 448px - matches original React app
        'app': '430px'     // iPhone 14 Pro Max width
      }
    }
  },
  plugins: []
} satisfies Config
