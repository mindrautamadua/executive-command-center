import { KeuSidebar } from "@/components/keu/KeuSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KpsHeader } from "@/components/keu/profitabilitas-segmen/KpsHeader";
import { KpsKpiStrip } from "@/components/keu/profitabilitas-segmen/KpsKpiStrip";
import { SegmentPnlMatrix } from "@/components/keu/profitabilitas-segmen/SegmentPnlMatrix";
import { RegionalProfitability } from "@/components/keu/profitabilitas-segmen/RegionalProfitability";
import { ProfitPerHectare } from "@/components/keu/profitabilitas-segmen/ProfitPerHectare";
import { SgnMillProfitability } from "@/components/keu/profitabilitas-segmen/SgnMillProfitability";
import { IntersegmentFlow } from "@/components/keu/profitabilitas-segmen/IntersegmentFlow";
import { KpsInsight } from "@/components/keu/profitabilitas-segmen/KpsInsight";
import { keuDataTrust } from "@/lib/keu-core";

export const metadata = { title: "Profitabilitas Segmen — PTPN Group" };

export default function ProfitabilitasSegmenPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <KeuSidebar active="Profitabilitas Segmen" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KpsHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={keuDataTrust} />
          </div>

          <KpsKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,55fr)_minmax(0,45fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SegmentPnlMatrix />
            <RegionalProfitability />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,37fr)_minmax(0,34fr)_minmax(0,29fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ProfitPerHectare />
            <SgnMillProfitability />
            <IntersegmentFlow />
          </div>

          <KpsInsight />
        </div>
      </main>
    </div>
  );
}
