import { PgdSidebar } from "@/components/pgd/PgdSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { BelanjaHeader } from "@/components/pgd/analitik-belanja/BelanjaHeader";
import { BelanjaKpiStrip } from "@/components/pgd/analitik-belanja/BelanjaKpiStrip";
import { SpendByCategory } from "@/components/pgd/analitik-belanja/SpendByCategory";
import { SpendBySubholding } from "@/components/pgd/analitik-belanja/SpendBySubholding";
import { SpendByType } from "@/components/pgd/analitik-belanja/SpendByType";
import { SpendPareto } from "@/components/pgd/analitik-belanja/SpendPareto";
import { MaverickSpend } from "@/components/pgd/analitik-belanja/MaverickSpend";
import { PaymentTermsProfile } from "@/components/pgd/analitik-belanja/PaymentTermsProfile";
import { BelanjaInsight } from "@/components/pgd/analitik-belanja/BelanjaInsight";
import { pgdDataTrust } from "@/lib/pgd-data";

export const metadata = { title: "Analitik Belanja — PTPN Group" };

export default function AnalitikBelanjaPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <PgdSidebar active="Analitik Belanja" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <BelanjaHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={pgdDataTrust} />
          </div>

          <BelanjaKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,38fr)_minmax(0,36fr)_minmax(0,26fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SpendByCategory />
            <SpendBySubholding />
            <SpendByType />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SpendPareto />
            <MaverickSpend />
          </div>

          <div className="grid h-[215px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <PaymentTermsProfile />
          </div>

          <BelanjaInsight />
        </div>
      </main>
    </div>
  );
}
