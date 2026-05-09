"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  description: string;
  detail: string;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  detail,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.26 }}
      className={className}
    >
      <Card className="h-full border border-border/70 bg-card/95 shadow-[0_24px_56px_-34px_var(--shadow-soft)] transition-colors hover:border-accent/45">
        <CardHeader className="space-y-2">
          <p className="eyebrow text-muted-foreground">
            JW Tree Work Inc.
          </p>
          <CardTitle className="text-[1.65rem] leading-tight text-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm leading-7 text-muted-foreground">{description}</p>
          <p className="text-sm leading-6 text-foreground">{detail}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
