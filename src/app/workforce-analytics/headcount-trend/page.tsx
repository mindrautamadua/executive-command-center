import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { HeadcountTrendHeader } from "@/components/wa/trend/HeadcountTrendHeader";
import { TrendKpiStrip } from "@/components/wa/trend/TrendKpiStrip";
import { TrendMainChart } from "@/components/wa/trend/TrendMainChart";
import { YoyGrowthChart } from "@/components/wa/trend/YoyGrowthChart";
import { CompositionTrendChart } from "@/components/wa/trend/CompositionTrendChart";
import { FlowChart } from "@/components/wa/trend/FlowChart";
import { GrowthContribution } from "@/components/wa/trend/GrowthContribution";
import { MonthlyReconciliation } from "@/components/wa/trend/MonthlyReconciliation";

export const metadata = { title: "Headcount Trend — Workforce Analytics — PTPN Group" };

export default function HeadcountTrendDetailPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar active="Workforce Analytics" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <HeadcountTrendHeader />

        <div className="flex flex-col gap-3 px-5 pb-5 pt-3">
          <TrendKpiStrip />

          <div className="grid h-[300px] grid-cols-[minmax(0,66fr)_minmax(0,34fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <TrendMainChart />
            <YoyGrowthChart />
          </div>

          <div className="grid h-[262px] grid-cols-[minmax(0,36fr)_minmax(0,36fr)_minmax(0,28fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CompositionTrendChart />
            <FlowChart />
            <GrowthContribution />
          </div>

          <MonthlyReconciliation />
        </div>
      </main>
    </div>
  );
}
