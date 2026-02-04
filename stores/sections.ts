import { defineStore } from 'pinia'
import {
  TrendingUp, Building2, Repeat, RefreshCw, PieChart, Tags, BarChart3, Target,
  FileText, FileCheck, Receipt, Scissors, PiggyBank, Lightbulb, Goal, Brain,
  Briefcase, Landmark, Building, Layers, User
} from 'lucide-vue-next'
import type { MainSection, SectionColorMap, FeaturePageContent } from '~/types'

export const useSectionsStore = defineStore('sections', () => {
  // Color scheme for each main section
  const sectionColors: SectionColorMap = {
    smartbanking: {
      primary: 'bg-blue-600',
      light: 'bg-blue-50',
      dark: 'bg-blue-900',
      border: 'border-blue-600',
      text: 'text-blue-600',
      bg: 'bg-blue-600'
    },
    analytics: {
      primary: 'bg-purple-600',
      light: 'bg-purple-50',
      dark: 'bg-purple-900',
      border: 'border-purple-600',
      text: 'text-purple-600',
      bg: 'bg-purple-600'
    },
    contracts: {
      primary: 'bg-emerald-600',
      light: 'bg-emerald-50',
      dark: 'bg-emerald-900',
      border: 'border-emerald-600',
      text: 'text-emerald-600',
      bg: 'bg-emerald-600'
    },
    savings: {
      primary: 'bg-amber-600',
      light: 'bg-amber-50',
      dark: 'bg-amber-900',
      border: 'border-amber-600',
      text: 'text-amber-600',
      bg: 'bg-amber-600'
    },
    depot: {
      primary: 'bg-indigo-600',
      light: 'bg-indigo-50',
      dark: 'bg-indigo-900',
      border: 'border-indigo-600',
      text: 'text-indigo-600',
      bg: 'bg-indigo-600'
    }
  }

  // Main sections data
  const mainSections: MainSection[] = [
    {
      id: 'smartbanking',
      icon: TrendingUp,
      title: 'Kontenübersicht',
      description: 'Smartes Banking',
      subSections: [
        {
          id: 'multibanking',
          icon: Building2,
          title: 'Multi-Banking',
          description: 'Mehrere Banken verbinden',
          features: [
            { id: 'link-accounts', title: 'Verknüpfung mehrerer Konten & Dienste' }
          ]
        },
        {
          id: 'total',
          icon: Repeat,
          title: 'Gesamtüberblick',
          description: 'Konsolidierte Ansicht',
          features: [
            { id: 'balances', title: 'Aktuelle Kontostände über alle Konten' },
            { id: 'upcoming', title: 'Anzeige anstehender Ausgaben' },
            { id: 'salary', title: 'Erkennung von Gehaltseingängen' }
          ]
        },
        {
          id: 'sync',
          icon: RefreshCw,
          title: 'Echtzeit-Synchronisation',
          description: 'Automatische Aktualisierung',
          features: [
            { id: 'recurring', title: 'Erkennung regelmäßiger Buchungen' },
            { id: 'auto-update', title: 'Automatische Aktualisierung der Umsätze' }
          ]
        }
      ]
    },
    {
      id: 'analytics',
      icon: PieChart,
      title: 'Ausgabenanalyse',
      description: 'Intelligente Analyse',
      subSections: [
        {
          id: 'categorization',
          icon: Tags,
          title: 'Automatische Kategorisierung',
          description: 'Ausgaben einordnen',
          features: [
            { id: 'consumption-patterns', title: 'Erkennung von Konsummustern' },
            { id: 'auto-categorize', title: 'Automatische Zuordnung zu Kategorien' },
            { id: 'categories', title: 'Kategorien: Lebensmittel, Mobilität, Freizeit' }
          ]
        },
        {
          id: 'reports',
          icon: BarChart3,
          title: 'Reports & Auswertungen',
          description: 'Detaillierte Berichte',
          features: [
            { id: 'monthly-reports', title: 'Monatliche Auswertungen' },
            { id: 'trends', title: 'Trendanalysen (steigende/fallende Ausgaben)' }
          ]
        },
        {
          id: 'budget',
          icon: Target,
          title: 'Budget-Steuerung',
          description: 'Ausgaben kontrollieren',
          features: [
            { id: 'category-budgets', title: 'Individuelle Budgets pro Kategorie' },
            { id: 'budget-adjustments', title: 'Budget-Anpassungen basierend auf Auswertungen' }
          ]
        }
      ]
    },
    {
      id: 'contracts',
      icon: FileText,
      title: 'Vertragsmanagement',
      description: 'Verträge verwalten',
      subSections: [
        {
          id: 'contract-detection',
          icon: FileCheck,
          title: 'Automatische Vertragserkennung',
          description: 'Verträge finden',
          features: [
            { id: 'detect-contracts', title: 'Erkennung laufender Verträge aus Kontoumsätzen' },
            { id: 'contract-types', title: 'Strom, Internet, Handy, Streaming, Versicherungen' }
          ]
        },
        {
          id: 'contract-overview',
          icon: Receipt,
          title: 'Vertragsübersicht',
          description: 'Alle Verträge im Blick',
          features: [
            { id: 'monthly-costs', title: 'Monatliche Kosten pro Vertrag' },
            { id: 'deadlines', title: 'Kündigungsfristen & Laufzeiten' }
          ]
        },
        {
          id: 'contract-actions',
          icon: Scissors,
          title: 'Vertragsaktionen',
          description: 'Verträge optimieren',
          features: [
            { id: 'cancel-contract', title: 'Kündigung direkt aus der App' },
            { id: 'switch-provider', title: 'Wechsel zu günstigeren Anbietern' }
          ]
        }
      ]
    },
    {
      id: 'savings',
      icon: PiggyBank,
      title: 'Sparen & Planung',
      description: 'Finanzplanung',
      subSections: [
        {
          id: 'tips',
          icon: Lightbulb,
          title: 'Personalisierte Spartipps',
          description: 'Geld sparen',
          features: [
            { id: 'unused-subscriptions', title: 'Hinweise auf überflüssige Abos' },
            { id: 'expensive-contracts', title: 'Hinweise auf überteuerte Verträge' }
          ]
        },
        {
          id: 'goals',
          icon: Goal,
          title: 'Finanzplanung & Ziele',
          description: 'Ziele erreichen',
          features: [
            { id: 'define-goals', title: 'Finanzielle Ziele definieren' },
            { id: 'budget-alerts', title: 'Budget-Alerts bei Überschreitung' }
          ]
        },
        {
          id: 'coach',
          icon: Brain,
          title: 'Finanzcoach',
          description: 'Persönliche Beratung',
          features: [
            { id: 'improve-behavior', title: 'Unterstützung beim besseren Finanzverhalten' },
            { id: 'understand-finance', title: 'Finanzen verstehen ohne Experte zu sein' }
          ]
        }
      ]
    },
    {
      id: 'depot',
      icon: Briefcase,
      title: 'Depot',
      description: 'Wertpapiere & Investments',
      subSections: [
        {
          id: 'custodians',
          icon: Landmark,
          title: 'Lagerstellen',
          description: 'Verwahrung Ihrer Wertpapiere',
          features: [
            { id: 'custodian-overview', title: 'Übersicht Ihrer Lagerstellen' },
            { id: 'custodian-contact', title: 'Kontakt zur Lagerstelle' }
          ]
        },
        {
          id: 'depots',
          icon: Building,
          title: 'Depots',
          description: 'Ihre Wertpapierdepots',
          features: [
            { id: 'depot-overview', title: 'Depotübersicht & Performance' },
            { id: 'depot-buy', title: 'Wertpapiere kaufen' },
            { id: 'depot-sell', title: 'Wertpapiere verkaufen' },
            { id: 'depot-savings-plan', title: 'Sparplan anlegen' }
          ]
        },
        {
          id: 'portfolios',
          icon: Layers,
          title: 'Portfolios',
          description: 'Portfolio-Management',
          features: [
            { id: 'portfolio-overview', title: 'Portfolio-Übersicht' },
            { id: 'portfolio-buy', title: 'Wertpapiere kaufen' },
            { id: 'portfolio-sell', title: 'Wertpapiere verkaufen' },
            { id: 'portfolio-savings-plan', title: 'Sparplan anlegen' }
          ]
        },
        {
          id: 'broker-contact',
          icon: User,
          title: 'Kontakt zum Makler',
          description: 'Persönliche Beratung',
          features: [
            { id: 'broker-info', title: 'Ihr Makler' },
            { id: 'broker-message', title: 'Nachricht senden' },
            { id: 'broker-appointment', title: 'Termin vereinbaren' }
          ]
        }
      ]
    }
  ]

  // Feature pages metadata (content is in separate components)
  const featurePages: Record<string, FeaturePageContent> = {
    // Smartbanking
    'link-accounts': { title: 'Konten verknüpfen', description: 'Verbinden Sie Ihre Bankkonten', sectionId: 'smartbanking' },
    'balances': { title: 'Kontostände', description: 'Alle Kontostände im Überblick', sectionId: 'smartbanking' },
    'upcoming': { title: 'Anstehende Ausgaben', description: 'Geplante Abbuchungen', sectionId: 'smartbanking' },
    'salary': { title: 'Gehaltseingänge', description: 'Erkannte Gehaltszahlungen', sectionId: 'smartbanking' },
    'recurring': { title: 'Regelmäßige Buchungen', description: 'Wiederkehrende Transaktionen', sectionId: 'smartbanking' },
    'auto-update': { title: 'Auto-Aktualisierung', description: 'Echtzeit-Synchronisation', sectionId: 'smartbanking' },
    // Analytics
    'consumption-patterns': { title: 'Konsummuster', description: 'Ihre Ausgabegewohnheiten', sectionId: 'analytics' },
    'auto-categorize': { title: 'Auto-Kategorisierung', description: 'Automatische Zuordnung', sectionId: 'analytics' },
    'categories': { title: 'Kategorien', description: 'Ausgabenkategorien verwalten', sectionId: 'analytics' },
    'monthly-reports': { title: 'Monatsberichte', description: 'Monatliche Übersichten', sectionId: 'analytics' },
    'trends': { title: 'Trendanalysen', description: 'Ausgabentrends erkennen', sectionId: 'analytics' },
    'category-budgets': { title: 'Kategorie-Budgets', description: 'Budgets pro Kategorie', sectionId: 'analytics' },
    'budget-adjustments': { title: 'Budget-Anpassungen', description: 'Smarte Budgetoptimierung', sectionId: 'analytics' },
    // Contracts
    'detect-contracts': { title: 'Vertragserkennung', description: 'Verträge automatisch finden', sectionId: 'contracts' },
    'contract-types': { title: 'Vertragsarten', description: 'Kategorisierte Verträge', sectionId: 'contracts' },
    'monthly-costs': { title: 'Monatliche Kosten', description: 'Kosten pro Vertrag', sectionId: 'contracts' },
    'deadlines': { title: 'Fristen & Laufzeiten', description: 'Kündigungsfristen im Blick', sectionId: 'contracts' },
    'cancel-contract': { title: 'Vertrag kündigen', description: 'Einfache Kündigung', sectionId: 'contracts' },
    'switch-provider': { title: 'Anbieter wechseln', description: 'Bessere Alternativen finden', sectionId: 'contracts' },
    // Savings
    'unused-subscriptions': { title: 'Überflüssige Abos', description: 'Ungenutzte Abonnements', sectionId: 'savings' },
    'expensive-contracts': { title: 'Teure Verträge', description: 'Einsparpotential erkennen', sectionId: 'savings' },
    'define-goals': { title: 'Sparziele', description: 'Ihre finanziellen Ziele', sectionId: 'savings' },
    'budget-alerts': { title: 'Budget-Alerts', description: 'Warnungen bei Überschreitung', sectionId: 'savings' },
    'improve-behavior': { title: 'Finanzverhalten', description: 'Bessere Gewohnheiten', sectionId: 'savings' },
    'understand-finance': { title: 'Finanzen verstehen', description: 'Einfach erklärt', sectionId: 'savings' },
    // Depot
    'custodian-overview': { title: 'Lagerstellen', description: 'Ihre Verwahrstellen', sectionId: 'depot' },
    'custodian-contact': { title: 'Lagerstellen-Kontakt', description: 'Kontaktmöglichkeiten', sectionId: 'depot' },
    'depot-overview': { title: 'Depotübersicht', description: 'Ihre Wertpapiere', sectionId: 'depot' },
    'depot-buy': { title: 'Wertpapiere kaufen', description: 'Order aufgeben', sectionId: 'depot' },
    'depot-sell': { title: 'Wertpapiere verkaufen', description: 'Verkaufsorder', sectionId: 'depot' },
    'depot-savings-plan': { title: 'Sparplan anlegen', description: 'Regelmäßig investieren', sectionId: 'depot' },
    'portfolio-overview': { title: 'Portfolio-Übersicht', description: 'Gesamtportfolio', sectionId: 'depot' },
    'portfolio-buy': { title: 'Portfolio kaufen', description: 'In Portfolio investieren', sectionId: 'depot' },
    'portfolio-sell': { title: 'Portfolio verkaufen', description: 'Anteile verkaufen', sectionId: 'depot' },
    'portfolio-savings-plan': { title: 'Portfolio-Sparplan', description: 'Automatisch investieren', sectionId: 'depot' },
    'broker-info': { title: 'Ihr Makler', description: 'Maklerinformationen', sectionId: 'depot' },
    'broker-message': { title: 'Nachricht senden', description: 'Kontakt aufnehmen', sectionId: 'depot' },
    'broker-appointment': { title: 'Termin vereinbaren', description: 'Beratungstermin buchen', sectionId: 'depot' }
  }

  // Helper functions
  function toRoman(num: number): string {
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    return romanNumerals[num - 1] || num.toString()
  }

  function toLetter(num: number): string {
    return String.fromCharCode(96 + num) // 1 = a, 2 = b, etc.
  }

  function getSectionById(id: string) {
    return mainSections.find(s => s.id === id)
  }

  function getColorsForSection(sectionId: string) {
    return sectionColors[sectionId] || null
  }

  function getFeaturePageData(featureId: string) {
    return featurePages[featureId] || null
  }

  function getSectionIndex(sectionId: string): number {
    return mainSections.findIndex(s => s.id === sectionId) + 1
  }

  return {
    // Data
    sectionColors,
    mainSections,
    featurePages,
    // Helpers
    toRoman,
    toLetter,
    getSectionById,
    getColorsForSection,
    getFeaturePageData,
    getSectionIndex
  }
})
