import craft from "@/assets/showcase-craft.jpg";
import coffee from "@/assets/showcase-coffee.jpg";
import { useScrollProgress } from "./use-reveal";

function ParallaxPanel({
  img,
  alt,
  kicker,
  title,
  body,
  flip = false,
}: {
  img: string;
  alt: string;
  kicker: string;
  title: string;
  body: string;
  flip?: boolean;
}) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const scale = 1.08 + progress * 0.12;
  const shift = (progress - 0.5) * 60;

  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <div className="glass relative overflow-hidden rounded-[2.5rem] p-2">
        <div className="h-[320px] overflow-hidden rounded-[2rem] md:h-[420px]">
          <img
            src={img}
            alt={alt}
            loading="lazy"
            width={1600}
            height={1008}
            className="h-full w-full object-cover will-change-transform"
            style={{ transform: `scale(${scale}) translate3d(${shift}px, ${-shift * 0.4}px, 0)` }}
          />
        </div>
      </div>
      <div className="lg:px-4">
        <p className="text-[11px] uppercase tracking-[0.35em] text-accent">{kicker}</p>
        <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
          {title}
        </h3>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

export function Showcase() {
  return (
    <section id="flavors" className="mx-auto max-w-6xl scroll-mt-28 space-y-24 px-6 py-24">
      <ParallaxPanel
        img={craft}
        alt="Baker glazing fresh donuts in the BRONUTS kitchen"
        kicker="Specialty Flavors"
        title="Proofed 18 hours. Fried in small batches."
        body="Every dough rests overnight before it ever meets oil, which is why the crumb pulls apart in ribbons. Glazes are cooked the same morning — brown butter, yuzu honey, black sesame, burnt cinnamon — and poured while still warm."
      />
      <ParallaxPanel
        flip
        img={coffee}
        alt="Specialty latte beside a glazed donut at BRONUTS cafe"
        kicker="Coffee Program"
        title="Espresso built to cut through sugar."
        body="A rotating single-origin plus our BRO blend, dialed twice daily. Order a flight of three minis with a cortado and let the counter pair them for you."
      />
    </section>
  );
}
