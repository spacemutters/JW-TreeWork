import { AlertTriangle } from "lucide-react";
import { PhoneButton } from "@/components/ui/PhoneButton";

export function EmergencyBanner() {
  return (
    <section className="bg-[color:var(--surface-overlay)] py-10">
      <div className="site-shell grid gap-5 rounded-xl border border-accent/35 bg-primary px-6 py-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 text-xs tracking-[var(--tracking-wide)] text-accent uppercase">
            <AlertTriangle className="size-4" />
            24/7 Emergency Tree Service
          </p>
          <h2 className="text-3xl text-primary-foreground md:text-4xl">
            Storm damage or dangerous lean? Call now before conditions worsen.
          </h2>
          <p className="border-l-2 border-accent/70 pl-3 text-base text-accent">
            Don&apos;t cuss call us
          </p>
          <p className="text-sm leading-7 text-primary-foreground/80">
            Our emergency line is always active for urgent removals and
            immediate property risk situations.
          </p>
        </div>
        <PhoneButton className="justify-center text-base" label="Call 863-712-2369 Now" />
      </div>
    </section>
  );
}
