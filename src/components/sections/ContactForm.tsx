"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, PhoneCall } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/site-data";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.email("Please enter a valid email address."),
  service: z.enum(services, { error: "Please select a service." }),
  propertyType: z.enum(["residential", "commercial", "hoa"], {
    error: "Select a property type.",
  }),
  message: z.string().min(20, "Message must be at least 20 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: undefined,
      propertyType: undefined,
      message: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
    console.log("Contact lead captured:", values);
  };

  return (
    <section id="contact" className="section-gap bg-[color:var(--surface-muted)]">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-heading">
          <p className="eyebrow text-muted-foreground">
            Request Your Quote
          </p>
          <h2 className="text-4xl text-foreground md:text-5xl">
            Tell us about the project and get a rapid callback.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Share your tree service needs and we will reach out quickly with a
            clear next-step plan.
          </p>
          <a
            href="tel:8637122369"
            className="inline-flex items-center gap-2 text-sm text-primary quiet-link"
          >
            <PhoneCall className="size-4" />
            Immediate issue? Call 863-712-2369
          </a>
        </div>

        <Card className="border border-border/70 bg-card shadow-[0_30px_70px_-42px_var(--shadow-soft)]">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 rounded-lg border border-accent/45 bg-accent/15 p-6"
                aria-live="polite"
              >
                <CheckCircle2 className="size-7 text-accent" />
                <p className="text-2xl text-foreground">Request Received.</p>
                <p className="text-sm leading-7 text-muted-foreground">
                  Our team will follow up promptly. If this is urgent storm or
                  safety damage, call now for emergency callback priority.
                </p>
                <a href="tel:8637122369" className="text-sm text-primary">
                  Emergency Call: 863-712-2369
                </a>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm text-foreground">
                    Full Name
                  </label>
                  <Input id="fullName" {...register("fullName")} />
                  {errors.fullName && (
                    <p className="text-xs text-destructive">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-foreground">
                      Phone
                    </label>
                    <Input id="phone" {...register("phone")} />
                    {errors.phone && (
                      <p className="text-xs text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-foreground">
                      Email
                    </label>
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm text-foreground">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-destructive">{errors.service.message}</p>
                  )}
                </div>

                <fieldset className="space-y-2">
                  <legend className="text-sm text-foreground">Property Type</legend>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { id: "residential", label: "Residential" },
                      { id: "commercial", label: "Commercial" },
                      { id: "hoa", label: "HOA / Community" },
                    ].map((item) => (
                      <label key={item.id} className="inline-flex items-center gap-2 text-sm">
                        <input
                          type="radio"
                          value={item.id}
                          {...register("propertyType")}
                          className="h-4 w-4 border-border text-primary"
                        />
                        {item.label}
                      </label>
                    ))}
                  </div>
                  {errors.propertyType && (
                    <p className="text-xs text-destructive">{errors.propertyType.message}</p>
                  )}
                </fieldset>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-foreground">
                    Project Message
                  </label>
                  <Textarea id="message" rows={5} {...register("message")} />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-11 border border-accent/45 bg-accent text-accent-foreground hover:bg-accent/85"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
