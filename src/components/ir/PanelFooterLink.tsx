import { ArrowRight } from "lucide-react";

/** Tautan aksi bawah kartu, seragam untuk semua panel Industrial Relations. */
export function PanelFooterLink({ label }: { label: string }) {
  return (
    <button className="mt-2 flex w-full shrink-0 items-center justify-center gap-1 rounded-lg border border-[#e3e9ef] bg-[#f8fafc] py-[7px] text-[9.5px] font-semibold text-ptpn-greenDark transition-colors hover:bg-[#eef4f0]">
      {label} <ArrowRight size={11} />
    </button>
  );
}
