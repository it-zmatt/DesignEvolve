import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const languages = [
    { code: "EN", label: "English", flag: "🇺🇸" },
    { code: "AR", label: "العربية", flag: "🇸🇦" },
    { code: "FR", label: "Français", flag: "🇫🇷" },
  ];

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    // In a real implementation, this would trigger translation
    console.log(`Language changed to: ${languageCode}`);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary cursor-pointer">
                AXIS
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={cn(
                      "nav-link cursor-pointer",
                      isActive(item.href)
                        ? "text-accent font-medium"
                        : "text-muted-foreground hover:text-accent"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              
              {/* Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-4 border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {currentLanguage}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={cn(
                        "cursor-pointer flex items-center gap-2",
                        currentLanguage === language.code && "bg-accent/10 text-accent"
                      )}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span>{language.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "block px-3 py-2 cursor-pointer",
                    isActive(item.href)
                      ? "text-accent font-medium"
                      : "text-muted-foreground hover:text-accent"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="px-3 py-2 border-t border-border mt-2">
              <div className="text-sm font-medium text-primary mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Language
              </div>
              <div className="space-y-1">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      handleLanguageChange(language.code);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-2 py-1 rounded flex items-center gap-2 text-sm",
                      currentLanguage === language.code
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-muted-foreground hover:text-accent"
                    )}
                  >
                    <span className="text-base">{language.flag}</span>
                    <span>{language.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
