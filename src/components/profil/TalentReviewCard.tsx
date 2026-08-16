import Link from "next/link";
import { ArrowRight, CalendarClock, Landmark } from "lucide-react";
import { talentReview } from "@/lib/profil-data";

/**
 * Jejak keputusan komite talenta — membuat klaim HiPo/Succession Fit
 * auditable: kapan diputuskan, oleh forum apa, apa tindak lanjutnya.
 */
export function TalentReviewCard() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="flex items-center gap-1.5 text-[11px] font-bold text-ink-900">
        <Landmark size={13} className="text-[#1b3a6b]" />
        Riwayat Keputusan Komite Talenta
      </h3>

      <div className="mt-2.5 min-h-0 flex-1 space-y-2.5">
        {talentReview.keputusan.map((k) => (
          <div key={k.tanggal} className="flex gap-2.5">
            <span className="mt-[2px] w-[52px] shrink-0 text-[8.5px] font-extrabold text-ink-500">
              {k.tanggal}
            </span>
            <div className="min-w-0 flex-1 border-l-2 border-[#e9eef3] pl-2.5 leading-tight">
              <div className="text-[8.5px] font-bold uppercase tracking-[0.04em] text-ink-400">
                {k.forum}
              </div>
              <p className="mt-[2px] text-[9.5px] font-semibold leading-snug text-ink-900">
                {k.keputusan}
              </p>
              <p className="mt-[2px] text-[8.5px] text-ink-500">
                Tindak lanjut: {k.tindakLanjut}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2.5 flex items-center gap-2 rounded-lg bg-[#eef4fd] px-3 py-[7px] text-[#2456a6]">
        <CalendarClock size={12} className="shrink-0" />
        <span className="text-[8.5px] font-semibold">{talentReview.nextReview}</span>
      </div>

      <Link
        href="/sdm-talenta/profil-karyawan/perbandingan-talenta"
        className="link-more mt-2 inline-flex items-center gap-1"
      >
        Bandingkan kandidat succession pool <ArrowRight size={11} />
      </Link>
    </div>
  );
}
