import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="section-gap bg-background" delay={0.05}>
      <div className="site-shell space-y-14">
        <div className="section-heading">
          <p className="eyebrow text-muted-foreground">Client Reviews</p>
          <h2 className="text-4xl text-foreground md:text-5xl">
            Trusted by Homeowners Who Expect Serious Craft.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Real feedback from clients across Lakeland and nearby communities.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.quote}
              quote={testimonial.quote}
              reviewer={testimonial.reviewer}
              location={testimonial.location}
              className={cn(
                "md:col-span-3",
                index === 0 ? "md:col-span-4" : "",
                index === 1 ? "md:col-span-2 md:translate-y-6" : "",
                index === 4 ? "md:translate-y-6" : "",
              )}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
