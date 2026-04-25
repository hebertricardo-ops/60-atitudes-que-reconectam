import { Link } from "@tanstack/react-router";
import type { Module } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { Check } from "lucide-react";

export function ModuleCard({ module }: { module: Module }) {
  const { state } = useProgress();
  const done = !!state.read[module.slug];
  return (
    <Link
      to="/modulo/$slug"
      params={{ slug: module.slug }}
      className="group relative block overflow-hidden rounded-3xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_oklch(0.62_0.10_35/0.45)] transition-all duration-500"
    >
      <div className="grid grid-cols-[112px_1fr] sm:grid-cols-[140px_1fr] gap-0">
        <div className="relative bg-secondary/40 overflow-hidden">
          <img
            src={module.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-5 flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary/80">
              módulo {module.number}
            </span>
            {done && (
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[oklch(0.45_0.08_145)]">
                <Check className="h-3 w-3" /> lido
              </span>
            )}
          </div>
          <h3 className="font-display text-xl leading-tight text-foreground text-balance">
            {module.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{module.subtitle}</p>
          <div className="mt-auto pt-2 flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
            <span>{module.readingMin} min</span>
            <span className="opacity-40">·</span>
            <span className="text-primary group-hover:translate-x-1 transition-transform">ler →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
