"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { PtpnLogo } from "./PtpnLogo";
import { NAV_SECTIONS } from "@/lib/nav";
import { useSidebarCollapsed } from "@/components/shared/useSidebarCollapsed";

export function Sidebar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [pill, setPill] = useState<{ top: number; height: number } | null>(null);
  const { collapsed, toggle } = useSidebarCollapsed();

  // Pill hijau meluncur mengikuti item aktif, diukur ulang saat rute berubah.
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const measure = () => {
      const el = nav.querySelector<HTMLElement>('[data-active="true"]');
      setPill(el ? { top: el.offsetTop, height: el.offsetHeight } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pathname, collapsed]);

  return (
    <aside
      className={`flex h-full shrink-0 flex-col border-r border-[#e9eef3] bg-white transition-[width] duration-200 ${
        collapsed ? "w-[56px]" : "w-[196px]"
      }`}
    >
      {/* brand */}
      <div className={`flex items-center gap-2 pb-4 pt-4 ${collapsed ? "justify-center px-0" : "px-4"}`}>
        <PtpnLogo size={22} />
        {!collapsed && (
          <div className="leading-none">
            <div className="text-[19px] font-extrabold tracking-tight text-[#1b3a6b]">
              PTPN
            </div>
            <div className="mt-[3px] text-[6.5px] font-semibold tracking-[0.02em] text-ink-500">
              Holding Perkebunan Nusantara
            </div>
          </div>
        )}
      </div>

      {/* nav */}
      <nav ref={navRef} className="scroll-thin relative flex-1 overflow-y-auto px-3 pb-2">
        {pill && (
          <span
            aria-hidden
            className="absolute left-3 right-3 top-0 rounded-lg bg-ptpn-greenLight transition-[transform,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ transform: `translateY(${pill.top}px)`, height: pill.height }}
          />
        )}
        {NAV_SECTIONS.map((section, si) => (
          <div key={section.title ?? si}>
            {section.title &&
              (collapsed ? (
                <div className="mx-1 my-2 border-t border-[#f0f3f6]" />
              ) : (
                <div className="mb-1 mt-2.5 px-3 text-[8.5px] font-bold uppercase tracking-[0.09em] text-ink-400">
                  {section.title}
                </div>
              ))}
            {section.items.map(({ label, href, icon: Icon, ready }) => {
              const on = pathname === href;
              const cls = `relative mb-[3px] flex w-full items-center rounded-lg py-[9px] text-left text-[11.5px] transition-[background-color,color,transform] duration-150 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 ${
                collapsed ? "justify-center px-0" : "gap-2.5 px-3"
              } ${
                on
                  ? "font-semibold text-ptpn-green"
                  : "font-medium text-ink-500 hover:bg-[#f5f8fa]"
              }`;
              const inner = (
                <>
                  <Icon size={15} strokeWidth={1.8} className="shrink-0" />
                  {!collapsed && <span className="leading-[1.25]">{label}</span>}
                </>
              );

              return ready ? (
                <Link
                  key={label}
                  href={href}
                  data-active={on || undefined}
                  title={collapsed ? label : undefined}
                  className={cls}
                >
                  {inner}
                </Link>
              ) : (
                <button
                  key={label}
                  type="button"
                  className={`${cls} opacity-50`}
                  title={collapsed ? `${label} — Segera hadir` : "Segera hadir"}
                >
                  {inner}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* toggle collapse */}
      <div className="shrink-0 border-t border-[#f0f3f6] px-2.5 py-1.5">
        <button
          type="button"
          onClick={toggle}
          title={collapsed ? "Perlebar menu" : "Ciutkan menu"}
          className={`flex w-full items-center rounded-lg py-[7px] text-[10px] font-semibold text-ink-500 transition-colors hover:bg-[#f5f8fa] hover:text-ink-700 ${
            collapsed ? "justify-center px-0" : "gap-2 px-2.5"
          }`}
        >
          {collapsed ? (
            <PanelLeftOpen size={14} strokeWidth={1.8} className="shrink-0" />
          ) : (
            <>
              <PanelLeftClose size={14} strokeWidth={1.8} className="shrink-0" />
              <span className="min-w-0 flex-1 truncate text-left">Ciutkan Menu</span>
            </>
          )}
        </button>
      </div>

      {/* promo card */}
      {!collapsed && (
        <div className="mx-3 mb-3 overflow-hidden rounded-xl border border-[#eef2f6] bg-white shadow-card">
          <div className="relative h-[86px] w-full overflow-hidden">
            <svg viewBox="0 0 200 90" className="h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#cfe3ee" />
                  <stop offset="100%" stopColor="#eef3ef" />
                </linearGradient>
                <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9db9a8" />
                  <stop offset="100%" stopColor="#6f9480" />
                </linearGradient>
                <linearGradient id="field" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7fae6a" />
                  <stop offset="100%" stopColor="#3f7a44" />
                </linearGradient>
              </defs>
              <rect width="200" height="90" fill="url(#sky)" />
              <path d="M0 34 L38 18 L74 34 L112 14 L156 34 L200 20 V46 H0Z" fill="url(#hill)" opacity="0.85" />
              <path d="M0 42 L44 32 L96 44 L148 30 L200 42 V90 H0Z" fill="url(#field)" />
              {Array.from({ length: 9 }).map((_, i) => (
                <path
                  key={i}
                  d={`M${-20 + i * 26} 90 C ${10 + i * 26} 70, ${30 + i * 26} 60, ${60 + i * 26} 46`}
                  stroke="#2f6b3a"
                  strokeOpacity="0.35"
                  strokeWidth="3"
                  fill="none"
                />
              ))}
            </svg>
          </div>
          <div className="px-3 pb-3 pt-2.5">
            <p className="text-[10.5px] font-semibold leading-[1.45] text-ink-900">
              Menumbuhkan Kehidupan, Menghasilkan Keberlanjutan&rdquo;
            </p>
            <p className="mt-2.5 text-[10.5px] font-bold text-ink-900">PTPN 4.0</p>
            <p className="text-[9.5px] leading-[1.4] text-ink-500">
              Transformation for Sustainable Future
            </p>
            <button className="mt-2.5 flex w-full items-center justify-between rounded-lg border border-[#e3e9ef] bg-white px-2.5 py-1.5 text-[10px] font-semibold text-ptpn-green transition-[background-color,transform] duration-150 hover:bg-ptpn-greenLight active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100">
              Selengkapnya
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
