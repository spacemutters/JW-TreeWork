"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { cn } from "@/lib/utils";

const trustItems = [
  "18 Years in the Field",
  "22+ Crew Projects Monthly",
  "5.0 Local Rating",
];

export function Hero() {
  return (
    <section
      id="home"
      className="texture-grain relative overflow-hidden bg-primary pb-16 pt-32 md:pt-40"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/70 to-primary" />
      <div className="site-shell relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-9">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-md border border-accent/50 bg-background/10 px-4 py-2 text-xs tracking-[var(--tracking-wide)] text-primary-foreground uppercase"
          >
            <ClipboardCheck className="size-4 text-accent" />
            Licensed & Fully Insured Crew
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-3xl text-5xl leading-[1.02] text-primary-foreground md:text-7xl"
          >
            Elite Tree Work for Properties That Demand Precision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.62 }}
            className="max-w-xl border-l-2 border-accent/70 pl-4 font-body text-xl text-accent"
          >
            Don&apos;t cuss call us
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
            className="max-w-2xl text-lg leading-8 text-primary-foreground/84"
          >
            JW Tree Work Inc. handles removals, trimming, storm response, and
            complete cleanups with disciplined crews and premium-grade equipment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 border border-accent/70 bg-accent text-accent-foreground hover:bg-accent/90",
              )}
            >
              Get a Fast Quote
              <ArrowRight className="size-4" />
            </a>
            <PhoneButton
              inverted
              className="h-11 border-border/70 bg-background/15 text-primary-foreground hover:bg-background/25"
              label="Call Emergency Line"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="flex flex-wrap gap-3 border-t border-white/15 pt-2"
          >
            {trustItems.map((item) => (
              <TrustBadge key={item} label={item} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.75 }}
          className="justify-self-end lg:translate-y-8"
        >
          <div className="space-y-4 rounded-xl border border-border/70 bg-background/10 p-5 shadow-[0_26px_70px_-38px_var(--shadow-strong)]">
            <Image
              src="/crew-emblem.svg"
              alt="JW Tree Work emblem"
              width={340}
              height={260}
              className="h-auto w-full"
              priority
            />
            <p className="text-sm leading-7 text-primary-foreground/85">
              Strategic rigging, responsible removals, and spotless
              post-job cleanup for homes and commercial properties.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="site-shell mt-14 inline-flex text-xs tracking-[var(--tracking-wide)] text-primary-foreground/70 uppercase quiet-link"
      >
        Scroll to explore services
      </motion.a>
    </section>
  );
}
