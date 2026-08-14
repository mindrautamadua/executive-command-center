import type { LucideIcon } from "lucide-react";

/** Catatan ringkas di dasar kartu (hijau = insight positif, abu = netral). */
export function NotePill({
  icon: Icon,
  text,
  tone = "green",
}: {
  icon: LucideIcon;
  text: string;
  tone?: "green" | "gray";
}) {
  const style =
    tone === "green"
      ? "bg-ptpn-greenLight text-ptpn-greenDark"
      : "bg-[#f4f7fa] text-ink-500";
  return (
    <div className={`flex items-center gap-2 rounded-lg px-3 py-[7px] ${style}`}>
      <Icon size={13} strokeWidth={1.9} className="shrink-0" />
      <p className="text-[8.5px] font-semibold leading-snug">{text}</p>
    </div>
  );
}
