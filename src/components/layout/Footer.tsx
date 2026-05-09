export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="site-shell grid gap-10 py-16 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-xl">JW Tree Work Inc.</h3>
          <p className="border-l-2 border-accent/70 pl-3 text-sm text-accent">
            Don&apos;t cuss call us
          </p>
          <p className="text-sm text-primary-foreground/80">
            Premium tree care with rugged field experience and clean property
            respect on every job.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm tracking-[var(--tracking-wide)] uppercase">
            Service Areas
          </h4>
          <p className="text-sm text-primary-foreground/80">
            Lakeland
            <br />
            Plant City
            <br />
            Winter Haven
            <br />
            Bartow
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm tracking-[var(--tracking-wide)] uppercase">
            Contact
          </h4>
          <a href="tel:8637122369" className="block text-sm text-accent quiet-link">
            863-712-2369
          </a>
          <p className="text-sm text-primary-foreground/80">
            24/7 Emergency Storm Line
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm tracking-[var(--tracking-wide)] uppercase">
            Hours
          </h4>
          <p className="text-sm text-primary-foreground/80">
            Mon-Sat: 7:00 AM - 7:00 PM
            <br />
            Emergency Crew: 24/7
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="site-shell py-4 text-xs tracking-[var(--tracking-wide)] text-primary-foreground/75 uppercase">
          Built by Davis | GHL + Web Services | Lakeland, FL
        </div>
      </div>
    </footer>
  );
}
