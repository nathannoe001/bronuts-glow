import lava from "@/assets/donut-lava.jpg";
import caramel from "@/assets/donut-caramel.jpg";
import pistachio from "@/assets/donut-pistachio.jpg";
import vanilla from "@/assets/donut-vanilla.jpg";
import { SpotlightCard } from "./SpotlightCard";
import { useReveal } from "./use-reveal";

const items = [
  {
    name: "Chocolate Lava Glaze",
    note: "70% Valrhona ganache, molten center, cocoa nib crunch",
    price: "$6.50",
    img: lava,
    area: "md:col-span-2 md:row-span-2",
    tall: true,
  },
  {
    name: "Salted Caramel Crunch",
    note: "Burnt caramel, Maldon salt, toffee shards",
    price: "$5.90",
    img: caramel,
    area: "md:col-span-2",
    tall: false,
  },
  {
    name: "Pistachio Dream",
    note: "Sicilian pistachio cream, white chocolate veil",
    price: "$6.20",
    img: pistachio,
    area: "",
    tall: false,
  },
  {
    name: "Classic Vanilla Sprinkle",
    note: "Madagascar vanilla bean glaze, rainbow confetti",
    price: "$4.80",
    img: vanilla,
    area: "",
    tall: false,
  },
];

export function BentoMenu() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="menu" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent">Menu Highlights</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-5xl">
            Signature glazes, poured by hand
          </h2>
        </div>
        <p className="max-w-xs text-sm text-muted-foreground">
          Four house classics on the board every day, plus a rotating specialty flight each
          weekend.
        </p>
      </div>

      <div
        ref={ref}
        className={`reveal grid grid-cols-1 gap-5 md:grid-cols-4 md:auto-rows-[190px] ${shown ? "reveal-in" : ""}`}
      >
        {items.map((it) => (
          <SpotlightCard key={it.name} className={`group flex flex-col ${it.area}`}>
            <div className={`relative overflow-hidden ${it.tall ? "h-64 md:h-auto md:flex-1" : "h-44"}`}>
              <img
                src={it.img}
                alt={it.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.145_0_0/85%),transparent_60%)]" />
            </div>
            <div className="flex items-end justify-between gap-4 p-5">
              <div>
                <h3 className="font-display text-lg font-bold leading-tight">{it.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{it.note}</p>
              </div>
              <span className="shrink-0 rounded-full border border-glass-border px-3 py-1 font-display text-sm font-semibold text-primary">
                {it.price}
              </span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
