import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import blippaiLogo from "@/assets/blippai-logo.png";
import {
  ArrowRight,
  Brain,
  Network,
  Shield,
  Zap,
  Database,
  Building2,
  Landmark,
  Radio,
  Banknote,
  Heart,
  Lightbulb,
  GraduationCap,
  Factory,
  Globe,
} from "lucide-react";

// Hero Section
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-20 hero-gradient">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />

      <div className="container relative px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={blippaiLogo}
            alt="BlippAI Logo"
            className="mx-auto h-28 w-auto mb-8 animate-fade-in"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
            The Intelligence Layer for{" "}
            <span className="text-gradient">Modern States & Organizations</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-10">
            Consider us your Chief AI Officer
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
            >
              <a href="https://blippai.com" target="_blank" rel="noopener noreferrer">
                Talk to BlippAI
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem → Solution Section
function ProblemSolutionSection() {
  return (
    <Section className="bg-secondary/20 pt-4 md:pt-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <div className="p-8 rounded-xl border border-border bg-card/50">
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
            The Problem
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Organizations have documents, data, and processes—but no unified intelligence.
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Critical knowledge is scattered across systems. Employees spend hours
            searching for information. Decisions are made without complete context.
          </p>
        </div>
        <div className="p-8 rounded-xl border border-primary/30 bg-primary/5">
          <div className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            The Solution
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            BlippAI connects them into one controlled intelligence layer.
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Accurate answers and faster execution. A unified system that understands
            your internal knowledge and integrates with your existing workflows.
          </p>
        </div>
      </div>
    </Section>
  );
}

// What BlippAI Does Section
function WhatWeDoSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Built for Real Work",
      description:
        "Trained on your internal knowledge—policies, manuals, and workflows—for accurate, aligned outputs.",
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description:
        "Connects with ERPs, CRMs, and document systems. Works inside your daily workflows.",
    },
    {
      icon: Shield,
      title: "Secure Deployment",
      description:
        "Cloud, private cloud, or on-prem. Full governance with access controls and audit trails.",
    },
  ];

  return (
    <Section>
      <SectionHeader
        title="What BlippAI Does"
        subtitle="Enterprise AI infrastructure that works the way you need it to."
      />
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
}

// How It Helps Section
function HowItHelpsSection() {
  return (
    <Section className="bg-secondary/20">
      <SectionHeader
        title="How It Helps"
        subtitle="Real outcomes for organizations that need reliability at scale."
      />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-xl border border-border bg-card/50">
          <Zap className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Faster, More Consistent Operations
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Repetitive and knowledge-intensive tasks handled at scale. Your teams
            spend less time searching and more time executing.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              Instant answers from internal knowledge bases
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              Automated document processing and extraction
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              Consistent responses across all interactions
            </li>
          </ul>
        </div>
        <div className="p-8 rounded-xl border border-border bg-card/50">
          <Database className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Institutional Knowledge You Can Rely On
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Unifies siloed systems with verified internal data. Reliable and
            explainable outputs that your teams can trust.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              Sources cited for every answer
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              Built on your verified internal data
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              Governance controls for accuracy
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

// Who We Serve Section
function WhoWeServeSection() {
  const sectors = [
    { icon: Building2, label: "Enterprises & Multinationals" },
    { icon: Landmark, label: "Governments & Public Institutions" },
    { icon: Radio, label: "Telecom" },
    { icon: Banknote, label: "Finance" },
    { icon: Heart, label: "Healthcare" },
    { icon: Lightbulb, label: "Energy" },
    { icon: GraduationCap, label: "Education" },
    { icon: Factory, label: "Infrastructure" },
    { icon: Globe, label: "Universities & Research" },
  ];

  return (
    <Section>
      <SectionHeader
        title="Who We Serve"
        subtitle="Any organization that needs AI as an internal capability—not just an external tool."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {sectors.map((sector) => (
          <div
            key={sector.label}
            className="flex flex-col items-center p-6 rounded-xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
          >
            <sector.icon className="h-8 w-8 text-primary mb-3" />
            <span className="text-sm text-center text-foreground font-medium">
              {sector.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Built as Infrastructure Section
function InfrastructureSection() {
  return (
    <Section className="bg-gradient-to-b from-secondary/20 to-transparent py-8 md:py-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Network className="h-4 w-4" />
          Built as Infrastructure
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Not a standalone product.
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          BlippAI is embedded into operations. It becomes part of how your organization
          works—integrated with your systems, trained on your knowledge, deployed in
          your environment.
        </p>
      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <WhatWeDoSection />
      <HowItHelpsSection />
      <WhoWeServeSection />
      <InfrastructureSection />
      <CTASection />
    </Layout>
  );
}
