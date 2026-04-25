import { jsPDF } from "jspdf";
import type { Module } from "@/data/modules";

// Brand colors (RGB approximations of the OKLCH palette)
const COLOR_TEXT: [number, number, number] = [46, 36, 32];
const COLOR_MUTED: [number, number, number] = [120, 105, 100];
const COLOR_PRIMARY: [number, number, number] = [178, 96, 70]; // terracotta
const COLOR_RULE: [number, number, number] = [220, 205, 195];

export function exportModuleToPdf(mod: Module, completedHabits: Record<string, boolean>) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginX = 56;
  const marginTop = 64;
  const marginBottom = 64;
  const contentW = pageW - marginX * 2;

  let y = marginTop;

  const ensureSpace = (needed: number) => {
    if (y + needed > pageH - marginBottom) {
      doc.addPage();
      y = marginTop;
    }
  };

  const setColor = (rgb: [number, number, number]) => doc.setTextColor(rgb[0], rgb[1], rgb[2]);

  const writeParagraph = (
    text: string,
    opts: {
      size?: number;
      font?: "helvetica" | "times";
      style?: "normal" | "bold" | "italic";
      color?: [number, number, number];
      lineGap?: number;
      bottomGap?: number;
    } = {},
  ) => {
    const size = opts.size ?? 11;
    const font = opts.font ?? "helvetica";
    const style = opts.style ?? "normal";
    const color = opts.color ?? COLOR_TEXT;
    const lineGap = opts.lineGap ?? size * 0.55;
    doc.setFont(font, style);
    doc.setFontSize(size);
    setColor(color);
    const lines = doc.splitTextToSize(text, contentW) as string[];
    const lineH = size + lineGap;
    for (const line of lines) {
      ensureSpace(lineH);
      doc.text(line, marginX, y);
      y += lineH;
    }
    y += opts.bottomGap ?? 6;
  };

  // ---- Header band
  doc.setFillColor(250, 244, 238);
  doc.rect(0, 0, pageW, 36, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  setColor(COLOR_PRIMARY);
  doc.text("60 ATITUDES SIMPLES QUE RECONECTAM UM CASAL EM 30 MINUTOS", marginX, 22);
  doc.setFont("helvetica", "normal");
  setColor(COLOR_MUTED);
  doc.text(`Módulo ${mod.number} · ${mod.readingMin} min de leitura`, pageW - marginX, 22, {
    align: "right",
  });

  y = marginTop + 10;

  // ---- Title
  writeParagraph(mod.title, {
    font: "times",
    style: "bold",
    size: 26,
    lineGap: 6,
    bottomGap: 4,
  });

  // ---- Subtitle
  writeParagraph(mod.subtitle, {
    font: "times",
    style: "italic",
    size: 14,
    color: COLOR_MUTED,
    bottomGap: 14,
  });

  // ---- Divider
  ensureSpace(20);
  doc.setDrawColor(COLOR_RULE[0], COLOR_RULE[1], COLOR_RULE[2]);
  doc.setLineWidth(0.5);
  doc.line(marginX, y, marginX + 60, y);
  y += 18;

  // ---- Intro
  writeParagraph(mod.intro, {
    font: "times",
    style: "italic",
    size: 13,
    color: COLOR_TEXT,
    bottomGap: 16,
  });

  // ---- Sections
  for (const s of mod.sections) {
    if (s.title) {
      ensureSpace(28);
      writeParagraph(s.title, {
        font: "times",
        style: "bold",
        size: 16,
        bottomGap: 6,
      });
    }
    for (const p of s.paragraphs) {
      writeParagraph(p, { size: 11, lineGap: 5, bottomGap: 8 });
    }
    y += 4;
  }

  // ---- Lessons
  if (mod.lessons && mod.lessons.length > 0) {
    for (const lesson of mod.lessons) {
      y += 6;
      ensureSpace(60);
      doc.setDrawColor(COLOR_RULE[0], COLOR_RULE[1], COLOR_RULE[2]);
      doc.line(marginX, y, pageW - marginX, y);
      y += 16;
      writeParagraph(lesson.number.toUpperCase(), {
        size: 9,
        style: "bold",
        color: COLOR_PRIMARY,
        bottomGap: 4,
      });
      writeParagraph(lesson.title, {
        font: "times",
        style: "bold",
        size: 18,
        bottomGap: 10,
      });
      for (const s of lesson.sections) {
        if (s.title) {
          ensureSpace(24);
          writeParagraph(s.title, {
            font: "times",
            style: "bold",
            size: 14,
            bottomGap: 6,
          });
        }
        for (const p of s.paragraphs) {
          writeParagraph(p, { size: 11, lineGap: 5, bottomGap: 8 });
        }
        y += 4;
      }
    }
  }

  // ---- Habit Blocks (preferred grouping when defined)
  if (mod.habitBlocks && mod.habitBlocks.length > 0 && mod.habits) {
    const habitById = new Map(mod.habits.map((h) => [h.id, h]));
    for (const block of mod.habitBlocks) {
      y += 8;
      ensureSpace(60);
      doc.setDrawColor(COLOR_RULE[0], COLOR_RULE[1], COLOR_RULE[2]);
      doc.line(marginX, y, pageW - marginX, y);
      y += 16;
      writeParagraph(block.number.toUpperCase(), {
        size: 9,
        style: "bold",
        color: COLOR_PRIMARY,
        bottomGap: 4,
      });
      writeParagraph(block.title, {
        font: "times",
        style: "bold",
        size: 16,
        bottomGap: 6,
      });
      if (block.intro) {
        writeParagraph(block.intro, {
          font: "times",
          style: "italic",
          size: 12,
          color: COLOR_MUTED,
          bottomGap: 10,
        });
      }
      for (const hid of block.habitIds) {
        const h = habitById.get(hid);
        if (!h) continue;
        const checked = !!completedHabits[h.id];
        const mark = checked ? "[x]" : "[ ]";
        const line = `${mark}  ${h.title}`;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        setColor(checked ? COLOR_MUTED : COLOR_TEXT);
        const wrapped = doc.splitTextToSize(line, contentW - 12) as string[];
        const lineH = 11 + 5;
        for (let i = 0; i < wrapped.length; i++) {
          ensureSpace(lineH);
          doc.text(wrapped[i], marginX + (i === 0 ? 0 : 18), y);
          y += lineH;
        }
        if (h.note) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(10);
          setColor(COLOR_MUTED);
          const noteWrapped = doc.splitTextToSize(h.note, contentW - 24) as string[];
          const noteH = 10 + 4;
          for (const nl of noteWrapped) {
            ensureSpace(noteH);
            doc.text(nl, marginX + 24, y);
            y += noteH;
          }
        }
        y += 4;
      }
    }
  } else if (mod.habits && mod.habits.length > 0) {
    // ---- Habits (grouped by category — fallback)
    const groups = new Map<string, typeof mod.habits>();
    mod.habits.forEach((h) => {
      const arr = groups.get(h.desc) ?? [];
      arr.push(h);
      groups.set(h.desc, arr);
    });

    y += 8;
    for (const [cat, items] of groups) {
      ensureSpace(40);
      writeParagraph(cat.toUpperCase(), {
        size: 9,
        style: "bold",
        color: COLOR_PRIMARY,
        bottomGap: 6,
      });
      for (const h of items) {
        const checked = !!completedHabits[h.id];
        const mark = checked ? "[x]" : "[ ]";
        const line = `${mark}  ${h.title}`;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        setColor(checked ? COLOR_MUTED : COLOR_TEXT);
        const wrapped = doc.splitTextToSize(line, contentW - 12) as string[];
        const lineH = 11 + 5;
        for (let i = 0; i < wrapped.length; i++) {
          ensureSpace(lineH);
          doc.text(wrapped[i], marginX + (i === 0 ? 0 : 18), y);
          y += lineH;
        }
        if (h.note) {
          doc.setFont("helvetica", "italic");
          doc.setFontSize(10);
          setColor(COLOR_MUTED);
          const noteWrapped = doc.splitTextToSize(h.note, contentW - 24) as string[];
          const noteH = 10 + 4;
          for (const nl of noteWrapped) {
            ensureSpace(noteH);
            doc.text(nl, marginX + 24, y);
            y += noteH;
          }
        }
        y += 4;
      }
      y += 8;
    }
  }

  // ---- Final Reflection
  if (mod.finalReflection) {
    y += 6;
    ensureSpace(60);
    doc.setDrawColor(COLOR_RULE[0], COLOR_RULE[1], COLOR_RULE[2]);
    doc.line(marginX, y, pageW - marginX, y);
    y += 16;
    writeParagraph("REFLEXÃO FINAL", {
      size: 9,
      style: "bold",
      color: COLOR_PRIMARY,
      bottomGap: 4,
    });
    writeParagraph(mod.finalReflection.title, {
      font: "times",
      style: "bold",
      size: 16,
      bottomGap: 8,
    });
    for (const p of mod.finalReflection.paragraphs) {
      writeParagraph(p, { size: 11, lineGap: 5, bottomGap: 6 });
    }
  }

  // ---- Exercise
  if (mod.exercise) {
    y += 6;
    ensureSpace(60);
    // soft background rule above
    doc.setDrawColor(COLOR_RULE[0], COLOR_RULE[1], COLOR_RULE[2]);
    doc.line(marginX, y, pageW - marginX, y);
    y += 16;

    writeParagraph("EXERCÍCIO PRÁTICO", {
      size: 9,
      style: "bold",
      color: COLOR_PRIMARY,
      bottomGap: 4,
    });
    writeParagraph(mod.exercise.title, {
      font: "times",
      style: "bold",
      size: 16,
      bottomGap: 8,
    });
    for (const p of mod.exercise.paragraphs) {
      writeParagraph(p, { size: 11, lineGap: 5, bottomGap: 6 });
    }
    y += 4;
    for (const q of mod.exercise.questions) {
      ensureSpace(24);
      // left bar
      const startY = y - 10;
      doc.setDrawColor(COLOR_PRIMARY[0], COLOR_PRIMARY[1], COLOR_PRIMARY[2]);
      doc.setLineWidth(1.5);
      doc.setFont("times", "italic");
      doc.setFontSize(12);
      setColor(COLOR_TEXT);
      const lines = doc.splitTextToSize(q, contentW - 16) as string[];
      const lineH = 12 + 5;
      const blockH = lines.length * lineH;
      ensureSpace(blockH + 4);
      doc.line(marginX, startY, marginX, startY + blockH);
      for (const line of lines) {
        doc.text(line, marginX + 12, y);
        y += lineH;
      }
      y += 4;
    }
  }

  // ---- Footer with page numbers
  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    setColor(COLOR_MUTED);
    doc.text("60 Atitudes Simples Que Reconectam um Casal em 30 Minutos", marginX, pageH - 24);
    doc.text(`${i} / ${total}`, pageW - marginX, pageH - 24, { align: "right" });
  }

  doc.save(`reconectar-modulo-${mod.number}-${mod.slug}.pdf`);
}