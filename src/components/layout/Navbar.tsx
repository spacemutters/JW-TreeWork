"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-[var(--motion-normal)]",
        scrolled
          ? "border-b metal-divider bg-[color:var(--surface-overlay)]/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="site-shell flex h-20 items-center justify-between">
        <Link href="/" className="space-y-1">
          <p className="font-heading text-xl tracking-[var(--tracking-tight)] text-[var(--text-on-dark)]">
            JW Tree Work Inc.
          </p>
          <p className="text-xs tracking-[var(--tracking-wide)] text-[var(--brand-amber)] uppercase">
            Licensed • Insured • Local
          </p>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-[var(--text-on-dark)]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PhoneButton className="text-sm" />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-background/10 text-[var(--text-on-dark)] md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-0 top-20 bg-[color:var(--surface-overlay)] px-6 py-12 md:hidden"
        >
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block border-b metal-divider pb-4 font-heading text-3xl text-[var(--text-on-dark)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              <PhoneButton className="w-full justify-center" />
              <a
                href="tel:8637122369"
                className="flex items-center justify-center gap-2 text-sm text-[var(--text-on-dark)]"
              >
                <Phone className="size-4" />
                24/7 Emergency Response
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
