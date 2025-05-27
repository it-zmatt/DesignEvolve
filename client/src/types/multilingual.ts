import type { Language } from "@/lib/translations";

export interface MultilingualText {
  EN: string;
  AR: string;
  FR: string;
}

export interface MultilingualProject {
  id: number;
  title: MultilingualText;
  description: MultilingualText;
  location: MultilingualText;
  year: number;
  category: string;
  images: string[];
  featured: boolean;
  client?: MultilingualText;
  size?: string;
  budget?: string;
  duration?: MultilingualText;
  features?: {
    EN: string[];
    AR: string[];
    FR: string[];
  };
}

export interface MultilingualService {
  id: number;
  title: MultilingualText;
  description: MultilingualText;
  icon: string;
  order: number;
}

export interface MultilingualContent {
  id: number;
  key: string;
  value: MultilingualText;
}

// Localized versions (with resolved language)
export interface LocalizedProject {
  id: number;
  title: string;
  description: string;
  location: string;
  year: number;
  category: string;
  images: string[];
  featured: boolean;
  client: string | null;
  size: string | null;
  budget: string | null;
  duration: string | null;
  features: string[] | null;
}

export interface LocalizedService {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface LocalizedContent {
  id: number;
  key: string;
  value: string;
}

// Helper function to localize multilingual data
export function localizeText(text: MultilingualText | string, language: Language): string {
  if (typeof text === 'string') return text;
  return text[language] || text.EN || '';
}

export function localizeProject(project: MultilingualProject, language: Language): LocalizedProject {
  return {
    id: project.id,
    title: localizeText(project.title, language),
    description: localizeText(project.description, language),
    location: localizeText(project.location, language),
    year: project.year,
    category: project.category,
    images: project.images,
    featured: project.featured,
    client: project.client ? localizeText(project.client, language) : null,
    size: project.size || null,
    budget: project.budget || null,
    duration: project.duration ? localizeText(project.duration, language) : null,
    features: project.features ? project.features[language] || project.features.EN : null
  };
}

export function localizeService(service: MultilingualService, language: Language): LocalizedService {
  return {
    id: service.id,
    title: localizeText(service.title, language),
    description: localizeText(service.description, language),
    icon: service.icon,
    order: service.order
  };
}

export function localizeContent(content: MultilingualContent, language: Language): LocalizedContent {
  return {
    id: content.id,
    key: content.key,
    value: localizeText(content.value, language)
  };
} 