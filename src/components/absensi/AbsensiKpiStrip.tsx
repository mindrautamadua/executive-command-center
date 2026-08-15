import {
  HeartPulse,
  ShieldCheck,
  UserX,
  CalendarClock,
  Briefcase,
  Hexagon,
} from "lucide-react";
import { absensiKpi } from "@/lib/absensi-data";
import { KpiCard } from "../ui/KpiCard";

const ICONS = {
  health: HeartPulse,
  kehadiran: ShieldCheck,
  absen: UserX,
  ontime: CalendarClock,
  lembur: Briefcase,
  jam: Hexagon,
};

export function AbsensiKpiStrip() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {absensiKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        return (
          <KpiCard
            key={k.label}
            icon={<Icon size={14} strokeWidth={1.9} />}
            tone={k.tone}
            label={k.label}
            value={k.unit ? `${k.value}${k.unit}` : k.value}
            delta={{ value: k.delta, trend: k.trend, tone: k.deltaTone }}
            compare={k.compare}
            info={k.info}
            spark={{ data: k.series, color: k.line }}
            delay={i * 60}
          />
        );
      })}
    </div>
  );
}
