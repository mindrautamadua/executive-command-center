"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useSubholding } from "@/components/SubholdingProvider";
import { SUBHOLDINGS } from "@/lib/subholding";

/**
 * Dropdown subholding yang benar-benar berfungsi — menggantikan SelectBox statis
 * untuk filter "Subholding" pada header modul. Pilihan berlaku lintas dimensi.
 */
export function SubholdingFilter({ width = "200px" }: { width?: string }) {
  const { active, def, setActive } = useSubholding();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative w-full min-w-0 shrink" style={{ maxWidth: width }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-lg border bg-white px-3 py-1.5 text-left shadow-card transition-colors ${
          active === "all" ? "border-[#e3e9ef]" : "border-ptpn-green"
        }`}
      >
        <span className="min-w-0 leading-tight">
          <span className="block text-[8.5px] font-medium text-ink-400">Subholding</span>
          <span className="mt-[2px] block truncate text-[11px] font-bold text-ink-900">
            {def.label}
          </span>
        </span>
        <ChevronDown
          size={13}
          className={`ml-2 shrink-0 text-ink-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+4px)] z-50 overflow-hidden rounded-lg border border-[#e3e9ef] bg-white py-1 shadow-[0_8px_24px_rgba(16,24,40,0.12)]"
        >
          {SUBHOLDINGS.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                role="option"
                aria-selected={s.id === active}
                onClick={() => {
                  setActive(s.id);
                  setOpen(false);
                }}
                className={`flex w-full items-start gap-2 px-3 py-[7px] text-left transition-colors hover:bg-[#f5f8fa] ${
                  s.id === active ? "bg-ptpn-greenLight" : ""
                }`}
              >
                <Check
                  size={12}
                  className={`mt-[2px] shrink-0 ${
                    s.id === active ? "text-ptpn-green" : "text-transparent"
                  }`}
                />
                <span className="min-w-0">
                  <span
                    className={`block text-[10.5px] font-semibold ${
                      s.id === active ? "text-ptpn-green" : "text-ink-900"
                    }`}
                  >
                    {s.label}
                  </span>
                  <span className="block truncate text-[8.5px] text-ink-500">{s.fullLabel}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
