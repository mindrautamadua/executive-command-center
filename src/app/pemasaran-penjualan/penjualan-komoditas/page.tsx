import { MktSidebar } from "@/components/mkt/MktSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { JualHeader } from "@/components/mkt/penjualan-komoditas/JualHeader";
import { JualKpiStrip } from "@/components/mkt/penjualan-komoditas/JualKpiStrip";
import { SalesTrendChart } from "@/components/mkt/penjualan-komoditas/SalesTrendChart";
import { PriceVolumeBridge } from "@/components/mkt/penjualan-komoditas/PriceVolumeBridge";
import { SalesByKomoditasTable } from "@/components/mkt/penjualan-komoditas/SalesByKomoditasTable";
import { AspVsBenchmark } from "@/components/mkt/penjualan-komoditas/AspVsBenchmark";
import { SalesBySubholding } from "@/components/mkt/penjualan-komoditas/SalesBySubholding";
import { JualInsight } from "@/components/mkt/penjualan-komoditas/JualInsight";
import { mktDataTrust } from "@/lib/pemasaran-data";

export const metadata = { title: "Volume & Nilai Penjualan — PTPN Group" };

export default function PenjualanKomoditasPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <MktSidebar active="Volume & Nilai" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <JualHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={mktDataTrust} />
          </div>

          <JualKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,62fr)_minmax(0,38fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SalesTrendChart />
            <PriceVolumeBridge />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,56fr)_minmax(0,44fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SalesByKomoditasTable />
            <AspVsBenchmark />
          </div>

          <div className="grid h-[215px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SalesBySubholding />
          </div>

          <JualInsight />
        </div>
      </main>
    </div>
  );
}
