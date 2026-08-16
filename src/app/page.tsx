import { AppShell } from "@/components/AppShell";
import { DataTrustStrip } from "@/components/hc/DataTrustStrip";
import { KpiStrip } from "@/components/KpiStrip";
import { OperasionalCard } from "@/components/OperasionalCard";
import { KomoditasUtama } from "@/components/KomoditasUtama";
import { IndonesiaMap } from "@/components/IndonesiaMap";
import { KinerjaRegional } from "@/components/KinerjaRegional";
import { AlertPanel } from "@/components/AlertPanel";
import { InisiatifStrategis } from "@/components/InisiatifStrategis";
import { BeritaInformasi } from "@/components/BeritaInformasi";
import { TrendKeuangan } from "@/components/TrendKeuangan";
import { KomposisiPenjualan } from "@/components/KomposisiPenjualan";
import { KinerjaProduksi } from "@/components/KinerjaProduksi";
import { KinerjaSdm } from "@/components/KinerjaSdm";
import { KpiStrategis } from "@/components/KpiStrategis";
import { AnalitikPrediktif } from "@/components/AnalitikPrediktif";
import { AiInsight } from "@/components/AiInsight";

/** Kepala seksi kecil bergaya HC ECC, memisahkan kelompok kartu. */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 mt-3 text-[10px] font-extrabold uppercase tracking-[0.05em] text-ink-900">
      {children}
    </h2>
  );
}

/**
 * Dashboard utama, mengikuti kerangka halaman SDM & Talenta (HC ECC):
 * DataTrustStrip di atas, kepala seksi kecil, kolom utama + rail kanan 330px,
 * dan entrance anim-rise berjenjang per kartu.
 */
export default function Page() {
  return (
    <AppShell>
      <div className="px-5 pb-5">
        <DataTrustStrip />

        <SectionLabel>Key Strategic KPI</SectionLabel>
        <KpiStrip />

        <SectionLabel>Operasi &amp; Kinerja Regional</SectionLabel>
        <div className="grid grid-cols-1 items-start gap-3 xl:grid-cols-[minmax(0,1fr)_330px]">
          {/* kolom utama */}
          <div className="flex min-w-0 flex-col gap-3">
            <div
              className="anim-rise grid grid-cols-1 items-stretch gap-3 lg:grid-cols-2 xl:grid-cols-[minmax(0,58fr)_minmax(0,42fr)]"
              style={{ "--d": "60ms" } as React.CSSProperties}
            >
              <IndonesiaMap />
              <KinerjaRegional />
            </div>

            <div
              className="anim-rise grid grid-cols-1 items-stretch gap-3 md:grid-cols-2 xl:grid-cols-3"
              style={{ "--d": "120ms" } as React.CSSProperties}
            >
              <OperasionalCard />
              <KomoditasUtama />
              <KinerjaSdm />
            </div>

            <div
              className="anim-rise grid auto-rows-[248px] grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-[minmax(0,40fr)_minmax(0,30fr)_minmax(0,30fr)]"
              style={{ "--d": "180ms" } as React.CSSProperties}
            >
              <TrendKeuangan />
              <KomposisiPenjualan />
              <KinerjaProduksi />
            </div>

            <div
              className="anim-rise grid auto-rows-[150px] grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-[minmax(0,58fr)_minmax(0,42fr)]"
              style={{ "--d": "240ms" } as React.CSSProperties}
            >
              <KpiStrategis />
              <AnalitikPrediktif />
            </div>
          </div>

          {/* rail kanan */}
          <div className="flex min-w-0 flex-col gap-3">
            <div className="anim-rise" style={{ "--d": "90ms" } as React.CSSProperties}>
              <AlertPanel />
            </div>
            <div className="anim-rise" style={{ "--d": "150ms" } as React.CSSProperties}>
              <InisiatifStrategis />
            </div>
            <div className="anim-rise" style={{ "--d": "210ms" } as React.CSSProperties}>
              <BeritaInformasi />
            </div>
            <div
              className="anim-rise min-h-[170px] flex-1"
              style={{ "--d": "270ms" } as React.CSSProperties}
            >
              <AiInsight />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
