import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Shield, Network, Lock, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="text-center p-8">
      <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

// Mission Section
function MissionSection() {
  return (
    <Section className="pt-20 md:pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          About BlippAI
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          BlippAI embeds AI directly into how organizations operate—making it 
          reliable, integrated, and deployable in real environments.
        </p>
        <div className="p-8 rounded-xl border border-border bg-card/50 text-left">
          <p className="text-lg text-foreground leading-relaxed mb-4">
            We build AI infrastructure for governments and large organizations that 
            need more than a chatbot—they need AI that works inside their existing 
            systems, understands their internal knowledge, and operates with the 
            reliability their operations demand.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our approach is different. We don't offer a one-size-fits-all product. 
            We build custom intelligence layers that become part of how your 
            organization works—trained on your data, integrated with your systems, 
            and deployed where you need them.
          </p>
        </div>
      </div>
    </Section>
  );
}

// Values Section
function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description:
        "AI systems that organizations can trust. Accurate outputs, source citations, and confidence scoring built in.",
    },
    {
      icon: Network,
      title: "Integration",
      description:
        "Works with your existing systems. No rip-and-replace. BlippAI connects to ERPs, CRMs, and internal tools.",
    },
    {
      icon: Lock,
      title: "Control",
      description:
        "You own your data and control your AI. Deploy on your terms with full governance and audit capabilities.",
    },
    {
      icon: Rocket,
      title: "Practical Deployment",
      description:
        "Built for real-world operations, not demos. We focus on production-ready systems that deliver value.",
    },
  ];

  return (
    <Section className="bg-secondary/20">
      <SectionHeader
        title="What We Stand For"
        subtitle="The principles that guide how we build AI infrastructure."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value) => (
          <ValueCard key={value.title} {...value} />
        ))}
      </div>
    </Section>
  );
}

// Timeline Section (Placeholder)
function TimelineSection() {
  const milestones = [
    {
      year: "2023",
      title: "Founded",
      description: "BlippAI founded with a mission to bring reliable AI to enterprise operations.",
    },
    {
      year: "2024",
      title: "First Enterprise Deployments",
      description: "Deployed intelligence layers for government and enterprise clients.",
    },
    {
      year: "2025",
      title: "Scaling Operations",
      description: "Expanding to serve more industries and deployment environments.",
    },
  ];

  return (
    <Section>
      <SectionHeader
        title="Our Journey"
        subtitle="Building the future of enterprise AI, one deployment at a time."
      />
      <div className="max-w-2xl mx-auto">
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {milestone.year}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-px h-full bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default function AboutPage() {
  return (
    <Layout>
      <MissionSection />
      <ValuesSection />
      <TimelineSection />
      <CTASection
        headline="Join us in building reliable AI"
        description="Whether you're looking to deploy AI or join our team, we'd love to hear from you."
      />
    </Layout>
  );
}
