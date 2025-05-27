import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/TranslationContext";
import { useDirection } from "@/hooks/useDirection";
import { getLocalizedProjectsByCategory } from "@/lib/multilingualDataService";
import type { LocalizedProject } from "@/types/multilingual";

export default function Portfolio() {
  const { t, language } = useTranslation();
  const { dir } = useDirection();
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: projects, isLoading } = useQuery<LocalizedProject[]>({
    queryKey: ["projects", activeFilter, language],
    queryFn: () => getLocalizedProjectsByCategory(language, activeFilter),
  });

  const filters = [
    { key: "all", label: t("portfolio.filter.all") },
    { key: "residential", label: t("nav.services.residential") },
    { key: "commercial", label: t("nav.services.commercial") },
    { key: "interior", label: t("nav.services.interior") },
  ];

  const filteredProjects = projects || [];



  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="heading-primary mb-6">
            {t("page.portfolio.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("page.portfolio.subtitle")}
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={cn(
                  "px-6 py-2 font-medium transition-all duration-200",
                  activeFilter === filter.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:text-accent"
                )}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {!isLoading && filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                {t("portfolio.no.projects")}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
