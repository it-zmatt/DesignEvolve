import projectsData from '@/data/projects.json';
import servicesData from '@/data/services.json';
import contentData from '@/data/content.json';
import type { Project, Service, Content } from '@shared/schema';

// Projects
export const getProjects = async (): Promise<Project[]> => {
  // Simulate network delay for realistic UX
  await new Promise(resolve => setTimeout(resolve, 300));
  return projectsData as Project[];
};

export const getProject = async (id: number): Promise<Project | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return projectsData.find(project => project.id === id) as Project | undefined;
};

export const getFeaturedProjects = async (): Promise<Project[]> => {
  await new Promise(resolve => setTimeout(resolve, 250));
  return projectsData.filter(project => project.featured) as Project[];
};

export const getProjectsByCategory = async (category: string): Promise<Project[]> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  if (category === 'all') {
    return projectsData as Project[];
  }
  return projectsData.filter(project => project.category === category) as Project[];
};

// Services
export const getServices = async (): Promise<Service[]> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return servicesData as Service[];
};

export const getService = async (id: number): Promise<Service | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 150));
  return servicesData.find(service => service.id === id) as Service | undefined;
};

// Content
export const getContent = async (): Promise<Content[]> => {
  await new Promise(resolve => setTimeout(resolve, 150));
  return contentData as Content[];
};

export const getContentValue = (key: string, fallback?: string): string => {
  const content = contentData.find(item => item.key === key);
  return content?.value || fallback || '';
};