import ThreeBackground from "@/components/ThreeBackground";

const links = [
  {
    title: "Zero to Hero",
    href: "https://www.freediveacademy.com/zero-to-hero/",
    description:
      "Build a complete progression from beginner fundamentals to deeper confidence.",
  },
  {
    title: "Weekly Packages",
    href: "https://www.freediveacademy.com/freediving-packages/",
    description:
      "Choose structured training options designed for consistent weekly advancement.",
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
          <p className="subtitle">Dive Deep with Professional Guidance</p>
          <p className="intro">
            Discover a training experience built by elite instructors in Panglao,
            Philippines. We make freediving fun, easy, and accessible while
            pushing every student to become stronger than they imagined.
          </p>

          <div className="cta-grid" aria-label="Primary links">
            {links.map((link) => (
              <a
                key={link.href}
                className="cta-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-title">{link.title}</span>
                <span className="cta-description">{link.description}</span>
                <span className="cta-arrow">Explore -&gt;</span>
              </a>
            ))}
          </div>

          <p className="location">Panglao, Bohol, Philippines</p>
        </section>
      </main>
    </div>
  );
}
