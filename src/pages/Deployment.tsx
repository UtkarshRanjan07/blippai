import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import {
  Cloud,
  Server,
  Building2,
  Lock,
  Shield,
  Eye,
  FileCheck,
  Database,
  ArrowRight,
  Workflow,
} from "lucide-react";

// Header Section
function HeaderSection() {
  return (
    <Section className="pt-20 md:pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Deployment & Security
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Deploy BlippAI where you need it—cloud, private cloud, on-premises, or 
          air-gapped environments. You keep full control of your data.
        </p>
      </div>
    </Section>
  );
}

// Deployment Options Section
function DeploymentOptionsSection() {
  const options = [
    {
      icon: Cloud,
      title: "Cloud",
      description:
        "Managed cloud deployment with enterprise SLAs. Fast setup, automatic updates, and global availability.",
    },
    {
      icon: Server,
      title: "Private Cloud",
      description:
        "Dedicated infrastructure in your preferred cloud provider. Full isolation with managed operations.",
    },
    {
      icon: Building2,
      title: "On-Premises",
      description:
        "Deploy within your own data centers. Complete control over infrastructure and data residency.",
    },
    {
      icon: Lock,
      title: "Restricted Environments",
      description:
        "Air-gapped and high-security deployments for classified or sensitive operations.",
    },
  ];

  return (
    <Section className="bg-secondary/20">
      <SectionHeader
        title="Deployment Options"
        subtitle="Flexible deployment models to meet your security and compliance requirements."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {options.map((option) => (
          <FeatureCard
            key={option.title}
            icon={option.icon}
            title={option.title}
            description={option.description}
          />
        ))}
      </div>
    </Section>
  );
}

// Data Control Section
function DataControlSection() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          You Keep Full Control of Your Data
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Your data never leaves your control. BlippAI is designed from the ground 
          up for organizations that require strict data sovereignty and governance.
        </p>
      </div>
    </Section>
  );
}

// Security Features Section
function SecurityFeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Governance",
      description:
        "Define policies that control how AI systems operate. Set boundaries, manage permissions, and enforce organizational standards.",
      bullets: [
        "Role-based access control",
        "Policy enforcement engine",
        "Content moderation controls",
        "Output validation rules",
      ],
    },
    {
      icon: Eye,
      title: "Access Controls",
      description:
        "Fine-grained permissions that mirror your organizational structure. Users only access what they're authorized to see.",
      bullets: [
        "SSO and identity federation",
        "Document-level permissions",
        "Team and department scoping",
        "API key management",
      ],
    },
    {
      icon: FileCheck,
      title: "Audit Trails",
      description:
        "Complete visibility into system operations. Track every query, response, and administrative action.",
      bullets: [
        "Comprehensive logging",
        "Query and response history",
        "Admin action tracking",
        "Compliance reporting",
      ],
    },
  ];

  return (
    <Section className="bg-secondary/20">
      <SectionHeader
        title="Enterprise Security"
        subtitle="Built for organizations that don't compromise on security."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-8 rounded-xl border border-border bg-card/50"
          >
            <feature.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">
              {feature.title}
            </h3>
            <p className="text-muted-foreground mb-6">{feature.description}</p>
            <ul className="space-y-2">
              {feature.bullets.map((bullet, index) => (
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

// Architecture Diagram Section
function ArchitectureDiagramSection() {
  return (
    <Section>
      <SectionHeader
        title="How It Works"
        subtitle="A simple architecture that connects your knowledge to your workflows."
      />
      <div className="max-w-4xl mx-auto">
        <div className="p-8 md:p-12 rounded-2xl border border-border bg-card/30">
          <div className="grid grid-cols-5 gap-4 items-center">
            {/* Sources */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-3">
                <Database className="w-8 h-8 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Sources</p>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>
            
            {/* BlippAI */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-3 glow-effect border border-primary/30">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">BlippAI</p>
              <p className="text-xs text-muted-foreground">Intelligence Layer</p>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>
            
            {/* Outputs */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-3">
                <Workflow className="w-8 h-8 text-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Workflows</p>
            </div>
          </div>
          
          {/* Labels */}
          <div className="mt-8 pt-8 border-t border-border grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Input</p>
              <p className="text-sm text-foreground mt-1">Documents, databases, APIs</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Process</p>
              <p className="text-sm text-foreground mt-1">Secure, controlled AI reasoning</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Output</p>
              <p className="text-sm text-foreground mt-1">Apps, APIs, automations</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Compliance Section
function ComplianceSection() {
  return (
    <Section className="bg-secondary/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Built for Compliance
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          BlippAI is designed to support regulatory and compliance requirements 
          across industries. Our architecture and operational practices are built 
          with compliance in mind.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["Data Residency", "Encryption at Rest", "Encryption in Transit", "SOC 2 Ready"].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default function DeploymentPage() {
  return (
    <Layout>
      <HeaderSection />
      <DeploymentOptionsSection />
      <DataControlSection />
      <SecurityFeaturesSection />
      <ArchitectureDiagramSection />
      <ComplianceSection />
      <CTASection
        headline="Let's discuss your security requirements"
        description="Our team will work with you to design a deployment that meets your needs."
      />
    </Layout>
  );
}
