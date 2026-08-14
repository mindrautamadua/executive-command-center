import { CalendarDays, Download } from "lucide-react";
import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { TiHeader } from "@/components/ti/TiHeader";
import { TiKpiStrip } from "@/components/ti/TiKpiStrip";
import { TalentPortfolioBox } from "@/components/ti/TalentPortfolioBox";
import { TalentPipelineReadiness } from "@/components/ti/TalentPipelineReadiness";
import { TopTalentPotential } from "@/components/ti/TopTalentPotential";
import { TalentRiskOverview } from "@/components/ti/TalentRiskOverview";
import { TalentAttributesInsight } from "@/components/ti/TalentAttributesInsight";
import { CriticalRoleCoverage } from "@/components/ti/CriticalRoleCoverage";
import { TalentDevelopmentFocus } from "@/components/ti/TalentDevelopmentFocus";
import { TalentMobilityOverview } from "@/components/ti/TalentMobilityOverview";
import { TrenTalenta } from "@/components/talent/TrenTalenta";
import { ClusterGenerasi } from "@/components/talent/ClusterGenerasi";
import { HeatmapUnitKerja } from "@/components/talent/HeatmapUnitKerja";

export const metadata = { title: "Talent Intelligence — PTPN Group" };

export default function TalentIntelligencePage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar active="Talent Intelligence" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <TiHeader />

        <div className="px-5 pb-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[9.5px] font-semibold text-ink-500">
              <CalendarDays size={12} className="text-ink-400" />
              Data per 31 Mei 2026
            </span>
            <button className="flex items-center gap-1.5 rounded-lg bg-ptpn-green px-3 py-[7px] text-[10px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90">
              <Download size={12} />
              Export
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <TiKpiStrip />

            <div className="grid grid-cols-[minmax(0,35fr)_minmax(0,30fr)_minmax(0,35fr)] items-stretch gap-3">
              <TalentPortfolioBox />
              <TalentPipelineReadiness />
              <TopTalentPotential />
            </div>

            <div className="grid grid-cols-[minmax(0,34fr)_minmax(0,32fr)_minmax(0,34fr)] items-stretch gap-3">
              <TalentRiskOverview />
              <TalentAttributesInsight />
              <CriticalRoleCoverage />
            </div>

            <div className="grid grid-cols-[minmax(0,60fr)_minmax(0,40fr)] items-stretch gap-3">
              <TalentDevelopmentFocus />
              <TalentMobilityOverview />
            </div>

            <div className="grid h-[260px] grid-cols-[minmax(0,36fr)_minmax(0,32fr)_minmax(0,32fr)] grid-rows-[minmax(0,1fr)] gap-3">
              <TrenTalenta />
              <ClusterGenerasi />
              <HeatmapUnitKerja />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
