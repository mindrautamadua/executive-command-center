import { MktSidebar } from "@/components/mkt/MktSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { MarginHeader } from "@/components/mkt/margin-komoditas/MarginHeader";
import { MarginKpiStrip } from "@/components/mkt/margin-komoditas/MarginKpiStrip";
import { MarginWaterfall } from "@/components/mkt/margin-komoditas/MarginWaterfall";
import { MarginTrendChart } from "@/components/mkt/margin-komoditas/MarginTrendChart";
import { MarginMatrix } from "@/components/mkt/margin-komoditas/MarginMatrix";
import { MarginBySubholding } from "@/components/mkt/margin-komoditas/MarginBySubholding";
import { KomoditasMerugi } from "@/components/mkt/margin-komoditas/KomoditasMerugi";
import { MarginInsight } from "@/components/mkt/margin-komoditas/MarginInsight";
import { mktDataTrust } from "@/lib/pemasaran-data";

export const metadata = { title: "Margin & Profitabilitas Komoditas — PTPN Group" };

export default function MarginKomoditasPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <MktSidebar active="Margin Komoditas" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <MarginHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={mktDataTrust} />
          </div>

          <MarginKpiStrip />

          <div className="grid h-[260px] grid-cols-[minmax(0,55fr)_minmax(0,45fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <MarginWaterfall />
            <MarginTrendChart />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,55fr)_minmax(0,45fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <MarginMatrix />
            <MarginBySubholding />
          </div>

          <div className="grid h-[280px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <KomoditasMerugi />
          </div>

          <MarginInsight />
        </div>
      </main>
    </div>
  );
}
