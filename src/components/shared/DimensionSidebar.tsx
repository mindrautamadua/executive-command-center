"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, LayoutGrid } from "lucide-react";
import { PtpnLogo } from "../PtpnLogo";
import { useSubholding } from "@/components/SubholdingProvider";
import type {
  DimensionDataTrust,
  DimensionMenuItem,
  DimensionMenuSection,
} from "@/lib/dimension-menu";

interface Props {
  sections: DimensionMenuSection[];
  dataTrust: DimensionDataTrust;
  /** Override label menu aktif. Default: dicocokkan dari URL. */
  active?: string;
  /** Tag kecil nama dimensi di bawah brand, mis. "Keuangan". */
  dimensionLabel?: string;
}

function MenuRow({
  item,
  on,
  outOfScope,
}: {
  item: DimensionMenuItem;
  on: boolean;
  /** Halaman milik subholding lain dari cakupan filter aktif. */
  outOfScope?: boolean;
}) {
  const { label, icon: Icon, href, badge } = item;
  const base =
    "mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left text-[10.5px] transition-colors";
  const inner = (
    <>
      <Icon size={14} strokeWidth={1.8} className="shrink-0" />
      <span className="min-w-0 flex-1 truncate leading-[1.2]">{label}</span>
      {badge && (
        <span className="shrink-0 rounded bg-ptpn-greenLight px-1 py-[1px] text-[8px] font-bold text-ptpn-green">
          {badge}
        </span>
      )}
    </>
  );

  if (!href) {
    return (
      <button
        type="button"
        className={`${base} cursor-default font-medium text-ink-500 opacity-50`}
        title="Segera hadir"
        aria-disabled
      >
        {inner}
      </button>
    );
  }

  return (
    <Link
      href={href}
      title={outOfScope ? "Data halaman ini di luar cakupan subholding aktif" : undefined}
      className={`${base} ${outOfScope ? "opacity-40" : ""} ${
        on
          ? "bg-ptpn-greenLight font-semibold text-ptpn-green"
          : "font-medium text-ink-500 hover:bg-[#f5f8fa]"
      }`}
    >
      {inner}
    </Link>
  );
}

/**
 * Sidebar dimensi non-SDM — clone visual SdmSidebar dengan menu dan
 * data-trust yang diparameterkan. Halaman SDM tetap memakai SdmSidebar.
 */
export function DimensionSidebar({ sections, dataTrust, active, dimensionLabel }: Props) {
  const pathname = usePathname();
  const { active: scope } = useSubholding();

  return (
    <aside className="flex h-full w-[200px] shrink-0 flex-col border-r border-[#e9eef3] bg-white">
      <div className="border-b border-[#f0f3f6] px-4 pb-3 pt-3.5">
        <Link href="/" className="flex items-center gap-2" title="Kembali ke Dashboard Utama">
          <PtpnLogo size={22} />
          <div className="leading-none">
            <div className="text-[14px] font-extrabold tracking-tight text-[#1b3a6b]">
              PTPN <span className="text-ptpn-green">GROUP</span>
            </div>
            <div className="mt-[3px] whitespace-nowrap text-[7.5px] font-semibold text-ptpn-green">
              Executive Command Center
            </div>
          </div>
        </Link>
        {dimensionLabel && (
          <div className="mt-2 inline-flex rounded bg-[#eef2f6] px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-[0.06em] text-ink-500">
            {dimensionLabel}
          </div>
        )}
      </div>

      <div className="border-b border-[#f0f3f6] px-2.5 py-2">
        <Link
          href="/"
          className="flex w-full items-center gap-2 rounded-lg bg-[#f5f8fa] px-2.5 py-[7px] text-[10.5px] font-semibold text-ink-700 transition-colors hover:bg-ptpn-greenLight hover:text-ptpn-green"
        >
          <ChevronLeft size={13} strokeWidth={2} className="shrink-0" />
          <LayoutGrid size={13} strokeWidth={1.8} className="shrink-0" />
          <span className="min-w-0 flex-1 truncate leading-[1.2]">Dashboard Utama</span>
        </Link>
      </div>

      <nav className="scroll-thin min-h-0 flex-1 overflow-y-auto px-2.5 pb-2 pt-2">
        {sections.map((section, si) => (
          <div key={section.title ?? si}>
            {section.title && (
              <div className="mb-1 mt-3 px-2.5 text-[8.5px] font-bold uppercase tracking-[0.09em] text-ink-400">
                {section.title}
              </div>
            )}
            {section.items.map((item) => (
              <MenuRow
                key={item.label}
                item={item}
                on={item.label === active || (!!item.href && item.href === pathname)}
                outOfScope={scope !== "all" && !!item.owner && item.owner !== scope}
              />
            ))}
          </div>
        ))}
      </nav>

      <div className="shrink-0 border-t border-[#f0f3f6] px-3.5 pb-3 pt-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[8.5px] font-semibold text-ink-400">Data as-of</span>
          <span className="text-[9px] font-semibold text-ink-700">{dataTrust.asOf}</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-[8.5px] font-semibold text-ink-400">Last Refresh</span>
          <span className="flex items-center gap-1.5">
            <span className="h-[6px] w-[6px] rounded-full bg-ptpn-green" />
            <span className="text-[9px] font-semibold text-ink-700">{dataTrust.lastRefresh}</span>
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[9px] text-ink-500">Data Quality Score</span>
          <span className="rounded-md bg-ptpn-green px-1.5 py-[2px] text-[9px] font-bold text-white">
            {dataTrust.quality}
          </span>
        </div>
      </div>
    </aside>
  );
}
