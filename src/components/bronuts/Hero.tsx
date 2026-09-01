import heroDonuts from "@/assets/hero-donuts.jpg";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="grid-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Gourmet · Handmade · Daily
          </p>

          <h1 className="mt-7 font-display text-[13vw] font-extrabold leading-[0.88] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            <span className="text-glaze block">Freshly Glazed</span>
            <span className="text-glaze block">Obsession</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Small-batch brioche donuts, artisanal glazes poured by hand, and single-origin
            espresso pulled to order. Baked before sunrise, gone by afternoon.
          </p>

          <div className="glass mt-8 inline-flex flex-wrap items-center gap-3 rounded-2xl px-5 py-3">
            <span className="text-base tracking-[0.15em] text-primary">★★★★★</span>
            <span className="font-display text-lg font-bold">4.9</span>
            <span className="text-xs text-muted-foreground">185+ Google Reviews</span>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <MagneticButton href="#menu" tone="amber">
              Explore Menu
            </MagneticButton>
            <MagneticButton href="#order" tone="ghost">
              Order Pickup
            </MagneticButton>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_50%_45%,oklch(0.65_0.29_5/25%),transparent_65%)] blur-2xl" />
          <div className="glass spotlight relative overflow-hidden rounded-[2.5rem] p-2">
            <img
              src={heroDonuts}
              alt="Stack of glossy gourmet BRONUTS donuts with amber and magenta glaze"
              width={1600}
              height={1104}
              className="h-full w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="glass-strong absolute -bottom-6 left-6 rounded-2xl px-5 py-4">
            <p className="font-display text-2xl font-bold text-glaze">14</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Rotating glazes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
