"use client";

import { useEffect } from "react";

/** Interval pengecekan update service worker saat aplikasi dibiarkan terbuka. */
const UPDATE_CHECK_MS = 15 * 60 * 1000;

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      return;
    }

    let reloading = false;
    let timer: ReturnType<typeof setInterval> | undefined;

    // Service worker baru aktif (versi baru terdeploy) → muat ulang sekali
    // supaya user langsung memakai bundle terbaru tanpa harus close aplikasi.
    const onControllerChange = () => {
      if (reloading) return;
      reloading = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);

    const onVisible = (reg: ServiceWorkerRegistration) => () => {
      if (document.visibilityState === "visible") reg.update().catch(() => {});
    };
    let visibleHandler: (() => void) | undefined;

    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        // PWA yang dibiarkan terbuka di iPad tidak pernah navigasi penuh,
        // jadi browser tidak mengecek sw.js baru — paksa cek berkala dan
        // setiap aplikasi kembali dibuka dari background.
        timer = setInterval(() => reg.update().catch(() => {}), UPDATE_CHECK_MS);
        visibleHandler = onVisible(reg);
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

  return null;
}
