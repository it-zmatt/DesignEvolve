import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Service } from "@shared/schema";

export default function Services() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="heading-primary mb-6">
            Our <span className="font-bold">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive architectural solutions tailored to meet diverse client needs and project requirements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-8">
                  <CardContent className="space-y-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service) => (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 bg-background hover:bg-background p-8"
                >
                  <CardContent className="space-y-6">
                    <div className="text-accent text-4xl">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">
              Our <span className="font-bold">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach ensuring every project is delivered with precision and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Discovery</h3>
              <p className="text-muted-foreground">
                Understanding your vision, requirements, and project goals through detailed consultation.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Design</h3>
              <p className="text-muted-foreground">
                Creating innovative design solutions that balance aesthetics, functionality, and sustainability.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Development</h3>
              <p className="text-muted-foreground">
                Detailed planning, documentation, and coordination with all stakeholders and contractors.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent">4</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">Delivery</h3>
              <p className="text-muted-foreground">
                Project management and oversight ensuring quality construction and timely completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
