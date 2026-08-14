import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { TalentHeader } from "@/components/talent/TalentHeader";
import { TalentKpiStrip } from "@/components/talent/TalentKpiStrip";
import { NineBoxGrid } from "@/components/talent/NineBoxGrid";
import { TrenTalenta } from "@/components/talent/TrenTalenta";
import { TalentaPipeline } from "@/components/talent/TalentaPipeline";
import { ClusterGenerasi } from "@/components/talent/ClusterGenerasi";
import { HeatmapUnitKerja } from "@/components/talent/HeatmapUnitKerja";
import { CapabilityDistribution } from "@/components/talent/CapabilityDistribution";
import { TalentaKritisTable } from "@/components/talent/TalentaKritisTable";
import {
  TopPotentialCard,
  RetentionRiskCard,
  InsightAiCard,
} from "@/components/talent/TalentRail";

export const metadata = { title: "Talent Analytics — PTPN Group" };

export default function TalentAnalyticsPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar assistantPlaceholder="Tanya data talent apa saja..." />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <TalentHeader />

        <div className="mx-5 mb-4 grid grid-cols-[minmax(0,1fr)_190px] gap-3">
          {/* kolom utama */}
          <div className="flex min-w-0 flex-col gap-3">
            <TalentKpiStrip />

            <div className="grid h-[315px] grid-cols-[minmax(0,380fr)_minmax(0,385fr)_minmax(0,325fr)] grid-rows-[minmax(0,1fr)] gap-3">
              <NineBoxGrid />
              <TrenTalenta />
              <TalentaPipeline />
            </div>

            <div className="grid h-[200px] grid-cols-[minmax(0,355fr)_minmax(0,360fr)_minmax(0,385fr)] grid-rows-[minmax(0,1fr)] gap-3">
              <ClusterGenerasi />
              <HeatmapUnitKerja />
              <CapabilityDistribution />
            </div>

            <div className="h-[228px]">
              <TalentaKritisTable />
            </div>
          </div>

          {/* rail kanan */}
          <aside className="flex min-h-0 flex-col gap-3">
            <TopPotentialCard />
            <RetentionRiskCard />
            <InsightAiCard />
          </aside>
        </div>
      </main>
    </div>
  );
}
