import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { modules, type Module } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { Check, ArrowLeft, ArrowRight, BookOpen, Download, PlayCircle, Sparkles, ListChecks, Heart } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { exportModuleToPdf } from "@/lib/exportModulePdf";

export const Route = createFileRoute("/modulo/$slug")({
  loader: ({ params }) => {
    const mod = modules.find((m) => m.slug === params.slug);
    if (!mod) throw notFound();
    return mod;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · Reconectar` },
          { name: "description", content: loaderData.intro },
          { property: "og:title", content: `${loaderData.title} · Reconectar` },
          { property: "og:description", content: loaderData.intro },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  component: ModulePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <h1 className="font-display text-3xl">Módulo não encontrado</h1>
      <Link to="/" className="text-primary mt-4 inline-block">Voltar</Link>
    </div>
  ),
});

function ModulePage() {
  const mod = Route.useLoaderData() as Module;
  const { state, toggleRead, setRead, toggleHabit } = useProgress();
  const isRead = !!state.read[mod.slug];
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      // Defer to next frame so the button shows the loading state
      await new Promise((r) => setTimeout(r, 30));
      exportModuleToPdf(mod, state.habits);
    } finally {
      setExporting(false);
    }
  };

  const idx = modules.findIndex((m) => m.slug === mod.slug);
  const prev = modules[idx - 1];
  const next = modules[idx + 1];

  // Reading progress within the page
  const [readPct, setReadPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      const pct = total > 0 ? Math.min(100, Math.max(0, (el.scrollTop / total) * 100)) : 0;
      setReadPct(pct);
      if (pct > 92 && !state.read[mod.slug]) setRead(mod.slug, true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mod.slug, state.read, setRead]);

  // Group habits by category
  const groupedHabits = useMemo(() => {
    if (!mod.habits) return [];
    const groups = new Map<string, typeof mod.habits>();
    mod.habits.forEach((h) => {
      const arr = groups.get(h.desc) ?? [];
      arr.push(h);
      groups.set(h.desc, arr);
    });
    return Array.from(groups.entries());
  }, [mod.habits]);

  return (
    <article className="pb-24">
      {/* page progress strip */}
      <div className="fixed top-[60px] left-0 right-0 h-[2px] z-30 pointer-events-none">
        <div
          className="h-full bg-primary/70 transition-[width] duration-150"
          style={{ width: `${readPct}%` }}
        />
      </div>

      {/* HEADER */}
      <header className="relative">
        <div className="mx-auto max-w-2xl px-5 pt-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition">
            <ArrowLeft className="h-3 w-3" /> voltar
          </Link>
        </div>
        <div className="mx-auto max-w-2xl px-5 pt-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
            módulo {mod.number} · {mod.readingMin} min
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight text-foreground text-balance">
            {mod.title}
          </h1>
          <p className="mt-3 font-display italic text-xl text-muted-foreground text-balance">
            {mod.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-2xl px-5 mt-8">
          <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/40">
            <img
              src={mod.image}
              alt={mod.title}
              width={1024}
              height={768}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </header>

      {/* EXPORT PDF (top) */}
      <section className="mx-auto max-w-xl px-5 pt-8">
        <button
          onClick={handleExport}
          disabled={exporting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium border border-primary/30 text-foreground bg-card hover:bg-secondary/60 transition disabled:opacity-60"
        >
          <Download className="h-4 w-4" />
          {exporting ? "Gerando PDF..." : "Baixar este módulo em PDF"}
        </button>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-xl px-5 pt-10">
        <p className="font-display text-2xl leading-snug text-foreground/90 text-balance">
          {mod.intro}
        </p>
      </section>

      {/* SECTIONS */}
      {mod.sections.length > 0 && (
        <section className="mx-auto max-w-xl px-5 pt-10 flex flex-col gap-12">
          {mod.sections.map((s, i) => (
            <div key={i}>
              {s.title && (
                <h2 className="font-display text-2xl text-foreground mb-3 text-balance">
                  {s.title}
                </h2>
              )}
              <div className="flex flex-col gap-4">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-[17px] leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* LESSONS NAV */}
      {mod.lessons && mod.lessons.length > 0 && (
        <section className="mx-auto max-w-xl px-5 pt-12">
          <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80 mb-4">
            aulas deste módulo
          </p>
          <ul className="flex flex-col gap-3">
            {mod.lessons.map((l, i) => (
              <li key={l.id}>
                <Link
                  to="/modulo/$slug/aula/$lessonId"
                  params={{ slug: mod.slug, lessonId: l.id }}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card hover:border-primary/40 hover:bg-secondary/40 transition"
                >
                  <span className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary border border-primary/20">
                    <span className="font-display text-lg">{i + 1}</span>
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      {l.number}
                      {l.readingMin ? ` · ${l.readingMin} min` : ""}
                    </span>
                    <span className="mt-1 block font-display text-lg text-foreground leading-snug text-balance">
                      {l.title}
                    </span>
                  </span>
                  <PlayCircle className="h-5 w-5 shrink-0 text-primary/70 group-hover:text-primary transition" />
                </Link>
              </li>
            ))}
            {mod.exercise && (
              <li>
                <a
                  href="#exercicio-pratico"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-primary/30 bg-secondary/40 hover:bg-secondary/60 transition"
                >
                  <span className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.24em] text-primary">
                      exercício prático
                    </span>
                    <span className="mt-1 block font-display text-lg text-foreground leading-snug text-balance">
                      {mod.exercise.title}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-primary/70 group-hover:text-primary transition" />
                </a>
              </li>
            )}
          </ul>
        </section>
      )}

      {/* HABIT BLOCKS NAV (módulo 3) */}
      {mod.habitBlocks && mod.habitBlocks.length > 0 && (
        <section className="mx-auto max-w-xl px-5 pt-12">
          <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80 mb-4">
            blocos de atitudes
          </p>
          <ul className="flex flex-col gap-3">
            {mod.habitBlocks.map((b, i) => {
              const total = b.habitIds.length;
              const done = b.habitIds.filter((id) => state.habits[id]).length;
              return (
                <li key={b.id}>
                  <Link
                    to="/modulo/$slug/bloco/$blockId"
                    params={{ slug: mod.slug, blockId: b.id }}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card hover:border-primary/40 hover:bg-secondary/40 transition"
                  >
                    <span className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary border border-primary/20">
                      <span className="font-display text-lg">{i + 1}</span>
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                        {b.number} · {done}/{total}
                      </span>
                      <span className="mt-1 block font-display text-lg text-foreground leading-snug text-balance">
                        {b.title}
                      </span>
                    </span>
                    <ListChecks className="h-5 w-5 shrink-0 text-primary/70 group-hover:text-primary transition" />
                  </Link>
                </li>
              );
            })}
            {mod.finalReflection && (
              <li>
                <a
                  href="#reflexao-final"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card hover:border-primary/40 hover:bg-secondary/40 transition"
                >
                  <span className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary border border-primary/20">
                    <Heart className="h-5 w-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      reflexão final
                    </span>
                    <span className="mt-1 block font-display text-lg text-foreground leading-snug text-balance">
                      {mod.finalReflection.title}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-primary/70 group-hover:text-primary transition" />
                </a>
              </li>
            )}
            {mod.exercise && (
              <li>
                <a
                  href="#exercicio-pratico"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-primary/30 bg-secondary/40 hover:bg-secondary/60 transition"
                >
                  <span className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.24em] text-primary">
                      exercício prático
                    </span>
                    <span className="mt-1 block font-display text-lg text-foreground leading-snug text-balance">
                      {mod.exercise.title}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-primary/70 group-hover:text-primary transition" />
                </a>
              </li>
            )}
          </ul>
        </section>
      )}

      {/* HABITS (módulo 3) */}
      {groupedHabits.length > 0 && !mod.habitBlocks && (
        <section className="mx-auto max-w-xl px-5 pt-10 flex flex-col gap-10">
          {groupedHabits.map(([cat, items]) => (
            <div key={cat}>
              <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80 mb-3">
                {cat}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map((h) => {
                  const checked = !!state.habits[h.id];
                  return (
                    <li key={h.id}>
                      <button
                        onClick={() => toggleHabit(h.id)}
                        className={`w-full text-left flex items-start gap-3 p-4 rounded-2xl border transition-all ${
                          checked
                            ? "bg-secondary/70 border-primary/30"
                            : "bg-card border-border/60 hover:border-primary/30"
                        }`}
                      >
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                            checked
                              ? "bg-primary border-primary text-primary-foreground"
                              : "border-border bg-background"
                          }`}
                        >
                          {checked && <Check className="h-3 w-3" strokeWidth={3} />}
                        </span>
                        <span
                          className={`text-[15px] leading-snug ${
                            checked ? "text-foreground/70 line-through decoration-primary/40" : "text-foreground"
                          }`}
                        >
                          {h.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* FINAL REFLECTION */}
      {mod.finalReflection && (
        <section id="reflexao-final" className="mx-auto max-w-xl px-5 pt-12 scroll-mt-24">
          <div className="rounded-[1.75rem] border border-border/60 bg-card p-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-primary mb-2">
              reflexão final
            </p>
            <h3 className="font-display text-2xl text-foreground mb-4">
              {mod.finalReflection.title}
            </h3>
            <div className="flex flex-col gap-3">
              {mod.finalReflection.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] text-foreground/85 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EXERCISE */}
      {mod.exercise && (
        <section id="exercicio-pratico" className="mx-auto max-w-xl px-5 pt-12 scroll-mt-24">
          <div className="rounded-[1.75rem] border border-primary/20 bg-secondary/40 p-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-primary mb-2">
              exercício prático
            </p>
            <h3 className="font-display text-2xl text-foreground mb-3">{mod.exercise.title}</h3>
            {mod.exercise.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] text-foreground/80 leading-relaxed mb-3">
                {p}
              </p>
            ))}
            <ul className="mt-4 flex flex-col gap-3">
              {mod.exercise.questions.map((q, i) => (
                <li
                  key={i}
                  className="font-display italic text-lg text-foreground/90 leading-snug pl-4 border-l-2 border-primary/40"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* MARK READ + NAV */}
      <section className="mx-auto max-w-xl px-5 pt-12">
        <button
          onClick={() => toggleRead(mod.slug)}
          className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium transition ${
            isRead
              ? "bg-secondary text-secondary-foreground border border-primary/30"
              : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_12px_30px_-12px_oklch(0.62_0.10_35/0.6)]"
          }`}
        >
          {isRead ? (
            <>
              <Check className="h-4 w-4" /> Marcado como lido
            </>
          ) : (
            <>
              <BookOpen className="h-4 w-4" /> Marcar este módulo como lido
            </>
          )}
        </button>

        <div className="grid grid-cols-2 gap-3 mt-6">
          {prev ? (
            <Link
              to="/modulo/$slug"
              params={{ slug: prev.slug }}
              className="group flex flex-col gap-1 p-4 rounded-2xl border border-border/60 hover:border-primary/40 transition"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground inline-flex items-center gap-1">
                <ArrowLeft className="h-3 w-3" /> anterior
              </span>
              <span className="font-display text-base text-foreground leading-tight">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link
              to="/modulo/$slug"
              params={{ slug: next.slug }}
              className="group flex flex-col gap-1 p-4 rounded-2xl border border-border/60 hover:border-primary/40 transition text-right"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground inline-flex items-center gap-1 self-end">
                próximo <ArrowRight className="h-3 w-3" />
              </span>
              <span className="font-display text-base text-foreground leading-tight">{next.title}</span>
            </Link>
          ) : (
            <Link
              to="/"
              className="group flex flex-col gap-1 p-4 rounded-2xl border border-border/60 hover:border-primary/40 transition text-right"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground self-end">final</span>
              <span className="font-display text-base text-foreground leading-tight">Voltar aos módulos</span>
            </Link>
          )}
        </div>
      </section>
    </article>
  );
}
