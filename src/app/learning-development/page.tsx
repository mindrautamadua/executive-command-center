import { SdmSidebar } from "@/components/sdm/SdmSidebar";
import { LndHeader } from "@/components/lnd/LndHeader";
import { LndKpiStrip } from "@/components/lnd/LndKpiStrip";
import { DistribusiKompetensi } from "@/components/lnd/DistribusiKompetensi";
import { TrenJamPelatihan } from "@/components/lnd/TrenJamPelatihan";
import { TopProgram } from "@/components/lnd/TopProgram";
import { ProgramTipe } from "@/components/lnd/ProgramTipe";
import { CapaianKirkpatrick } from "@/components/lnd/CapaianKirkpatrick";
import { PartisipasiGenerasi } from "@/components/lnd/PartisipasiGenerasi";
import { HeatmapPartisipasi } from "@/components/lnd/HeatmapPartisipasi";
import { TopInstruktur } from "@/components/lnd/TopInstruktur";
import { InsightLnd } from "@/components/lnd/InsightLnd";

export const metadata = { title: "Learning & Development — PTPN Group" };

export default function LearningDevelopmentPage() {
  return (
    <div className="flex h-screen min-w-[1360px] overflow-hidden bg-[var(--bg-app)]">
      <SdmSidebar />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <LndHeader />

        <div className="mx-5 mb-4 flex flex-col gap-3">
          <LndKpiStrip />

          <div className="grid h-[280px] grid-cols-[minmax(0,380fr)_minmax(0,473fr)_minmax(0,450fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DistribusiKompetensi />
            <TrenJamPelatihan />
            <TopProgram />
          </div>

          <div className="grid h-[194px] grid-cols-[minmax(0,380fr)_minmax(0,473fr)_minmax(0,450fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ProgramTipe />
            <CapaianKirkpatrick />
            <PartisipasiGenerasi />
          </div>

          <div className="grid h-[262px] grid-cols-[minmax(0,523fr)_minmax(0,318fr)_minmax(0,454fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <HeatmapPartisipasi />
            <TopInstruktur />
            <InsightLnd />
          </div>
        </div>
      </main>
    </div>
  );
}
