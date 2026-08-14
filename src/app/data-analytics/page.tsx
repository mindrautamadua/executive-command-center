import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { DataHeader } from "@/components/data/DataHeader";
import { DataKpiStrip } from "@/components/data/DataKpiStrip";
import { DataQualityOverview } from "@/components/data/DataQualityOverview";
import { TrenDataQuality } from "@/components/data/TrenDataQuality";
import { KelengkapanDomain } from "@/components/data/KelengkapanDomain";
import { SumberDataTerhubung } from "@/components/data/SumberDataTerhubung";
import { AnomalyDetection } from "@/components/data/AnomalyDetection";
import { PerbandinganUnit } from "@/components/data/PerbandinganUnit";
import { DataUsage } from "@/components/data/DataUsage";
import { TopInsightData } from "@/components/data/TopInsightData";
import { GovernanceStatus } from "@/components/data/GovernanceStatus";

export const metadata = { title: "Data & Analytic — PTPN Group" };

export default function DataAnalyticsPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar
        assistantCard="coach"
        assistantTitle="AI Data Assistant"
        assistantText="Tanya, analisa, dan dapatkan insight dari data SDM Anda dengan mudah."
        assistantCta="Tanya AI Assistant"
      />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <DataHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <DataKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,375fr)_minmax(0,450fr)_minmax(0,470fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DataQualityOverview />
            <TrenDataQuality />
            <KelengkapanDomain />
          </div>

          <div className="grid h-[255px] grid-cols-[minmax(0,470fr)_minmax(0,355fr)_minmax(0,470fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SumberDataTerhubung />
            <AnomalyDetection />
            <PerbandinganUnit />
          </div>

          <div className="grid h-[225px] grid-cols-[minmax(0,470fr)_minmax(0,355fr)_minmax(0,470fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DataUsage />
            <TopInsightData />
            <GovernanceStatus />
          </div>
        </div>
      </main>
    </div>
  );
}
