import { irIssues } from "@/lib/ir-data";
import { SectionHead } from "../hc/SectionHead";
import { PanelFooterLink } from "./PanelFooterLink";

const MAX_COUNT = Math.max(...irIssues.map((i) => i.count));

export function TopIrIssues() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <div className="flex items-baseline gap-1.5">
        <SectionHead title="Top Isu Industrial Relations" />
        <span className="shrink-0 text-[8.5px] text-ink-400">(YTD)</span>
      </div>

      <ul className="flex min-h-0 flex-1 flex-col justify-around py-1">
        {irIssues.map((issue) => (
          <li key={issue.name} className="flex items-center gap-2">
            <span className="w-[92px] shrink-0 truncate text-[8.5px] font-semibold text-ink-700">
              {issue.name}
            </span>
            <span className="h-[7px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#eef2f6]">
              <span
                className="anim-grow-x block h-full rounded-full"
                style={{ width: `${(issue.count / MAX_COUNT) * 100}%`, background: issue.color }}
              />
            </span>
            <span className="w-[50px] shrink-0 text-right text-[9px] font-extrabold text-ink-900">
              {issue.count}
              <span className="ml-[3px] font-medium text-ink-400">({issue.pct})</span>
            </span>
          </li>
        ))}
      </ul>

      <PanelFooterLink label="Lihat Semua Isu" />
    </div>
  );
}
