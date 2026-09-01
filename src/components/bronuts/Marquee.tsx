const PHRASE = "FRESHLY BAKED DAILY • HANDMADE GOURMET DONUTS • SPECIALTY COFFEE • ORDER ONLINE • ";

export function Marquee() {
  const row = PHRASE.repeat(4);
  return (
    <section aria-hidden className="overflow-hidden border-y border-border py-10">
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-hollow whitespace-nowrap font-display text-[13vw] font-extrabold leading-none tracking-tight md:text-[7vw]"
          >
            {row}
          </span>
        ))}
      </div>
    </section>
  );
}
