import { ArrowRight } from "lucide-react";
import { modelConfidence, modelRiskFactors } from "@/lib/ss-data";
import { SectionHead } from "../hc/SectionHead";

const ARC_LENGTH = Math.PI * 50;

function ConfidenceGauge() {
  const dash = (modelConfidence.value / 100) * ARC_LENGTH;
  return (
    <div className="relative w-[150px]">
      <svg viewBox="0 0 120 66" className="w-full">
        <path
          d="M 10 60 A 50 50 0 0 1 110 60"
          fill="none"
          stroke="var(--chart-grid)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 10 60 A 50 50 0 0 1 110 60"
          fill="none"
          stroke="#1a9c5b"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${ARC_LENGTH}`}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center leading-none">
        <span className="text-[21px] font-extrabold tracking-[-0.01em] text-ink-900">
          {modelConfidence.value}%
        </span>
        <span className="mt-[3px] text-[8.5px] font-bold text-ink-500">
          {modelConfidence.caption}
        </span>
      </div>
      <div className="mt-1 flex items-center justify-between text-[8px] font-semibold text-ink-400">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

function LevelBadge({ level }: { level: "Medium" | "Low" }) {
  const cls =
    level === "Medium" ? "bg-[#fdf3e0] text-[#d98b06]" : "bg-ptpn-greenLight text-ptpn-green";
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-2 py-[2px] text-[8px] font-bold ${cls}`}
    >
      {level}
    </span>
  );
}

export function ModelConfidenceRisk() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "180ms" } as React.CSSProperties}
    >
      <SectionHead no="9" title="Model Confidence & Risk" />

      <div className="scroll-thin mt-2 flex min-h-0 flex-1 items-start gap-5 overflow-y-auto">
        <div className="flex shrink-0 flex-col items-center pt-1">
          <p className="text-[8.5px] font-semibold text-ink-500">Model Confidence Level</p>
          <div className="mt-2">
            <ConfidenceGauge />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[8.5px] font-semibold text-ink-500">Top Model Risk Factors</p>
          <ul className="mt-1.5 flex flex-col gap-[7px]">
            {modelRiskFactors.map((f) => (
              <li key={f.name} className="flex items-center justify-between gap-2">
                <span className="truncate text-[9px] font-bold text-ink-900">{f.name}</span>
                <LevelBadge level={f.level} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="mt-2 flex w-full shrink-0 items-center justify-center gap-1 rounded-lg border border-[#e3e9ef] bg-[#f8fafc] py-[7px] text-[9.5px] font-semibold text-ptpn-greenDark transition-colors hover:bg-[#eef4f0]">
        Lihat Model Detail <ArrowRight size={11} />
      </button>
    </div>
  );
}
