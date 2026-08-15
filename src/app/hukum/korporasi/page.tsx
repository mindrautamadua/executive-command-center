import { HkmSidebar } from "@/components/hkm/HkmSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KorporasiHeader } from "@/components/hkm/korporasi/KorporasiHeader";
import { KorporasiKpiStrip } from "@/components/hkm/korporasi/KorporasiKpiStrip";
import { EntityPortfolio } from "@/components/hkm/korporasi/EntityPortfolio";
import { ShareholdingMap } from "@/components/hkm/korporasi/ShareholdingMap";
import { CorporateActions } from "@/components/hkm/korporasi/CorporateActions";
import { RupsCalendar } from "@/components/hkm/korporasi/RupsCalendar";
import { GovernanceDocs } from "@/components/hkm/korporasi/GovernanceDocs";
import { ComplianceReporting } from "@/components/hkm/korporasi/ComplianceReporting";
import { KorporasiDecisionCenter } from "@/components/hkm/korporasi/KorporasiDecisionCenter";
import { KorporasiInsight } from "@/components/hkm/korporasi/KorporasiInsight";
import { hkmDataTrust } from "@/lib/hkm-data";

export const metadata = { title: "Korporasi & Anak Usaha — PTPN Group" };

export default function KorporasiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <HkmSidebar active="Korporasi & Anak Usaha" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KorporasiHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={hkmDataTrust} />
          </div>

          <KorporasiKpiStrip />

          <div className="grid h-[280px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <EntityPortfolio />
            <ShareholdingMap />
          </div>

          <div className="grid h-[260px] grid-cols-[minmax(0,50fr)_minmax(0,50fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CorporateActions />
            <RupsCalendar />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <GovernanceDocs />
            <ComplianceReporting />
          </div>

          <KorporasiDecisionCenter />

          <KorporasiInsight />
        </div>
      </main>
    </div>
  );
}
