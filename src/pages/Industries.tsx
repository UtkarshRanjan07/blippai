import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import {
  Landmark,
  Radio,
  Banknote,
  Heart,
  Lightbulb,
  GraduationCap,
  Factory,
  Building2,
  Globe,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  name: string;
  benefits: string[];
}

function IndustryCard({ icon: Icon, name, benefits }: IndustryCardProps) {
  return (
    <div className="p-6 md:p-8 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
      <Icon className="h-10 w-10 text-primary mb-4" />
      <h3 className="text-xl font-bold text-foreground mb-4">{name}</h3>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="text-primary mt-0.5">•</span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Header Section
function HeaderSection() {
  return (
    <Section className="pt-20 md:pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Industries
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Designed for scale, complexity, and regulation. BlippAI serves 
          organizations where reliability isn't optional—it's required.
        </p>
      </div>
    </Section>
  );
}

// Industries Grid Section
function IndustriesGridSection() {
  const industries = [
    {
      icon: Landmark,
      name: "Government & Public Institutions",
      benefits: [
        "Streamline citizen services with instant policy guidance",
        "Automate case management and routing",
        "Meet strict compliance and security requirements",
      ],
    },
    {
      icon: Radio,
      name: "Telecom",
      benefits: [
        "Reduce call center load with AI-powered support",
        "Automate network documentation analysis",
        "Speed up technical troubleshooting",
      ],
    },
    {
      icon: Banknote,
      name: "Finance",
      benefits: [
        "Accelerate compliance and regulatory reviews",
        "Automate document processing and KYC",
        "Support advisors with verified insights",
      ],
    },
    {
      icon: Heart,
      name: "Healthcare",
      benefits: [
        "Speed up clinical documentation review",
        "Support care coordination with protocol guidance",
        "Maintain strict patient data privacy",
      ],
    },
    {
      icon: Lightbulb,
      name: "Energy",
      benefits: [
        "Digitize and search operational manuals",
        "Support field technicians with instant answers",
        "Automate regulatory compliance documentation",
      ],
    },
    {
      icon: GraduationCap,
      name: "Education",
      benefits: [
        "Automate administrative workflows",
        "Support students with 24/7 guidance",
        "Streamline research documentation",
      ],
    },
    {
      icon: Factory,
      name: "Infrastructure",
      benefits: [
        "Centralize technical documentation access",
        "Support maintenance teams with procedure guidance",
        "Automate safety compliance checks",
      ],
    },
    {
      icon: Building2,
      name: "Enterprises",
      benefits: [
        "Unify knowledge across departments",
        "Accelerate employee onboarding",
        "Reduce internal support ticket volume",
      ],
    },
    {
      icon: Globe,
      name: "Universities & Research",
      benefits: [
        "Accelerate literature review and synthesis",
        "Support grant writing with precedent research",
        "Streamline administrative processes",
      ],
    },
  ];

  return (
    <Section className="bg-secondary/20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => (
          <IndustryCard key={industry.name} {...industry} />
        ))}
      </div>
    </Section>
  );
}

export default function IndustriesPage() {
  return (
    <Layout>
      <HeaderSection />
      <IndustriesGridSection />
      <CTASection
        headline="See how we serve your industry"
        description="Every industry has unique requirements. Let's discuss yours."
      />
    </Layout>
  );
}
