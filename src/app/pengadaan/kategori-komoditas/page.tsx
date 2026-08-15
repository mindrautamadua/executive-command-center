import { PgdSidebar } from "@/components/pgd/PgdSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KategoriHeader } from "@/components/pgd/kategori-komoditas/KategoriHeader";
import { KategoriKpiStrip } from "@/components/pgd/kategori-komoditas/KategoriKpiStrip";
import { CategoryMatrix } from "@/components/pgd/kategori-komoditas/CategoryMatrix";
import { PriceIndexTrend } from "@/components/pgd/kategori-komoditas/PriceIndexTrend";
import { SupplyRiskByCategory } from "@/components/pgd/kategori-komoditas/SupplyRiskByCategory";
import { StrategySourcingPlan } from "@/components/pgd/kategori-komoditas/StrategySourcingPlan";
import { SavingsByCategory } from "@/components/pgd/kategori-komoditas/SavingsByCategory";
import { KategoriInsight } from "@/components/pgd/kategori-komoditas/KategoriInsight";
import { pgdDataTrust } from "@/lib/pgd-data";

export const metadata = { title: "Kategori & Komoditas — PTPN Group" };

export default function KategoriKomoditasPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <PgdSidebar active="Kategori & Komoditas" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <KategoriHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={pgdDataTrust} />
          </div>

          <KategoriKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,46fr)_minmax(0,54fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <CategoryMatrix />
            <PriceIndexTrend />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,54fr)_minmax(0,46fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SupplyRiskByCategory />
            <StrategySourcingPlan />
          </div>

          <div className="grid h-[215px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SavingsByCategory />
          </div>

          <KategoriInsight />
        </div>
      </main>
    </div>
  );
}
