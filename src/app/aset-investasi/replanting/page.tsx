import { AsetSidebar } from "@/components/aset/AsetSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { ArpHeader } from "@/components/aset/replanting/ArpHeader";
import { ArpKpiStrip } from "@/components/aset/replanting/ArpKpiStrip";
import { ReplantingProgress } from "@/components/aset/replanting/ReplantingProgress";
import { ReplantingSCurve } from "@/components/aset/replanting/ReplantingSCurve";
import { AgeProfileProjection } from "@/components/aset/replanting/AgeProfileProjection";
import { MaintenanceBacklog } from "@/components/aset/replanting/MaintenanceBacklog";
import { ReplantingFunding } from "@/components/aset/replanting/ReplantingFunding";
import { ArpInsight } from "@/components/aset/replanting/ArpInsight";
import { astDataTrust } from "@/lib/ast-core";

export const metadata = { title: "Replanting & Pemeliharaan — PTPN Group" };

export default function ReplantingPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <AsetSidebar active="Replanting & Pemeliharaan" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <ArpHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={astDataTrust} />
          </div>

          <ArpKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,55fr)_minmax(0,45fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ReplantingProgress />
            <ReplantingSCurve />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,56fr)_minmax(0,44fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <AgeProfileProjection />
            <MaintenanceBacklog />
          </div>

          <div className="grid h-[215px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ReplantingFunding />
          </div>

          <ArpInsight />
        </div>
      </main>
    </div>
  );
}
