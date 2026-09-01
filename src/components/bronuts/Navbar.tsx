import { useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Specialty Flavors", href: "#flavors" },
  { label: "Reviews", href: "#reviews" },
  { label: "Locations", href: "#locations" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)]" : "glass"
        }`}
      >
        <a href="#top" className="font-display text-xl font-extrabold tracking-[0.22em]">
          BRO<span className="text-glaze">NUTS</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative text-[13px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <MagneticButton href="#order" tone="amber" className="hidden px-6 py-3 sm:inline-flex">
            Order Online
          </MagneticButton>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="glass grid size-10 place-items-center rounded-full md:hidden"
          >
            <span className="text-sm">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-strong mx-auto mt-2 max-w-6xl rounded-3xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <MagneticButton href="#order" tone="amber" className="w-full">
                Order Online
              </MagneticButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
