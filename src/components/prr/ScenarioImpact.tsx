import Link from "next/link";
import { ArrowRight, FlaskConical, MoveRight } from "lucide-react";
import { prrScenario } from "@/lib/prr-data";
import { SectionHead } from "../hc/SectionHead";

/**
 * Stress test people risk: preset skenario terburuk + tautan ke modul
 * Scenario Simulation untuk eksplorasi parameter lain.
 */
export function ScenarioImpact() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "600ms" } as React.CSSProperties}
    >
      <SectionHead title="Scenario Stress Test" />
      <p className="mt-[3px] text-[9px] text-ink-500">{prrScenario.desc}</p>

      <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-[#f1ecfd] px-2.5 py-1.5">
        <FlaskConical size={12} className="shrink-0 text-[#8b5cf6]" />
        <span className="truncate text-[9.5px] font-extrabold text-[#6d3fd8]">
          {prrScenario.title}
        </span>
      </div>

      <ul className="mt-2 flex min-h-0 flex-1 flex-col justify-between gap-1">
        {prrScenario.metrics.map((m) => (
          <li
            key={m.label}
            className="flex shrink-0 items-center justify-between gap-2 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-1.5"
          >
            <span className="min-w-0 truncate text-[9px] font-semibold text-ink-700">
              {m.label}
            </span>
            <span className="flex shrink-0 items-center gap-1.5 text-[9.5px] font-extrabold">
              {m.from && (
                <>
                  <span className="text-ink-500">{m.from}</span>
                  <MoveRight size={10} className="text-ink-400" />
                </>
              )}
              <span className="text-[#ef4444]">{m.to}</span>
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/scenario-simulation"
        className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg border border-[#e3e9ef] bg-[#f8fafc] py-[7px] text-[9.5px] font-semibold text-ptpn-greenDark transition-colors hover:bg-[#eef4f0]"
      >
        Buka Scenario Simulation <ArrowRight size={11} />
      </Link>
    </div>
  );
}
