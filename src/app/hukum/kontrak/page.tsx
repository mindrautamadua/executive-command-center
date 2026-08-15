import { HkmSidebar } from "@/components/hkm/HkmSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KontrakHeader } from "@/components/hkm/kontrak/KontrakHeader";
import { KontrakKpiStrip } from "@/components/hkm/kontrak/KontrakKpiStrip";
import { ContractByType } from "@/components/hkm/kontrak/ContractByType";
import { ContractValueTop } from "@/components/hkm/kontrak/ContractValueTop";
import { ExpiryTimeline } from "@/components/hkm/kontrak/ExpiryTimeline";
import { RenewalPipeline } from "@/components/hkm/kontrak/RenewalPipeline";
import { RiskClauseWatch } from "@/components/hkm/kontrak/RiskClauseWatch";
import { ReviewSlaTrend } from "@/components/hkm/kontrak/ReviewSlaTrend";
import { KontrakInsight } from "@/components/hkm/kontrak/KontrakInsight";
import { hkmDataTrust } from "@/lib/hkm-data";

export const metadata = { title: "Manajemen Kontrak — PTPN Group" };

export default function KontrakPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <HkmSidebar active="Manajemen Kontrak" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KontrakHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={hkmDataTrust} />
          </div>

          <KontrakKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,42fr)_minmax(0,58fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ContractByType />
            <ContractValueTop />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ExpiryTimeline />
            <RenewalPipeline />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,56fr)_minmax(0,44fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RiskClauseWatch />
            <ReviewSlaTrend />
          </div>

          <KontrakInsight />
        </div>
      </main>
    </div>
  );
}
