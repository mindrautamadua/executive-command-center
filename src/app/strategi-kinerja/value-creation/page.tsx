import { StgSidebar } from "@/components/stg/StgSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { SvcHeader } from "@/components/stg/value-creation/SvcHeader";
import { SvcKpiStrip } from "@/components/stg/value-creation/SvcKpiStrip";
import { ValueBridge } from "@/components/stg/value-creation/ValueBridge";
import { ValueBySubholding } from "@/components/stg/value-creation/ValueBySubholding";
import { ValueTrajectory2029 } from "@/components/stg/value-creation/ValueTrajectory2029";
import { TopValueDrivers } from "@/components/stg/value-creation/TopValueDrivers";
import { EconomicProfitCard } from "@/components/stg/value-creation/EconomicProfitCard";
import { SvcInsight } from "@/components/stg/value-creation/SvcInsight";
import { stgDataTrust } from "@/lib/stg-core";

export const metadata = { title: "Value Creation — PTPN Group" };

export default function ValueCreationPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <StgSidebar active="Value Creation" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <SvcHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={stgDataTrust} />
          </div>

          <SvcKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,55fr)_minmax(0,45fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ValueBridge />
            <ValueBySubholding />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,40fr)_minmax(0,60fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ValueTrajectory2029 />
            <TopValueDrivers />
          </div>

          <div className="grid h-[215px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <EconomicProfitCard />
          </div>

          <SvcInsight />
        </div>
      </main>
    </div>
  );
}
