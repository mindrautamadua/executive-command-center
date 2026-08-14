import { ShieldCheck } from "lucide-react";
import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { IrHeader } from "@/components/ir/IrHeader";
import { IrKpiStrip } from "@/components/ir/IrKpiStrip";
import { CaseCategoryBreakdown } from "@/components/ir/CaseCategoryBreakdown";
import { IrCaseTrend } from "@/components/ir/IrCaseTrend";
import { StrikePotential } from "@/components/ir/StrikePotential";
import { CaseResolution } from "@/components/ir/CaseResolution";
import { IrCompliance } from "@/components/ir/IrCompliance";
import { UnionComposition } from "@/components/ir/UnionComposition";
import { RegionIrIndex } from "@/components/ir/RegionIrIndex";
import { TopIrIssues } from "@/components/ir/TopIrIssues";
import { IrRecommendations } from "@/components/ir/IrRecommendations";
import { irFootnote } from "@/lib/ir-data";

export const metadata = { title: "Industrial Relations — PTPN Group" };

export default function IndustrialRelationsPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar active="Industrial Relations" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <IrHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <IrKpiStrip />

          <div className="grid h-[300px] grid-cols-[minmax(0,33fr)_minmax(0,35fr)_minmax(0,32fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CaseCategoryBreakdown />
            <IrCaseTrend />
            <StrikePotential />
          </div>

          <div className="grid h-[280px] grid-cols-[minmax(0,33fr)_minmax(0,35fr)_minmax(0,32fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CaseResolution />
            <IrCompliance />
            <UnionComposition />
          </div>

          <div className="grid h-[330px] grid-cols-[minmax(0,36fr)_minmax(0,31fr)_minmax(0,33fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RegionIrIndex />
            <TopIrIssues />
            <IrRecommendations />
          </div>

          <div className="anim-rise flex items-center gap-2 rounded-xl border border-[#cde8da] bg-[#e9f6ef] px-3.5 py-2.5">
            <ShieldCheck size={13} className="shrink-0 text-ptpn-green" />
            <span className="text-[9px] text-ink-700">{irFootnote}</span>
          </div>
        </div>
      </main>
    </div>
  );
}
