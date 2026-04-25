import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { modules, type Lesson, type Module } from "@/data/modules";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

type LoaderData = { mod: Module; lesson: Lesson; index: number };

export const Route = createFileRoute("/modulo_/$slug/aula/$lessonId")({
  loader: ({ params }): LoaderData => {
    const mod = modules.find((m) => m.slug === params.slug);
    if (!mod || !mod.lessons) throw notFound();
    const index = mod.lessons.findIndex((l) => l.id === params.lessonId);
    if (index === -1) throw notFound();
    return { mod, lesson: mod.lessons[index], index };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.lesson.title} · ${loaderData.mod.title}` },
          {
            name: "description",
            content: loaderData.lesson.sections[0]?.paragraphs[0] ?? loaderData.mod.intro,
          },
        ]
      : [],
  }),
  component: LessonPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <h1 className="font-display text-3xl">Aula não encontrada</h1>
      <Link to="/" className="text-primary mt-4 inline-block">Voltar</Link>
    </div>
  ),
});

function LessonPage() {
  const { mod, lesson, index } = Route.useLoaderData() as LoaderData;
  const lessons = mod.lessons!;
  const prev = lessons[index - 1];
  const next = lessons[index + 1];

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
          módulo {mod.number} · {lesson.number}
          {lesson.readingMin ? ` · ${lesson.readingMin} min` : ""}
        </p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl leading-[1.1] tracking-tight text-foreground text-balance">
          {lesson.title}
        </h1>
        {lesson.subtitle && (
          <p className="mt-3 font-display italic text-lg text-muted-foreground text-balance">
            {lesson.subtitle}
          </p>
        )}
      </header>

      <section className="mx-auto max-w-xl px-5 pt-10 flex flex-col gap-10">
        {lesson.sections.map((s, i) => (
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

      <section className="mx-auto max-w-xl px-5 pt-12">
        <div className="grid grid-cols-2 gap-3">
          {prev ? (
            <Link
              to="/modulo/$slug/aula/$lessonId"
              params={{ slug: mod.slug, lessonId: prev.id }}
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
              to="/modulo/$slug/aula/$lessonId"
              params={{ slug: mod.slug, lessonId: next.id }}
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
                concluir <BookOpen className="h-3 w-3" />
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
