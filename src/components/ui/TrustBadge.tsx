import { ShieldCheck } from "lucide-react";

type TrustBadgeProps = {
  label: string;
};

export function TrustBadge({ label }: TrustBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-border/70 bg-card/90 px-4 py-2">
      <ShieldCheck className="size-4 text-accent" />
      <span className="eyebrow text-foreground">
        {label}
      </span>
    </div>
  );
}
