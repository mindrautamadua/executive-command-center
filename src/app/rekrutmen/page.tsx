import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { RekrutmenHeader } from "@/components/rekrutmen/RekrutmenHeader";
import { RekrutmenKpiStrip } from "@/components/rekrutmen/RekrutmenKpiStrip";
import { RequisitionStatus } from "@/components/rekrutmen/RequisitionStatus";
import { TrenRekrutmen } from "@/components/rekrutmen/TrenRekrutmen";
import { RekrutmenPipeline } from "@/components/rekrutmen/RekrutmenPipeline";
import { SumberKandidat } from "@/components/rekrutmen/SumberKandidat";
import { RekrutmenUnitOrganisasi } from "@/components/rekrutmen/RekrutmenUnitOrganisasi";
import { TimeToFillTrend } from "@/components/rekrutmen/TimeToFillTrend";
import { AktivitasTerbaru } from "@/components/rekrutmen/AktivitasTerbaru";
import { RequisitionJobFamily } from "@/components/rekrutmen/RequisitionJobFamily";
import { KualitasHire } from "@/components/rekrutmen/KualitasHire";
import { InsightAiRekrutmen } from "@/components/rekrutmen/InsightAiRekrutmen";

export const metadata = { title: "Rekrutmen — PTPN Group" };

export default function RekrutmenPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <RekrutmenHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <RekrutmenKpiStrip />

          <div className="grid h-[258px] grid-cols-[minmax(0,344fr)_minmax(0,446fr)_minmax(0,497fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RequisitionStatus />
            <TrenRekrutmen />
            <RekrutmenPipeline />
          </div>

          <div className="grid h-[258px] grid-cols-[minmax(0,273fr)_minmax(0,320fr)_minmax(0,360fr)_minmax(0,322fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SumberKandidat />
            <RekrutmenUnitOrganisasi />
            <TimeToFillTrend />
            <AktivitasTerbaru />
          </div>

          <div className="grid h-[238px] grid-cols-[minmax(0,475fr)_minmax(0,363fr)_minmax(0,447fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RequisitionJobFamily />
            <KualitasHire />
            <InsightAiRekrutmen />
          </div>
        </div>
      </main>
    </div>
  );
}
