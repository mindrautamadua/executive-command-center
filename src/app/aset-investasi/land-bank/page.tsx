import { AsetSidebar } from "@/components/aset/AsetSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { AlbHeader } from "@/components/aset/land-bank/AlbHeader";
import { AlbKpiStrip } from "@/components/aset/land-bank/AlbKpiStrip";
import { LandBySubholding } from "@/components/aset/land-bank/LandBySubholding";
import { HguExpiryTimeline } from "@/components/aset/land-bank/HguExpiryTimeline";
import { HguStatusFunnel } from "@/components/aset/land-bank/HguStatusFunnel";
import { LandUtilization } from "@/components/aset/land-bank/LandUtilization";
import { RegionalLandTable } from "@/components/aset/land-bank/RegionalLandTable";
import { AlbInsight } from "@/components/aset/land-bank/AlbInsight";
import { astDataTrust } from "@/lib/ast-core";

export const metadata = { title: "Land Bank & HGU — PTPN Group" };

export default function LandBankPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <AsetSidebar active="Land Bank & HGU" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <AlbHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={astDataTrust} />
          </div>

          <AlbKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,44fr)_minmax(0,56fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <LandBySubholding />
            <HguExpiryTimeline />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,32fr)_minmax(0,30fr)_minmax(0,38fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <HguStatusFunnel />
            <LandUtilization />
            <RegionalLandTable />
          </div>

          <AlbInsight />
        </div>
      </main>
    </div>
  );
}
