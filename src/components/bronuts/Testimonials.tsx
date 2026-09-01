import { useReveal } from "./use-reveal";

const reviews = [
  {
    name: "Marissa T.",
    meta: "Local Guide · 42 reviews",
    text: "The chocolate lava glaze is genuinely absurd. Warm center, crackly shell. I've driven across town twice this week.",
  },
  {
    name: "Devon R.",
    meta: "Google Review",
    text: "Pistachio Dream plus a cortado is my new Saturday. Staff remembered my order on the second visit.",
  },
  {
    name: "Aisha M.",
    meta: "Local Guide · 118 reviews",
    text: "You can taste that these are made same-day. Nothing sits. The salted caramel crunch is the best in the city.",
  },
  {
    name: "Jonas P.",
    meta: "Google Review",
    text: "Ordered two dozen for the office through the pickup form — ready exactly on time, boxed beautifully.",
  },
  {
    name: "Clara N.",
    meta: "Google Review",
    text: "Interior is gorgeous and dark and calm. The vanilla sprinkle tastes like a childhood upgrade.",
  },
  {
    name: "Ben O.",
    meta: "Local Guide · 67 reviews",
    text: "Espresso is dialed in properly, which almost never happens at a donut shop. Real 4.9 energy.",
  },
];

function ReviewCard({ r, i }: { r: (typeof reviews)[number]; i: number }) {
  const { ref, shown } = useReveal<HTMLElement>(0.2);
  return (
    <figure
      ref={ref}
      style={{ transitionDelay: `${(i % 3) * 110}ms` }}
      className={`glass reveal rounded-3xl p-6 ${shown ? "reveal-in" : ""}`}
    >
      <div className="flex items-center justify-between">
        <span className="tracking-[0.15em] text-primary">★★★★★</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Google</span>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">{r.text}</blockquote>
      <figcaption className="mt-5 border-t border-border pt-4">
        <p className="font-display text-sm font-semibold">{r.name}</p>
        <p className="text-[11px] text-muted-foreground">{r.meta}</p>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="relative scroll-mt-28 py-24">
      <div className="grid-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">Social Proof</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              4.9 stars, 185+ reviews
            </h2>
          </div>
          <div className="glass rounded-2xl px-5 py-4">
            <p className="font-display text-3xl font-bold text-glaze">4.9</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Google rating
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
