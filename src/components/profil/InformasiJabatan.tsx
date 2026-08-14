import { Briefcase, Building2, UserRound, MapPin, Award, Clock } from "lucide-react";
import { jabatanSaatIni } from "@/lib/profil-data";

const ICONS = {
  briefcase: Briefcase,
  building: Building2,
  user: UserRound,
  mapPin: MapPin,
  award: Award,
  clock: Clock,
} as const;

export function InformasiJabatan() {
  return (
    <div className="card flex h-full flex-col px-4 pb-3.5 pt-3.5">
      <h3 className="text-[11px] font-bold text-ink-900">Informasi Jabatan Saat Ini</h3>

      <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
        {jabatanSaatIni.map((j) => {
          const Icon = ICONS[j.icon as keyof typeof ICONS];
          return (
            <div key={j.label} className="flex items-center gap-2.5">
              <Icon size={13} className="shrink-0 text-ink-400" strokeWidth={1.8} />
              <span className="w-[108px] shrink-0 text-[9.5px] text-ink-500">{j.label}</span>
              <span className="min-w-0 leading-tight">
                <span className="block truncate text-[10px] font-bold text-ink-900">{j.value}</span>
                {j.sub && <span className="block text-[8.5px] text-ink-500">{j.sub}</span>}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
