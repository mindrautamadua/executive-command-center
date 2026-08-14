import { ClipboardCheck, Gauge, Layers, Users } from "lucide-react";
import { pmCoverage } from "@/lib/pm-data";

function Metric({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: typeof Gauge;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-1.5" title={detail}>
      <Icon size={12} strokeWidth={1.9} className="shrink-0 text-ink-400" />
      <span className="text-[8.5px] text-ink-500">{label}</span>
      <span className="text-[9.5px] font-bold text-ink-900">{value}</span>
    </div>
  );
}

/** Strip Intelligence Coverage: cakupan asesmen & tingkat confidence skor grup. */
export function PmCoverageStrip() {
  return (
    <div className="card anim-rise flex items-center gap-4 px-4 py-2">
      <span className="text-[8.5px] font-extrabold uppercase tracking-[0.05em] text-ink-400">
        Intelligence Coverage
      </span>

      <div className="flex items-center gap-1.5 rounded bg-[#eef2f6] px-2 py-[3px]">
        <span className="text-[8.5px] text-ink-500">Data as-of</span>
        <span className="text-[9.5px] font-bold text-ink-900">{pmCoverage.asOf}</span>
      </div>

      <Metric
        icon={Users}
        label="People Math"
        value={pmCoverage.peopleMath.pct}
        detail={`${pmCoverage.peopleMath.detail} dari ${pmCoverage.basis}`}
      />
      <Metric
        icon={ClipboardCheck}
        label="HPI-BEM"
        value={pmCoverage.hpi.pct}
        detail={`${pmCoverage.hpi.detail} dari ${pmCoverage.basis}`}
      />
      <Metric
        icon={Layers}
        label="Combined usable"
        value={pmCoverage.combined.pct}
        detail={pmCoverage.combined.detail}
      />

      <div className="flex items-center gap-1.5">
        <Gauge size={12} strokeWidth={1.9} className="shrink-0 text-[#d98b06]" />
        <span className="text-[8.5px] text-ink-500">Confidence</span>
        <span className="rounded-md bg-[#fdf3e0] px-1.5 py-[2px] text-[8.5px] font-bold text-[#d98b06]">
          {pmCoverage.confidence}
        </span>
      </div>

      <span className="ml-auto min-w-0 truncate text-right text-[8.5px] text-ink-400" title={pmCoverage.catatan}>
        {pmCoverage.catatan}
      </span>
    </div>
  );
}
