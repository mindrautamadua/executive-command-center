import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { SsHeader } from "@/components/ss/SsHeader";
import { SsKpiStrip } from "@/components/ss/SsKpiStrip";
import { ScenarioManager } from "@/components/ss/ScenarioManager";
import { ImpactComparison } from "@/components/ss/ImpactComparison";
import { HeadcountProjection } from "@/components/ss/HeadcountProjection";
import { ScenarioAssumptions } from "@/components/ss/ScenarioAssumptions";
import { FinancialImpact } from "@/components/ss/FinancialImpact";
import { TalentImpactSummary } from "@/components/ss/TalentImpactSummary";
import { SsInsightRekomendasi } from "@/components/ss/SsInsightRekomendasi";
import { NextBestAction } from "@/components/ss/NextBestAction";
import { ModelConfidenceRisk } from "@/components/ss/ModelConfidenceRisk";
import { SsFootnote } from "@/components/ss/SsFootnote";

export const metadata = { title: "Scenario Simulation — PTPN Group" };

export default function ScenarioSimulationPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar active="Scenario Simulation" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <SsHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <SsKpiStrip />

          <div className="grid h-[255px] grid-cols-[minmax(0,40fr)_minmax(0,30fr)_minmax(0,30fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ScenarioManager />
            <ImpactComparison />
            <HeadcountProjection />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,31fr)_minmax(0,33fr)_minmax(0,36fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ScenarioAssumptions />
            <FinancialImpact />
            <TalentImpactSummary />
          </div>

          <div className="grid h-[215px] grid-cols-[minmax(0,34fr)_minmax(0,34fr)_minmax(0,32fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SsInsightRekomendasi />
            <NextBestAction />
            <ModelConfidenceRisk />
          </div>

          <SsFootnote />
        </div>
      </main>
    </div>
  );
}
