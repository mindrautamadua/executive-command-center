"use client";

import { CalendarDays, Scale } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function RcHeader() {
  return (
    <ModuleHeader
      icon={<Scale size={19} strokeWidth={1.9} />}
      title={<>Risk &amp; Compliance</>}
      subtitle="Memantau kepatuhan regulasi ketenagakerjaan, temuan audit, dan kasus pelanggaran di seluruh grup"
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
      secondaryLeft={
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-ink-500">
            <CalendarDays size={13} className="text-ink-400" />
            Data per 31 Mei 2026 (YTD)
          </div>
          <span
            className="rounded-md bg-ptpn-greenLight px-2 py-[3px] text-[9px] font-extrabold text-ptpn-green"
            title="Komposit tertimbang: kepatuhan regulasi, efektivitas kontrol, penutupan audit, severitas pelanggaran, training, dan conduct"
          >
            Compliance Posture 87/100
          </span>
          <span
            className="rounded-md bg-[#fdf3e0] px-2 py-[3px] text-[9px] font-extrabold text-[#d98b06]"
            title="Skor kepatuhan tinggi ≠ risiko rendah: PDP 68 (outside tolerance) + 6 temuan kritis + eksposur Rp 4,8 M menjaga residual risk tetap tinggi"
          >
            Residual Risk: Medium-High
          </span>
        </div>
      }
    />
  );
}
