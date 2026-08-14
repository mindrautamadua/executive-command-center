import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  CalendarClock,
  Crown,
  Gauge,
  GitFork,
  Handshake,
  HeartHandshake,
  Puzzle,
  RefreshCw,
} from "lucide-react";
import { peopleRisks, type PeopleRisk } from "@/lib/prr-data";
import { SectionHead } from "../hc/SectionHead";
import { LevelBadge } from "./LevelBadge";

const ICONS: Record<PeopleRisk["icon"], { Icon: typeof Crown; cls: string }> = {
  vacancy: { Icon: BriefcaseBusiness, cls: "bg-[#fdecec] text-[#ef4444]" },
  succession: { Icon: GitFork, cls: "bg-[#fdecec] text-[#ef4444]" },
  turnover: { Icon: RefreshCw, cls: "bg-[#fdecec] text-[#ef4444]" },
  leadership: { Icon: Crown, cls: "bg-[#fdf3e0] text-[#d98b06]" },
  skill: { Icon: Puzzle, cls: "bg-[#fdecec] text-[#ef4444]" },
  engagement: { Icon: HeartHandshake, cls: "bg-[#fdf3e0] text-[#d98b06]" },
  aging: { Icon: CalendarClock, cls: "bg-[#fdf3e0] text-[#d98b06]" },
  cost: { Icon: Banknote, cls: "bg-ptpn-greenLight text-ptpn-green" },
  performance: { Icon: Gauge, cls: "bg-[#fdf3e0] text-[#d98b06]" },
  industrial: { Icon: Handshake, cls: "bg-ptpn-greenLight text-ptpn-green" },
};

function TrendArrow({ risk }: { risk: PeopleRisk }) {
  if (risk.trend === "flat") {
    return <ArrowRight size={11} className="text-ink-400" />;
  }
  const good = risk.trendTone === "good";
  return (
    <svg
      width={11}
      height={11}
      viewBox="0 0 24 24"
      className={`${good ? "text-[#16a34a]" : "text-[#ef4444]"} ${
        risk.trend === "down" ? "rotate-180" : ""
      }`}
      fill="currentColor"
    >
      <path d="M12 5 4 15h16Z" />
    </svg>
  );
}

export function RiskSummary() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <SectionHead title="Ringkasan Risiko" />

      <div className="mt-2 grid grid-cols-[minmax(0,1fr)_44px_34px_36px_66px] items-center gap-x-1 border-b border-[#eef2f6] pb-1.5 text-[8px] font-semibold uppercase tracking-[0.04em] text-ink-400">
        <span>Risiko</span>
        <span className="text-center">Level</span>
        <span className="text-center">Skor</span>
        <span className="text-center">Trend</span>
        <span className="text-right">Karyawan Terdampak</span>
      </div>

      <ul className="scroll-thin flex min-h-0 flex-1 flex-col justify-between gap-y-1 overflow-y-auto py-1">
        {peopleRisks.map((r) => {
          const { Icon, cls } = ICONS[r.icon];
          return (
            <li
              key={r.name}
              className="grid shrink-0 grid-cols-[minmax(0,1fr)_44px_34px_36px_66px] items-center gap-x-1"
            >
              <span className="flex min-w-0 items-center gap-1.5">
                <span
                  className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md ${cls}`}
                >
                  <Icon size={10.5} strokeWidth={2} />
                </span>
                <span className="truncate text-[9px] font-bold text-ink-900">{r.name}</span>
              </span>
              <span className="text-center">
                <LevelBadge level={r.level} />
              </span>
              <span className="text-center text-[9.5px] font-extrabold text-ink-900">
                {r.score}
              </span>
              <span className="flex justify-center">
                <TrendArrow risk={r} />
              </span>
              <span className="text-right text-[9px] font-semibold text-ink-700">
                {r.impacted}
              </span>
            </li>
          );
        })}
      </ul>

      <button className="mt-1 flex w-full items-center justify-center gap-1 rounded-lg border border-[#e3e9ef] bg-[#f8fafc] py-[7px] text-[9.5px] font-semibold text-ptpn-greenDark transition-colors hover:bg-[#eef4f0]">
        Lihat Semua Risiko <ArrowRight size={11} />
      </button>
    </div>
  );
}
