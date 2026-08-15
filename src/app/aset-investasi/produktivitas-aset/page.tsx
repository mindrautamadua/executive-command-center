import { AsetSidebar } from "@/components/aset/AsetSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { ApdHeader } from "@/components/aset/produktivitas-aset/ApdHeader";
import { ApdKpiStrip } from "@/components/aset/produktivitas-aset/ApdKpiStrip";
import { YieldByRegional } from "@/components/aset/produktivitas-aset/YieldByRegional";
import { YieldTrend } from "@/components/aset/produktivitas-aset/YieldTrend";
import { AgeYieldProfile } from "@/components/aset/produktivitas-aset/AgeYieldProfile";
import { SugarProductivity } from "@/components/aset/produktivitas-aset/SugarProductivity";
import { AssetReturnQuadrant } from "@/components/aset/produktivitas-aset/AssetReturnQuadrant";
import { ProductivityGapValue } from "@/components/aset/produktivitas-aset/ProductivityGapValue";
import { ApdInsight } from "@/components/aset/produktivitas-aset/ApdInsight";
import { astDataTrust } from "@/lib/ast-core";

export const metadata = { title: "Produktivitas Aset — PTPN Group" };

export default function ProduktivitasAsetPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <AsetSidebar active="Produktivitas Aset" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <ApdHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={astDataTrust} />
          </div>

          <ApdKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,54fr)_minmax(0,46fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <YieldByRegional />
            <YieldTrend />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,52fr)_minmax(0,48fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <AgeYieldProfile />
            <SugarProductivity />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,46fr)_minmax(0,54fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <AssetReturnQuadrant />
            <ProductivityGapValue />
          </div>

          <ApdInsight />
        </div>
      </main>
    </div>
  );
}
