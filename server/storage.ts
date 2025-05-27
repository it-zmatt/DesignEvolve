import { projects, services, content, contacts, type Project, type Service, type Content, type Contact, type InsertProject, type InsertService, type InsertContent, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;

  // Services
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: number, service: Partial<InsertService>): Promise<Service | undefined>;
  deleteService(id: number): Promise<boolean>;

  // Content
  getContent(key: string): Promise<Content | undefined>;
  getAllContent(): Promise<Content[]>;
  setContent(content: InsertContent): Promise<Content>;

  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private services: Map<number, Service>;
  private content: Map<string, Content>;
  private contacts: Map<number, Contact>;
  private currentProjectId: number;
  private currentServiceId: number;
  private currentContentId: number;
  private currentContactId: number;

  constructor() {
    this.projects = new Map();
    this.services = new Map();
    this.content = new Map();
    this.contacts = new Map();
    this.currentProjectId = 1;
    this.currentServiceId = 1;
    this.currentContentId = 1;
    this.currentContactId = 1;

    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample projects
    const sampleProjects: Project[] = [
      {
        id: 1,
        title: "Skyline Residence",
        description: "A modern family home featuring sustainable materials and panoramic city views with innovative design elements.",
        location: "San Francisco, CA",
        year: 2023,
        category: "residential",
        images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        featured: true,
        client: "Private Family",
        size: "3,500 sq ft",
        budget: "$2.5M",
        duration: "18 months",
        features: ["Sustainable materials", "Smart home integration", "Panoramic views", "Energy efficient design"]
      },
      {
        id: 2,
        title: "Tech Hub Central",
        description: "A state-of-the-art office complex designed for collaborative innovation and productivity in the heart of the tech district.",
        location: "Seattle, WA",
        year: 2022,
        category: "commercial",
        images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        featured: true,
        client: "Tech Corporation",
        size: "50,000 sq ft",
        budget: "$15M",
        duration: "24 months",
        features: ["Collaborative spaces", "Flexible layouts", "Green building certification", "Advanced technology integration"]
      },
      {
        id: 3,
        title: "Urban Loft Renovation",
        description: "Complete transformation of a historic loft into a contemporary living space that honors the building's heritage.",
        location: "New York, NY",
        year: 2023,
        category: "interior",
        images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        featured: true,
        client: "Urban Professional",
        size: "2,200 sq ft",
        budget: "$800K",
        duration: "12 months",
        features: ["Historic preservation", "Modern amenities", "Open floor plan", "Custom millwork"]
      },
      {
        id: 4,
        title: "Coastal Retreat",
        description: "A serene beachfront home designed to maximize ocean views while maintaining privacy and comfort.",
        location: "Malibu, CA",
        year: 2023,
        category: "residential",
        images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        featured: false,
        client: "Private Family",
        size: "4,800 sq ft",
        budget: "$4.2M",
        duration: "20 months",
        features: ["Ocean views", "Indoor-outdoor living", "Natural materials", "Infinity pool"]
      },
      {
        id: 5,
        title: "Downtown Mixed-Use",
        description: "A contemporary mixed-use development combining retail, office, and residential spaces in an urban setting.",
        location: "Portland, OR",
        year: 2022,
        category: "commercial",
        images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        featured: false,
        client: "Development Group",
        size: "120,000 sq ft",
        budget: "$25M",
        duration: "36 months",
        features: ["Mixed-use design", "Transit-oriented development", "Sustainable systems", "Community spaces"]
      }
    ];

    // Sample services
    const sampleServices: Service[] = [
      {
        id: 1,
        title: "Residential Design",
        description: "Custom home design services from concept to completion, creating personalized living spaces that reflect your lifestyle and preferences.",
        icon: "fas fa-home",
        order: 1
      },
      {
        id: 2,
        title: "Commercial Design",
        description: "Innovative commercial spaces that enhance productivity and brand identity while meeting functional requirements and regulations.",
        icon: "fas fa-building",
        order: 2
      },
      {
        id: 3,
        title: "Interior Design",
        description: "Complete interior design solutions that seamlessly integrate with architectural elements to create cohesive, beautiful spaces.",
        icon: "fas fa-paint-brush",
        order: 3
      },
      {
        id: 4,
        title: "Permits & Approvals",
        description: "Complete permit acquisition and regulatory approval services to ensure your project meets all local building codes and requirements.",
        icon: "fas fa-file-alt",
        order: 4
      },
      {
        id: 5,
        title: "Project Management",
        description: "End-to-end project oversight ensuring timely delivery, budget adherence, and quality standards throughout construction.",
        icon: "fas fa-tasks",
        order: 5
      },
      {
        id: 6,
        title: "Sustainable Design",
        description: "Environmentally conscious design solutions that reduce environmental impact while maintaining exceptional aesthetics and functionality.",
        icon: "fas fa-leaf",
        order: 6
      }
    ];

    // Sample content
    const sampleContent: Content[] = [
      {
        id: 1,
        key: "hero.title",
        value: "Timeless Architecture",
        updatedAt: new Date()
      },
      {
        id: 2,
        key: "hero.subtitle", 
        value: "10+ Years. 50+ Projects. Exceptional Design.",
        updatedAt: new Date()
      },
      {
        id: 3,
        key: "about.title",
        value: "About AXIS",
        updatedAt: new Date()
      },
      {
        id: 4,
        key: "about.description",
        value: "Founded in 2013, AXIS Architecture has been at the forefront of innovative design, creating spaces that seamlessly blend functionality with aesthetic excellence. Our team of experienced architects believes that great architecture should not only serve its purpose but also inspire and elevate the human experience.",
        updatedAt: new Date()
      },
      {
        id: 5,
        key: "contact.address",
        value: "123 Architecture Plaza\nSan Francisco, CA 94102\nUnited States",
        updatedAt: new Date()
      },
      {
        id: 6,
        key: "contact.phone",
        value: "(415) 555-0123",
        updatedAt: new Date()
      },
      {
        id: 7,
        key: "contact.email",
        value: "info@axisarchitecture.com",
        updatedAt: new Date()
      },
      {
        id: 8,
        key: "contact.hours",
        value: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
        updatedAt: new Date()
      }
    ];

    // Initialize data
    sampleProjects.forEach(project => {
      this.projects.set(project.id, project);
      this.currentProjectId = Math.max(this.currentProjectId, project.id + 1);
    });

    sampleServices.forEach(service => {
      this.services.set(service.id, service);
      this.currentServiceId = Math.max(this.currentServiceId, service.id + 1);
    });

    sampleContent.forEach(content => {
      this.content.set(content.key, content);
      this.currentContentId = Math.max(this.currentContentId, content.id + 1);
    });
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => b.year - a.year);
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.featured)
      .sort((a, b) => b.year - a.year);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.category === category)
      .sort((a, b) => b.year - a.year);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async updateProject(id: number, updates: Partial<InsertProject>): Promise<Project | undefined> {
    const project = this.projects.get(id);
    if (!project) return undefined;

    const updatedProject = { ...project, ...updates };
    this.projects.set(id, updatedProject);
    return updatedProject;
  }

  async deleteProject(id: number): Promise<boolean> {
    return this.projects.delete(id);
  }

  // Services
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values()).sort((a, b) => a.order - b.order);
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  async updateService(id: number, updates: Partial<InsertService>): Promise<Service | undefined> {
    const service = this.services.get(id);
    if (!service) return undefined;

    const updatedService = { ...service, ...updates };
    this.services.set(id, updatedService);
    return updatedService;
  }

  async deleteService(id: number): Promise<boolean> {
    return this.services.delete(id);
  }

  // Content
  async getContent(key: string): Promise<Content | undefined> {
    return this.content.get(key);
  }

  async getAllContent(): Promise<Content[]> {
    return Array.from(this.content.values());
  }

  async setContent(insertContent: InsertContent): Promise<Content> {
    const existing = this.content.get(insertContent.key);
    const content: Content = {
      id: existing?.id || this.currentContentId++,
      key: insertContent.key,
      value: insertContent.value,
      updatedAt: new Date()
    };
    this.content.set(insertContent.key, content);
    return content;
  }

  // Contacts
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
