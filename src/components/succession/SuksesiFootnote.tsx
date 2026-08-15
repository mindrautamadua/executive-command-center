import { ShieldCheck } from "lucide-react";

/** Footnote data governance: definisi metrik kunci + periode & as-of. */
export function SuksesiFootnote() {
  return (
    <div
      className="anim-rise flex items-center justify-between gap-3 rounded-xl border border-[#d7ecdf] bg-[#f2faf5] px-4 py-2.5"
      style={{ "--d": "1320ms" } as React.CSSProperties}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-ptpn-green text-white">
          <ShieldCheck size={11} />
        </span>
        <p className="truncate text-[9px] text-ink-700">
          <span className="font-extrabold text-ink-900">Definisi:</span> Coverage = posisi
          kritis dengan ≥1 kandidat teridentifikasi (158/212) • Bench Strength = rata-rata
          suksesor layak per posisi, dibobot kesiapan (pipeline mentah 1,89 → terbobot 1,6) •
          Risiko Kekosongan = posisi tanpa kandidat (212 − 158 = 54).
        </p>
      </div>
      <p className="shrink-0 text-[8.5px] text-ink-500">
        Assessment Period: <span className="font-bold text-ink-700">Q2 2026 (Apr – Jun)</span>
        <span className="mx-1.5 text-ink-300">•</span>
        Data as-of: <span className="font-bold text-ink-700">30 Jun 2026</span>
      </p>
    </div>
  );
}
