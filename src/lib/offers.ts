export const offers = [
  {
    slug: "zero-to-hero",
    title: "Zero to Hero",
    href: "https://www.freediveacademy.com/zero-to-hero/",
    description: "Life-changing and once-in-a-lifetime experience!",
    points: ["3 to 6 months", "Island Life Adventure", "From beginner to Freedive Instructor"],
    cta: "Learn More",
    tier: "primary",
  },
  {
    slug: "one-week-intensive",
    title: "One Week Intensive",
    href: "https://www.freediveacademy.com/freediving-packages/",
    description: "Intensive freediving in one unforgettable week.",
    points: ["6 - 7 days all-inclusive", "Small groups (1–3 students)", "Fast progression with expert instructors"],
    cta: "Check Availability",
    tier: "secondary",
  },
] as const;

export type Offer = (typeof offers)[number];
