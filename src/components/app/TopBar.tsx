import { Link, useRouterState } from "@tanstack/react-router";
import { useProgress } from "@/hooks/useProgress";

export function TopBar() {
  const { progress } = useProgress();
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-2xl px-5 py-3 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display tracking-tight text-foreground/90 group-hover:text-primary transition-colors text-lg">
            60 Atitudes Simples Que Reconectam um Casal em 30 Minutos
          </span>
        </Link>
        <div className="flex-1" />
        <Link
          to="/bonus"
          className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition"
          activeProps={{ className: "text-xs uppercase tracking-[0.18em] text-primary" }}
        >
          bônus
        </Link>
        {!isHome && (
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition"
          >
            módulos
          </Link>
        )}
      </div>
      <div className="h-[3px] w-full bg-muted/60">
        <div
          className="h-full bg-gradient-to-r from-[var(--blush)] via-primary to-[var(--clay)] transition-[width] duration-700 ease-out"
          style={{ width: `${progress}%` }}
          aria-label={`Progresso: ${progress}%`}
        />
      </div>
    </header>
  );
}
