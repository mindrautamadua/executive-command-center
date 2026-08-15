import { StgSidebar } from "@/components/stg/StgSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { SbmHeader } from "@/components/stg/benchmark/SbmHeader";
import { SbmKpiStrip } from "@/components/stg/benchmark/SbmKpiStrip";
import { MarginBenchmark } from "@/components/stg/benchmark/MarginBenchmark";
import { YieldBenchmark } from "@/components/stg/benchmark/YieldBenchmark";
import { CostPositionCurve } from "@/components/stg/benchmark/CostPositionCurve";
import { SugarBenchmark } from "@/components/stg/benchmark/SugarBenchmark";
import { GapToBestInClass } from "@/components/stg/benchmark/GapToBestInClass";
import { SbmInsight } from "@/components/stg/benchmark/SbmInsight";
import { stgDataTrust } from "@/lib/stg-core";

export const metadata = { title: "Benchmark Industri — PTPN Group" };

export default function BenchmarkPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <StgSidebar active="Benchmark Industri" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <SbmHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={stgDataTrust} />
          </div>

          <SbmKpiStrip />

          <div className="grid h-[240px] grid-cols-[minmax(0,50fr)_minmax(0,50fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <MarginBenchmark />
            <YieldBenchmark />
          </div>

          <div className="grid h-[235px] grid-cols-[minmax(0,54fr)_minmax(0,46fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CostPositionCurve />
            <SugarBenchmark />
          </div>

          <div className="grid h-[230px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <GapToBestInClass />
          </div>

          <SbmInsight />
        </div>
      </main>
    </div>
  );
}
