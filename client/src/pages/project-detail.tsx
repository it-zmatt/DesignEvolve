import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { ArrowLeft, MapPin, Calendar, User, Home, Clock, DollarSign } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, getImageUrl } from "@/lib/utils";
import type { Project } from "@shared/schema";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id ? parseInt(params.id) : null;

  const { data: project, isLoading, error } = useQuery<Project>({
    queryKey: [`/api/projects/${projectId}`],
    enabled: !!projectId,
  });

  const categoryColors = {
    residential: "bg-green-100 text-green-800",
    commercial: "bg-blue-100 text-blue-800",
    interior: "bg-purple-100 text-purple-800",
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
          <Link href="/portfolio">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-96 w-full rounded-lg" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <Skeleton className="h-6 w-1/2" />
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
                <div className="space-y-6">
                  <Skeleton className="h-6 w-1/2" />
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : project ? (
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Project Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Badge
                  className={cn(
                    "text-sm",
                    categoryColors[project.category as keyof typeof categoryColors]
                  )}
                >
                  {project.category}
                </Badge>
                {project.featured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
              </div>
              
              <h1 className="heading-primary mb-4">{project.title}</h1>
              
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{project.year}</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mb-16">
              <img
                src={getImageUrl(project.images[0] || "")}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Project Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* Description */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    Project Overview
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-accent">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-6">
                    Project Details
                  </h2>
                  
                  <div className="space-y-6">
                    {project.client && (
                      <div className="flex items-start gap-4">
                        <User className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Client</h4>
                          <p className="text-muted-foreground">{project.client}</p>
                        </div>
                      </div>
                    )}

                    {project.size && (
                      <div className="flex items-start gap-4">
                        <Home className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Project Size</h4>
                          <p className="text-muted-foreground">{project.size}</p>
                        </div>
                      </div>
                    )}

                    {project.duration && (
                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Duration</h4>
                          <p className="text-muted-foreground">{project.duration}</p>
                        </div>
                      </div>
                    )}

                    {project.budget && (
                      <div className="flex items-start gap-4">
                        <DollarSign className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Budget</h4>
                          <p className="text-muted-foreground">{project.budget}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            {project.images && project.images.length > 1 && (
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-primary mb-8">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={getImageUrl(image)}
                      alt={`${project.title} - Image ${index + 2}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Related Projects CTA */}
            <div className="border-t border-border pt-16 text-center">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Interested in Similar Projects?
              </h2>
              <p className="text-muted-foreground mb-8">
                Explore more of our architectural work or get in touch to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portfolio">
                  <Button variant="outline">View More Projects</Button>
                </Link>
                <Link href="/contact">
                  <Button>Start Your Project</Button>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <Footer />
    </div>
  );
}
