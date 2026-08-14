"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { TABS } from "@/lib/profil-data";

export function ProfilTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (tab: string) => void;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const [bar, setBar] = useState<{ left: number; width: number } | null>(null);

  // Underline meluncur mengikuti tab aktif; diukur ulang saat resize
  // karena bobot font aktif (bold) mengubah lebar tombol.
  useLayoutEffect(() => {
    const measure = () => {
      const el = refs.current[TABS.indexOf(active)];
      setBar(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const delta = e.key === "ArrowRight" ? 1 : -1;
    const next = (index + delta + TABS.length) % TABS.length;
    onChange(TABS[next]);
    refs.current[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Bagian profil karyawan"
      className="relative flex gap-6 border-b border-[#eef2f6] px-5"
    >
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
          className={`-mb-px rounded-sm border-b-2 border-transparent pb-2.5 pt-1 text-[10.5px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ptpn-green ${
            tab === active
              ? "font-bold text-ptpn-greenDark"
              : "font-medium text-ink-500 hover:text-ink-700"
          }`}
        >
          {tab}
        </button>
      ))}
      {bar && (
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-[2px] bg-ptpn-green transition-[transform,width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(${bar.left}px)`, width: bar.width }}
        />
      )}
    </div>
  );
}
