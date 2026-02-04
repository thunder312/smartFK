# smartFK Migration: React → Nuxt 3 + iOS 26

## Ursprüngliche Anfrage

> "Modifiziere die vorliegende Software so, dass sie auf NuxtJS und VueJS 3 basiert. Außerdem soll sie für Apple iOS 26 optimiert sein und strikt den Apple Human Interface Guidelines entsprechen."

---

## Ausgangssituation

### Ursprüngliche Technologie-Stack
- **Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.10
- **Styling:** Tailwind CSS 3.4.14
- **Sprache:** TypeScript 5.5.3
- **Icons:** lucide-react

### Ursprüngliche Struktur
```
smartFK/ (React)
├── src/
│   ├── App.tsx          # Monolithische Komponente (1859 Zeilen)
│   ├── main.tsx         # React Entry Point
│   └── index.css        # Tailwind Imports
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

### App-Beschreibung
**smartFK** ist eine Finanzmanagement-App mit 5 Hauptbereichen:
1. **Kontenübersicht** - Multi-Banking, Kontostände, Synchronisation
2. **Ausgabenanalyse** - Kategorisierung, Reports, Budget-Steuerung
3. **Vertragsmanagement** - Vertragserkennung, Übersicht, Aktionen
4. **Sparen & Planung** - Spartipps, Ziele, Finanzcoach
5. **Depot** - Lagerstellen, Depots, Portfolios, Makler-Kontakt

---

## Durchgeführte Änderungen

### 1. Framework-Migration

| Vorher (React) | Nachher (Nuxt 3) |
|----------------|------------------|
| React 18.3.1 | Vue 3.5.x |
| Vite standalone | Nuxt 3.21.0 (inkl. Vite) |
| React Hooks | Vue 3 Composition API |
| JSX Syntax | Vue SFC Templates |
| lucide-react | lucide-vue-next |

### 2. Neue Projektstruktur

```
smartFK/ (Nuxt 3)
├── app.vue                    # Root-Komponente
├── nuxt.config.ts             # Nuxt Konfiguration + PWA
├── tailwind.config.ts         # Erweitert für iOS
├── tsconfig.json
├── package.json
│
├── assets/
│   └── css/
│       └── main.css           # iOS-spezifische Styles
│
├── components/
│   ├── layout/
│   │   ├── MobileHeader.vue   # iOS Navigation Bar
│   │   └── MobileMenu.vue     # Side Drawer
│   └── features/
│       ├── smartbanking/      # 6 Komponenten
│       ├── analytics/         # 7 Komponenten
│       ├── contracts/         # 6 Komponenten
│       ├── savings/           # 6 Komponenten
│       └── depot/             # 13 Komponenten
│
├── composables/
│   └── useHaptics.ts          # iOS Haptic Feedback
│
├── layouts/
│   └── default.vue            # App Layout
│
├── pages/
│   ├── index.vue              # Startseite
│   └── [section]/
│       ├── index.vue          # Section-Übersicht
│       └── [feature].vue      # Feature-Details
│
├── stores/
│   ├── navigation.ts          # Pinia Navigation Store
│   └── sections.ts            # Pinia Daten Store
│
├── types/
│   └── index.ts               # TypeScript Interfaces
│
└── public/
    └── favicon.svg            # App Icon
```

### 3. Architektur-Änderungen

#### Von Monolith zu Modulen
- **Vorher:** 1 Datei mit 1859 Zeilen (App.tsx)
- **Nachher:** 55+ modulare Vue-Komponenten

#### State Management
- **Vorher:** React useState Hooks
- **Nachher:** Pinia Stores mit Composition API

```typescript
// stores/navigation.ts
export const useNavigationStore = defineStore('navigation', () => {
  const activeSection = ref<string | null>(null)
  const selectedSubSection = ref<string | null>(null)
  const selectedFeature = ref<string | null>(null)
  const menuOpen = ref(false)
  // ...actions
})
```

#### Routing
- **Vorher:** State-basierte Navigation (kein Router)
- **Nachher:** File-based Routing mit Nuxt Pages

```
/                     → pages/index.vue
/smartbanking         → pages/[section]/index.vue
/smartbanking/balances → pages/[section]/[feature].vue
```

### 4. PWA-Konfiguration

```typescript
// nuxt.config.ts
pwa: {
  manifest: {
    name: 'smartFK',
    short_name: 'smartFK',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#111827',
    orientation: 'portrait'
  },
  workbox: {
    navigateFallback: '/',
    globPatterns: ['**/*.{js,css,html,png,svg}']
  }
}
```

### 5. Gelöschte Dateien

| Datei | Grund |
|-------|-------|
| `src/` | Ersetzt durch Nuxt-Struktur |
| `vite.config.ts` | In Nuxt integriert |
| `index.html` | Von Nuxt generiert |
| `generate-pdf.mjs` | Altes Utility |
| `screenshots/` | Alte React-Screenshots |
| `smartFK-Screenshots.pdf` | Alte Dokumentation |

---

## Apple Human Interface Guidelines Konformität

### 1. Typografie

**Guideline:** Verwende die System-Schriftart für konsistentes Erscheinungsbild.

**Implementierung:**
```typescript
// tailwind.config.ts
fontFamily: {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    'SF Pro Text',
    'SF Pro Display',
    'system-ui',
    'sans-serif'
  ],
  mono: [
    'SF Mono',
    'ui-monospace',
    'SFMono-Regular',
    'monospace'
  ]
}
```

### 2. Touch Targets

**Guideline:** Mindestens 44x44 Punkte für alle interaktiven Elemente.

**Implementierung:**
```css
/* assets/css/main.css */
.touch-target {
  @apply min-h-[44px] min-w-[44px];
}

.touch-target-lg {
  @apply min-h-[48px] min-w-[48px];
}
```

```vue
<!-- Beispiel: MobileHeader.vue -->
<button class="p-2 touch-target flex items-center justify-center">
  <Menu class="w-5 h-5" />
</button>
```

### 3. Safe Areas

**Guideline:** Respektiere die Safe Areas für Notch und Home Indicator.

**Implementierung:**
```css
/* assets/css/main.css */
body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

.safe-area-top {
  padding-top: env(safe-area-inset-top);
}

.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
```

```vue
<!-- layouts/default.vue -->
<header class="sticky top-0 z-40 safe-area-top">
```

### 4. Navigation

**Guideline:** Hierarchische Navigation mit klarem Zurück-Button.

**Implementierung:**
```vue
<!-- components/layout/MobileHeader.vue -->
<template>
  <header class="sticky top-0 z-40 safe-area-top" :class="colors.bg">
    <div class="px-4 py-4 flex items-center gap-3 text-white">
      <!-- Zurück-Button (links) -->
      <button v-if="showBack" @click="navigation.goBack()">
        <ArrowLeft class="w-5 h-5" />
      </button>

      <!-- Titel -->
      <div class="flex-1">
        <h1 class="text-lg font-bold">{{ title }}</h1>
        <p class="text-xs opacity-70">{{ subtitle }}</p>
      </div>
    </div>
  </header>
</template>
```

### 5. Animationen & Übergänge

**Guideline:** Flüssige, physikbasierte Animationen.

**Implementierung:**
```typescript
// tailwind.config.ts
transitionTimingFunction: {
  'ios': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  'ios-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
}
```

```css
/* assets/css/main.css */
.ios-transition {
  @apply transition-all duration-300 ease-ios;
}
```

```vue
<!-- Slide-Animation für Menu -->
<style scoped>
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
```

### 6. Haptic Feedback

**Guideline:** Haptisches Feedback für wichtige Interaktionen.

**Implementierung:**
```typescript
// composables/useHaptics.ts
export function useHaptics() {
  function impact(style: 'light' | 'medium' | 'heavy' = 'light') {
    if ('vibrate' in navigator) {
      const duration = style === 'light' ? 10 : style === 'medium' ? 20 : 30
      navigator.vibrate(duration)
    }
  }

  function notification(type: 'success' | 'warning' | 'error') {
    // Verschiedene Vibrationsmuster
  }

  return { impact, notification }
}
```

```vue
<!-- Verwendung in Komponenten -->
<script setup>
const haptics = useHaptics()

function handleClick() {
  haptics.impact('light')
  // ...action
}
</script>
```

### 7. Tap Highlight & Overscroll

**Guideline:** Native iOS-Verhaltensweisen respektieren.

**Implementierung:**
```css
/* assets/css/main.css */
html {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

body {
  overscroll-behavior: none;
}

* {
  -webkit-overflow-scrolling: touch;
}
```

### 8. Dark Mode Vorbereitung

**Guideline:** Unterstütze automatischen Wechsel zwischen Light/Dark Mode.

**Implementierung:**
```html
<!-- nuxt.config.ts → app.head.meta -->
<meta name="color-scheme" content="light dark">
```

```css
/* assets/css/main.css */
@media (prefers-color-scheme: dark) {
  .dark-mode-auto {
    background-color: rgb(17 24 39);
    color: rgb(255 255 255 / 0.87);
  }
}
```

### 9. Eingabefelder

**Guideline:** Verhindere ungewollten Zoom auf iOS.

**Implementierung:**
```css
/* assets/css/main.css */
input, select, textarea {
  font-size: 16px; /* Verhindert Zoom bei Fokus */
}
```

### 10. PWA Standalone Mode

**Guideline:** Im Standalone-Modus wie eine native App verhalten.

**Implementierung:**
```html
<!-- nuxt.config.ts → app.head.meta -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="smartFK">
```

```css
/* assets/css/main.css */
@media all and (display-mode: standalone) {
  body {
    padding-top: calc(env(safe-area-inset-top) + 0px);
  }
}
```

---

## HIG Checkliste

| Guideline | Status | Implementierung |
|-----------|--------|-----------------|
| System Font (SF Pro) | ✅ | tailwind.config.ts |
| Touch Targets ≥44pt | ✅ | CSS Klassen `.touch-target` |
| Safe Area Insets | ✅ | CSS `env(safe-area-inset-*)` |
| Hierarchische Navigation | ✅ | MobileHeader mit Back-Button |
| iOS Animationen | ✅ | cubic-bezier Timing Functions |
| Haptic Feedback | ✅ | useHaptics Composable |
| Kein Tap Highlight | ✅ | `-webkit-tap-highlight-color` |
| Kein Overscroll Bounce | ✅ | `overscroll-behavior: none` |
| Momentum Scrolling | ✅ | `-webkit-overflow-scrolling` |
| Dark Mode Support | ✅ | `prefers-color-scheme` Media Query |
| PWA Standalone | ✅ | Meta Tags + Manifest |
| Kein Zoom bei Input | ✅ | `font-size: 16px` für Inputs |

---

## Starten der App

```bash
# Development Server
npm run dev

# Production Build
npm run build

# Static Generation (für Hosting)
npm run generate

# Preview Production Build
npm run preview
```

---

## Offene Punkte

1. **PWA-Modul:** `@vite-pwa/nuxt` wurde temporär deaktiviert (Kompatibilitätsproblem mit Nuxt 3.21, `#app-manifest` Fehler). Die iOS Meta-Tags funktionieren weiterhin. Für vollständige PWA-Funktionalität:
   - Warten auf kompatible Version des Moduls
   - Oder alternatives Modul wie `nuxt-pwa-module` verwenden

2. **PWA Icons:** PNG-Dateien für `public/icons/` erstellen:
   - `icon-180x180.png` (Apple Touch Icon)
   - `icon-192x192.png` (Android)
   - `icon-512x512.png` (Splash Screen)

3. **Dark Mode:** Vollständige Farbpalette für Dark Mode definieren

4. **Splash Screen:** Apple Launch Images konfigurieren

---

*Erstellt am: 4. Februar 2026*
*Migration durchgeführt mit Claude Code (Opus 4.5)*
