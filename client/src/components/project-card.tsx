import { Link } from "wouter";
import { MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";
import { cn, getImageUrl, truncateText } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const categoryColors = {
    residential: "bg-green-100 text-green-800",
    commercial: "bg-blue-100 text-blue-800",
    interior: "bg-purple-100 text-purple-800",
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className={cn("project-card cursor-pointer group", className)}>
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={getImageUrl(project.images[0] || "")}
            alt={project.title}
            className="w-full h-64 object-cover project-image"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge
              className={cn(
                "text-xs",
                categoryColors[project.category as keyof typeof categoryColors]
              )}
            >
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="secondary" className="text-xs">
                Featured
              </Badge>
            )}
          </div>

          <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {truncateText(project.description, 120)}
          </p>

          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{project.year}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
