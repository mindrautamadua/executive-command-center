import { Info } from "lucide-react";
import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { PrrHeader } from "@/components/prr/PrrHeader";
import { PrrKpiStrip } from "@/components/prr/PrrKpiStrip";
import { RiskRadarChart } from "@/components/prr/RiskRadarChart";
import { RiskSummary } from "@/components/prr/RiskSummary";
import { TopRisks } from "@/components/prr/TopRisks";
import { RiskTrend } from "@/components/prr/RiskTrend";
import { RiskHeatmapOrg } from "@/components/prr/RiskHeatmapOrg";
import { TopRiskDrivers } from "@/components/prr/TopRiskDrivers";
import { RekomendasiTindakan } from "@/components/prr/RekomendasiTindakan";
import { prrFootnote } from "@/lib/prr-data";

export const metadata = { title: "People Risk Radar — PTPN Group" };

export default function PeopleRiskRadarPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar active="People Risk Radar" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <PrrHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <PrrKpiStrip />

          <div className="grid h-[340px] grid-cols-[minmax(0,33fr)_minmax(0,32fr)_minmax(0,35fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RiskRadarChart />
            <RiskSummary />
            <TopRisks />
          </div>

          <div className="grid h-[280px] grid-cols-[minmax(0,29fr)_minmax(0,22fr)_minmax(0,23fr)_minmax(0,26fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RiskTrend />
            <RiskHeatmapOrg />
            <TopRiskDrivers />
            <RekomendasiTindakan />
          </div>

          <div className="anim-rise flex items-center gap-2 rounded-xl border border-[#d8e6f7] bg-[#eef5fd] px-3.5 py-2.5">
            <Info size={13} className="shrink-0 text-[#2f6fe4]" />
            <span className="text-[9px] text-ink-700">{prrFootnote}</span>
          </div>
        </div>
      </main>
    </div>
  );
}
