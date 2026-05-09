"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  quote: string;
  reviewer: string;
  location: string;
  className?: string;
};

export function TestimonialCard({
  quote,
  reviewer,
  location,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.24 }}
      className={className}
    >
      <Card className="h-full border border-border/70 bg-card shadow-[0_22px_46px_-30px_var(--shadow-soft)] transition-colors hover:border-accent/40">
        <CardContent className="space-y-4 pt-6">
          <Quote className="size-6 text-accent" />
          <p className="text-lg leading-8 text-foreground">{quote}</p>
          <div className="border-t metal-divider pt-4">
            <p className="font-heading text-base text-foreground">{reviewer}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
