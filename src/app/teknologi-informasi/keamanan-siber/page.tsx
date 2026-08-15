import { TikSidebar } from "@/components/tik/TikSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { SiberHeader } from "@/components/tik/keamanan-siber/SiberHeader";
import { SiberKpiStrip } from "@/components/tik/keamanan-siber/SiberKpiStrip";
import { IncidentTrend } from "@/components/tik/keamanan-siber/IncidentTrend";
import { IncidentByVector } from "@/components/tik/keamanan-siber/IncidentByVector";
import { VulnerabilityAging } from "@/components/tik/keamanan-siber/VulnerabilityAging";
import { PdpReadiness } from "@/components/tik/keamanan-siber/PdpReadiness";
import { MaturitySpider } from "@/components/tik/keamanan-siber/MaturitySpider";
import { AwarenessProgram } from "@/components/tik/keamanan-siber/AwarenessProgram";
import { DrTest } from "@/components/tik/keamanan-siber/DrTest";
import { SiberDecisionCenter } from "@/components/tik/keamanan-siber/SiberDecisionCenter";
import { SiberInsight } from "@/components/tik/keamanan-siber/SiberInsight";
import { tikDataTrust } from "@/lib/tik-data";

export const metadata = { title: "Keamanan Siber & Pelindungan Data — PTPN Group" };

export default function KeamananSiberPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <TikSidebar active="Keamanan Siber & PDP" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <SiberHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={tikDataTrust} />
          </div>

          <SiberKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <IncidentTrend />
            <IncidentByVector />
          </div>

          <div className="grid h-[230px] grid-cols-[minmax(0,52fr)_minmax(0,48fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <VulnerabilityAging />
            <PdpReadiness />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,32fr)_minmax(0,68fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <MaturitySpider />
            <AwarenessProgram />
          </div>

          <div className="grid h-[215px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DrTest />
          </div>

          <SiberDecisionCenter />

          <SiberInsight />
        </div>
      </main>
    </div>
  );
}
