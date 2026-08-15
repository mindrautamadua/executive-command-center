import { EsgSidebar } from "@/components/esg/EsgSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { DekarbHeader } from "@/components/esg/dekarbonisasi/DekarbHeader";
import { DekarbKpiStrip } from "@/components/esg/dekarbonisasi/DekarbKpiStrip";
import { AbatementWaterfall } from "@/components/esg/dekarbonisasi/AbatementWaterfall";
import { ProgramPortfolio } from "@/components/esg/dekarbonisasi/ProgramPortfolio";
import { BiogasList } from "@/components/esg/dekarbonisasi/BiogasList";
import { MacCurve } from "@/components/esg/dekarbonisasi/MacCurve";
import { SolarRollout } from "@/components/esg/dekarbonisasi/SolarRollout";
import { DekarbDecisionCenter } from "@/components/esg/dekarbonisasi/DekarbDecisionCenter";
import { DekarbInsight } from "@/components/esg/dekarbonisasi/DekarbInsight";
import { esgDataTrust } from "@/lib/esg-data";

export const metadata = { title: "Program Dekarbonisasi — PTPN Group" };

export default function DekarbonisasiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <EsgSidebar active="Program Dekarbonisasi" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <DekarbHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={esgDataTrust} />
          </div>

          <DekarbKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <AbatementWaterfall />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,68fr)_minmax(0,32fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ProgramPortfolio />
            <BiogasList />
          </div>

          <div className="grid h-[230px] grid-cols-[minmax(0,50fr)_minmax(0,50fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <MacCurve />
            <SolarRollout />
          </div>

          <DekarbDecisionCenter />

          <DekarbInsight />
        </div>
      </main>
    </div>
  );
}
