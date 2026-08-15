import { MktSidebar } from "@/components/mkt/MktSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { BuyerHeader } from "@/components/mkt/ekspor-buyer/BuyerHeader";
import { BuyerKpiStrip } from "@/components/mkt/ekspor-buyer/BuyerKpiStrip";
import { EksporDomestikTrend } from "@/components/mkt/ekspor-buyer/EksporDomestikTrend";
import { BuyerConcentrationGauge } from "@/components/mkt/ekspor-buyer/BuyerConcentrationGauge";
import { TopBuyerTable } from "@/components/mkt/ekspor-buyer/TopBuyerTable";
import { DestinasiEkspor } from "@/components/mkt/ekspor-buyer/DestinasiEkspor";
import { RegulasiPasarCard } from "@/components/mkt/ekspor-buyer/RegulasiPasarCard";
import { BuyerInsight } from "@/components/mkt/ekspor-buyer/BuyerInsight";
import { mktDataTrust } from "@/lib/pemasaran-data";

export const metadata = { title: "Ekspor & Buyer — PTPN Group" };

export default function EksporBuyerPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <MktSidebar active="Ekspor & Buyer" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <BuyerHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={mktDataTrust} />
          </div>

          <BuyerKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,60fr)_minmax(0,40fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <EksporDomestikTrend />
            <BuyerConcentrationGauge />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,54fr)_minmax(0,46fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <TopBuyerTable />
            <DestinasiEkspor />
          </div>

          <div className="grid h-[215px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <RegulasiPasarCard />
          </div>

          <BuyerInsight />
        </div>
      </main>
    </div>
  );
}
