import {
  Users,
  Smile,
  RefreshCw,
  UserRoundCheck,
  UsersRound,
  ReceiptText,
} from "lucide-react";
import { sdmKpi } from "@/lib/sdm-data";
import { KpiCard } from "../ui/KpiCard";

const ICONS = {
  users: Users,
  smile: Smile,
  cycle: RefreshCw,
  userCheck: UserRoundCheck,
  diversity: UsersRound,
  wallet: ReceiptText,
};

/** Pembungkus tipis: data KPI SDM → anatomi KpiCard standar. */
export function SdmKpiStrip() {
  return (
    <div className="mx-5 mb-3 grid grid-cols-6 gap-3">
      {sdmKpi.map((k, i) => {
        const Icon = ICONS[k.icon];
        return (
          <KpiCard
            key={k.label}
            icon={<Icon size={13} strokeWidth={1.9} />}
            tone={k.tone}
            label={k.label}
            value={k.value}
            delta={{ value: k.delta, trend: k.trend, tone: k.deltaTone }}
            compare={k.compare}
            spark={{ data: k.series, color: k.line }}
            delay={60 * i}
          />
        );
      })}
    </div>
  );
}
