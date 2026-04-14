import Image from "next/image";
import ThreeBackground from "@/components/ThreeBackground";

const offers = [
  {
    title: "Zero to Hero",
    href: "https://www.freediveacademy.com/zero-to-hero/",
    description: "Life-changing and once-in-a-lifetime experience!",
    points: ["3 to 6 months", "Island Life Adventure", "From beginner to Freedive Instructor"],
    cta: "Learn More",
    tier: "primary",
  },
  {
    title: "One Week Intensive",
    href: "https://www.freediveacademy.com/freediving-packages/",
    description: "Intensive freediving in one unforgettable week.",
    points: ["6 - 7 days all-inclusive", "Small groups (1–3 students)", "Fast progression with expert instructors"],
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
          {/* <Image
            src="/favicon.ico"
            alt=""
            width={46}
            height={46}
            className="palm-mark"
            aria-hidden="true"
            priority={false}
          /> */}
          <p className="brand-line">Freedive Academy Panglao</p>
          <h1>Know Your Limits. Never Accept Them.</h1>
          <p className="social-proof">5,000+ students | 250+ instructors | 81 countries</p>
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

          <div className="ratings" aria-label="Rated 4.86 out of 5 from 800+ reviews">
            <span className="stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg key={index} viewBox="0 0 24 24" className="star-icon" focusable="false">
                  <path d="M12 2.75 14.77 8.37 21 9.28l-4.5 4.39 1.06 6.2L12 16.96 6.44 19.87 7.5 13.67 3 9.28l6.23-.91L12 2.75Z" />
                </svg>
              ))}
            </span>
            <span className="rating-text">4.86 out of 5</span>
            <span className="reviews">from 800+ reviews</span>
          </div>
          <p className="location">Panglao, Bohol, Philippines</p>
        </section>
      </main>
    </div>
  );
}
