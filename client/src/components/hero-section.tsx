import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/TranslationContext";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  onViewProjects: () => void;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  onViewProjects,
}: HeroSectionProps) {
  const { t } = useTranslation();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={t("hero.image.alt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        <h1 className="heading-primary mb-6 leading-tight fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-200 slide-up">
          {subtitle}
        </p>
        <Button
          onClick={onViewProjects}
          className="btn-primary"
        >
          {t("hero.cta")}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
