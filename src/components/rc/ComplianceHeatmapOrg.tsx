import { ArrowRight } from "lucide-react";
import { orgComplianceHeatmap } from "@/lib/rc-data";
import { SectionHead } from "../hc/SectionHead";

/** Sel angka dengan latar sesuai band; makin merah = makin perlu perhatian. */
function CountCell({ value, cls }: { value: number | string; cls: string }) {
  return (
    <span
      className={`mx-auto flex h-[19px] w-[30px] items-center justify-center rounded-md text-[9px] font-extrabold ${cls}`}
    >
      {value}
    </span>
  );
}

const scoreCls = (score: number) =>
  score >= 85
    ? "bg-ptpn-greenLight text-ptpn-green"
    : score >= 70
      ? "bg-[#fdf3e0] text-[#d98b06]"
      : "bg-[#fdecec] text-[#ef4444]";

const findingsCls = (n: number) =>
  n >= 4 ? "bg-[#fdecec] text-[#ef4444]" : n >= 2 ? "bg-[#fdf3e0] text-[#d98b06]" : "bg-ptpn-greenLight text-ptpn-green";

const casesCls = (n: number) =>
  n >= 5 ? "bg-[#fdecec] text-[#ef4444]" : n >= 3 ? "bg-[#fdf3e0] text-[#d98b06]" : "bg-ptpn-greenLight text-ptpn-green";

const trainingCls = (pct: number) =>
  pct >= 85 ? "bg-ptpn-greenLight text-ptpn-green" : pct >= 80 ? "bg-[#fdf3e0] text-[#d98b06]" : "bg-[#fdecec] text-[#ef4444]";

export function ComplianceHeatmapOrg() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead no="5" title="Compliance by Organization" />
      <p className="mt-[3px] text-[9px] text-ink-500">Peta Kepatuhan per Sub Holding / Regional</p>

      <div className="mt-2.5 grid grid-cols-[minmax(0,1fr)_38px_36px_44px_34px] items-center gap-x-1 border-b border-[#eef2f6] pb-1.5 text-[8px] font-semibold uppercase tracking-[0.04em] text-ink-400">
        <span>Organisasi</span>
        <span className="text-center">Temuan</span>
        <span className="text-center">Kasus</span>
        <span className="text-center">Training</span>
        <span className="text-center">Skor</span>
      </div>

      <ul className="scroll-thin flex min-h-0 flex-1 flex-col justify-around gap-y-1 overflow-y-auto py-1">
        {orgComplianceHeatmap.map((o) => (
          <li
            key={o.name}
            className="grid shrink-0 grid-cols-[minmax(0,1fr)_38px_36px_44px_34px] items-center gap-x-1"
          >
            <span className="truncate text-[9.5px] font-bold text-ink-900">{o.name}</span>
            <CountCell value={o.findings} cls={findingsCls(o.findings)} />
            <CountCell value={o.cases} cls={casesCls(o.cases)} />
            <CountCell value={`${o.training}%`} cls={trainingCls(o.training)} />
            <CountCell value={o.score} cls={scoreCls(o.score)} />
          </li>
        ))}
      </ul>

      <button className="mt-1 flex w-full items-center justify-center gap-1 rounded-lg border border-[#e3e9ef] bg-[#f8fafc] py-[7px] text-[9.5px] font-semibold text-ptpn-greenDark transition-colors hover:bg-[#eef4f0]">
        Lihat Detail per Organisasi <ArrowRight size={11} />
      </button>
    </div>
  );
}
