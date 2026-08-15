import { ProdSidebar } from "@/components/prod/ProdSidebar";
import { ScopeGuard } from "@/components/ui/ScopeGuard";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { AgroHeader } from "@/components/prod/agronomi-replanting/AgroHeader";
import { AgroKpiStrip } from "@/components/prod/agronomi-replanting/AgroKpiStrip";
import { AgeProfileChart } from "@/components/prod/agronomi-replanting/AgeProfileChart";
import { ReplantingRoadmap } from "@/components/prod/agronomi-replanting/ReplantingRoadmap";
import { PemupukanCard } from "@/components/prod/agronomi-replanting/PemupukanCard";
import { CurahHujanElNino } from "@/components/prod/agronomi-replanting/CurahHujanElNino";
import { DampakIklimSimulasi } from "@/components/prod/agronomi-replanting/DampakIklimSimulasi";
import { AgroInsight } from "@/components/prod/agronomi-replanting/AgroInsight";
import { prodDataTrust } from "@/lib/produksi-data";

export const metadata = { title: "Agronomi & Replanting — PTPN Group" };

export default function AgronomiReplantingPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <ProdSidebar active="Agronomi & Replanting" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <AgroHeader />

        <ScopeGuard owner="palmco">

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={prodDataTrust} />
          </div>

          <AgroKpiStrip />

          {/* Profil umur + roadmap replanting: tuas yield terbesar */}
          <div className="grid h-[250px] grid-cols-[minmax(0,56fr)_minmax(0,44fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <AgeProfileChart />
            <ReplantingRoadmap />
          </div>

          {/* Input agronomi & iklim */}
          <div className="grid h-[240px] grid-cols-[minmax(0,38fr)_minmax(0,62fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <PemupukanCard />
            <CurahHujanElNino />
          </div>

          <div className="grid h-[215px] grid-cols-1 grid-rows-[minmax(0,1fr)] gap-3">
            <DampakIklimSimulasi />
          </div>

          <AgroInsight />
        </div>
        </ScopeGuard>
      </main>
    </div>
  );
}
