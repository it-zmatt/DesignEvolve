import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Edit, Trash2, Save, X, Eye, Mail, MapPin, Phone, Clock } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { insertProjectSchema, insertServiceSchema, insertContentSchema } from "@shared/schema";
import type { Project, Service, Content, Contact, InsertProject, InsertService, InsertContent } from "@shared/schema";
import { cn, truncateText } from "@/lib/utils";
import { z } from "zod";

const projectFormSchema = insertProjectSchema.extend({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  location: z.string().min(1, "Location is required"),
  year: z.number().min(1900).max(new Date().getFullYear() + 10),
  category: z.enum(["residential", "commercial", "interior"]),
  images: z.array(z.string().url("Must be valid URL")).min(1, "At least one image is required"),
});

const serviceFormSchema = insertServiceSchema.extend({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  icon: z.string().min(1, "Icon is required"),
  order: z.number().min(0),
});

const contentFormSchema = insertContentSchema.extend({
  key: z.string().min(1, "Key is required"),
  value: z.string().min(1, "Value is required"),
});

type ProjectFormData = z.infer<typeof projectFormSchema>;
type ServiceFormData = z.infer<typeof serviceFormSchema>;
type ContentFormData = z.infer<typeof contentFormSchema>;

export default function Admin() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("projects");
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [editingContent, setEditingContent] = useState<Content | null>(null);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [isContentDialogOpen, setIsContentDialogOpen] = useState(false);

  // Queries
  const { data: projects, isLoading: projectsLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const { data: services, isLoading: servicesLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const { data: content, isLoading: contentLoading } = useQuery<Content[]>({
    queryKey: ["/api/content"],
  });

  const { data: contacts, isLoading: contactsLoading } = useQuery<Contact[]>({
    queryKey: ["/api/contacts"],
  });

  // Forms
  const projectForm = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      year: new Date().getFullYear(),
      category: "residential",
      images: [""],
      featured: false,
      client: "",
      size: "",
      budget: "",
      duration: "",
      features: [""],
    },
  });

  const serviceForm = useForm<ServiceFormData>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      title: "",
      description: "",
      icon: "fas fa-home",
      order: 0,
    },
  });

  const contentForm = useForm<ContentFormData>({
    resolver: zodResolver(contentFormSchema),
    defaultValues: {
      key: "",
      value: "",
    },
  });

  // Mutations
  const createProjectMutation = useMutation({
    mutationFn: async (data: InsertProject) => {
      const response = await apiRequest("POST", "/api/projects", data);
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Project created successfully" });
      queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
      setIsProjectDialogOpen(false);
      projectForm.reset();
    },
    onError: () => {
      toast({ title: "Error creating project", variant: "destructive" });
    },
  });

  const updateProjectMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<InsertProject> }) => {
      const response = await apiRequest("PUT", `/api/projects/${id}`, data);
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Project updated successfully" });
      queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
      setEditingProject(null);
      setIsProjectDialogOpen(false);
      projectForm.reset();
    },
    onError: () => {
      toast({ title: "Error updating project", variant: "destructive" });
    },
  });

  const deleteProjectMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/projects/${id}`);
    },
    onSuccess: () => {
      toast({ title: "Project deleted successfully" });
      queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
    },
    onError: () => {
      toast({ title: "Error deleting project", variant: "destructive" });
    },
  });

  const createServiceMutation = useMutation({
    mutationFn: async (data: InsertService) => {
      const response = await apiRequest("POST", "/api/services", data);
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Service created successfully" });
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
      setIsServiceDialogOpen(false);
      serviceForm.reset();
    },
    onError: () => {
      toast({ title: "Error creating service", variant: "destructive" });
    },
  });

  const updateServiceMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<InsertService> }) => {
      const response = await apiRequest("PUT", `/api/services/${id}`, data);
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Service updated successfully" });
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
      setEditingService(null);
      setIsServiceDialogOpen(false);
      serviceForm.reset();
    },
    onError: () => {
      toast({ title: "Error updating service", variant: "destructive" });
    },
  });

  const deleteServiceMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/services/${id}`);
    },
    onSuccess: () => {
      toast({ title: "Service deleted successfully" });
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
    },
    onError: () => {
      toast({ title: "Error deleting service", variant: "destructive" });
    },
  });

  const updateContentMutation = useMutation({
    mutationFn: async (data: InsertContent) => {
      const response = await apiRequest("POST", "/api/content", data);
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Content updated successfully" });
      queryClient.invalidateQueries({ queryKey: ["/api/content"] });
      setEditingContent(null);
      setIsContentDialogOpen(false);
      contentForm.reset();
    },
    onError: () => {
      toast({ title: "Error updating content", variant: "destructive" });
    },
  });

  // Handlers
  const handleCreateProject = (data: ProjectFormData) => {
    const processedData = {
      ...data,
      images: data.images.filter(img => img.trim() !== ""),
      features: data.features?.filter(feature => feature.trim() !== "") || [],
    };
    createProjectMutation.mutate(processedData);
  };

  const handleUpdateProject = (data: ProjectFormData) => {
    if (!editingProject) return;
    const processedData = {
      ...data,
      images: data.images.filter(img => img.trim() !== ""),
      features: data.features?.filter(feature => feature.trim() !== "") || [],
    };
    updateProjectMutation.mutate({ id: editingProject.id, data: processedData });
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    projectForm.reset({
      ...project,
      images: project.images.length > 0 ? project.images : [""],
      features: project.features?.length > 0 ? project.features : [""],
    });
    setIsProjectDialogOpen(true);
  };

  const handleCreateService = (data: ServiceFormData) => {
    createServiceMutation.mutate(data);
  };

  const handleUpdateService = (data: ServiceFormData) => {
    if (!editingService) return;
    updateServiceMutation.mutate({ id: editingService.id, data });
  };

  const handleEditService = (service: Service) => {
    setEditingService(service);
    serviceForm.reset(service);
    setIsServiceDialogOpen(true);
  };

  const handleEditContent = (contentItem: Content) => {
    setEditingContent(contentItem);
    contentForm.reset({
      key: contentItem.key,
      value: contentItem.value,
    });
    setIsContentDialogOpen(true);
  };

  const handleUpdateContent = (data: ContentFormData) => {
    updateContentMutation.mutate(data);
  };

  const addImageField = () => {
    const currentImages = projectForm.getValues("images");
    projectForm.setValue("images", [...currentImages, ""]);
  };

  const removeImageField = (index: number) => {
    const currentImages = projectForm.getValues("images");
    if (currentImages.length > 1) {
      projectForm.setValue("images", currentImages.filter((_, i) => i !== index));
    }
  };

  const addFeatureField = () => {
    const currentFeatures = projectForm.getValues("features") || [];
    projectForm.setValue("features", [...currentFeatures, ""]);
  };

  const removeFeatureField = (index: number) => {
    const currentFeatures = projectForm.getValues("features") || [];
    projectForm.setValue("features", currentFeatures.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-muted">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Admin Panel</h1>
            <p className="text-muted-foreground">Manage your architecture firm's content and projects</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
            </TabsList>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Manage Projects</h2>
                <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => {
                      setEditingProject(null);
                      projectForm.reset({
                        title: "",
                        description: "",
                        location: "",
                        year: new Date().getFullYear(),
                        category: "residential",
                        images: [""],
                        featured: false,
                        client: "",
                        size: "",
                        budget: "",
                        duration: "",
                        features: [""],
                      });
                    }}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        {editingProject ? "Edit Project" : "Create New Project"}
                      </DialogTitle>
                    </DialogHeader>
                    <Form {...projectForm}>
                      <form
                        onSubmit={projectForm.handleSubmit(
                          editingProject ? handleUpdateProject : handleCreateProject
                        )}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={projectForm.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={projectForm.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="residential">Residential</SelectItem>
                                    <SelectItem value="commercial">Commercial</SelectItem>
                                    <SelectItem value="interior">Interior</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={projectForm.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Textarea {...field} rows={4} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <FormField
                            control={projectForm.control}
                            name="location"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={projectForm.control}
                            name="year"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Year</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    {...field}
                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={projectForm.control}
                            name="featured"
                            render={({ field }) => (
                              <FormItem className="flex items-center space-x-2 space-y-0 pt-6">
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel>Featured Project</FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <FormField
                            control={projectForm.control}
                            name="client"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Client</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={projectForm.control}
                            name="size"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Size</FormLabel>
                                <FormControl>
                                  <Input {...field} placeholder="e.g., 3,500 sq ft" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={projectForm.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Budget</FormLabel>
                                <FormControl>
                                  <Input {...field} placeholder="e.g., $2.5M" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={projectForm.control}
                            name="duration"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Duration</FormLabel>
                                <FormControl>
                                  <Input {...field} placeholder="e.g., 18 months" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Images */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <FormLabel>Images (URLs)</FormLabel>
                            <Button type="button" variant="outline" size="sm" onClick={addImageField}>
                              <Plus className="w-4 h-4 mr-2" />
                              Add Image
                            </Button>
                          </div>
                          {projectForm.watch("images").map((_, index) => (
                            <div key={index} className="flex gap-2">
                              <FormField
                                control={projectForm.control}
                                name={`images.${index}`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input {...field} placeholder="https://example.com/image.jpg" />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              {projectForm.watch("images").length > 1 && (
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => removeImageField(index)}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <FormLabel>Features</FormLabel>
                            <Button type="button" variant="outline" size="sm" onClick={addFeatureField}>
                              <Plus className="w-4 h-4 mr-2" />
                              Add Feature
                            </Button>
                          </div>
                          {(projectForm.watch("features") || []).map((_, index) => (
                            <div key={index} className="flex gap-2">
                              <FormField
                                control={projectForm.control}
                                name={`features.${index}`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input {...field} placeholder="e.g., Sustainable materials" />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removeFeatureField(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-end space-x-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsProjectDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            disabled={createProjectMutation.isPending || updateProjectMutation.isPending}
                          >
                            {createProjectMutation.isPending || updateProjectMutation.isPending ? (
                              "Saving..."
                            ) : editingProject ? (
                              "Update Project"
                            ) : (
                              "Create Project"
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>

              {projectsLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <Skeleton className="h-48 w-full mb-4" />
                        <Skeleton className="h-4 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects?.map((project) => (
                    <Card key={project.id} className="relative">
                      <CardContent className="p-6">
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant={project.featured ? "default" : "secondary"}>
                            {project.category}
                          </Badge>
                          {project.featured && (
                            <Badge variant="outline">Featured</Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {truncateText(project.description, 100)}
                        </p>
                        <div className="text-sm text-muted-foreground mb-4">
                          {project.location} • {project.year}
                        </div>
                        <div className="flex justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditProject(project)}
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteProjectMutation.mutate(project.id)}
                            disabled={deleteProjectMutation.isPending}
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Manage Services</h2>
                <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => {
                      setEditingService(null);
                      serviceForm.reset({
                        title: "",
                        description: "",
                        icon: "fas fa-home",
                        order: 0,
                      });
                    }}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Service
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>
                        {editingService ? "Edit Service" : "Create New Service"}
                      </DialogTitle>
                    </DialogHeader>
                    <Form {...serviceForm}>
                      <form
                        onSubmit={serviceForm.handleSubmit(
                          editingService ? handleUpdateService : handleCreateService
                        )}
                        className="space-y-6"
                      >
                        <FormField
                          control={serviceForm.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Title</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={serviceForm.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Textarea {...field} rows={4} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-2 gap-6">
                          <FormField
                            control={serviceForm.control}
                            name="icon"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Icon (FontAwesome class)</FormLabel>
                                <FormControl>
                                  <Input {...field} placeholder="fas fa-home" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={serviceForm.control}
                            name="order"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Order</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    {...field}
                                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="flex justify-end space-x-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsServiceDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            disabled={createServiceMutation.isPending || updateServiceMutation.isPending}
                          >
                            {createServiceMutation.isPending || updateServiceMutation.isPending ? (
                              "Saving..."
                            ) : editingService ? (
                              "Update Service"
                            ) : (
                              "Create Service"
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>

              {servicesLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <Skeleton className="h-12 w-12 mb-4" />
                        <Skeleton className="h-4 w-3/4 mb-2" />
                        <Skeleton className="h-16 w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services?.map((service) => (
                    <Card key={service.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-accent text-3xl">
                            <i className={service.icon}></i>
                          </div>
                          <Badge variant="outline">Order: {service.order}</Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {truncateText(service.description, 100)}
                        </p>
                        <div className="flex justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditService(service)}
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteServiceMutation.mutate(service.id)}
                            disabled={deleteServiceMutation.isPending}
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Manage Content</h2>
                <Dialog open={isContentDialogOpen} onOpenChange={setIsContentDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => {
                      setEditingContent(null);
                      contentForm.reset({ key: "", value: "" });
                    }}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Content
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>
                        {editingContent ? "Edit Content" : "Create New Content"}
                      </DialogTitle>
                    </DialogHeader>
                    <Form {...contentForm}>
                      <form
                        onSubmit={contentForm.handleSubmit(handleUpdateContent)}
                        className="space-y-6"
                      >
                        <FormField
                          control={contentForm.control}
                          name="key"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Key</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="e.g., hero.title" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contentForm.control}
                          name="value"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Value</FormLabel>
                              <FormControl>
                                <Textarea {...field} rows={6} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex justify-end space-x-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsContentDialogOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            disabled={updateContentMutation.isPending}
                          >
                            {updateContentMutation.isPending ? "Saving..." : "Save Content"}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>

              {contentLoading ? (
                <div className="space-y-4">
                  {[...Array(8)].map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <Skeleton className="h-4 w-1/4 mb-2" />
                        <Skeleton className="h-16 w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {content?.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1 mr-4">
                            <h3 className="font-semibold text-lg mb-2">{item.key}</h3>
                            <p className="text-muted-foreground whitespace-pre-wrap">
                              {truncateText(item.value, 200)}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              Updated: {new Date(item.updatedAt).toLocaleDateString()}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditContent(item)}
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="contacts" className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Submissions</h2>

              {contactsLoading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <Skeleton className="h-4 w-1/4 mb-2" />
                        <Skeleton className="h-4 w-1/3 mb-2" />
                        <Skeleton className="h-16 w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : contacts && contacts.length > 0 ? (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <Card key={contact.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{contact.name}</h3>
                            <div className="flex items-center gap-4 text-muted-foreground text-sm">
                              <div className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {contact.email}
                              </div>
                              {contact.projectType && (
                                <Badge variant="outline">{contact.projectType}</Badge>
                              )}
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(contact.createdAt).toLocaleDateString()} at{" "}
                            {new Date(contact.createdAt).toLocaleTimeString()}
                          </div>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="whitespace-pre-wrap">{contact.message}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Mail className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">No contact submissions yet</h3>
                    <p className="text-muted-foreground">
                      Contact form submissions will appear here once visitors start reaching out.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
