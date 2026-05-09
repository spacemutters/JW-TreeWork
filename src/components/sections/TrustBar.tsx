const trustSignals = [
  "Locally Owned",
  "Fast Site Assessments",
  "Storm Priority Dispatch",
  "Property-Safe Rigging",
  "No-Mess Cleanup Standard",
];

export function TrustBar() {
  return (
    <section className="bg-accent py-6">
      <div className="site-shell grid gap-3 md:grid-cols-[auto_1fr] md:items-center">
        <p className="eyebrow text-accent-foreground">Field Standards</p>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {trustSignals.map((signal) => (
            <li
              key={signal}
              className="text-sm tracking-[var(--tracking-wide)] text-accent-foreground uppercase"
            >
              {signal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
