"use client";

import { useRef } from "react";
import { TABS } from "@/lib/profil-data";

export function ProfilTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (tab: string) => void;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const delta = e.key === "ArrowRight" ? 1 : -1;
    const next = (index + delta + TABS.length) % TABS.length;
    onChange(TABS[next]);
    refs.current[next]?.focus();
  };

  return (
    <div role="tablist" aria-label="Bagian profil karyawan" className="flex gap-6 border-b border-[#eef2f6] px-5">
      {TABS.map((tab, i) => (
        <button
          key={tab}
          ref={(el) => {
            refs.current[i] = el;
          }}
          role="tab"
          aria-selected={tab === active}
          tabIndex={tab === active ? 0 : -1}
          onClick={() => onChange(tab)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className={`-mb-px rounded-sm border-b-2 pb-2.5 pt-1 text-[10.5px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ptpn-green ${
            tab === active
              ? "border-ptpn-green font-bold text-ptpn-greenDark"
              : "border-transparent font-medium text-ink-500 hover:text-ink-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
