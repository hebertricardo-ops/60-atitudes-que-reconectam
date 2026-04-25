import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { modules, type HabitBlock, type Module } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type LoaderData = { mod: Module; block: HabitBlock; index: number };

export const Route = createFileRoute("/modulo_/$slug/bloco/$blockId")({
  loader: ({ params }): LoaderData => {
    const mod = modules.find((m) => m.slug === params.slug);
    if (!mod || !mod.habitBlocks) throw notFound();
    const index = mod.habitBlocks.findIndex((b) => b.id === params.blockId);
    if (index === -1) throw notFound();
    return { mod, block: mod.habitBlocks[index], index };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.block.title} · ${loaderData.mod.title}` },
          { name: "description", content: loaderData.block.intro ?? loaderData.mod.intro },
        ]
      : [],
  }),
  component: BlockPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <h1 className="font-display text-3xl">Bloco não encontrado</h1>
      <Link to="/" className="text-primary mt-4 inline-block">Voltar</Link>
    </div>
  ),
});

function BlockPage() {
  const { mod, block, index } = Route.useLoaderData() as LoaderData;
  const { state, toggleHabit } = useProgress();
  const blocks = mod.habitBlocks!;
  const prev = blocks[index - 1];
  const next = blocks[index + 1];

  const habits = (mod.habits ?? []).filter((h) => block.habitIds.includes(h.id));

  return (
    <article className="pb-24">
      <header className="mx-auto max-w-2xl px-5 pt-8">
        <Link
          to="/modulo/$slug"
          params={{ slug: mod.slug }}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition"
        >
          <ArrowLeft className="h-3 w-3" /> voltar ao módulo
        </Link>

        <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-primary/80">
          módulo {mod.number} · {block.number}
        </p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl leading-[1.1] tracking-tight text-foreground text-balance">
          {block.title}
        </h1>
        {block.intro && (
          <p className="mt-4 font-display italic text-lg text-muted-foreground text-balance">
            {block.intro}
          </p>
        )}
      </header>

      <section className="mx-auto max-w-xl px-5 pt-10">
        <ul className="flex flex-col gap-3">
          {habits.map((h, i) => {
            const checked = !!state.habits[h.id];
            const number = (mod.habits ?? []).findIndex((x) => x.id === h.id) + 1;
            return (
              <li key={h.id}>
                <button
                  onClick={() => toggleHabit(h.id)}
                  className={`w-full text-left flex items-start gap-4 p-5 rounded-2xl border transition-all ${
                    checked
                      ? "bg-secondary/70 border-primary/30"
                      : "bg-card border-border/60 hover:border-primary/30"
                  }`}
                >
                  <span
                    className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition ${
                      checked
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    {checked ? (
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    ) : (
                      <span className="text-[11px] font-medium">{number}</span>
                    )}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span
                      className={`block font-display text-[17px] leading-snug ${
                        checked ? "text-foreground/70" : "text-foreground"
                      }`}
                    >
                      {h.title}
                    </span>
                    {h.note && (
                      <span className="mt-1.5 block text-[14px] leading-relaxed text-muted-foreground">
                        {h.note}
                      </span>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto max-w-xl px-5 pt-10">
        <div className="grid grid-cols-2 gap-3">
          {prev ? (
            <Link
              to="/modulo/$slug/bloco/$blockId"
              params={{ slug: mod.slug, blockId: prev.id }}
              className="flex flex-col gap-1 p-4 rounded-2xl border border-border/60 hover:border-primary/40 transition"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground inline-flex items-center gap-1">
                <ArrowLeft className="h-3 w-3" /> {prev.number}
              </span>
              <span className="font-display text-base text-foreground leading-tight">
                {prev.title}
              </span>
            </Link>
          ) : (
            <Link
              to="/modulo/$slug"
              params={{ slug: mod.slug }}
              className="flex flex-col gap-1 p-4 rounded-2xl border border-border/60 hover:border-primary/40 transition"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground inline-flex items-center gap-1">
                <ArrowLeft className="h-3 w-3" /> voltar
              </span>
              <span className="font-display text-base text-foreground leading-tight">
                Início do módulo
              </span>
            </Link>
          )}
          {next ? (
            <Link
              to="/modulo/$slug/bloco/$blockId"
              params={{ slug: mod.slug, blockId: next.id }}
              className="flex flex-col gap-1 p-4 rounded-2xl border border-border/60 hover:border-primary/40 transition text-right"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground inline-flex items-center gap-1 self-end">
                {next.number} <ArrowRight className="h-3 w-3" />
              </span>
              <span className="font-display text-base text-foreground leading-tight">
                {next.title}
              </span>
            </Link>
          ) : (
            <Link
              to="/modulo/$slug"
              params={{ slug: mod.slug }}
              className="flex flex-col gap-1 p-4 rounded-2xl border border-primary/30 bg-secondary/40 hover:border-primary/50 transition text-right"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-primary/80 inline-flex items-center gap-1 self-end">
                concluir <ArrowRight className="h-3 w-3" />
              </span>
              <span className="font-display text-base text-foreground leading-tight">
                Voltar ao módulo
              </span>
            </Link>
          )}
        </div>
      </section>
    </article>
  );
}
