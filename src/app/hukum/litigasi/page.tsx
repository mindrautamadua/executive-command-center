import { HkmSidebar } from "@/components/hkm/HkmSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { LitigasiHeader } from "@/components/hkm/litigasi/LitigasiHeader";
import { LitigasiKpiStrip } from "@/components/hkm/litigasi/LitigasiKpiStrip";
import { CaseSummaryByType } from "@/components/hkm/litigasi/CaseSummaryByType";
import { LandDisputeLegalTrack } from "@/components/hkm/litigasi/LandDisputeLegalTrack";
import { LegalSpendBreakdown } from "@/components/hkm/litigasi/LegalSpendBreakdown";
import { ExternalCounsel } from "@/components/hkm/litigasi/ExternalCounsel";
import { PrecedentLibrary } from "@/components/hkm/litigasi/PrecedentLibrary";
import { AdvocacyAgenda } from "@/components/hkm/litigasi/AdvocacyAgenda";
import { LitigasiInsight } from "@/components/hkm/litigasi/LitigasiInsight";
import { hkmDataTrust } from "@/lib/hkm-data";

export const metadata = { title: "Litigasi & Advokasi — PTPN Group" };

export default function LitigasiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <HkmSidebar active="Litigasi & Advokasi" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <LitigasiHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={hkmDataTrust} />
          </div>

          <LitigasiKpiStrip />

          <div className="grid h-[290px] grid-cols-[minmax(0,40fr)_minmax(0,60fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CaseSummaryByType />
            <LandDisputeLegalTrack />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,42fr)_minmax(0,58fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <LegalSpendBreakdown />
            <ExternalCounsel />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,50fr)_minmax(0,50fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <PrecedentLibrary />
            <AdvocacyAgenda />
          </div>

          <LitigasiInsight />
        </div>
      </main>
    </div>
  );
}
