import { DekSidebar } from "@/components/dek/DekSidebar";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { PersetujuanHeader } from "@/components/dek/persetujuan/PersetujuanHeader";
import { PersetujuanKpiStrip } from "@/components/dek/persetujuan/PersetujuanKpiStrip";
import { ApprovalRegister } from "@/components/dek/persetujuan/ApprovalRegister";
import { PendingDetail } from "@/components/dek/persetujuan/PendingDetail";
import { AuthorityMatrix } from "@/components/dek/persetujuan/AuthorityMatrix";
import { ResponseTimeTrend } from "@/components/dek/persetujuan/ResponseTimeTrend";
import { ApprovalByCategory } from "@/components/dek/persetujuan/ApprovalByCategory";
import { PersetujuanInsight } from "@/components/dek/persetujuan/PersetujuanInsight";
import { dekDataTrust } from "@/lib/dek-data";

export const metadata = { title: "Persetujuan & Kewenangan — PTPN Group" };

export default function PersetujuanPage() {
  return (
    <div className="flex h-screen min-w-[1440px] overflow-hidden bg-[var(--bg-app)]">
      <DekSidebar active="Persetujuan & Kewenangan" />

      <main className="scroll-thin min-w-0 flex-1 overflow-y-auto">
        <PersetujuanHeader />

        <div className="flex flex-col gap-3 px-5 pb-5">
          <div className="-mb-3">
            <DataTrustStrip data={dekDataTrust} />
          </div>

          <PersetujuanKpiStrip />

          <div className="grid h-[300px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ApprovalRegister />
            <PendingDetail />
          </div>

          <div className="grid h-[260px] grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <AuthorityMatrix />
          </div>

          <div className="grid h-[240px] grid-cols-[minmax(0,58fr)_minmax(0,42fr)] grid-rows-[minmax(0,1fr)] gap-3">
            <ResponseTimeTrend />
            <ApprovalByCategory />
          </div>

          <PersetujuanInsight />
        </div>
      </main>
    </div>
  );
}
