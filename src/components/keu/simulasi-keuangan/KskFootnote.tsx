import { Info } from "lucide-react";
import { kskMetodologiNote } from "@/lib/ksk-data";

/** Kartu kecil abu berisi catatan metodologi simulasi. */
export function KskFootnote() {
  return (
    <div
      className="anim-rise flex items-start gap-2 rounded-xl border border-[#eef2f6] bg-[#f8fafc] px-4 py-2.5"
      style={{ "--d": "420ms" } as React.CSSProperties}
    >
      <Info size={11} className="mt-[1px] shrink-0 text-ink-400" />
      <p className="text-[8.5px] leading-snug text-ink-500">
        <span className="font-bold uppercase tracking-[0.04em] text-ink-700">Metodologi:</span>{" "}
        {kskMetodologiNote}
      </p>
    </div>
  );
}
