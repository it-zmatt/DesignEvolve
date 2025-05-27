import { Link } from "wouter";
import { useTranslation } from "@/lib/TranslationContext";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">AXIS</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <i className="fab fa-behance text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quick.links")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                    {t("nav.home")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                    {t("nav.about")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                    {t("nav.services")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                    {t("nav.portfolio")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                    {t("nav.contact")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("nav.services")}</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">{t("nav.services.residential")}</span>
              </li>
              <li>
                <span className="text-muted-foreground">{t("nav.services.commercial")}</span>
              </li>
              <li>
                <span className="text-muted-foreground">{t("nav.services.interior")}</span>
              </li>
              <li>
                <span className="text-muted-foreground">{t("footer.permits")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
