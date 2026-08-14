"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animasi count-up untuk angka berformat Indonesia di dalam string bebas,
 * misal "68.142", "78,4%", "+46", "Rp 2,4 M", "1,6".
 * Bagian non-angka (prefix/suffix) dipertahankan apa adanya.
 */
export function CountUp({
  value,
  duration = 900,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const [text, setText] = useState(value);
  const [flash, setFlash] = useState(false);
  const raf = useRef<number>(0);
  const firstRender = useRef(true);

  // Flash hijau singkat saat nilai berubah setelah mount (data ter-update).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setFlash(true);
    const t = setTimeout(() => setFlash(false), 700);
    return () => clearTimeout(t);
  }, [value]);

  useEffect(() => {
    const m = value.match(/-?\d[\d.]*(?:,\d+)?/);
    if (!m || typeof window === "undefined") {
      setText(value);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(value);
      return;
    }
    const raw = m[0];
    const prefix = value.slice(0, m.index);
    const suffix = value.slice((m.index ?? 0) + raw.length);
    const decimals = raw.includes(",") ? raw.split(",")[1].length : 0;
    const target = parseFloat(raw.replace(/\./g, "").replace(",", "."));
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      const formatted = current.toLocaleString("id-ID", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      setText(`${prefix}${formatted}${suffix}`);
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [value, duration]);

  return (
    <span className={`${flash ? "anim-value-flash " : ""}${className}`}>{text}</span>
  );
}
