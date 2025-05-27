import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";
import type { Content } from "@shared/schema";

export default function About() {
  const { data: content, isLoading } = useQuery<Content[]>({
    queryKey: ["/api/content"],
  });

  const getContentValue = (key: string, fallback: string = "") => {
    const item = content?.find(c => c.key === key);
    return item?.value || fallback;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="heading-primary mb-6">
            About <span className="font-bold">AXIS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering architectural excellence through innovative design and sustainable practices for over a decade.
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
                    Our <span className="font-bold">Story</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {getContentValue("about.description", "Founded in 2013, AXIS Architecture has been at the forefront of innovative design, creating spaces that seamlessly blend functionality with aesthetic excellence. Our team of experienced architects believes that great architecture should not only serve its purpose but also inspire and elevate the human experience.")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We specialize in sustainable design practices, ensuring that our projects not only meet today's needs but also contribute to a better tomorrow. From conceptual design to project completion, we work closely with our clients to bring their vision to life.
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
                  <p className="text-muted-foreground text-sm">
                    Creating timeless spaces that enhance human connection and environmental harmony.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Our Vision</h4>
                  <p className="text-muted-foreground text-sm">
                    To be recognized as leaders in sustainable and innovative architectural design.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Architectural team collaborating in modern office"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Architectural blueprints and design sketches"
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
              Our <span className="font-bold">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every project we undertake and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-lightbulb text-2xl text-accent"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing the boundaries of design while respecting timeless architectural principles.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-leaf text-2xl text-accent"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary">Sustainability</h3>
              <p className="text-muted-foreground">
                Committed to environmentally conscious design that preserves our planet for future generations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-users text-2xl text-accent"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary">Collaboration</h3>
              <p className="text-muted-foreground">
                Working closely with clients to understand their vision and bring it to life.
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
              Our <span className="font-bold">Journey</span>
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
                  <h3 className="text-xl font-semibold text-primary mb-2">Company Founded</h3>
                  <p className="text-muted-foreground">
                    AXIS Architecture was established with a vision to create innovative, sustainable architectural solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-accent">2015</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">First Major Project</h3>
                  <p className="text-muted-foreground">
                    Completed our first major commercial development, establishing our reputation for excellence.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-accent">2018</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Sustainability Focus</h3>
                  <p className="text-muted-foreground">
                    Dedicated our practice to sustainable design, becoming certified in green building practices.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-accent">2021</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Industry Recognition</h3>
                  <p className="text-muted-foreground">
                    Received multiple awards for architectural excellence and sustainable design innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-accent">2024</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Continued Growth</h3>
                  <p className="text-muted-foreground">
                    Celebrating over 50 completed projects and expanding our team of talented architects.
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
