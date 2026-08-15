import { ShieldCheck } from "lucide-react";
import { wpFootnote } from "@/lib/wp-data";

/** Footnote data governance: definisi metrik kunci + periode & as-of. */
export function WpFootnote() {
  return (
    <div
      className="anim-rise flex items-center justify-between gap-3 rounded-xl border border-[#d7ecdf] bg-[#f2faf5] px-4 py-2.5"
      style={{ "--d": "600ms" } as React.CSSProperties}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-ptpn-green text-white">
          <ShieldCheck size={11} />
        </span>
        <p className="truncate text-[9px] text-ink-700">
          <span className="font-extrabold text-ink-900">Definisi & rekonsiliasi:</span>{" "}
          {wpFootnote.definisi}
        </p>
      </div>
      <p className="shrink-0 text-[8.5px] text-ink-500">
        <span className="font-bold text-ink-700">{wpFootnote.periode}</span>
        <span className="mx-1.5 text-ink-300">•</span>
        <span className="font-bold text-ink-700">{wpFootnote.asOf}</span>
      </p>
    </div>
  );
}
