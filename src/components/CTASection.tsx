import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  primaryLink?: string;
  secondaryLink?: string;
}

export function CTASection({
  headline = "Bring reliable AI into your operations.",
  description,
  primaryCTA = "Talk to an Architect",
  primaryLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {headline}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground mb-8">{description}</p>
          )}
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to={primaryLink}>
                {primaryCTA}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
