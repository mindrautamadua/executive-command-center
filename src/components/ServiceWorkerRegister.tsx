"use client";

import { useEffect, useRef, useState } from "react";
import { RefreshCcw } from "lucide-react";

/** Interval pengecekan update service worker saat aplikasi dibiarkan terbuka. */
const UPDATE_CHECK_MS = 15 * 60 * 1000;
/** Hitung mundur sebelum update diterapkan otomatis bila user tidak menekan tombol. */
const AUTO_APPLY_SECONDS = 20;

export function ServiceWorkerRegister() {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [countdown, setCountdown] = useState(AUTO_APPLY_SECONDS);
  const reloadingRef = useRef(false);

  // Terapkan update: minta SW baru mengambil alih; controllerchange akan reload.
  const applyUpdate = () => {
    waitingWorker?.postMessage("SKIP_WAITING");
  };

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      return;
    }

    let timer: ReturnType<typeof setInterval> | undefined;

    // SW baru aktif → muat ulang sekali supaya bundle terbaru dipakai.
    const onControllerChange = () => {
      if (reloadingRef.current) return;
      reloadingRef.current = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);

    let visibleHandler: (() => void) | undefined;

    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        // Versi baru sudah menunggu (terunduh sebelum halaman ini dibuka).
        if (reg.waiting) setWaitingWorker(reg.waiting);

        // Versi baru terdeteksi saat aplikasi berjalan.
        reg.addEventListener("updatefound", () => {
          const fresh = reg.installing;
          if (!fresh) return;
          fresh.addEventListener("statechange", () => {
            if (fresh.state === "installed" && navigator.serviceWorker.controller) {
              setWaitingWorker(fresh);
            }
          });
        });

        // PWA yang dibiarkan terbuka tidak pernah navigasi penuh, jadi
        // browser tidak mengecek sw.js baru — paksa cek berkala dan setiap
        // aplikasi kembali dibuka dari background.
        timer = setInterval(() => reg.update().catch(() => {}), UPDATE_CHECK_MS);
        visibleHandler = () => {
          if (document.visibilityState === "visible") reg.update().catch(() => {});
        };
        document.addEventListener("visibilitychange", visibleHandler);
      })
      .catch((error) => {
        console.error("Registrasi service worker gagal:", error);
      });

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
      if (timer) clearInterval(timer);
      if (visibleHandler) document.removeEventListener("visibilitychange", visibleHandler);
    };
  }, []);

  // Hitung mundur auto-apply begitu notifikasi tampil.
  useEffect(() => {
    if (!waitingWorker) return;
    setCountdown(AUTO_APPLY_SECONDS);
    const t = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(t);
          waitingWorker.postMessage("SKIP_WAITING");
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [waitingWorker]);

  if (!waitingWorker) return null;

  return (
    <div
      role="status"
      className="fixed bottom-4 right-4 z-[100] w-[290px] rounded-xl border border-[#e3e9ef] bg-white p-3.5 shadow-cardHover"
    >
      <div className="flex items-start gap-2.5">
        <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-ptpn-greenLight text-ptpn-green">
          <RefreshCcw size={14} strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="text-[11px] font-bold text-ink-900">Versi baru tersedia</div>
          <p className="mt-1 text-[9.5px] leading-[1.45] text-ink-500">
            Pembaruan tampilan &amp; data siap dipasang. Aplikasi akan dimuat ulang otomatis
            dalam {countdown} detik.
          </p>
        </div>
      </div>
      <button
        onClick={applyUpdate}
        className="mt-2.5 w-full rounded-lg bg-ptpn-green py-[7px] text-[10px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90"
      >
        Perbarui Sekarang
      </button>
    </div>
  );
}
