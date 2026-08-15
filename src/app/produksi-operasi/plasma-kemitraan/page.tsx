import { ProdSidebar } from "@/components/prod/ProdSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { PlasmaHeader } from "@/components/prod/plasma-kemitraan/PlasmaHeader";
import { PlasmaKpiStrip } from "@/components/prod/plasma-kemitraan/PlasmaKpiStrip";
import { IntiVsPlasmaChart } from "@/components/prod/plasma-kemitraan/IntiVsPlasmaChart";
import { PlasmaYieldGap } from "@/components/prod/plasma-kemitraan/PlasmaYieldGap";
import { PsrProgress } from "@/components/prod/plasma-kemitraan/PsrProgress";
import { KemitraanRisiko } from "@/components/prod/plasma-kemitraan/KemitraanRisiko";
import { PlasmaInsight } from "@/components/prod/plasma-kemitraan/PlasmaInsight";
import { prodDataTrust } from "@/lib/produksi-data";

export const metadata = { title: "Plasma & Kemitraan — PTPN Group" };

export default function PlasmaKemitraanPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <ProdSidebar active="Plasma & Kemitraan" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <PlasmaHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={prodDataTrust} />
          </div>

          <PlasmaKpiStrip />

          {/* Pasokan & yield gap plasma */}
          <div className="grid h-[250px] grid-cols-[minmax(0,52fr)_minmax(0,48fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <IntiVsPlasmaChart />
            <PlasmaYieldGap />
          </div>

          {/* PSR & risiko kemitraan */}
          <div className="grid h-[235px] grid-cols-[minmax(0,36fr)_minmax(0,64fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <PsrProgress />
            <KemitraanRisiko />
          </div>

          <PlasmaInsight />
        </div>
      </main>
    </div>
  );
}
