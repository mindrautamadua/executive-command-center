import { ProdSidebar } from "@/components/prod/ProdSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KebunHeader } from "@/components/prod/produktivitas-kebun/KebunHeader";
import { KebunKpiStrip } from "@/components/prod/produktivitas-kebun/KebunKpiStrip";
import { YieldByRegional } from "@/components/prod/produktivitas-kebun/YieldByRegional";
import { YieldQuadrant } from "@/components/prod/produktivitas-kebun/YieldQuadrant";
import { ProtasTrend } from "@/components/prod/produktivitas-kebun/ProtasTrend";
import { TopBottomKebun } from "@/components/prod/produktivitas-kebun/TopBottomKebun";
import { GapAnalysisCard } from "@/components/prod/produktivitas-kebun/GapAnalysisCard";
import { KebunInsight } from "@/components/prod/produktivitas-kebun/KebunInsight";
import { prodDataTrust } from "@/lib/produksi-data";

export const metadata = { title: "Produktivitas Kebun per Regional — PTPN Group" };

export default function ProduktivitasKebunPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <ProdSidebar active="Produktivitas Kebun" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KebunHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={prodDataTrust} />
          </div>

          <KebunKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,38fr)_minmax(0,34fr)_minmax(0,28fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <YieldByRegional />
            <YieldQuadrant />
            <ProtasTrend />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,55fr)_minmax(0,45fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <TopBottomKebun />
            <GapAnalysisCard />
          </div>

          <KebunInsight />
        </div>
      </main>
    </div>
  );
}
