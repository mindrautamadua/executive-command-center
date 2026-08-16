import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { careerVelocity } from "@/lib/profil-data";

/** Kecepatan karier: bukan sekadar arsip riwayat, tapi sinyal talenta. */
export function CareerVelocityCard() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="flex items-center gap-1.5 text-[11px] font-bold text-ink-900">
        <Rocket size={13} className="text-[#2f6fe4]" />
        Career Velocity
      </h3>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-[#eef2f6] px-3 py-2.5 text-center">
          <div className="text-[17px] font-extrabold leading-none text-ink-900">
            {careerVelocity.promosi}
          </div>
          <div className="mt-1 text-[8.5px] text-ink-500">dalam {careerVelocity.rentang}</div>
        </div>
        <div className="rounded-xl border border-[#eef2f6] px-3 py-2.5 text-center">
          <div className="text-[17px] font-extrabold leading-none text-ink-900">2,1</div>
          <div className="mt-1 text-[8.5px] text-ink-500">tahun per jenjang</div>
        </div>
      </div>

      <div className="mt-2 space-y-1.5 text-[9px]">
        <div className="flex items-center justify-between">
          <span className="text-ink-500">Career Trajectory</span>
          <span className="font-extrabold text-ptpn-greenDark">↑ {careerVelocity.trajectory}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="shrink-0 text-ink-500">Next Logical Role</span>
          <span className="text-right font-extrabold text-ink-900">{careerVelocity.nextRole}</span>
        </div>
      </div>

      <p className="mt-2 rounded-lg bg-[#f5f8fa] px-2.5 py-[6px] text-[8.5px] leading-snug text-ink-500">
        {careerVelocity.pembanding}
      </p>

      <Link
        href="/sdm-talenta/profil-karyawan/riwayat-jabatan"
        className="link-more mt-auto inline-flex items-center gap-1 pt-2"
      >
        Lihat riwayat jabatan <ArrowRight size={11} />
      </Link>
    </div>
  );
}
