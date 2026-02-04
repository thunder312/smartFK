<script setup lang="ts">
import { useNavigationStore } from '~/stores/navigation'
import { useSectionsStore } from '~/stores/sections'

// Import all feature components for dynamic resolution
import FeaturesSmartbankingLinkAccounts from '~/components/features/smartbanking/LinkAccounts.vue'
import FeaturesSmartbankingBalances from '~/components/features/smartbanking/Balances.vue'
import FeaturesSmartbankingUpcomingExpenses from '~/components/features/smartbanking/UpcomingExpenses.vue'
import FeaturesSmartbankingSalaryIncome from '~/components/features/smartbanking/SalaryIncome.vue'
import FeaturesSmartbankingRecurringTransactions from '~/components/features/smartbanking/RecurringTransactions.vue'
import FeaturesSmartbankingAutoUpdate from '~/components/features/smartbanking/AutoUpdate.vue'

import FeaturesAnalyticsConsumptionPatterns from '~/components/features/analytics/ConsumptionPatterns.vue'
import FeaturesAnalyticsAutoCategorize from '~/components/features/analytics/AutoCategorize.vue'
import FeaturesAnalyticsCategories from '~/components/features/analytics/Categories.vue'
import FeaturesAnalyticsMonthlyReports from '~/components/features/analytics/MonthlyReports.vue'
import FeaturesAnalyticsTrends from '~/components/features/analytics/Trends.vue'
import FeaturesAnalyticsCategoryBudgets from '~/components/features/analytics/CategoryBudgets.vue'
import FeaturesAnalyticsBudgetAdjustments from '~/components/features/analytics/BudgetAdjustments.vue'

import FeaturesContractsDetectContracts from '~/components/features/contracts/DetectContracts.vue'
import FeaturesContractsContractTypes from '~/components/features/contracts/ContractTypes.vue'
import FeaturesContractsMonthlyCosts from '~/components/features/contracts/MonthlyCosts.vue'
import FeaturesContractsDeadlines from '~/components/features/contracts/Deadlines.vue'
import FeaturesContractsCancelContract from '~/components/features/contracts/CancelContract.vue'
import FeaturesContractsSwitchProvider from '~/components/features/contracts/SwitchProvider.vue'

import FeaturesSavingsUnusedSubscriptions from '~/components/features/savings/UnusedSubscriptions.vue'
import FeaturesSavingsExpensiveContracts from '~/components/features/savings/ExpensiveContracts.vue'
import FeaturesSavingsDefineGoals from '~/components/features/savings/DefineGoals.vue'
import FeaturesSavingsBudgetAlerts from '~/components/features/savings/BudgetAlerts.vue'
import FeaturesSavingsImproveBehavior from '~/components/features/savings/ImproveBehavior.vue'
import FeaturesSavingsUnderstandFinance from '~/components/features/savings/UnderstandFinance.vue'

import FeaturesDepotCustodianOverview from '~/components/features/depot/CustodianOverview.vue'
import FeaturesDepotCustodianContact from '~/components/features/depot/CustodianContact.vue'
import FeaturesDepotDepotOverview from '~/components/features/depot/DepotOverview.vue'
import FeaturesDepotDepotBuy from '~/components/features/depot/DepotBuy.vue'
import FeaturesDepotDepotSell from '~/components/features/depot/DepotSell.vue'
import FeaturesDepotDepotSavingsPlan from '~/components/features/depot/DepotSavingsPlan.vue'
import FeaturesDepotPortfolioOverview from '~/components/features/depot/PortfolioOverview.vue'
import FeaturesDepotPortfolioBuy from '~/components/features/depot/PortfolioBuy.vue'
import FeaturesDepotPortfolioSell from '~/components/features/depot/PortfolioSell.vue'
import FeaturesDepotPortfolioSavingsPlan from '~/components/features/depot/PortfolioSavingsPlan.vue'
import FeaturesDepotBrokerInfo from '~/components/features/depot/BrokerInfo.vue'
import FeaturesDepotBrokerMessage from '~/components/features/depot/BrokerMessage.vue'
import FeaturesDepotBrokerAppointment from '~/components/features/depot/BrokerAppointment.vue'

const route = useRoute()
const navigation = useNavigationStore()
const sections = useSectionsStore()

// Component map for dynamic loading
const componentMap: Record<string, any> = {
  // Smartbanking
  'smartbanking-link-accounts': FeaturesSmartbankingLinkAccounts,
  'smartbanking-balances': FeaturesSmartbankingBalances,
  'smartbanking-upcoming': FeaturesSmartbankingUpcomingExpenses,
  'smartbanking-salary': FeaturesSmartbankingSalaryIncome,
  'smartbanking-recurring': FeaturesSmartbankingRecurringTransactions,
  'smartbanking-auto-update': FeaturesSmartbankingAutoUpdate,
  // Analytics
  'analytics-consumption-patterns': FeaturesAnalyticsConsumptionPatterns,
  'analytics-auto-categorize': FeaturesAnalyticsAutoCategorize,
  'analytics-categories': FeaturesAnalyticsCategories,
  'analytics-monthly-reports': FeaturesAnalyticsMonthlyReports,
  'analytics-trends': FeaturesAnalyticsTrends,
  'analytics-category-budgets': FeaturesAnalyticsCategoryBudgets,
  'analytics-budget-adjustments': FeaturesAnalyticsBudgetAdjustments,
  // Contracts
  'contracts-detect-contracts': FeaturesContractsDetectContracts,
  'contracts-contract-types': FeaturesContractsContractTypes,
  'contracts-monthly-costs': FeaturesContractsMonthlyCosts,
  'contracts-deadlines': FeaturesContractsDeadlines,
  'contracts-cancel-contract': FeaturesContractsCancelContract,
  'contracts-switch-provider': FeaturesContractsSwitchProvider,
  // Savings
  'savings-unused-subscriptions': FeaturesSavingsUnusedSubscriptions,
  'savings-expensive-contracts': FeaturesSavingsExpensiveContracts,
  'savings-define-goals': FeaturesSavingsDefineGoals,
  'savings-budget-alerts': FeaturesSavingsBudgetAlerts,
  'savings-improve-behavior': FeaturesSavingsImproveBehavior,
  'savings-understand-finance': FeaturesSavingsUnderstandFinance,
  // Depot
  'depot-custodian-overview': FeaturesDepotCustodianOverview,
  'depot-custodian-contact': FeaturesDepotCustodianContact,
  'depot-depot-overview': FeaturesDepotDepotOverview,
  'depot-depot-buy': FeaturesDepotDepotBuy,
  'depot-depot-sell': FeaturesDepotDepotSell,
  'depot-depot-savings-plan': FeaturesDepotDepotSavingsPlan,
  'depot-portfolio-overview': FeaturesDepotPortfolioOverview,
  'depot-portfolio-buy': FeaturesDepotPortfolioBuy,
  'depot-portfolio-sell': FeaturesDepotPortfolioSell,
  'depot-portfolio-savings-plan': FeaturesDepotPortfolioSavingsPlan,
  'depot-broker-info': FeaturesDepotBrokerInfo,
  'depot-broker-message': FeaturesDepotBrokerMessage,
  'depot-broker-appointment': FeaturesDepotBrokerAppointment
}

// Get current section and feature from route
const sectionId = computed(() => route.params.section as string)
const featureId = computed(() => route.params.feature as string)
const featureData = computed(() => sections.getFeaturePageData(featureId.value))
const colors = computed(() => sections.getColorsForSection(sectionId.value))

// Set navigation state
watch([sectionId, featureId], ([section, feature]) => {
  navigation.setActiveSection(section)
  navigation.setSelectedFeature(feature)
}, { immediate: true })

// Redirect if feature not found
onMounted(() => {
  if (!featureData.value) {
    navigateTo(`/${sectionId.value}`)
  }
})

// Get the component for current feature
const currentComponent = computed(() => {
  const key = `${sectionId.value}-${featureId.value}`
  return componentMap[key] || null
})
</script>

<template>
  <div v-if="featureData && colors" class="min-h-screen min-h-dvh bg-gray-50">
    <!-- Header -->
    <MobileHeader
      show-back
      :title="featureData.title"
      :subtitle="featureData.description"
    />

    <!-- Main Content -->
    <main class="px-4 py-4 pb-8 safe-area-bottom">
      <!-- Dynamic Feature Component -->
      <component
        :is="currentComponent"
        v-if="currentComponent"
        :colors="colors"
      />

      <!-- Fallback if component not found -->
      <div v-else class="text-center py-8">
        <p class="text-gray-500 font-mono text-sm">
          Feature-Inhalt wird geladen...
        </p>
      </div>
    </main>
  </div>
</template>
