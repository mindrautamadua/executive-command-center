import { EsgSidebar } from "@/components/esg/EsgSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { CertHeader } from "@/components/esg/sertifikasi/CertHeader";
import { CertKpiStrip } from "@/components/esg/sertifikasi/CertKpiStrip";
import { CertMatrix } from "@/components/esg/sertifikasi/CertMatrix";
import { CertPipeline } from "@/components/esg/sertifikasi/CertPipeline";
import { NonConformityBreakdown } from "@/components/esg/sertifikasi/NonConformityBreakdown";
import { PremiumValue } from "@/components/esg/sertifikasi/PremiumValue";
import { ExpiryCalendar } from "@/components/esg/sertifikasi/ExpiryCalendar";
import { CertInsight } from "@/components/esg/sertifikasi/CertInsight";
import { esgDataTrust } from "@/lib/esg-data";

export const metadata = { title: "Sertifikasi Berkelanjutan — PTPN Group" };

export default function SertifikasiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <EsgSidebar active="Sertifikasi Berkelanjutan" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <CertHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={esgDataTrust} />
          </div>

          <CertKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,56fr)_minmax(0,44fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CertMatrix />
            <CertPipeline />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,40fr)_minmax(0,32fr)_minmax(0,28fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <NonConformityBreakdown />
            <PremiumValue />
            <ExpiryCalendar />
          </div>

          <CertInsight />
        </div>
      </main>
    </div>
  );
}
