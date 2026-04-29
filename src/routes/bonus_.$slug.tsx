import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { bonuses, type Bonus, type BonusFeature } from "@/data/bonuses";
import { ArrowLeft, Check, Copy, Gift, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { BonusGate } from "@/components/app/BonusGate";

export const Route = createFileRoute("/bonus_/$slug")({
  loader: ({ params }) => {
    const b = bonuses.find((x) => x.slug === params.slug);
    if (!b) throw notFound();
    return b;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · Bônus Reconectar` },
          { name: "description", content: loaderData.intro },
          { property: "og:title", content: `${loaderData.title} · Bônus Reconectar` },
          { property: "og:description", content: loaderData.intro },
        ]
      : [],
  }),
  component: BonusDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center">
      <h1 className="font-display text-3xl">Bônus não encontrado</h1>
      <Link to="/bonus" className="text-primary mt-4 inline-block">
        Voltar
      </Link>
    </div>
  ),
});

function BonusDetail() {
  const bonus = Route.useLoaderData() as Bonus;

  return (
    <BonusGate>
    <div className="mx-auto max-w-2xl px-5 pt-6 pb-16">
      <Link
        to="/bonus"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition mb-6"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> bônus
      </Link>

      <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-[var(--blush)]/60 via-secondary/40 to-[var(--sand)]/60 p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <Gift className="h-4 w-4 text-primary" />
          <span className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
            bônus {bonus.number}
          </span>
        </div>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl leading-tight text-foreground text-balance">
          {bonus.title}
        </h1>
        <p className="mt-2 text-base text-foreground/70">{bonus.subtitle}</p>
        <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-foreground/80 text-balance">
          {bonus.intro}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-8">
        {bonus.features.map((feature, i) => (
          <FeatureRenderer key={i} feature={feature} />
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-primary/30 bg-secondary/40 p-6 text-center">
        <Sparkles className="h-5 w-5 text-primary mx-auto" />
        <p className="mt-2 font-display text-xl text-foreground">
          Pequenos gestos repetidos mudam tudo.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Escolha uma ferramenta deste bônus para usar ainda hoje.
        </p>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          Precisa de ajuda? Suporte via WhatsApp →
        </a>
      </div>
    </div>
    </BonusGate>
  );
}

function FeatureRenderer({ feature }: { feature: BonusFeature }) {
  if (feature.type === "interactive_table") return <SubstitutionTable feature={feature} />;
  if (feature.type === "script_box") return <ScriptList feature={feature} />;
  if (feature.type === "stepper_checklist") return <StepperChecklist feature={feature} />;
  if (feature.type === "tabs_messages") return <MessageTabs feature={feature} />;
  return null;
}

function FeatureHeader({ label, intro }: { label: string; intro?: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-display text-2xl text-foreground">{label}</h2>
      {intro && <p className="mt-2 text-sm text-muted-foreground text-balance">{intro}</p>}
    </div>
  );
}

function SubstitutionTable({
  feature,
}: {
  feature: Extract<BonusFeature, { type: "interactive_table" }>;
}) {
  return (
    <section>
      <FeatureHeader label={feature.label} intro={feature.intro} />
      <div className="flex flex-col gap-3">
        {feature.rows.map((row, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border/70 bg-card overflow-hidden"
          >
            <div className="p-4 border-b border-border/50 bg-destructive/5 flex gap-3">
              <div className="mt-0.5 h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                <X className="h-3.5 w-3.5 text-destructive" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-destructive/80">
                  evite
                </p>
                <p className="mt-1 text-[15px] text-foreground/80 leading-snug">
                  “{row.wrong}”
                </p>
              </div>
            </div>
            <div className="p-4 bg-[var(--sage)]/15 flex gap-3">
              <div className="mt-0.5 h-6 w-6 rounded-full bg-[var(--sage)]/30 flex items-center justify-center shrink-0">
                <Check className="h-3.5 w-3.5 text-[oklch(0.45_0.08_145)]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[oklch(0.45_0.08_145)]">
                  prefira
                </p>
                <p className="mt-1 text-[15px] text-foreground leading-snug">
                  “{row.right}”
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScriptList({ feature }: { feature: Extract<BonusFeature, { type: "script_box" }> }) {
  return (
    <section>
      <FeatureHeader label={feature.label} intro={feature.intro} />
      <div className="flex flex-col gap-4">
        {feature.scripts.map((s, i) => (
          <CopyCard key={i} label={s.label} text={s.text} />
        ))}
      </div>
    </section>
  );
}

function CopyCard({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };
  return (
    <div className="rounded-2xl border border-border/70 bg-card p-5">
      <p className="text-[10px] uppercase tracking-[0.22em] text-primary/80">{label}</p>
      <p className="mt-3 font-display text-[17px] leading-relaxed text-foreground/90 text-balance">
        “{text}”
      </p>
      <button
        type="button"
        onClick={onCopy}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs uppercase tracking-[0.18em] px-4 py-2 transition"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "copiado" : "copiar script"}
      </button>
    </div>
  );
}

function StepperChecklist({
  feature,
}: {
  feature: Extract<BonusFeature, { type: "stepper_checklist" }>;
}) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const total = feature.steps.length;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <section>
      <FeatureHeader label={feature.label} intro={feature.intro} />

      <div className="mb-4 flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--blush)] via-primary to-[var(--clay)] transition-all duration-500"
            style={{ width: `${(done / total) * 100}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground tabular-nums">
          {done}/{total}
        </span>
      </div>

      <ol className="flex flex-col gap-3">
        {feature.steps.map((step, i) => {
          const isOn = !!checked[i];
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => setChecked((p) => ({ ...p, [i]: !p[i] }))}
                className={`w-full text-left rounded-2xl border p-4 flex gap-4 items-start transition ${
                  isOn
                    ? "border-primary/50 bg-primary/5"
                    : "border-border/70 bg-card hover:border-primary/30"
                }`}
              >
                <span
                  className={`mt-0.5 h-7 w-7 shrink-0 rounded-full flex items-center justify-center text-xs font-medium transition ${
                    isOn
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground/70"
                  }`}
                >
                  {isOn ? <Check className="h-4 w-4" /> : i + 1}
                </span>
                <div className="min-w-0">
                  <p
                    className={`font-display text-[17px] leading-snug ${
                      isOn ? "text-foreground" : "text-foreground/90"
                    }`}
                  >
                    {step.title}
                  </p>
                  {step.description && (
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function MessageTabs({
  feature,
}: {
  feature: Extract<BonusFeature, { type: "tabs_messages" }>;
}) {
  const [active, setActive] = useState(0);
  const cat = feature.categories[active];

  return (
    <section>
      <FeatureHeader label={feature.label} intro={feature.intro} />

      <div className="grid grid-cols-3 gap-2">
        {feature.categories.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.name}
              type="button"
              onClick={() => setActive(i)}
              className={`w-full rounded-full px-2 py-2 text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] border transition text-center ${
                on
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.name}
            </button>
          );
        })}
      </div>

      {cat.description && (
        <p className="mt-4 text-sm text-muted-foreground">{cat.description}</p>
      )}

      <ul className="mt-4 flex flex-col gap-2.5">
        {cat.messages.map((m, i) => (
          <CopyMessage key={`${active}-${i}`} text={m} />
        ))}
      </ul>
    </section>
  );
}

function CopyMessage({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };
  return (
    <li>
      <button
        type="button"
        onClick={onCopy}
        className="group w-full text-left rounded-2xl border border-border/70 bg-card hover:border-primary/40 hover:bg-secondary/30 transition p-4 flex items-start gap-3"
      >
        <span className="flex-1 text-[15px] leading-relaxed text-foreground/90">{text}</span>
        <span
          className={`mt-0.5 inline-flex items-center justify-center h-8 w-8 shrink-0 rounded-full transition ${
            copied
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-primary group-hover:bg-primary/15"
          }`}
          aria-label={copied ? "copiado" : "copiar"}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </span>
      </button>
    </li>
  );
}
