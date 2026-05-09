import { PhoneCall } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PhoneButtonProps = {
  className?: string;
  inverted?: boolean;
  label?: string;
};

export function PhoneButton({
  className,
  inverted = false,
  label = "Call 863-712-2369",
}: PhoneButtonProps) {
  return (
    <a
      href="tel:8637122369"
      className={cn(
        buttonVariants({ size: "lg" }),
        "h-11 gap-2 border",
        inverted
          ? "border-border/60 bg-background text-foreground hover:bg-muted"
          : "border-accent/40 bg-accent text-accent-foreground hover:bg-accent/90",
        className,
      )}
      aria-label="Call JW Tree Work Inc."
    >
      <PhoneCall className="size-4" />
      <span>{label}</span>
    </a>
  );
}
