import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  children?: ReactNode;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
  children,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative p-6 md:p-8 rounded-xl border border-border bg-white",
        "hover:border-primary/50 transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/10",
        "shadow-sm",
        className
      )}
    >
      {Icon && (
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      {children}
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("text-center p-6", className)}>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}
