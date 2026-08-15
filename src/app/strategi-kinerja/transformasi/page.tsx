import { StgSidebar } from "@/components/stg/StgSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { StfHeader } from "@/components/stg/transformasi/StfHeader";
import { StfKpiStrip } from "@/components/stg/transformasi/StfKpiStrip";
import { TransformationHealthGrid } from "@/components/stg/transformasi/TransformationHealthGrid";
import { SugarSelfSufficiency } from "@/components/stg/transformasi/SugarSelfSufficiency";
import { DownstreamProgress } from "@/components/stg/transformasi/DownstreamProgress";
import { DigitalMaturity } from "@/components/stg/transformasi/DigitalMaturity";
import { TransformationBenefits } from "@/components/stg/transformasi/TransformationBenefits";
import { StfInsight } from "@/components/stg/transformasi/StfInsight";
import { stgDataTrust } from "@/lib/stg-core";

export const metadata = { title: "Program Transformasi — PTPN Group" };

export default function TransformasiPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <StgSidebar active="Program Transformasi" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <StfHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={stgDataTrust} />
          </div>

          <StfKpiStrip />

          <div className="grid h-[250px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <TransformationHealthGrid />
          </div>

          <div className="grid h-[250px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <SugarSelfSufficiency />
            <DownstreamProgress />
          </div>

          <div className="grid h-[235px] grid-cols-[minmax(0,42fr)_minmax(0,58fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <DigitalMaturity />
            <TransformationBenefits />
          </div>

          <StfInsight />
        </div>
      </main>
    </div>
  );
}
