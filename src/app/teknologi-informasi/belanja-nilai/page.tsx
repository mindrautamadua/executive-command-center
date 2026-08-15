import { TikSidebar } from "@/components/tik/TikSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { BelanjaHeader } from "@/components/tik/belanja-nilai/BelanjaHeader";
import { BelanjaKpiStrip } from "@/components/tik/belanja-nilai/BelanjaKpiStrip";
import { SpendBreakdown } from "@/components/tik/belanja-nilai/SpendBreakdown";
import { CapexVsOpexTrend } from "@/components/tik/belanja-nilai/CapexVsOpexTrend";
import { SpendBenchmark } from "@/components/tik/belanja-nilai/SpendBenchmark";
import { RunVsGrow } from "@/components/tik/belanja-nilai/RunVsGrow";
import { ValueRealization } from "@/components/tik/belanja-nilai/ValueRealization";
import { LicenseOptimization } from "@/components/tik/belanja-nilai/LicenseOptimization";
import { BelanjaInsight } from "@/components/tik/belanja-nilai/BelanjaInsight";
import { tikDataTrust } from "@/lib/tik-data";

export const metadata = { title: "Belanja & Nilai TI — PTPN Group" };

export default function BelanjaNilaiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <TikSidebar active="Belanja & Nilai TI" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <BelanjaHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={tikDataTrust} />
          </div>

          <BelanjaKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,50fr)_minmax(0,50fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SpendBreakdown />
            <CapexVsOpexTrend />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,52fr)_minmax(0,48fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SpendBenchmark />
            <RunVsGrow />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ValueRealization />
            <LicenseOptimization />
          </div>

          <BelanjaInsight />
        </div>
      </main>
    </div>
  );
}
