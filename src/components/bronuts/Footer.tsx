export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
        <p className="font-display text-lg font-extrabold tracking-[0.22em]">
          BRO<span className="text-glaze">NUTS</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BRONUTS — Handmade gourmet donuts & specialty coffee.
        </p>
      </div>
    </footer>
  );
}
