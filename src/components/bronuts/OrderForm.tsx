import { useState } from "react";
import { MagneticButton } from "./MagneticButton";

const inputClass =
  "w-full rounded-2xl border border-glass-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary focus:glow-amber";

export function OrderForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="order" className="relative scroll-mt-28 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass rounded-3xl p-8">
          <p className="text-[11px] uppercase tracking-[0.35em] text-accent">Order</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.03] tracking-tight">
            Order Pickup or Delivery
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Same-day pickup on orders placed before 2pm. Delivery within 5 miles. Dozen boxes and
            catering trays available with 24 hours notice.
          </p>

          <dl id="locations" className="mt-8 scroll-mt-28 space-y-5 border-t border-border pt-7">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Flagship
              </dt>
              <dd className="mt-1 text-sm">128 Warren Street · Mon–Sun, 7am–4pm</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Riverside Kiosk
              </dt>
              <dd className="mt-1 text-sm">9 Dock Lane · Fri–Sun, 8am–2pm</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Call
              </dt>
              <dd className="mt-1 text-sm text-primary">(555) 019-2288</dd>
            </div>
          </dl>
        </div>

        <div className="glass rounded-3xl p-8">
          {sent ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
              <p className="font-display text-3xl font-extrabold text-glaze">Order received</p>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                We'll text you a confirmation with your pickup window in the next few minutes.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-xs uppercase tracking-[0.2em] text-primary"
              >
                Place another order
              </button>
            </div>
          ) : (
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Name
                <input required placeholder="Alex Rivera" className={inputClass} />
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Phone
                <input required type="tel" placeholder="(555) 000-0000" className={inputClass} />
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Method
                <select className={inputClass} defaultValue="Pickup">
                  <option>Pickup</option>
                  <option>Delivery</option>
                </select>
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Quantity
                <select className={inputClass} defaultValue="Half dozen">
                  <option>Three donuts</option>
                  <option>Half dozen</option>
                  <option>Full dozen</option>
                  <option>Catering tray</option>
                </select>
              </label>
              <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:col-span-2">
                Flavors & notes
                <textarea
                  rows={4}
                  placeholder="2x Chocolate Lava, 2x Pistachio Dream, 2x Salted Caramel…"
                  className={`${inputClass} resize-none`}
                />
              </label>
              <div className="sm:col-span-2">
                <MagneticButton type="submit" tone="magenta" className="w-full sm:w-auto">
                  Submit Order
                </MagneticButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
