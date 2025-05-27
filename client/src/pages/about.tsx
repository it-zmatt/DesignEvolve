import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/lib/TranslationContext";
import { useDirection } from "@/hooks/useDirection";
import type { Content } from "@shared/schema";

export default function About() {
  const { t } = useTranslation();
  const { dir } = useDirection();
  
  const { data: content, isLoading } = useQuery<Content[]>({
    queryKey: ["/api/content"],
  });

  const getContentValue = (key: string, fallback: string = "") => {
    const item = content?.find(c => c.key === key);
    return item?.value || fallback;
  };

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="heading-primary mb-6">
            {t("page.about.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("page.about.subtitle")}
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {isLoading ? (
                <div className="space-y-6">
                  <Skeleton className="h-8 w-3/4" />
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
                    {t("about.our.story")}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t("about.description")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.description.extended")}
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-primary mb-2">{t("about.mission")}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t("about.mission.text")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">{t("about.vision")}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t("about.vision.text")}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={t("about.team.alt")}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={t("about.blueprints.alt")}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">
              {t("about.values")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("about.values.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-lightbulb text-2xl text-accent"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary">{t("about.innovation")}</h3>
              <p className="text-muted-foreground">
                {t("about.innovation.text")}
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-leaf text-2xl text-accent"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary">{t("about.sustainability")}</h3>
              <p className="text-muted-foreground">
                {t("about.sustainability.text")}
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-users text-2xl text-accent"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary">{t("about.collaboration")}</h3>
              <p className="text-muted-foreground">
                {t("about.collaboration.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">
              {t("about.journey")}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-accent">2013</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("about.founded")}</h3>
                  <p className="text-muted-foreground">
                    {t("about.founded.text")}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-accent">2015</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("about.first.project")}</h3>
                  <p className="text-muted-foreground">
                    {t("about.first.project.text")}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-accent">2018</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("about.sustainability.focus")}</h3>
                  <p className="text-muted-foreground">
                    {t("about.sustainability.focus.text")}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-accent">2021</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("about.recognition")}</h3>
                  <p className="text-muted-foreground">
                    {t("about.recognition.text")}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-accent">2024</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("about.growth")}</h3>
                  <p className="text-muted-foreground">
                    {t("about.growth.text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
