import { MktSidebar } from "@/components/mkt/MktSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { HilirHeader } from "@/components/mkt/hilirisasi/HilirHeader";
import { HilirKpiStrip } from "@/components/mkt/hilirisasi/HilirKpiStrip";
import { HilirRevenueTrend } from "@/components/mkt/hilirisasi/HilirRevenueTrend";
import { MarginUpliftChart } from "@/components/mkt/hilirisasi/MarginUpliftChart";
import { ProdukTurunanTable } from "@/components/mkt/hilirisasi/ProdukTurunanTable";
import { BiodieselMandateCard } from "@/components/mkt/hilirisasi/BiodieselMandateCard";
import { RefineryPipeline } from "@/components/mkt/hilirisasi/RefineryPipeline";
import { HilirInsight } from "@/components/mkt/hilirisasi/HilirInsight";
import { mktDataTrust } from "@/lib/pemasaran-data";

export const metadata = { title: "Hilirisasi & Produk Turunan — PTPN Group" };

export default function HilirisasiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <MktSidebar active="Hilirisasi" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <HilirHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={mktDataTrust} />
          </div>

          <HilirKpiStrip />

          <div className="grid h-[255px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <HilirRevenueTrend />
            <MarginUpliftChart />
          </div>

          <div className="grid h-[245px] grid-cols-[minmax(0,55fr)_minmax(0,45fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ProdukTurunanTable />
            <BiodieselMandateCard />
          </div>

          <div className="grid h-[205px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RefineryPipeline />
          </div>

          <HilirInsight />
        </div>
      </main>
    </div>
  );
}
