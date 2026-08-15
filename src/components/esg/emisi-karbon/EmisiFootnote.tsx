import { Info } from "lucide-react";
import { emisiFootnote } from "@/lib/esg-data";

/** Kartu abu metodologi inventarisasi GRK (ISO 14064-1 / GHG Protocol). */
export function EmisiFootnote() {
  return (
    <div
      className="anim-rise flex items-start gap-2 rounded-xl border border-[#eef2f6] bg-[#f8fafc] px-4 py-2.5"
      style={{ "--d": "200ms" } as React.CSSProperties}
    >
      <Info size={12} strokeWidth={1.9} className="mt-[1px] shrink-0 text-ink-400" />
      <p className="text-[8.5px] leading-[1.5] text-ink-500">
        <span className="font-bold text-ink-700">Metodologi: </span>
        {emisiFootnote}
      </p>
    </div>
  );
}
