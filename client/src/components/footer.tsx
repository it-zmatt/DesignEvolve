import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">AXIS</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creating timeless architectural solutions that blend innovation with sustainability. Your vision, our expertise.
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
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Residential Design</span>
              </li>
              <li>
                <span className="text-muted-foreground">Commercial Design</span>
              </li>
              <li>
                <span className="text-muted-foreground">Interior Design</span>
              </li>
              <li>
                <span className="text-muted-foreground">Permits & Approvals</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; 2024 AXIS Architecture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
