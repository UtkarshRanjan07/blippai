import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import {
  Brain,
  Network,
  Shield,
  BookOpen,
  GitBranch,
  FileSearch,
  MessageSquare,
  Workflow,
  Search,
} from "lucide-react";

// Overview Section
function OverviewSection() {
  return (
    <Section className="pt-20 md:pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Solutions
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          BlippAI embeds AI directly into how organizations operate. We build 
          custom intelligence layers—integrated into your systems, trained on 
          your knowledge, and deployed where you need them.
        </p>
      </div>
    </Section>
  );
}

// Solution Pillars Section
function SolutionPillarsSection() {
  const pillars = [
    {
      icon: Brain,
      title: "Training on Internal Knowledge",
      description:
        "AI systems that understand your organization's unique context and data.",
      bullets: [
        "Policies, SOPs, and operational manuals",
        "Historical data and case records",
        "Internal workflows and processes",
        "Domain-specific terminology and rules",
      ],
    },
    {
      icon: Network,
      title: "Hybrid Architecture",
      description:
        "Combine proprietary foundation models with best-of-breed tools.",
      bullets: [
        "Proprietary foundation models for core reasoning",
        "Integration with specialized AI tools",
        "Flexible model selection per use case",
        "Future-proof architecture design",
      ],
    },
    {
      icon: Shield,
      title: "Reliability Focus",
      description:
        "Controlled outputs with enterprise governance built in.",
      bullets: [
        "Source citation for every response",
        "Confidence scoring and uncertainty handling",
        "Human-in-the-loop workflows",
        "Audit trails and compliance logging",
      ],
    },
  ];

  return (
    <Section className="bg-secondary/20">
      <SectionHeader
        title="Our Approach"
        subtitle="Three pillars that define how we build AI for enterprise environments."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="p-8 rounded-xl border border-border bg-card/50"
          >
            <pillar.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">
              {pillar.title}
            </h3>
            <p className="text-muted-foreground mb-6">{pillar.description}</p>
            <ul className="space-y-2">
              {pillar.bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary mt-0.5">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Use Cases Section
function UseCasesSection() {
  const useCases = [
    {
      icon: BookOpen,
      title: "Policy & SOP Assistant",
      description:
        "Instant, accurate answers to employee questions about policies, procedures, and guidelines. Reduces support tickets and ensures consistency.",
    },
    {
      icon: GitBranch,
      title: "Case Triage & Routing",
      description:
        "Automatically categorize, prioritize, and route incoming cases, tickets, or requests to the right teams with the right context.",
    },
    {
      icon: FileSearch,
      title: "Document Understanding",
      description:
        "Extract key information from contracts, reports, and forms. Transform unstructured documents into actionable structured data.",
    },
    {
      icon: MessageSquare,
      title: "Decision Support",
      description:
        "Provide verified, source-cited recommendations for complex decisions. Surface relevant precedents and supporting information.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks like form processing, ticket handling, and approval workflows. Free up teams for higher-value work.",
    },
    {
      icon: Search,
      title: "Cross-System Search",
      description:
        "Unified search across all your systems and repositories. Find answers without knowing where information is stored.",
    },
  ];

  return (
    <Section>
      <SectionHeader
        title="Typical Use Cases"
        subtitle="Common applications across industries and departments."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase) => (
          <FeatureCard
            key={useCase.title}
            icon={useCase.icon}
            title={useCase.title}
            description={useCase.description}
          />
        ))}
      </div>
    </Section>
  );
}

export default function SolutionsPage() {
  return (
    <Layout>
      <OverviewSection />
      <SolutionPillarsSection />
      <UseCasesSection />
      <CTASection
        headline="Ready to explore what's possible?"
        description="Let's discuss how BlippAI can address your specific challenges."
      />
    </Layout>
  );
}
