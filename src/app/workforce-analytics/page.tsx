import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { WaHeader } from "@/components/wa/WaHeader";
import { WaKpiStrip } from "@/components/wa/WaKpiStrip";
import { HeadcountTrend } from "@/components/wa/HeadcountTrend";
import { DonutBreakdown } from "@/components/wa/DonutBreakdown";
import { HeadcountByGeneration } from "@/components/wa/HeadcountByGeneration";
import { HeadcountByAgeGroup } from "@/components/wa/HeadcountByAgeGroup";
import { DiversitySnapshot } from "@/components/wa/DiversitySnapshot";
import { HeadcountByJobLevel } from "@/components/wa/HeadcountByJobLevel";
import { TurnoverTrend } from "@/components/wa/TurnoverTrend";
import { HeadcountMovement } from "@/components/wa/HeadcountMovement";
import { InsightRekomendasi } from "@/components/wa/InsightRekomendasi";
import { headcountByOrg, headcountByType } from "@/lib/wa-data";

export const metadata = { title: "Workforce Analytics — PTPN Group" };

export default function WorkforceAnalyticsPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar active="Workforce Analytics" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <WaHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <WaKpiStrip />

          <div className="grid h-[235px] grid-cols-[minmax(0,40fr)_minmax(0,31fr)_minmax(0,29fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <HeadcountTrend />
            <DonutBreakdown
              no="2"
              title="Headcount by Organization"
              subtitle="Distribusi Headcount per Holding/Sub Holding"
              data={headcountByOrg}
              delay={120}
            />
            <DonutBreakdown
              no="3"
              title="Headcount by Employment Type"
              subtitle="Komposisi berdasarkan Jenis Karyawan"
              data={headcountByType}
              delay={180}
            />
          </div>

          <div className="grid h-[225px] grid-cols-[minmax(0,33fr)_minmax(0,32fr)_minmax(0,35fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <HeadcountByGeneration />
            <HeadcountByAgeGroup />
            <DiversitySnapshot />
          </div>

          <div className="grid h-[230px] grid-cols-[minmax(0,32fr)_minmax(0,32fr)_minmax(0,36fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <HeadcountByJobLevel />
            <TurnoverTrend />
            <HeadcountMovement />
          </div>

          <InsightRekomendasi />
        </div>
      </main>
    </div>
  );
}
