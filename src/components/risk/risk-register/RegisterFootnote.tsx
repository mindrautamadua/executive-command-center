import { BookText } from "lucide-react";
import { registerFootnote } from "@/lib/risk-data";

/** Kartu abu catatan taksonomi & dasar regulasi register korporat. */
export function RegisterFootnote() {
  return (
    <div
      className="card anim-rise flex items-start gap-2.5 bg-[#f8fafc] px-4 py-2.5"
      style={{ "--d": "360ms" } as React.CSSProperties}
    >
      <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg bg-[#eef2f6] text-ink-500">
        <BookText size={14} strokeWidth={1.9} />
      </span>
      <div className="min-w-0">
        <div className="text-[9px] font-extrabold uppercase tracking-[0.05em] text-ink-500">
          Taksonomi &amp; Dasar Regulasi
        </div>
        <p className="mt-[3px] text-[8.5px] leading-snug text-ink-500">{registerFootnote}</p>
      </div>
    </div>
  );
}
