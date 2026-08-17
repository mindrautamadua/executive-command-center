import { ShieldCheck } from "lucide-react";
import { marketGovernance } from "@/lib/comp-data";

export function CompFootnote() {
  return (
    <div
      className="anim-rise flex items-center justify-between gap-3 rounded-xl border border-[#d7ecdf] bg-[#f2faf5] px-4 py-2.5"
      style={{ "--d": "560ms" } as React.CSSProperties}
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-ptpn-green text-white">
          <ShieldCheck size={11} />
        </span>
        <p className="truncate text-[9px] text-ink-700">
          <span className="font-extrabold text-ink-900">Total Rewards Ratio</span> = (gaji pokok +
          tunjangan + insentif + benefits) / total biaya SDM. Adjusted pay gap dihitung dengan
          kontrol level, job family, lokasi, tenure &amp; performance.
        </p>
      </div>
      <p className="shrink-0 text-[8.5px] text-ink-500">
        Market: <span className="font-bold text-ink-700">{marketGovernance.sumber}</span>
        <span className="mx-1.5 text-ink-300">•</span>
        Cut: <span className="font-bold text-ink-700">{marketGovernance.cut}</span>
        <span className="mx-1.5 text-ink-300">•</span>
        Benchmark: <span className="font-bold text-ink-700">{marketGovernance.percentile}</span>
        <span className="mx-1.5 text-ink-300">•</span>
        Data as-of: <span className="font-bold text-ink-700">{marketGovernance.asOf}</span>
        <span className="mx-1.5 text-ink-300">•</span>
        Data Trust: <span className="font-bold text-ink-700">96,4%</span>
      </p>
    </div>
  );
}
