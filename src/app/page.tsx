import ThreeBackground from "@/components/ThreeBackground";

const offers = [
  {
    title: "Zero to Hero",
    href: "https://www.freediveacademy.com/zero-to-hero/",
    description: "Master fundamentals to depth confidence with a guided path.",
    points: ["6-12 weeks", "All levels", "Learn anytime"],
    cta: "Schedule Your Path",
    tier: "primary",
  },
  {
    title: "One Week Intensive",
    href: "https://www.freediveacademy.com/freediving-packages/",
    description: "Dive deep during your Panglao trip. Start Monday, finish Friday.",
    points: ["5 days intensive", "Limited to 8 per group", "Fill fast"],
    cta: "Check Availability",
    tier: "secondary",
  },
] as const;

export default function Home() {
  return (
    <div className="page-shell">
      <ThreeBackground />
      <div className="page-overlay" />

      <main className="link-main">
        <section className="hero-card">
          <p className="brand-line">Freedive Academy Panglao</p>
          <h1>Know Your Limits. Never Accept Them.</h1>
          <p className="social-proof">3,000+ students | 200+ instructors | 65+ countries</p>
          <p className="question">Which path is right for you?</p>

          <div className="cta-grid" aria-label="Program options">
            {offers.map((offer) => (
              <article
                key={offer.href}
                className={`offer-card ${offer.tier === "primary" ? "offer-primary" : "offer-secondary"}`}
              >
                <h2 className="offer-title">{offer.title}</h2>
                <p className="offer-description">{offer.description}</p>
                <ul className="offer-points" aria-label={`${offer.title} highlights`}>
                  {offer.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a
                  href={offer.href}
                  className={`offer-cta ${offer.tier === "primary" ? "btn-primary" : "btn-secondary"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {offer.cta}
                </a>
              </article>
            ))}
          </div>

          <p className="ratings">4.9/5 from 500+ reviews</p>
          <p className="location">Panglao, Bohol, Philippines</p>
        </section>
      </main>
    </div>
  );
}
