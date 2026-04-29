import { createFileRoute, Link } from "@tanstack/react-router";
import { bonuses } from "@/data/bonuses";
import { Gift, Sparkles } from "lucide-react";
import { BonusGate } from "@/components/app/BonusGate";

export const Route = createFileRoute("/bonus")({
  head: () => ({
    meta: [
      { title: "Bônus exclusivos · Reconectar" },
      {
        name: "description",
        content:
          "Seus presentes exclusivos: ferramentas práticas para acelerar sua reconexão hoje.",
      },
      { property: "og:title", content: "Seus presentes exclusivos · Reconectar" },
      {
        property: "og:description",
        content: "Ferramentas práticas para acelerar sua reconexão hoje.",
      },
    ],
  }),
  component: BonusIndex,
});

function BonusIndex() {
  return (
    <BonusGate>
    <div className="mx-auto max-w-2xl px-5 pt-10 pb-16">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-primary/80">
          <Sparkles className="h-3.5 w-3.5" /> bônus exclusivos
        </span>
        <h1 className="mt-4 font-display text-[34px] sm:text-5xl leading-[1.05] tracking-tight text-foreground text-balance">
          Seus presentes <em className="not-italic text-primary">exclusivos</em>
        </h1>
        <p className="mt-4 text-base text-muted-foreground text-balance">
          Ferramentas práticas para acelerar sua reconexão hoje.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {bonuses.map((b) => (
          <Link
            key={b.slug}
            to="/bonus/$slug"
            params={{ slug: b.slug }}
            className="group relative block overflow-hidden rounded-3xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_oklch(0.62_0.10_35/0.45)] transition-all duration-500"
          >
            <div className="grid grid-cols-[112px_1fr] sm:grid-cols-[140px_1fr] gap-0">
              <div className="relative bg-gradient-to-br from-[var(--blush)] via-secondary to-[var(--sand)] flex items-center justify-center">
                <Gift className="h-10 w-10 text-primary/70 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5 flex flex-col gap-2 min-w-0">
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary/80">
                  bônus {b.number}
                </span>
                <h3 className="font-display text-xl leading-tight text-foreground text-balance">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{b.subtitle}</p>
                <div className="mt-auto pt-2 flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <span>{b.readingMin} min</span>
                  <span className="opacity-40">·</span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform">
                    abrir →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Upsell trigger */}
      <div className="mt-12 rounded-3xl border border-primary/30 bg-gradient-to-br from-secondary/60 to-[var(--sand)]/60 p-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">próximo passo</p>
        <h2 className="mt-2 font-display text-2xl text-foreground text-balance">
          Quer um plano passo a passo?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground text-balance">
          Conheça o Plano de 7 Dias para aplicar tudo de forma guiada.
        </p>
      </div>

    </div>
    </BonusGate>
  );
}
