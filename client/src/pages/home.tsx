import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/lib/TranslationContext";
import { useDirection } from "@/hooks/useDirection";
import { getLocalizedFeaturedProjects, getLocalizedContent } from "@/lib/multilingualDataService";
import type { LocalizedProject, LocalizedContent } from "@/types/multilingual";

export default function Home() {
  const { t, language } = useTranslation();
  const { dir } = useDirection();
  
  const { data: featuredProjects, isLoading: projectsLoading } = useQuery<LocalizedProject[]>({
    queryKey: ["featured-projects", language],
    queryFn: () => getLocalizedFeaturedProjects(language),
  });

  const { data: content, isLoading: contentLoading } = useQuery<LocalizedContent[]>({
    queryKey: ["content", language],
    queryFn: () => getLocalizedContent(language),
  });

  const getContentValue = (key: string, fallback: string = "") => {
    const item = content?.find(c => c.key === key);
    return item?.value || fallback;
  };

  const handleViewProjects = () => {
    const portfolioSection = document.getElementById('featured-projects');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      value: t("stats.years.value"),
      label: t("stats.years.label"),
      description: t("stats.years.description")
    },
    {
      value: t("stats.projects.value"),
      label: t("stats.projects.label"),
      description: t("stats.projects.description")
    },
    {
      value: t("stats.satisfaction.value"),
      label: t("stats.satisfaction.label"),
      description: t("stats.satisfaction.description")
    }
  ];

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        onViewProjects={handleViewProjects}
      />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* About Preview Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="heading-secondary mb-6">
                  {t("about.title")}
                </h2>
                {contentLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ) : (
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.description")}
                  </p>
                )}
              </div>
              
              <Link href="/about">
                <Button variant="outline" className="btn-secondary">
                  {t("about.cta")}
                </Button>
              </Link>
            </div>
            
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Architectural team collaborating"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Architectural blueprints"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">
              {t("projects.featured.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("projects.featured.description")}
            </p>
          </div>

          {projectsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects?.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          <div className="text-center">
            <Link href="/portfolio">
              <Button className="btn-primary">
                {t("projects.view.all")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
