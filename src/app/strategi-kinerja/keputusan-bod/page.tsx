import { StgSidebar } from "@/components/stg/StgSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { SbdHeader } from "@/components/stg/keputusan-bod/SbdHeader";
import { SbdKpiStrip } from "@/components/stg/keputusan-bod/SbdKpiStrip";
import { DecisionPipeline } from "@/components/stg/keputusan-bod/DecisionPipeline";
import { OverdueDecisions } from "@/components/stg/keputusan-bod/OverdueDecisions";
import { DecisionRegister } from "@/components/stg/keputusan-bod/DecisionRegister";
import { DecisionByCategory } from "@/components/stg/keputusan-bod/DecisionByCategory";
import { UpcomingBoardAgenda } from "@/components/stg/keputusan-bod/UpcomingBoardAgenda";
import { SbdInsight } from "@/components/stg/keputusan-bod/SbdInsight";
import { stgDataTrust } from "@/lib/stg-core";

export const metadata = { title: "Keputusan Direksi & Dekom — PTPN Group" };

export default function KeputusanBodPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <StgSidebar active="Keputusan Direksi & Dekom" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <SbdHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={stgDataTrust} />
          </div>

          <SbdKpiStrip />

          <div className="grid h-[240px] grid-cols-[minmax(0,34fr)_minmax(0,66fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DecisionPipeline />
            <OverdueDecisions />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,60fr)_minmax(0,40fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DecisionRegister />
            <DecisionByCategory />
          </div>

          <div className="grid h-[215px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <UpcomingBoardAgenda />
          </div>

          <SbdInsight />
        </div>
      </main>
    </div>
  );
}
