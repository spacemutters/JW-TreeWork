"use client";

import { motion, useInView } from "framer-motion";
import { Award, Shield, Timer, Trees } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

function Counter({ value, suffix = "", label }: CounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const duration = 1000;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setDisplayValue(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <div ref={ref} className="space-y-1 rounded-lg border border-white/20 bg-white/5 p-5">
      <p className="text-4xl text-accent">
        {displayValue}
        {suffix}
      </p>
      <p className="text-sm text-primary-foreground/80">{label}</p>
    </div>
  );
}

const features = [
  {
    icon: Shield,
    title: "Property-First Safety Process",
    text: "Every cut, drop zone, and rigging point is planned to protect homes, hardscapes, and neighboring structures.",
  },
  {
    icon: Trees,
    title: "Skilled Crew, Modern Equipment",
    text: "Our team combines years of field instincts with pro-grade saws, grinders, and heavy-lift coordination.",
  },
  {
    icon: Timer,
    title: "Fast Communication",
    text: "You get clear ETA windows, same-day quote options, and fast turnaround when emergencies strike.",
  },
  {
    icon: Award,
    title: "Clean, Premium Finish",
    text: "We leave properties neat, haul debris offsite, and treat every yard like our own.",
  },
] as const;

export function WhyUs() {
  return (
    <section id="why-us" className="section-gap bg-primary text-primary-foreground">
      <div className="site-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="section-heading">
          <p className="eyebrow text-accent">
            Why Homeowners Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl">
            Built for Demanding Tree Jobs and High Standards.
          </h2>
          <p className="text-lg leading-8 text-primary-foreground/80">
            We run disciplined crews that move efficiently without sacrificing
            safety, communication, or cleanup quality.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <Counter value={18} label="Years Experience" />
            <Counter value={22} suffix="+" label="Monthly Projects" />
            <Counter value={5} suffix=".0" label="Average Rating Snapshot" />
          </div>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`grid gap-4 rounded-lg border border-white/15 bg-background/8 p-5 sm:grid-cols-[auto_1fr] ${
                index % 2 === 1 ? "lg:ml-10" : ""
              }`}
            >
              <feature.icon className="mt-1 size-5 text-accent" />
              <div className="space-y-1">
                <h3 className="text-2xl">{feature.title}</h3>
                <p className="text-sm leading-7 text-primary-foreground/80">
                  {feature.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
