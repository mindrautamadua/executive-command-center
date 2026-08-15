import { Award, BadgeCheck, Gauge, Users, UsersRound } from "lucide-react";
import { direktoriRingkasan } from "@/lib/direktori-karyawan";

const ITEMS = [
  { label: "Total Karyawan", value: String(direktoriRingkasan.total), icon: Users, tone: "tone-blue" },
  {
    label: "Karyawan Tetap",
    value: String(direktoriRingkasan.tetap),
    icon: BadgeCheck,
    tone: "tone-green",
  },
  {
    label: "Karyawan Perempuan",
    value: String(direktoriRingkasan.perempuan),
    icon: UsersRound,
    tone: "tone-purple",
  },
  {
    label: "Rising Star",
    value: String(direktoriRingkasan.risingStar),
    icon: Award,
    tone: "tone-amber",
  },
  {
    label: "Rata-rata Kinerja",
    value: `${direktoriRingkasan.rataKinerja.toFixed(2)} / 5.0`,
    icon: Gauge,
    tone: "tone-slate",
  },
];

/** Ringkasan populasi direktori — konteks sebelum pencarian dipersempit. */
export function DirektoriStats() {
  return (
    <div className="grid grid-cols-5 gap-3">
      {ITEMS.map(({ label, value, icon: Icon, tone }) => (
        <div key={label} className="card anim-rise flex items-center gap-2.5 px-3.5 py-2.5">
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${tone}`}>
            <Icon size={15} strokeWidth={1.9} />
          </span>
          <span className="min-w-0">
            <span className="block text-[9px] font-semibold text-ink-500">{label}</span>
            <span className="mt-[2px] block text-[15px] font-extrabold tracking-tight text-ink-900">
              {value}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
