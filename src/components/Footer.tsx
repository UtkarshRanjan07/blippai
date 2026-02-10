import { Link } from "react-router-dom";
import blippaiLogo from "@/assets/blippai-logo.png";

const footerLinks = {
  product: [
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/deployment", label: "Deployment & Security" },
  ],
  company: [],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={blippaiLogo} alt="BlippAI" className="h-8 w-auto" />
              <span className="text-xl font-semibold text-foreground">BlippAI</span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              The Intelligence Layer for Modern States & Organizations.
              BlippAI embeds AI directly into how organizations operate—integrated,
              reliable, and deployable in real environments.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                <a href="mailto:hello@blippai.com" className="hover:text-primary transition-colors">
                  hello@blippai.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} BlippAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
