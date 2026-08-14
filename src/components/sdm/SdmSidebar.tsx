"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, RotateCw, Star } from "lucide-react";
import { PtpnLogo } from "../PtpnLogo";
import { PersonAvatar } from "../ui/PersonAvatar";
import { CoachRobot } from "../kinerja/CoachRobot";
import { spotlight } from "@/lib/sdm-data";
import { SDM_MENU } from "@/lib/sdm-menu";

/** Halaman induk modul SDM. */
const ROOT = "/sdm-talenta";

function RobotHead() {
  return (
    <svg viewBox="0 0 90 80" className="h-full w-full">
      <defs>
        <linearGradient id="hr-body" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#dde8f2" />
          <stop offset="100%" stopColor="#b6c9db" />
        </linearGradient>
        <linearGradient id="hr-eye" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7ef7e0" />
          <stop offset="100%" stopColor="#25c8b0" />
        </linearGradient>
      </defs>
      <line x1="45" y1="4" x2="45" y2="14" stroke="#9db3c6" strokeWidth="2.5" />
      <circle cx="45" cy="4" r="3.5" fill="#5fd8ff" />
      <rect x="16" y="13" width="58" height="42" rx="17" fill="url(#hr-body)" />
      <rect x="23" y="20" width="44" height="28" rx="13" fill="#16232f" />
      <ellipse cx="36" cy="34" rx="6" ry="6.8" fill="url(#hr-eye)" />
      <ellipse cx="54" cy="34" rx="6" ry="6.8" fill="url(#hr-eye)" />
      <ellipse cx="34.6" cy="31.8" rx="2" ry="2.3" fill="#eafffb" />
      <ellipse cx="52.6" cy="31.8" rx="2" ry="2.3" fill="#eafffb" />
      <rect x="9" y="28" width="7" height="14" rx="3.5" fill="#c3d4e2" />
      <rect x="74" y="28" width="7" height="14" rx="3.5" fill="#c3d4e2" />
      <rect x="26" y="55" width="38" height="20" rx="10" fill="url(#hr-body)" />
      <circle cx="45" cy="65" r="3.4" fill="#25c8b0" />
      <ellipse cx="45" cy="78" rx="20" ry="3" fill="#8fb0c8" opacity="0.3" />
    </svg>
  );
}

interface Props {
  /** Override label menu aktif. Default: dicocokkan dari URL. */
  active?: string;
  /** Override tautan balik. Default: dashboard utama untuk semua halaman SDM. */
  back?: { href: string; label: string };
  /** Kartu Employee Spotlight. Default: hanya di halaman induk. */
  spotlightCard?: boolean;
  /** Stempel waktu pembaruan di kaki sidebar. Default: di semua halaman kecuali induk. */
  updatedStamp?: boolean;
  /** Kartu asisten: "hr" (AI HR Assistant) atau "coach" (maskot + tombol ajakan). */
  assistantCard?: "hr" | "coach";
  /** Judul, deskripsi, dan label tombol kartu asisten varian "coach". */
  assistantTitle?: string;
  assistantText?: string;
  assistantCta?: string;
  /** Susunan maskot pada kartu AI HR Assistant. */
  assistant?: "center" | "inline";
  assistantPlaceholder?: string;
}

export function SdmSidebar({
  active,
  back,
  spotlightCard,
  updatedStamp,
  assistantCard = "hr",
  assistantTitle = "AI Performance Coach",
  assistantText = "Butuh insight kinerja atau rekomendasi peningkatan performa?",
  assistantCta = "Tanya AI Coach",
  assistant,
  assistantPlaceholder = "Tanya data SDM apa saja...",
}: Props) {
  const pathname = usePathname();
  const isRoot = pathname === ROOT;

  const activeLabel =
    active ?? SDM_MENU.find((m) => m.href && m.href === pathname)?.label ?? "";

  const backLink = back ?? { href: "/", label: "KEMBALI KE DASHBOARD UTAMA" };

  const showSpotlight = spotlightCard ?? isRoot;
  const showStamp = updatedStamp ?? !isRoot;
  const assistantLayout = assistant ?? (isRoot ? "center" : "inline");

  return (
    <aside className="flex h-full w-[190px] shrink-0 flex-col border-r border-[#e9eef3] bg-white">
      <div className="flex items-center gap-2 px-4 pb-3 pt-3.5">
        <PtpnLogo size={20} />
        <div className="leading-none">
          <div className="text-[17px] font-extrabold tracking-tight text-[#1b3a6b]">PTPN</div>
          <div className="mt-[3px] whitespace-nowrap text-[7px] font-semibold text-ink-500">
            Holding Perkebunan Nusantara
          </div>
        </div>
      </div>

      <Link
        href={backLink.href}
        className="mx-3 mb-1.5 flex items-center gap-1.5 border-b border-[#f0f3f6] pb-2.5 text-[9px] font-bold tracking-[0.06em] text-ink-500 transition-colors hover:text-ptpn-green"
      >
        <ArrowLeft size={12} />
        {backLink.label}
      </Link>

      <div className="scroll-thin flex min-h-0 flex-1 flex-col overflow-y-auto">
        <nav className="shrink-0 px-2.5 pb-1">
          {SDM_MENU.map(({ label, icon: Icon, href }) => {
            const on = activeLabel === label;
            const cls = `mb-[2px] flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[8px] text-left text-[10.5px] transition-colors ${
              on
                ? "bg-ptpn-greenLight font-semibold text-ptpn-green"
                : "font-medium text-ink-500 hover:bg-[#f5f8fa]"
            }`;
            const inner = (
              <>
                <Icon size={14} strokeWidth={1.8} className="shrink-0" />
                <span className="leading-[1.2]">{label}</span>
              </>
            );
            return href ? (
              <Link key={label} href={href} className={cls}>
                {inner}
              </Link>
            ) : (
              // item belum tersedia — tampil nonaktif
              <button
                key={label}
                type="button"
                className={`mb-[2px] flex w-full cursor-default items-center gap-2.5 rounded-lg px-2.5 py-[8px] text-left text-[10.5px] font-medium text-ink-500 opacity-50`}
                title="Segera hadir"
                aria-disabled
              >
                {inner}
              </button>
            );
          })}
        </nav>

        {showSpotlight && (
          <div className="mx-2.5 mb-2 mt-3 shrink-0 rounded-xl border border-[#eef2f6] bg-white px-3 pb-2.5 pt-2.5 shadow-card">
            <div className="text-[9px] font-bold tracking-[0.06em] text-ink-500">
              EMPLOYEE SPOTLIGHT
            </div>
            <div className="mt-2 flex items-center gap-2.5">
              <PersonAvatar seed={spotlight.seed} size={42} className="ring-2 ring-[#e8f7ef]" />
              <div className="min-w-0 leading-tight">
                <div className="text-[10.5px] font-bold text-ink-900">{spotlight.nama}</div>
                <div className="text-[9px] text-ink-500">{spotlight.jabatan}</div>
                <div className="text-[9px] text-ink-400">{spotlight.unit}</div>
              </div>
            </div>
            <span className="mt-2 inline-block rounded-md bg-ptpn-greenLight px-2 py-[2px] text-[9px] font-semibold text-ptpn-green">
              {spotlight.badge}
            </span>
            <div className="mt-2 flex items-center justify-between border-t border-[#f2f5f8] pt-2">
              <span className="text-[9px] text-ink-500">Kinerja 2025</span>
              <span className="flex items-center gap-1 text-[9.5px] font-bold text-ink-900">
                <Star size={10} fill="#f5a524" strokeWidth={0} />
                {spotlight.skor}
              </span>
            </div>
            <Link
              href="/sdm-talenta/profil-karyawan"
              className="mt-2 block w-full rounded-lg border border-[#e3e9ef] py-[5px] text-center text-[9.5px] font-semibold text-ink-700 transition-colors hover:bg-[#f5f8fa]"
            >
              Lihat Profil
            </Link>
          </div>
        )}

        {!showSpotlight && <div className="min-h-[12px] flex-1" />}

        {assistantCard === "coach" ? (
          <div className="mx-2.5 mb-3 mt-3 shrink-0 rounded-xl border border-[#e4eff0] bg-gradient-to-b from-[#f0faf6] to-[#eaf5fb] px-3 pb-3 pt-2.5">
            <div className="flex items-center justify-between gap-1.5">
              <span className="text-[9.5px] font-bold text-[#1b3a6b]">{assistantTitle}</span>
              <span className="rounded bg-[#dbe9fb] px-1.5 py-[1px] text-[9px] font-bold text-[#2f6fe4]">
                Beta
              </span>
            </div>
            <div className="mx-auto mt-1 h-[76px] w-[86px] animate-floaty">
              <CoachRobot className="h-full w-full" />
            </div>
            <p className="mt-1 text-[9.5px] leading-[1.4] text-ink-700">{assistantText}</p>
            <button className="mt-2.5 flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-[#3fae63] to-[#1a9c5b] px-3 py-[7px] text-[10px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90">
              {assistantCta}
              <ArrowRight size={12} />
            </button>
          </div>
        ) : (
          <div
            className={`mx-2.5 shrink-0 overflow-hidden rounded-xl border border-[#dbeaf5] bg-gradient-to-b from-[#eef5fd] to-[#e7f0fb] px-3 pb-2.5 pt-2.5 ${
              showSpotlight ? "mb-3" : "mb-3 mt-3"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5">
              <span className="text-[10px] font-bold text-[#2f6fe4]">AI HR Assistant</span>
              <span className="rounded bg-[#dbe9fb] px-1.5 py-[1px] text-[9px] font-bold text-[#2f6fe4]">
                Beta
              </span>
            </div>
            <input
              readOnly
              placeholder={assistantPlaceholder}
              className="mt-2 w-full rounded-lg border border-[#dbe4ee] bg-white px-2.5 py-[6px] text-[9px] text-ink-700 placeholder:text-ink-400 focus:outline-none"
            />

            {assistantLayout === "center" ? (
              <div className="relative mt-1 h-[56px]">
                <div className="absolute left-1/2 top-0 h-[56px] w-[64px] -translate-x-1/2 animate-floaty">
                  <RobotHead />
                </div>
                <button
                  className="absolute bottom-0 right-0 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-gradient-to-br from-[#5b9bf5] to-[#2f6fe4] text-white shadow-[0_2px_8px_rgba(47,111,228,.35)]"
                  aria-label="Kirim"
                >
                  <ArrowRight size={13} />
                </button>
              </div>
            ) : (
              <div className="mt-2 flex items-center justify-between">
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-[#dfeaf8] to-[#c9dcf3]">
                  <span className="block h-[34px] w-[38px] animate-floaty">
                    <RobotHead />
                  </span>
                </span>
                <button
                  className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-gradient-to-br from-[#5b9bf5] to-[#2f6fe4] text-white shadow-[0_2px_8px_rgba(47,111,228,.35)]"
                  aria-label="Kirim"
                >
                  <ArrowRight size={13} />
                </button>
              </div>
            )}
          </div>
        )}

        <div className="min-h-0 flex-1" />
      </div>

      {showStamp && (
        <div className="flex shrink-0 items-end justify-between gap-2 border-t border-[#f0f3f6] px-3.5 pb-3 pt-2.5">
          <div className="leading-tight">
            <div className="text-[9px] text-ink-400">Data terakhir diperbarui:</div>
            <div className="text-[9px] font-semibold text-ink-700">13 Mei 2025 09:41 WIB</div>
          </div>
          <button
            className="text-ink-400 transition-colors hover:text-ptpn-green"
            aria-label="Muat ulang"
          >
            <RotateCw size={13} />
          </button>
        </div>
      )}
    </aside>
  );
}
