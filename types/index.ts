import type { Component } from 'vue'

export interface Feature {
  id: string
  title: string
}

export interface SubSection {
  id: string
  icon: Component
  title: string
  description: string
  features: Feature[]
}

export interface MainSection {
  id: string
  icon: Component
  title: string
  description: string
  subSections: SubSection[]
}

export interface SectionColors {
  primary: string
  light: string
  dark: string
  border: string
  text: string
  bg: string
}

export type SectionColorMap = Record<string, SectionColors>

export interface FeaturePageContent {
  title: string
  description: string
  sectionId: string
}
