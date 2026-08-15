import { PgdSidebar } from "@/components/pgd/PgdSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { VendorHeader } from "@/components/pgd/manajemen-vendor/VendorHeader";
import { VendorKpiStrip } from "@/components/pgd/manajemen-vendor/VendorKpiStrip";
import { VendorSegmentation } from "@/components/pgd/manajemen-vendor/VendorSegmentation";
import { VendorPerformance } from "@/components/pgd/manajemen-vendor/VendorPerformance";
import { VendorConcentration } from "@/components/pgd/manajemen-vendor/VendorConcentration";
import { VendorRiskWatch } from "@/components/pgd/manajemen-vendor/VendorRiskWatch";
import { VendorOnboarding } from "@/components/pgd/manajemen-vendor/VendorOnboarding";
import { LocalVendorMix } from "@/components/pgd/manajemen-vendor/LocalVendorMix";
import { VendorInsight } from "@/components/pgd/manajemen-vendor/VendorInsight";
import { pgdDataTrust } from "@/lib/pgd-data";

export const metadata = { title: "Manajemen Vendor — PTPN Group" };

export default function ManajemenVendorPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <PgdSidebar active="Manajemen Vendor" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <VendorHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={pgdDataTrust} />
          </div>

          <VendorKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,42fr)_minmax(0,58fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <VendorSegmentation />
            <VendorPerformance />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <VendorConcentration />
            <VendorRiskWatch />
          </div>

          <div className="grid h-[215px] grid-cols-[minmax(0,56fr)_minmax(0,44fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <VendorOnboarding />
            <LocalVendorMix />
          </div>

          <VendorInsight />
        </div>
      </main>
    </div>
  );
}
