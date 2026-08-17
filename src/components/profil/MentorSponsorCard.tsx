import { HandHeart } from "lucide-react";
import { PersonAvatar } from "../ui/PersonAvatar";
import { mentorSponsor } from "@/lib/profil-data";

function PersonRow({
  label,
  nama,
  peran,
  seed,
}: {
  label: string;
  nama: string;
  peran: string;
  seed: number;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-[#eef2f6] px-3 py-2">
      <PersonAvatar seed={seed} size={28} name={nama} />
      <div className="min-w-0 flex-1 leading-tight">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-[9.5px] font-bold text-ink-900">{nama}</span>
          <span className="shrink-0 rounded bg-[#eef2f6] px-1.5 py-[1px] text-[7.5px] font-bold uppercase tracking-[0.04em] text-ink-500">
            {label}
          </span>
        </div>
        <div className="mt-[2px] truncate text-[8.5px] text-ink-500">{peran}</div>
      </div>
    </div>
  );
}

/** Struktur dukungan karier: mentor formal, sponsor eksekutif, dan mentee. */
export function MentorSponsorCard() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="flex items-center gap-1.5 text-[11px] font-bold text-ink-900">
        <HandHeart size={13} className="text-[#0d9488]" />
        Mentor &amp; Sponsor
      </h3>

      <div className="mt-2.5 min-h-0 flex-1 space-y-2">
        <PersonRow label="Mentor" {...mentorSponsor.mentor} />
        <PersonRow label="Sponsor" {...mentorSponsor.sponsor} />
        {mentorSponsor.mentee.map((m) => (
          <PersonRow key={m.nama} label="Mentee" {...m} />
        ))}
      </div>

      <p className="mt-2 text-[8.5px] leading-snug text-ink-500">
        Aktif membina kader di bawahnya sambil disponsori jenjang di atasnya — pola sehat untuk
        kandidat suksesi.
      </p>
    </div>
  );
}
