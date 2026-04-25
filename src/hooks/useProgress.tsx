import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { modules } from "@/data/modules";

type State = {
  read: Record<string, boolean>;
  habits: Record<string, boolean>;
};

const KEY = "reconectar.progress.v1";

const Ctx = createContext<{
  state: State;
  toggleRead: (slug: string) => void;
  setRead: (slug: string, v: boolean) => void;
  toggleHabit: (id: string) => void;
  progress: number;
  readCount: number;
  habitsDone: number;
  reset: () => void;
} | null>(null);

const totalHabits = modules.find((m) => m.slug === "modulo-3")?.habits?.length ?? 60;
const totalModules = modules.length;
// Weight: módulos lidos = 60%, hábitos = 40%
const totalUnits = totalModules + Math.ceil(totalHabits * (totalModules * 0.66) / totalHabits);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>({ read: {}, habits: {} });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  }, [state, hydrated]);

  const value = useMemo(() => {
    const readCount = Object.values(state.read).filter(Boolean).length;
    const habitsDone = Object.values(state.habits).filter(Boolean).length;
    const readWeight = (readCount / totalModules) * 0.6;
    const habitsWeight = (habitsDone / totalHabits) * 0.4;
    const progress = Math.round((readWeight + habitsWeight) * 100);
    return {
      state,
      toggleRead: (slug: string) =>
        setState((s) => ({ ...s, read: { ...s.read, [slug]: !s.read[slug] } })),
      setRead: (slug: string, v: boolean) =>
        setState((s) => ({ ...s, read: { ...s.read, [slug]: v } })),
      toggleHabit: (id: string) =>
        setState((s) => ({ ...s, habits: { ...s.habits, [id]: !s.habits[id] } })),
      progress,
      readCount,
      habitsDone,
      reset: () => setState({ read: {}, habits: {} }),
    };
  }, [state]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useProgress() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useProgress must be used within ProgressProvider");
  return c;
}

export const totals = { totalHabits, totalModules, totalUnits };
