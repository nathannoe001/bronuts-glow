import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  tone?: "amber" | "magenta" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  href,
  tone = "amber",
  className = "",
  type = "button",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.28;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.4;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  const tones: Record<string, string> = {
    amber: "glaze-bg text-primary-foreground glow-amber",
    magenta: "bg-accent text-accent-foreground glow-magenta",
    ghost: "glass text-foreground hover:glow-amber",
  };

  const base = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-[transform,box-shadow] duration-300 will-change-transform ${tones[tone]} ${className}`;

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={base}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={base}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </button>
  );
}
