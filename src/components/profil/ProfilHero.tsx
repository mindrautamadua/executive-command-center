import { Briefcase, CreditCard, MapPin, Mail, Phone } from "lucide-react";
import { PersonAvatar } from "../ui/PersonAvatar";
import { profil } from "@/lib/profil-data";

const META = [
  {
    icon: Briefcase,
    label: profil.meta.statusKaryawan,
    value: profil.meta.sejak,
    swap: true,
  },
  { icon: CreditCard, label: "NIK", value: profil.meta.nik },
  { icon: MapPin, label: "Tempat, Tgl Lahir", value: profil.meta.ttl },
  { icon: Mail, label: "Email", value: profil.meta.email },
  { icon: Phone, label: "Telepon", value: profil.meta.telepon },
];

const SINGKAT = [
  { label: "Usia", value: profil.singkat.usia },
  { label: "Status", value: profil.singkat.status, dot: true },
  { label: "Pendidikan Terakhir", value: profil.singkat.pendidikan },
  { label: "Domisili", value: profil.singkat.domisili },
];

export function ProfilHero() {
  return (
    <div className="flex items-start gap-5 px-5 pb-4 pt-4">
      <PersonAvatar seed={profil.seed} size={92} className="ring-4 ring-[#eef5f0]" />

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-[19px] font-extrabold tracking-tight text-ink-900">
            {profil.nama}
          </h2>
          <span className="rounded-full bg-ptpn-greenLight px-2.5 py-[3px] text-[9px] font-semibold text-ptpn-greenDark">
            {profil.badge}
          </span>
        </div>
        <div className="mt-1 text-[11.5px] font-medium text-ink-700">{profil.jabatan}</div>
        <div className="mt-[2px] text-[10.5px] text-ink-500">
          {profil.unit} <span className="mx-1 text-ink-300">•</span> {profil.lokasi}
        </div>

        <div className="mt-3.5 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-[#f0f3f6] pt-3">
          {META.map(({ icon: Icon, label, value, swap }) => (
            <div key={label} className="flex items-start gap-2">
              <Icon size={13} className="mt-[2px] shrink-0 text-ink-400" strokeWidth={1.8} />
              <div className="leading-tight">
                <div className={swap ? "text-[10px] font-semibold text-ink-700" : "text-[9px] text-ink-500"}>
                  {label}
                </div>
                <div className={swap ? "mt-[2px] text-[9px] text-ink-500" : "mt-[2px] text-[10px] font-semibold text-ink-700"}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[230px] shrink-0 overflow-hidden rounded-xl border border-[#e9eef3]">
        <div className="border-b border-[#e9eef3] bg-[#f7f9fb] px-3.5 py-2 text-[10px] font-bold text-ink-900">
          Informasi Singkat
        </div>
        <div className="space-y-2.5 px-3.5 py-3">
          {SINGKAT.map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <span className="text-[9.5px] text-ink-500">{s.label}</span>
              <span className="flex items-center gap-1.5 text-[9.5px] font-bold text-ink-900">
                {s.dot && <span className="h-[6px] w-[6px] rounded-full bg-[#22a45d]" />}
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
