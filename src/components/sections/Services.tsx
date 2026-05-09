import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { cn } from "@/lib/utils";

const serviceCards = [
  {
    title: "Tree Removal",
    description: "Controlled, safety-first dismantling for compromised trees.",
    detail:
      "From tight backyard removals to crane-assisted takedowns, we protect roofs, fences, and landscaping.",
    span: "md:col-span-2",
  },
  {
    title: "Emergency Tree Removal",
    description: "24/7 rapid response after storms or sudden tree failures.",
    detail:
      "We secure danger zones and clear hazards fast so your family and structure stay protected.",
    span: "",
  },
  {
    title: "Tree Trimming",
    description: "Health-focused canopy shaping for stronger, cleaner growth.",
    detail:
      "We prune with arborist-minded cuts that improve airflow and reduce future storm exposure.",
    span: "",
  },
  {
    title: "Hazardous Limb Removal",
    description: "Targeted limb drops over homes, driveways, and utility-adjacent areas.",
    detail:
      "We isolate unstable weight before it becomes a costly or dangerous failure.",
    span: "md:col-span-2",
  },
  {
    title: "Stump Grinding",
    description: "Clean, grade-level stump removal without tearing up the property.",
    detail:
      "We grind deep enough for replanting, sod restoration, and safer yard use.",
    span: "",
  },
  {
    title: "Lot Clearing",
    description: "Selective or full clearing for build prep and land transitions.",
    detail:
      "We preserve what matters, remove what doesn't, and haul debris in one coordinated workflow.",
    span: "",
  },
  {
    title: "Canopy Elevation",
    description: "Lift low branches to open sightlines and usable property space.",
    detail:
      "Great for driveways, walkways, and equipment access around mature trees.",
    span: "",
  },
  {
    title: "Storm Cleanup",
    description: "Post-storm branch, trunk, and debris extraction with urgency.",
    detail:
      "We restore access and remove unstable remnants before additional weather moves in.",
    span: "",
  },
  {
    title: "Debris Hauling",
    description: "Full haul-off after trimming, removals, and storm events.",
    detail:
      "No piles left behind. We leave your site clear and ready for normal use.",
    span: "md:col-span-2",
  },
  {
    title: "Fence-Line Tree Management",
    description: "Precision trimming and root-aware removals near boundaries.",
    detail:
      "We protect neighboring structures while keeping your fence lines clean and safe.",
    span: "",
  },
  {
    title: "Commercial Tree Maintenance",
    description: "Scheduled service plans for properties with public visibility.",
    detail:
      "We keep storefronts, multifamily sites, and industrial lots sharp year-round.",
    span: "",
  },
] as const;

export function Services() {
  return (
    <AnimatedSection id="services" className="section-gap bg-background">
      <div className="site-shell space-y-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="section-heading">
            <p className="eyebrow text-muted-foreground">Core Services</p>
            <h2 className="text-4xl text-foreground md:text-5xl">
              Full-Scope Tree Services with Field-Tested Precision.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Every job is scoped for safety, property protection, and a polished
              finish. No guesswork, no corner cutting.
            </p>
          </div>
          <aside className="soft-panel rounded-xl border border-border/70 p-6 shadow-[0_20px_54px_-42px_var(--shadow-soft)]">
            <p className="eyebrow text-muted-foreground">How We Work</p>
            <p className="mt-3 text-base leading-7 text-foreground">
              We scope each site before we cut, protect structures first, and
              clean every debris lane before we roll out.
            </p>
          </aside>
        </div>

        <div className="grid gap-5 md:grid-cols-6">
          {serviceCards.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              detail={service.detail}
              className={cn(
                "md:col-span-2",
                service.span,
                index % 4 === 1 ? "md:translate-y-4" : "",
              )}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
