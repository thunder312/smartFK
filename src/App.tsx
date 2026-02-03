import { useState } from 'react';
import {
  Menu, ChevronRight, Building2, Repeat, RefreshCw, TrendingUp, ArrowLeft, Plus, Euro,
  Calendar, Wallet, Clock, CheckCircle2, X, PieChart, FileText, Target, BarChart3,
  Tags, Lightbulb, Receipt, FileCheck, Bell, Percent, Scissors, ArrowRightLeft,
  Sparkles, PiggyBank, Goal, Brain, Briefcase, Building, Layers, Phone, ShoppingCart,
  CalendarClock, LineChart, ArrowUpDown, Landmark, User, Mail
} from 'lucide-react';

interface Feature {
  id: string;
  title: string;
}

interface SubSection {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: Feature[];
}

interface MainSection {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  subSections: SubSection[];
}

interface FeaturePageContent {
  title: string;
  description: string;
  content: React.ReactNode;
}

// Hilfsfunktionen für Nummerierung
const toRoman = (num: number): string => {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  return romanNumerals[num - 1] || num.toString();
};

const toLetter = (num: number): string => {
  return String.fromCharCode(96 + num); // 1 = a, 2 = b, etc.
};

// Farbschema für jeden Kernbereich
const sectionColors: Record<string, { primary: string; light: string; dark: string; border: string; text: string; bg: string }> = {
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
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedSubSection, setSelectedSubSection] = useState<string | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const getColors = () => activeSection ? sectionColors[activeSection] : null;

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
  ];

  const featurePages: Record<string, FeaturePageContent> = {
    // Smartbanking Features
    'link-accounts': {
      title: 'Konten verknüpfen',
      description: 'Verbinden Sie Ihre Bankkonten',
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-3">
            {[
              { name: 'Sparkasse', status: 'verbunden', color: 'green' },
              { name: 'DKB', status: 'verbunden', color: 'green' },
              { name: 'ING', status: 'nicht verbunden', color: 'gray' },
              { name: 'Commerzbank', status: 'nicht verbunden', color: 'gray' }
            ].map(bank => (
              <div key={bank.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">{bank.name}</span>
                  <span className={`text-xs px-2 py-1 rounded ${bank.color === 'green' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {bank.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full p-4 border-2 border-dashed border-purple-400 text-purple-600 active:bg-purple-50 flex items-center justify-center gap-2 rounded-lg min-h-[48px]">
            <Plus className="w-5 h-5" />
            <span className="font-mono text-sm">Neue Bank hinzufügen</span>
          </button>
        </div>
      )
    },
    'balances': {
      title: 'Kontostände',
      description: 'Alle Kontostände im Überblick',
      content: (
        <div className="space-y-3">
          <div className="p-4 border-2 border-gray-900 bg-gray-900 text-white rounded-lg">
            <div className="text-xs font-mono opacity-70">Gesamtvermögen</div>
            <div className="text-2xl font-mono mt-1">12.847,53 €</div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Sparkasse Girokonto', balance: '3.241,87 €', icon: Euro },
              { name: 'DKB Girokonto', balance: '1.892,16 €', icon: Euro },
              { name: 'Sparkasse Tagesgeld', balance: '5.000,00 €', icon: Wallet },
              { name: 'DKB Depot', balance: '2.713,50 €', icon: TrendingUp }
            ].map(account => (
              <div key={account.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <account.icon className="w-4 h-4 text-gray-500" />
                  <span className="font-mono text-xs">{account.name}</span>
                </div>
                <span className="font-mono text-sm font-bold">{account.balance}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'upcoming': {
      title: 'Anstehende Ausgaben',
      description: 'Geplante Abbuchungen',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-orange-300 bg-orange-50 rounded-lg">
            <div className="flex items-center gap-2 text-orange-700">
              <Calendar className="w-4 h-4" />
              <span className="font-mono text-sm font-bold">Diese Woche: 487,50 €</span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Miete', amount: '-850,00 €', date: '01.03.2026', status: 'fällig' },
              { name: 'Stromabschlag', amount: '-75,00 €', date: '03.03.2026', status: 'bald' },
              { name: 'Netflix', amount: '-12,99 €', date: '05.03.2026', status: 'bald' }
            ].map(item => (
              <div key={item.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-mono text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm font-bold text-red-600">{item.amount}</div>
                  <div className={`text-xs ${item.status === 'fällig' ? 'text-orange-600' : 'text-gray-400'}`}>{item.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'salary': {
      title: 'Gehaltseingänge',
      description: 'Erkannte Gehaltszahlungen',
      content: (
        <div className="space-y-3">
          <div className="p-4 border-2 border-green-500 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="w-5 h-5" />
              <div>
                <div className="font-mono text-sm font-bold">Nächster Eingang</div>
                <div className="text-xs">28.02.2026</div>
              </div>
            </div>
            <div className="text-2xl font-mono mt-2 text-green-800">+2.850,00 €</div>
          </div>
          <div className="space-y-2">
            {[
              { date: '28.01.2026', amount: '+2.850,00 €', employer: 'Musterfirma GmbH' },
              { date: '28.12.2025', amount: '+2.850,00 €', employer: 'Musterfirma GmbH' }
            ].map((entry, idx) => (
              <div key={idx} className="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-mono text-sm">{entry.employer}</div>
                  <div className="text-xs text-gray-500">{entry.date}</div>
                </div>
                <span className="font-mono text-sm font-bold text-green-600">{entry.amount}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'recurring': {
      title: 'Regelmäßige Buchungen',
      description: 'Wiederkehrende Transaktionen',
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
              <div className="text-xl font-mono font-bold">12</div>
              <div className="text-xs text-gray-500">Monatlich</div>
            </div>
            <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
              <div className="text-xl font-mono font-bold">3</div>
              <div className="text-xs text-gray-500">Jährlich</div>
            </div>
            <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
              <div className="text-xl font-mono font-bold">2</div>
              <div className="text-xs text-gray-500">Quartal</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Miete', interval: 'Monatlich', amount: '-850,00 €' },
              { name: 'Spotify', interval: 'Monatlich', amount: '-9,99 €' },
              { name: 'Haftpflicht', interval: 'Jährlich', amount: '-89,00 €' }
            ].map(item => (
              <div key={item.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-mono text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.interval}</div>
                </div>
                <span className="font-mono text-sm font-bold">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'auto-update': {
      title: 'Auto-Aktualisierung',
      description: 'Echtzeit-Synchronisation',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-blue-300 bg-blue-50 rounded-lg flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
            <div>
              <div className="font-mono text-sm font-bold text-blue-800">Sync aktiv</div>
              <div className="text-xs text-blue-600">Vor 2 Minuten</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { time: '14:32', status: 'OK', changes: '+3 Umsätze' },
              { time: '12:00', status: 'OK', changes: '+1 Umsatz' },
              { time: '08:15', status: 'OK', changes: 'Keine' }
            ].map((entry, idx) => (
              <div key={idx} className="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="font-mono text-sm">{entry.time}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-green-600">{entry.status}</span>
                  <div className="text-xs text-gray-500">{entry.changes}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Analytics Features
    'consumption-patterns': {
      title: 'Konsummuster',
      description: 'Ihre Ausgabegewohnheiten',
      content: (
        <div className="space-y-3">
          <div className="p-4 border-2 border-purple-300 bg-purple-50 rounded-lg">
            <div className="font-mono text-sm font-bold text-purple-800">Erkannte Muster</div>
            <div className="text-xs text-purple-600 mt-1">Basierend auf 6 Monaten Daten</div>
          </div>
          <div className="space-y-2">
            {[
              { pattern: 'Wochenend-Shopping', frequency: 'Jeden Samstag', avg: '~85 €' },
              { pattern: 'Coffee-to-go', frequency: 'Täglich', avg: '~4,50 €' },
              { pattern: 'Lieferdienste', frequency: '2x pro Woche', avg: '~25 €' }
            ].map(item => (
              <div key={item.pattern} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="font-mono text-sm">{item.pattern}</div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{item.frequency}</span>
                  <span className="font-bold">{item.avg}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'auto-categorize': {
      title: 'Auto-Kategorisierung',
      description: 'Automatische Zuordnung',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-green-300 bg-green-50 rounded-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="font-mono text-sm text-green-800">98% automatisch kategorisiert</span>
          </div>
          <div className="space-y-2">
            {[
              { transaction: 'REWE SAGT DANKE', category: 'Lebensmittel', confidence: '99%' },
              { transaction: 'SPOTIFY AB', category: 'Unterhaltung', confidence: '100%' },
              { transaction: 'SHELL TANKSTELLE', category: 'Mobilität', confidence: '98%' }
            ].map(item => (
              <div key={item.transaction} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="font-mono text-xs truncate">{item.transaction}</div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{item.category}</span>
                  <span className="text-xs text-gray-500">{item.confidence}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'categories': {
      title: 'Kategorien',
      description: 'Ausgaben nach Kategorien',
      content: (
        <div className="space-y-3">
          <div className="space-y-2">
            {[
              { name: 'Lebensmittel', amount: '450 €', percent: 25, color: 'bg-green-500' },
              { name: 'Wohnen', amount: '850 €', percent: 47, color: 'bg-blue-500' },
              { name: 'Mobilität', amount: '180 €', percent: 10, color: 'bg-yellow-500' },
              { name: 'Freizeit', amount: '200 €', percent: 11, color: 'bg-purple-500' },
              { name: 'Sonstiges', amount: '120 €', percent: 7, color: 'bg-gray-500' }
            ].map(cat => (
              <div key={cat.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm">{cat.name}</span>
                  <span className="font-mono text-sm font-bold">{cat.amount}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full ${cat.color}`} style={{ width: `${cat.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'monthly-reports': {
      title: 'Monatsberichte',
      description: 'Monatliche Auswertungen',
      content: (
        <div className="space-y-3">
          <div className="p-4 border-2 border-gray-900 bg-gray-900 text-white rounded-lg">
            <div className="text-xs font-mono opacity-70">Februar 2026</div>
            <div className="flex justify-between mt-2">
              <div>
                <div className="text-xs opacity-70">Einnahmen</div>
                <div className="text-lg font-mono text-green-400">+2.850 €</div>
              </div>
              <div className="text-right">
                <div className="text-xs opacity-70">Ausgaben</div>
                <div className="text-lg font-mono text-red-400">-1.800 €</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['Januar', 'Dezember', 'November', 'Oktober'].map(month => (
              <button key={month} className="p-3 border-2 border-gray-300 bg-white rounded-lg text-left active:bg-gray-50">
                <div className="font-mono text-sm">{month}</div>
                <div className="text-xs text-gray-500">Bericht ansehen</div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    'trends': {
      title: 'Trendanalysen',
      description: 'Ausgabentrends erkennen',
      content: (
        <div className="space-y-3">
          <div className="space-y-2">
            {[
              { category: 'Lebensmittel', trend: 'steigend', change: '+12%', icon: '📈' },
              { category: 'Mobilität', trend: 'fallend', change: '-8%', icon: '📉' },
              { category: 'Unterhaltung', trend: 'stabil', change: '±0%', icon: '➡️' }
            ].map(item => (
              <div key={item.category} className="p-3 border-2 border-gray-300 bg-white rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="font-mono text-sm">{item.category}</span>
                </div>
                <div className="text-right">
                  <div className={`font-mono text-sm font-bold ${item.trend === 'steigend' ? 'text-red-600' : item.trend === 'fallend' ? 'text-green-600' : 'text-gray-600'}`}>
                    {item.change}
                  </div>
                  <div className="text-xs text-gray-500">{item.trend}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'category-budgets': {
      title: 'Kategorie-Budgets',
      description: 'Budgets pro Kategorie',
      content: (
        <div className="space-y-3">
          <div className="space-y-2">
            {[
              { name: 'Lebensmittel', spent: 380, budget: 500, color: 'bg-green-500' },
              { name: 'Freizeit', spent: 180, budget: 200, color: 'bg-orange-500' },
              { name: 'Shopping', spent: 250, budget: 150, color: 'bg-red-500' }
            ].map(cat => (
              <div key={cat.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-sm">{cat.name}</span>
                  <span className="font-mono text-xs">{cat.spent} / {cat.budget} €</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full ${cat.color}`} style={{ width: `${Math.min((cat.spent / cat.budget) * 100, 100)}%` }} />
                </div>
                {cat.spent > cat.budget && (
                  <div className="text-xs text-red-600 mt-1">Budget überschritten!</div>
                )}
              </div>
            ))}
          </div>
          <button className="w-full p-3 border-2 border-dashed border-purple-400 text-purple-600 rounded-lg min-h-[48px]">
            <span className="font-mono text-sm">+ Neues Budget</span>
          </button>
        </div>
      )
    },
    'budget-adjustments': {
      title: 'Budget-Empfehlungen',
      description: 'Smarte Anpassungen',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-blue-300 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <span className="font-mono text-sm text-blue-800">3 Empfehlungen</span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { suggestion: 'Lebensmittel-Budget erhöhen', reason: 'Oft überschritten', action: '+50 €' },
              { suggestion: 'Freizeit-Budget senken', reason: 'Selten ausgeschöpft', action: '-30 €' },
              { suggestion: 'Neues Budget: Abo-Dienste', reason: 'Neue Kategorie erkannt', action: '25 €' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="font-mono text-sm">{item.suggestion}</div>
                <div className="text-xs text-gray-500 mt-1">{item.reason}</div>
                <button className="mt-2 px-3 py-1 bg-purple-600 text-white text-xs rounded min-h-[32px]">
                  {item.action} anwenden
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Contract Features
    'detect-contracts': {
      title: 'Vertragserkennung',
      description: 'Automatisch erkannte Verträge',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-green-300 bg-green-50 rounded-lg">
            <div className="font-mono text-sm text-green-800">8 Verträge erkannt</div>
            <div className="text-xs text-green-600">Aus Ihren Kontoumsätzen</div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Vodafone', type: 'Handy', monthly: '39,99 €', status: 'Neu erkannt' },
              { name: 'Netflix', type: 'Streaming', monthly: '12,99 €', status: 'Bestätigt' },
              { name: 'Allianz', type: 'Versicherung', monthly: '45,00 €', status: 'Bestätigt' }
            ].map(contract => (
              <div key={contract.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <div className="font-mono text-sm">{contract.name}</div>
                    <div className="text-xs text-gray-500">{contract.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm font-bold">{contract.monthly}</div>
                    <div className={`text-xs ${contract.status === 'Neu erkannt' ? 'text-orange-600' : 'text-green-600'}`}>
                      {contract.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'contract-types': {
      title: 'Vertragstypen',
      description: 'Kategorien Ihrer Verträge',
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {[
              { type: 'Strom', count: 1, icon: '⚡' },
              { type: 'Internet', count: 1, icon: '🌐' },
              { type: 'Handy', count: 2, icon: '📱' },
              { type: 'Streaming', count: 3, icon: '📺' },
              { type: 'Versicherung', count: 2, icon: '🛡️' },
              { type: 'Fitness', count: 1, icon: '💪' }
            ].map(item => (
              <div key={item.type} className="p-3 border-2 border-gray-300 bg-white rounded-lg text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="font-mono text-sm">{item.type}</div>
                <div className="text-xs text-gray-500">{item.count} Vertrag/Verträge</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'monthly-costs': {
      title: 'Monatliche Kosten',
      description: 'Kosten pro Vertrag',
      content: (
        <div className="space-y-3">
          <div className="p-4 border-2 border-gray-900 bg-gray-900 text-white rounded-lg">
            <div className="text-xs font-mono opacity-70">Gesamt pro Monat</div>
            <div className="text-2xl font-mono mt-1">187,96 €</div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Miete', amount: '850,00 €' },
              { name: 'Vodafone Handy', amount: '39,99 €' },
              { name: 'Allianz Haftpflicht', amount: '15,00 €' },
              { name: 'Netflix', amount: '12,99 €' },
              { name: 'Spotify', amount: '9,99 €' }
            ].map(item => (
              <div key={item.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg flex justify-between">
                <span className="font-mono text-sm">{item.name}</span>
                <span className="font-mono text-sm font-bold">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'deadlines': {
      title: 'Kündigungsfristen',
      description: 'Fristen & Laufzeiten',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-orange-300 bg-orange-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-orange-600" />
              <span className="font-mono text-sm text-orange-800">2 Fristen bald ablaufend</span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Vodafone', deadline: '15.03.2026', status: 'Bald!', days: 12 },
              { name: 'Fitnessstudio', deadline: '01.04.2026', status: 'In 29 Tagen', days: 29 },
              { name: 'Netflix', deadline: 'Monatlich kündbar', status: 'Flexibel', days: null }
            ].map(item => (
              <div key={item.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between">
                  <span className="font-mono text-sm">{item.name}</span>
                  <span className={`text-xs px-2 py-1 rounded ${item.days && item.days < 14 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
                    {item.status}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.deadline}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'cancel-contract': {
      title: 'Vertrag kündigen',
      description: 'Direkt aus der App',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-purple-300 bg-purple-50 rounded-lg">
            <div className="font-mono text-sm text-purple-800">Kündigung in 2 Minuten</div>
            <div className="text-xs text-purple-600">Wir erstellen das Schreiben für Sie</div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Fitnessstudio', canCancel: true },
              { name: 'Netflix', canCancel: true },
              { name: 'Vodafone', canCancel: false, reason: 'Mindestlaufzeit bis 12/2026' }
            ].map(item => (
              <div key={item.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">{item.name}</span>
                  {item.canCancel ? (
                    <button className="px-3 py-2 bg-red-600 text-white text-xs rounded min-h-[36px]">
                      Kündigen
                    </button>
                  ) : (
                    <span className="text-xs text-gray-500">{item.reason}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'switch-provider': {
      title: 'Anbieter wechseln',
      description: 'Günstigere Alternativen',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-green-300 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Percent className="w-5 h-5 text-green-600" />
              <span className="font-mono text-sm text-green-800">Bis zu 240 €/Jahr sparen</span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { current: 'Vodafone (39,99 €)', alternative: 'Aldi Talk', savings: '20 €/Monat' },
              { current: 'Vattenfall Strom', alternative: 'E.ON', savings: '8 €/Monat' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="text-xs text-gray-500">Aktuell: {item.current}</div>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <div className="font-mono text-sm">{item.alternative}</div>
                    <div className="text-xs text-green-600">Spare {item.savings}</div>
                  </div>
                  <button className="px-3 py-2 bg-purple-600 text-white text-xs rounded min-h-[36px]">
                    <ArrowRightLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Savings Features
    'unused-subscriptions': {
      title: 'Überflüssige Abos',
      description: 'Ungenutzte Dienste finden',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-orange-300 bg-orange-50 rounded-lg">
            <div className="font-mono text-sm text-orange-800">2 kaum genutzte Abos</div>
            <div className="text-xs text-orange-600">Potenzielle Ersparnis: 22,98 €/Monat</div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Disney+', cost: '8,99 €/Monat', usage: 'Letzter Login vor 45 Tagen' },
              { name: 'Audible', cost: '13,99 €/Monat', usage: 'Kein Download seit 2 Monaten' }
            ].map(item => (
              <div key={item.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between">
                  <span className="font-mono text-sm">{item.name}</span>
                  <span className="font-mono text-sm font-bold">{item.cost}</span>
                </div>
                <div className="text-xs text-red-600 mt-1">{item.usage}</div>
                <button className="mt-2 w-full py-2 border-2 border-red-300 text-red-600 text-xs rounded min-h-[36px]">
                  Abo kündigen
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'expensive-contracts': {
      title: 'Überteuerte Verträge',
      description: 'Sparpotenzial erkennen',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-red-300 bg-red-50 rounded-lg">
            <div className="font-mono text-sm text-red-800">3 Verträge über Marktpreis</div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Handyvertrag', you: '39,99 €', market: '~25 €', diff: '+15 €' },
              { name: 'Stromtarif', you: '95 €', market: '~80 €', diff: '+15 €' },
              { name: 'KFZ-Versicherung', you: '65 €', market: '~45 €', diff: '+20 €' }
            ].map(item => (
              <div key={item.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="font-mono text-sm">{item.name}</div>
                <div className="flex justify-between mt-2 text-xs">
                  <span>Sie zahlen: <b>{item.you}</b></span>
                  <span>Markt: <b>{item.market}</b></span>
                  <span className="text-red-600">{item.diff}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'define-goals': {
      title: 'Sparziele',
      description: 'Ihre finanziellen Ziele',
      content: (
        <div className="space-y-3">
          <div className="space-y-2">
            {[
              { name: 'Urlaub 2026', target: 2000, saved: 1200, deadline: 'Juni 2026' },
              { name: 'Notgroschen', target: 5000, saved: 3500, deadline: 'Dezember 2026' },
              { name: 'Neues Handy', target: 800, saved: 250, deadline: 'April 2026' }
            ].map(goal => (
              <div key={goal.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-sm">{goal.name}</span>
                  <span className="font-mono text-xs">{goal.saved} / {goal.target} €</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: `${(goal.saved / goal.target) * 100}%` }} />
                </div>
                <div className="text-xs text-gray-500 mt-1">Ziel: {goal.deadline}</div>
              </div>
            ))}
          </div>
          <button className="w-full p-3 border-2 border-dashed border-purple-400 text-purple-600 rounded-lg min-h-[48px]">
            <span className="font-mono text-sm">+ Neues Sparziel</span>
          </button>
        </div>
      )
    },
    'budget-alerts': {
      title: 'Budget-Alerts',
      description: 'Benachrichtigungen',
      content: (
        <div className="space-y-3">
          <div className="space-y-2">
            {[
              { type: 'warning', message: 'Shopping-Budget zu 90% aufgebraucht', time: 'Vor 2 Std.' },
              { type: 'alert', message: 'Freizeit-Budget überschritten!', time: 'Gestern' },
              { type: 'info', message: 'Monatsbericht verfügbar', time: 'Vor 3 Tagen' }
            ].map((alert, idx) => (
              <div key={idx} className={`p-3 border-2 rounded-lg ${
                alert.type === 'alert' ? 'border-red-300 bg-red-50' :
                alert.type === 'warning' ? 'border-orange-300 bg-orange-50' :
                'border-blue-300 bg-blue-50'
              }`}>
                <div className={`font-mono text-sm ${
                  alert.type === 'alert' ? 'text-red-800' :
                  alert.type === 'warning' ? 'text-orange-800' :
                  'text-blue-800'
                }`}>{alert.message}</div>
                <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'improve-behavior': {
      title: 'Finanzverhalten',
      description: 'Tipps zur Verbesserung',
      content: (
        <div className="space-y-3">
          <div className="p-4 border-2 border-purple-300 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-600" />
              <div>
                <div className="font-mono text-sm font-bold text-purple-800">Ihr Finanz-Score</div>
                <div className="text-2xl font-mono text-purple-800">72 / 100</div>
              </div>
            </div>
          </div>
          <h4 className="font-mono text-xs text-gray-600">VERBESSERUNGSVORSCHLÄGE</h4>
          <div className="space-y-2">
            {[
              { tip: 'Regelmäßiger sparen', impact: '+8 Punkte', action: 'Dauerauftrag einrichten' },
              { tip: 'Weniger Impulskäufe', impact: '+5 Punkte', action: '24h-Regel aktivieren' },
              { tip: 'Notgroschen aufbauen', impact: '+10 Punkte', action: 'Ziel erstellen' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between">
                  <span className="font-mono text-sm">{item.tip}</span>
                  <span className="text-xs text-green-600">{item.impact}</span>
                </div>
                <button className="mt-2 w-full py-2 bg-purple-100 text-purple-700 text-xs rounded min-h-[36px]">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'understand-finance': {
      title: 'Finanzwissen',
      description: 'Einfach erklärt',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-blue-300 bg-blue-50 rounded-lg">
            <div className="font-mono text-sm text-blue-800">Lernen Sie die Grundlagen</div>
            <div className="text-xs text-blue-600">Kurze Lektionen, große Wirkung</div>
          </div>
          <div className="space-y-2">
            {[
              { title: 'Was ist ein ETF?', duration: '3 Min.', completed: true },
              { title: 'Notgroschen aufbauen', duration: '5 Min.', completed: true },
              { title: 'Zinseszins verstehen', duration: '4 Min.', completed: false },
              { title: 'Steuern sparen', duration: '6 Min.', completed: false }
            ].map((lesson, idx) => (
              <button key={idx} className="w-full p-3 border-2 border-gray-300 bg-white rounded-lg text-left active:bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-mono text-sm">{lesson.title}</div>
                    <div className="text-xs text-gray-500">{lesson.duration}</div>
                  </div>
                  {lesson.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    // Depot Features - Lagerstellen
    'custodian-overview': {
      title: 'Lagerstellen',
      description: 'Übersicht Ihrer Lagerstellen',
      content: (
        <div className="space-y-3">
          <div className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Landmark className="w-6 h-6 text-blue-600" />
              <div>
                <div className="font-mono text-sm font-bold text-blue-800">2 Lagerstellen</div>
                <div className="text-xs text-blue-600">Ihre Wertpapiere werden sicher verwahrt</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Clearstream Banking AG', type: 'Zentralverwahrer', assets: '45.230,00 €' },
              { name: 'DWP Bank', type: 'Wertpapiersammelbank', assets: '12.500,00 €' }
            ].map(custodian => (
              <div key={custodian.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-mono text-sm">{custodian.name}</div>
                    <div className="text-xs text-gray-500">{custodian.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm font-bold">{custodian.assets}</div>
                    <div className="text-xs text-gray-500">Volumen</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'custodian-contact': {
      title: 'Lagerstellen-Kontakt',
      description: 'Kontakt zur Lagerstelle',
      content: (
        <div className="space-y-3">
          <div className="space-y-2">
            {[
              { name: 'Clearstream Banking AG', phone: '+49 69 2111-0', email: 'info@clearstream.com' },
              { name: 'DWP Bank', phone: '+49 69 5099-0', email: 'service@dwpbank.de' }
            ].map(custodian => (
              <div key={custodian.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="font-mono text-sm font-bold mb-2">{custodian.name}</div>
                <div className="space-y-2">
                  <button className="w-full p-2 border-2 border-gray-200 rounded flex items-center gap-2 active:bg-gray-50">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-xs">{custodian.phone}</span>
                  </button>
                  <button className="w-full p-2 border-2 border-gray-200 rounded flex items-center gap-2 active:bg-gray-50">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-xs">{custodian.email}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Depot Features - Depots
    'depot-overview': {
      title: 'Depotübersicht',
      description: 'Performance & Bestand',
      content: (
        <div className="space-y-3">
          <div className="p-4 border-2 border-gray-900 bg-gray-900 text-white rounded-lg">
            <div className="text-xs font-mono opacity-70">Gesamtwert Depots</div>
            <div className="text-2xl font-mono mt-1">57.730,00 €</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">+8,3% (+ 4.420,00 €)</span>
            </div>
          </div>
          <h4 className="font-mono text-xs text-gray-600">IHRE DEPOTS</h4>
          <div className="space-y-2">
            {[
              { name: 'DKB Depot', value: '32.500,00 €', change: '+12,4%', positions: 8 },
              { name: 'Comdirect Depot', value: '18.230,00 €', change: '+5,2%', positions: 5 },
              { name: 'Trade Republic', value: '7.000,00 €', change: '+2,1%', positions: 3 }
            ].map(depot => (
              <button key={depot.name} className="w-full p-3 border-2 border-gray-300 bg-white rounded-lg text-left active:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-mono text-sm">{depot.name}</div>
                    <div className="text-xs text-gray-500">{depot.positions} Positionen</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm font-bold">{depot.value}</div>
                    <div className="text-xs text-green-600">{depot.change}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    'depot-buy': {
      title: 'Wertpapiere kaufen',
      description: 'Depot: Kauf-Order',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Depot auswählen</label>
            <select className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm">
              <option>DKB Depot</option>
              <option>Comdirect Depot</option>
              <option>Trade Republic</option>
            </select>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Wertpapier suchen</label>
            <input type="text" placeholder="Name, WKN oder ISIN" className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm" />
          </div>
          <h4 className="font-mono text-xs text-gray-600">BELIEBTE WERTPAPIERE</h4>
          <div className="space-y-2">
            {[
              { name: 'iShares Core MSCI World', wkn: 'A0RPWH', price: '82,45 €' },
              { name: 'Vanguard FTSE All-World', wkn: 'A1JX52', price: '112,30 €' },
              { name: 'Apple Inc.', wkn: '865985', price: '178,50 €' }
            ].map(stock => (
              <button key={stock.wkn} className="w-full p-3 border-2 border-gray-300 bg-white rounded-lg text-left active:bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-mono text-sm">{stock.name}</div>
                    <div className="text-xs text-gray-500">WKN: {stock.wkn}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold">{stock.price}</span>
                    <ShoppingCart className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    'depot-sell': {
      title: 'Wertpapiere verkaufen',
      description: 'Depot: Verkauf-Order',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Depot auswählen</label>
            <select className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm">
              <option>DKB Depot</option>
              <option>Comdirect Depot</option>
              <option>Trade Republic</option>
            </select>
          </div>
          <h4 className="font-mono text-xs text-gray-600">IHRE POSITIONEN</h4>
          <div className="space-y-2">
            {[
              { name: 'iShares Core MSCI World', shares: '45 Stück', value: '3.710,25 €', gain: '+18,5%' },
              { name: 'Vanguard FTSE All-World', shares: '20 Stück', value: '2.246,00 €', gain: '+12,3%' },
              { name: 'Apple Inc.', shares: '10 Stück', value: '1.785,00 €', gain: '-2,1%' }
            ].map(position => (
              <div key={position.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-mono text-sm">{position.name}</div>
                    <div className="text-xs text-gray-500">{position.shares}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm font-bold">{position.value}</div>
                    <div className={`text-xs ${position.gain.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{position.gain}</div>
                  </div>
                </div>
                <button className="mt-2 w-full py-2 border-2 border-red-300 text-red-600 text-xs rounded min-h-[36px]">
                  Verkaufen
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'depot-savings-plan': {
      title: 'Sparplan anlegen',
      description: 'Depot: Neuer Sparplan',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-green-300 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-green-600" />
              <span className="font-mono text-sm text-green-800">Automatisch investieren</span>
            </div>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Depot auswählen</label>
            <select className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm">
              <option>DKB Depot</option>
              <option>Comdirect Depot</option>
              <option>Trade Republic</option>
            </select>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Wertpapier</label>
            <input type="text" placeholder="Name, WKN oder ISIN" className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm" />
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Sparrate</label>
            <div className="flex items-center gap-2 mt-1">
              <input type="number" placeholder="100" className="flex-1 p-2 border-2 border-gray-300 rounded font-mono text-sm" />
              <span className="font-mono text-sm">€ / Monat</span>
            </div>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Ausführung</label>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {['1. des Monats', '15. des Monats'].map(date => (
                <button key={date} className="p-2 border-2 border-gray-300 rounded text-xs font-mono active:border-purple-400">
                  {date}
                </button>
              ))}
            </div>
          </div>
          <button className="w-full p-3 bg-purple-600 text-white font-mono text-sm rounded-lg min-h-[48px]">
            Sparplan erstellen
          </button>
        </div>
      )
    },
    // Depot Features - Portfolios
    'portfolio-overview': {
      title: 'Portfolio-Übersicht',
      description: 'Ihre Portfolios',
      content: (
        <div className="space-y-3">
          <div className="p-4 border-2 border-gray-900 bg-gray-900 text-white rounded-lg">
            <div className="text-xs font-mono opacity-70">Gesamtwert Portfolios</div>
            <div className="text-2xl font-mono mt-1">72.450,00 €</div>
            <div className="flex items-center gap-1 mt-1">
              <LineChart className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">+15,2% YTD</span>
            </div>
          </div>
          <h4 className="font-mono text-xs text-gray-600">IHRE PORTFOLIOS</h4>
          <div className="space-y-2">
            {[
              { name: 'Wachstum', strategy: 'Aktien 80% / Anleihen 20%', value: '45.000,00 €', risk: 'Hoch' },
              { name: 'Ausgewogen', strategy: 'Aktien 50% / Anleihen 50%', value: '20.000,00 €', risk: 'Mittel' },
              { name: 'Konservativ', strategy: 'Aktien 20% / Anleihen 80%', value: '7.450,00 €', risk: 'Niedrig' }
            ].map(portfolio => (
              <button key={portfolio.name} className="w-full p-3 border-2 border-gray-300 bg-white rounded-lg text-left active:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-mono text-sm">{portfolio.name}</div>
                    <div className="text-xs text-gray-500">{portfolio.strategy}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm font-bold">{portfolio.value}</div>
                    <div className={`text-xs px-2 py-0.5 rounded ${
                      portfolio.risk === 'Hoch' ? 'bg-red-100 text-red-700' :
                      portfolio.risk === 'Mittel' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>{portfolio.risk}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    'portfolio-buy': {
      title: 'Portfolio: Kaufen',
      description: 'Wertpapiere ins Portfolio kaufen',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Portfolio auswählen</label>
            <select className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm">
              <option>Wachstum</option>
              <option>Ausgewogen</option>
              <option>Konservativ</option>
            </select>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Wertpapier suchen</label>
            <input type="text" placeholder="Name, WKN oder ISIN" className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm" />
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Betrag oder Stückzahl</label>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <input type="number" placeholder="1.000 €" className="p-2 border-2 border-gray-300 rounded font-mono text-sm" />
              <input type="number" placeholder="10 Stück" className="p-2 border-2 border-gray-300 rounded font-mono text-sm" />
            </div>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Ordertyp</label>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {['Market', 'Limit'].map(type => (
                <button key={type} className={`p-2 border-2 rounded text-xs font-mono ${type === 'Market' ? 'border-purple-600 bg-purple-600 text-white' : 'border-gray-300'}`}>
                  {type}
                </button>
              ))}
            </div>
          </div>
          <button className="w-full p-3 bg-green-600 text-white font-mono text-sm rounded-lg min-h-[48px] flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Kaufen
          </button>
        </div>
      )
    },
    'portfolio-sell': {
      title: 'Portfolio: Verkaufen',
      description: 'Wertpapiere aus Portfolio verkaufen',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Portfolio auswählen</label>
            <select className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm">
              <option>Wachstum</option>
              <option>Ausgewogen</option>
              <option>Konservativ</option>
            </select>
          </div>
          <h4 className="font-mono text-xs text-gray-600">POSITIONEN IM PORTFOLIO</h4>
          <div className="space-y-2">
            {[
              { name: 'MSCI World ETF', allocation: '40%', value: '18.000,00 €', gain: '+22,3%' },
              { name: 'Euro Stoxx 50', allocation: '25%', value: '11.250,00 €', gain: '+8,1%' },
              { name: 'Emerging Markets', allocation: '15%', value: '6.750,00 €', gain: '-3,2%' }
            ].map(position => (
              <div key={position.name} className="p-3 border-2 border-gray-300 bg-white rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-mono text-sm">{position.name}</div>
                    <div className="text-xs text-gray-500">Anteil: {position.allocation}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm font-bold">{position.value}</div>
                    <div className={`text-xs ${position.gain.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{position.gain}</div>
                  </div>
                </div>
                <button className="mt-2 w-full py-2 border-2 border-red-300 text-red-600 text-xs rounded min-h-[36px] flex items-center justify-center gap-1">
                  <ArrowUpDown className="w-4 h-4" />
                  Verkaufen
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    },
    'portfolio-savings-plan': {
      title: 'Portfolio-Sparplan',
      description: 'Regelmäßig ins Portfolio investieren',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-green-300 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2">
              <CalendarClock className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-mono text-sm text-green-800">Portfolio-Sparplan</div>
                <div className="text-xs text-green-600">Automatisch nach Strategie investieren</div>
              </div>
            </div>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Portfolio auswählen</label>
            <select className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm">
              <option>Wachstum (Aktien 80%)</option>
              <option>Ausgewogen (Aktien 50%)</option>
              <option>Konservativ (Aktien 20%)</option>
            </select>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Monatliche Sparrate</label>
            <div className="grid grid-cols-4 gap-2 mt-1">
              {['50 €', '100 €', '250 €', '500 €'].map(rate => (
                <button key={rate} className={`p-2 border-2 rounded text-xs font-mono ${rate === '100 €' ? 'border-purple-600 bg-purple-600 text-white' : 'border-gray-300 active:border-purple-400'}`}>
                  {rate}
                </button>
              ))}
            </div>
          </div>
          <div className="p-3 border-2 border-blue-300 bg-blue-50 rounded-lg">
            <div className="font-mono text-xs text-blue-800 mb-2">Prognose nach 10 Jahren</div>
            <div className="flex justify-between">
              <div>
                <div className="text-xs text-blue-600">Eingezahlt</div>
                <div className="font-mono text-sm font-bold text-blue-800">12.000 €</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-blue-600">Geschätzter Wert</div>
                <div className="font-mono text-sm font-bold text-blue-800">~18.500 €</div>
              </div>
            </div>
          </div>
          <button className="w-full p-3 bg-purple-600 text-white font-mono text-sm rounded-lg min-h-[48px]">
            Sparplan starten
          </button>
        </div>
      )
    },
    // Depot Features - Makler Kontakt
    'broker-info': {
      title: 'Ihr Makler',
      description: 'Persönlicher Ansprechpartner',
      content: (
        <div className="space-y-3">
          <div className="p-4 border-2 border-gray-300 bg-white rounded-lg text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
              <User className="w-10 h-10 text-gray-400" />
            </div>
            <div className="font-mono text-lg font-bold">Thomas Müller</div>
            <div className="text-sm text-gray-500">Zertifizierter Finanzberater</div>
            <div className="text-xs text-purple-600 mt-1">Seit 2019 Ihr Berater</div>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <div className="font-mono text-xs text-gray-600 mb-2">KONTAKTDATEN</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm">+49 89 123 456 78</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm">t.mueller@finanzberatung.de</span>
              </div>
            </div>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <div className="font-mono text-xs text-gray-600 mb-2">SPEZIALISIERUNG</div>
            <div className="flex flex-wrap gap-2">
              {['ETF-Strategien', 'Altersvorsorge', 'Vermögensaufbau'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    'broker-message': {
      title: 'Nachricht senden',
      description: 'Kontakt zum Makler',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <div className="font-mono text-sm">Thomas Müller</div>
                <div className="text-xs text-green-600">Online</div>
              </div>
            </div>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Betreff</label>
            <select className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm">
              <option>Allgemeine Frage</option>
              <option>Depot-Beratung</option>
              <option>Portfolio-Optimierung</option>
              <option>Sparplan-Beratung</option>
            </select>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Ihre Nachricht</label>
            <textarea
              placeholder="Schreiben Sie hier Ihre Nachricht..."
              className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm h-32 resize-none"
            />
          </div>
          <button className="w-full p-3 bg-purple-600 text-white font-mono text-sm rounded-lg min-h-[48px] flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            Nachricht senden
          </button>
        </div>
      )
    },
    'broker-appointment': {
      title: 'Termin vereinbaren',
      description: 'Beratungsgespräch buchen',
      content: (
        <div className="space-y-3">
          <div className="p-3 border-2 border-purple-300 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              <div>
                <div className="font-mono text-sm text-purple-800">Persönliche Beratung</div>
                <div className="text-xs text-purple-600">30 Min. kostenlos</div>
              </div>
            </div>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Terminart</label>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {['Video-Call', 'Telefon'].map(type => (
                <button key={type} className={`p-2 border-2 rounded text-xs font-mono ${type === 'Video-Call' ? 'border-purple-600 bg-purple-600 text-white' : 'border-gray-300'}`}>
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="p-3 border-2 border-gray-300 bg-white rounded-lg">
            <label className="font-mono text-xs text-gray-600">Thema</label>
            <select className="w-full mt-1 p-2 border-2 border-gray-300 rounded font-mono text-sm">
              <option>Depot-Beratung</option>
              <option>Portfolio-Check</option>
              <option>Anlagestrategie</option>
              <option>Sparplan-Optimierung</option>
            </select>
          </div>
          <h4 className="font-mono text-xs text-gray-600">VERFÜGBARE TERMINE</h4>
          <div className="space-y-2">
            {[
              { date: 'Mo, 03.03.2026', time: '10:00 Uhr' },
              { date: 'Di, 04.03.2026', time: '14:30 Uhr' },
              { date: 'Mi, 05.03.2026', time: '09:00 Uhr' },
              { date: 'Fr, 07.03.2026', time: '16:00 Uhr' }
            ].map((slot, idx) => (
              <button key={idx} className="w-full p-3 border-2 border-gray-300 bg-white rounded-lg text-left active:border-purple-400 active:bg-purple-50">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm">{slot.date}</span>
                  <span className="text-sm text-gray-600">{slot.time}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    }
  };

  const currentSection = mainSections.find(s => s.id === activeSection);

  const handleSubSectionClick = (id: string) => {
    setSelectedSubSection(selectedSubSection === id ? null : id);
    setSelectedFeature(null);
  };

  const handleFeatureClick = (featureId: string) => {
    setSelectedFeature(featureId);
  };

  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setSelectedSubSection(null);
    setSelectedFeature(null);
    setMenuOpen(false);
  };

  // Mobile Header Component
  const MobileHeader = ({ showBack = false, title = 'smartFK', subtitle = '' }: { showBack?: boolean; title?: string; subtitle?: string }) => {
    const colors = getColors();
    return (
      <header className={`sticky top-0 z-40 ${colors ? colors.bg : 'bg-gray-900'} text-white`}>
        <div className="px-4 py-3 flex items-center gap-3">
          {showBack ? (
            <button
              onClick={() => {
                if (selectedFeature) {
                  setSelectedFeature(null);
                } else {
                  setActiveSection(null);
                  setSelectedSubSection(null);
                }
              }}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:bg-white/20 rounded"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 border-2 border-white/30 active:bg-white/20 min-w-[44px] min-h-[44px] flex items-center justify-center rounded"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-mono font-bold truncate">{title}</h1>
            {subtitle && <p className="text-xs opacity-70 truncate">{subtitle}</p>}
          </div>
        </div>
      </header>
    );
  };

  // Mobile Menu Overlay
  const MobileMenu = () => (
    <>
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white overflow-y-auto">
            <div className="p-4 bg-gray-900 text-white flex items-center justify-between">
              <h2 className="font-mono font-bold">Kernfunktionen</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="p-2">
              {mainSections.map((section, sectionIndex) => {
                const colors = sectionColors[section.id];
                const romanNum = toRoman(sectionIndex + 1);
                return (
                  <button
                    key={section.id}
                    onClick={() => handleMenuItemClick(section.id)}
                    className={`w-full px-4 py-3 text-left rounded-lg min-h-[56px] flex items-center gap-3 mb-1 ${
                      activeSection === section.id
                        ? `${colors.bg} text-white`
                        : `active:${colors.light} border-l-4 ${colors.border}`
                    }`}
                  >
                    <div className={`w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 ${
                      activeSection === section.id ? 'bg-white/20' : `${colors.light} ${colors.text}`
                    }`}>
                      {romanNum}
                    </div>
                    <div>
                      <div className="font-mono text-sm">{section.title}</div>
                      <div className={`text-xs ${activeSection === section.id ? 'text-white/70' : 'text-gray-500'}`}>
                        {section.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );

  // Startscreen Component
  const StartScreen = () => (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      <MobileMenu />
      <header className="bg-gray-900 text-white sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 border-2 border-white/30 active:bg-white/20 min-w-[44px] min-h-[44px] flex items-center justify-center rounded"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-mono font-bold">smartFK</h1>
            <p className="text-xs opacity-70">Ihre Finanzen im Überblick</p>
          </div>
        </div>
      </header>
      <main className="px-4 py-6 pb-8">
        <h2 className="font-mono text-sm text-gray-600 mb-4">KERNFUNKTIONEN</h2>
        <div className="space-y-3">
          {mainSections.map((section, sectionIndex) => {
            const colors = sectionColors[section.id];
            const romanNum = toRoman(sectionIndex + 1);
            return (
              <button
                key={section.id}
                onClick={() => handleMenuItemClick(section.id)}
                className={`w-full p-4 rounded-xl text-left transition-all active:scale-[0.98] ${colors.light} border-2 ${colors.border}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center`}>
                    <span className="text-white font-mono font-bold text-lg">{romanNum}</span>
                  </div>
                  <div className="flex-1">
                    <div className={`font-mono text-base font-bold ${colors.text}`}>
                      <span className="opacity-60 mr-2">{romanNum}</span>
                      {section.title}
                    </div>
                    <div className="text-sm text-gray-600">{section.description}</div>
                    <div className="text-xs text-gray-400 mt-1">{section.subSections.length} Unterbereiche</div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${colors.text}`} />
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );

  // Show startscreen if no section selected
  if (!activeSection) {
    return <StartScreen />;
  }

  const colors = getColors()!;

  // Render feature page if one is selected
  if (selectedFeature && featurePages[selectedFeature]) {
    const page = featurePages[selectedFeature];
    return (
      <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
        <MobileMenu />
        <MobileHeader showBack title={page.title} subtitle={page.description} />
        <main className="px-4 py-4 pb-8">
          {page.content}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      <MobileMenu />
      <MobileHeader showBack title={currentSection?.title || ''} subtitle={currentSection?.description || ''} />

      <main className="px-4 py-4 pb-8">
        <div className="space-y-3">
          {currentSection && (() => {
            const sectionIndex = mainSections.findIndex(s => s.id === activeSection) + 1;
            const sectionRoman = toRoman(sectionIndex);
            return (
            <>
              <div className={`border-b-2 ${colors.border} pb-2 mb-3`}>
                <h2 className={`font-mono text-sm ${colors.text}`}>UNTERBEREICHE ({sectionRoman})</h2>
              </div>

              {currentSection.subSections.map((subSection, subIndex) => {
                const SubIcon = subSection.icon;
                const subSectionNum = `${sectionRoman}.${subIndex + 1}`;
                return (
                  <div key={subSection.id}>
                    <button
                      onClick={() => handleSubSectionClick(subSection.id)}
                      className={`w-full p-3 border-2 text-left transition-all rounded-lg min-h-[56px] ${
                        selectedSubSection === subSection.id
                          ? `${colors.bg} text-white ${colors.border}`
                          : `bg-white border-gray-300 active:${colors.border} active:${colors.light}`
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <div className={`w-8 h-8 rounded flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 ${
                          selectedSubSection === subSection.id ? 'bg-white/20 text-white' : `${colors.light} ${colors.text}`
                        }`}>
                          {subSectionNum}
                        </div>
                        <SubIcon className={`w-5 h-5 flex-shrink-0 mt-1 ${selectedSubSection !== subSection.id ? colors.text : ''}`} />
                        <div className="flex-1 min-w-0">
                          <div className="font-mono text-sm">{subSection.title}</div>
                          <div className="text-xs opacity-70">{subSection.description}</div>
                        </div>
                        <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                          selectedSubSection === subSection.id ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </button>

                    {selectedSubSection === subSection.id && (
                      <div className="ml-4 mt-2 mb-2 space-y-2">
                        <h4 className={`font-mono text-xs ${colors.text} mb-2`}>FUNKTIONEN ({subSectionNum})</h4>
                        {subSection.features.map((feature: Feature, featureIndex: number) => {
                          const featureNum = `${subSectionNum}.${toLetter(featureIndex + 1)}`;
                          return (
                          <button
                            key={feature.id}
                            onClick={() => handleFeatureClick(feature.id)}
                            className={`w-full p-3 border-2 ${colors.border} ${colors.light} active:opacity-80 transition-all text-left rounded-lg min-h-[48px]`}
                          >
                            <div className="flex items-center gap-2">
                              <div className={`min-w-[40px] h-6 px-1 rounded border-2 ${colors.border} bg-white flex items-center justify-center font-mono text-xs flex-shrink-0 ${colors.text}`}>
                                {featureNum}
                              </div>
                              <p className="font-mono text-xs flex-1 text-gray-800">{feature.title}</p>
                              <ChevronRight className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                            </div>
                          </button>
                        )})}
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          );})()}
        </div>
      </main>
    </div>
  );
}
