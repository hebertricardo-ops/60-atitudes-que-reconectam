import { createFileRoute, Link } from "@tanstack/react-router";
import { modules } from "@/data/modules";
import { ModuleCard } from "@/components/app/ModuleCard";
import { ProgressRing } from "@/components/app/ProgressRing";
import { useProgress, totals } from "@/hooks/useProgress";
import heroImg from "@/assets/hero.jpg";
import { bonuses } from "@/data/bonuses";
import { orderBumps } from "@/data/orderBumps";
import { Gift, Lock, Sparkles, ShoppingBag } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reconectar — um guia íntimo para reaproximar o casal" },
      { name: "description", content: "Pequenas atitudes conscientes para reconstruir conexão, carinho e diálogo no relacionamento." },
    ],
  }),
  component: Index,
});

function Index() {
  const { progress, readCount, habitsDone, state } = useProgress();
  const nextSlug = modules.find((m) => !state.read[m.slug])?.slug ?? "introducao";
  const { hasFullAccess, hasExtra } = useAuth();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-70 pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-2xl px-5 pt-10 pb-8 sm:pt-16">
          <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80 mb-5">
            um guia íntimo · leitura suave
          </p>
          <h1 className="font-display text-[40px] sm:text-6xl leading-[1.05] tracking-tight text-foreground text-balance">
            Reconecte o seu <em className="not-italic text-primary">casamento</em> com pequenos gestos.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl text-balance">
            Um caminho leve, dividido em módulos curtos, para você ler no fim do dia — e voltar a sentir proximidade, carinho e diálogo dentro da relação.
          </p>

          <div className="mt-8 flex items-center gap-5 rounded-3xl border border-border/70 bg-card/80 backdrop-blur p-5">
            <ProgressRing value={progress} />
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">sua jornada</p>
              <p className="font-display text-lg text-foreground mt-1 leading-snug">
                {readCount} de {totals.totalModules} módulos · {habitsDone} de {totals.totalHabits} atitudes
              </p>
              <Link
                to="/modulo/$slug"
                params={{ slug: nextSlug }}
                className="inline-flex mt-3 items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
              >
                Continuar leitura →
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-2xl px-5">
          <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/40">
            <img
              src={heroImg}
              alt="Ilustração suave em aquarela"
              width={1280}
              height={896}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="mx-auto max-w-2xl px-5 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">conteúdo</p>
            <h2 className="font-display text-3xl text-foreground mt-1">Os módulos</h2>
          </div>
          <span className="text-xs text-muted-foreground">{modules.length} capítulos</span>
        </div>

        <div className="flex flex-col gap-4">
          {modules.map((m) => (
            <ModuleCard key={m.slug} module={m} />
          ))}
        </div>
      </section>

      {/* BÔNUS */}
      <section className="mx-auto max-w-2xl px-5 pb-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
              presentes exclusivos
            </p>
            <h2 className="font-display text-3xl text-foreground mt-1">Seus bônus</h2>
          </div>
          <Link
            to="/bonus"
            className="text-xs uppercase tracking-[0.18em] text-primary hover:underline inline-flex items-center gap-1"
          >
            {!hasFullAccess && <Lock className="h-3 w-3" />}
            ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {bonuses.map((b) => (
            <Link
              key={b.slug}
              to="/bonus/$slug"
              params={{ slug: b.slug }}
              className="group rounded-3xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_oklch(0.62_0.10_35/0.45)] transition-all duration-500 p-5 flex flex-col gap-3"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[var(--blush)] to-[var(--sand)] flex items-center justify-center">
                {hasFullAccess
                  ? <Gift className="h-5 w-5 text-primary" />
                  : <Lock className="h-5 w-5 text-primary/60" />
                }
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-primary/80">
                  bônus {b.number}
                </p>
                <h3 className="mt-1 font-display text-lg leading-tight text-foreground text-balance">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {b.subtitle}
                </p>
              </div>
              {hasFullAccess ? (
                <span className="mt-auto inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-primary group-hover:translate-x-1 transition-transform">
                  <Sparkles className="h-3 w-3" /> abrir
                </span>
              ) : (
                <span className="mt-auto inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Lock className="h-3 w-3" /> Plano Completo
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* EXTRAS */}
      <section className="mx-auto max-w-2xl px-5 pb-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              conteúdo adicional
            </p>
            <h2 className="font-display text-3xl text-foreground mt-1">Guias extras</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {orderBumps.map((ob) => {
            const unlocked = hasExtra(ob.slug);
            return (
              <Link
                key={ob.slug}
                to="/extra/$slug"
                params={{ slug: ob.slug }}
                className="group rounded-3xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_oklch(0.62_0.10_35/0.45)] transition-all duration-500 p-5 flex flex-col gap-3"
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[var(--blush)] to-[var(--sand)] flex items-center justify-center text-xl">
                  {ob.coverEmoji}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-primary/80">
                    {ob.badge}
                  </p>
                  <h3 className="mt-1 font-display text-lg leading-tight text-foreground text-balance">
                    {ob.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {ob.subtitle}
                  </p>
                </div>
                {unlocked ? (
                  <span className="mt-auto inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-primary group-hover:translate-x-1 transition-transform">
                    <ShoppingBag className="h-3 w-3" /> abrir
                  </span>
                ) : (
                  <span className="mt-auto inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Lock className="h-3 w-3" /> adquira em separado
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-xl px-6 pb-20">
        <blockquote className="font-display text-2xl sm:text-3xl leading-snug text-foreground/90 text-balance text-center">
          “Relacionamentos não se fortalecem com grandes gestos.
          Eles se fortalecem com pequenas atitudes repetidas ao longo do tempo.”
        </blockquote>
      </section>
    </div>
  );
}
