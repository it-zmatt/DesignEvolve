import type { Language } from "@/lib/translations";
import type { 
  MultilingualProject, 
  MultilingualService, 
  MultilingualContent,
  LocalizedProject,
  LocalizedService,
  LocalizedContent,
  localizeProject,
  localizeService,
  localizeContent
} from "@/types/multilingual";

// Import the localization functions
import { 
  localizeProject as localize_Project,
  localizeService as localize_Service,
  localizeContent as localize_Content
} from "@/types/multilingual";

// Import JSON data
import projectsData from "@/data/projects.json";
import servicesData from "@/data/services.json";
import contentData from "@/data/content.json";

const multilingualProjects = projectsData as MultilingualProject[];
const multilingualServices = servicesData as MultilingualService[];
const multilingualContent = contentData as MultilingualContent[];

export async function getLocalizedProjects(language: Language): Promise<LocalizedProject[]> {
  return multilingualProjects.map(project => localize_Project(project, language));
}

export async function getLocalizedFeaturedProjects(language: Language): Promise<LocalizedProject[]> {
  const projects = await getLocalizedProjects(language);
  return projects.filter(project => project.featured);
}

export async function getLocalizedProjectsByCategory(language: Language, category: string): Promise<LocalizedProject[]> {
  const projects = await getLocalizedProjects(language);
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
}

export async function getLocalizedProject(language: Language, id: number): Promise<LocalizedProject | undefined> {
  const project = multilingualProjects.find(p => p.id === id);
  return project ? localize_Project(project, language) : undefined;
}

export async function getLocalizedServices(language: Language): Promise<LocalizedService[]> {
  return multilingualServices
    .map(service => localize_Service(service, language))
    .sort((a, b) => a.order - b.order);
}

export async function getLocalizedContent(language: Language): Promise<LocalizedContent[]> {
  return multilingualContent.map(content => localize_Content(content, language));
}

export async function getLocalizedContentValue(language: Language, key: string, fallback: string = ""): Promise<string> {
  const content = multilingualContent.find(c => c.key === key);
  if (!content) return fallback;
  
  const localizedContent = localize_Content(content, language);
  return localizedContent.value || fallback;
} 