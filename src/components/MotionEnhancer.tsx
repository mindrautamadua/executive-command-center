"use client";

import { useEffect } from "react";

const ANIM_SELECTOR = ".anim-rise, .anim-grow-x, .anim-draw, .anim-fade";

/**
 * Mengubah entrance animation (anim-*) dari on-mount menjadi on-scroll:
 * elemen dijeda (animation-play-state: paused via html.js-reveal) sampai
 * masuk viewport, lalu ditandai .in-view agar animasinya jalan.
 *
 * Juga melepas animation-fill-mode setelah entrance selesai (.anim-done)
 * supaya transform hover pada kartu tidak tertahan oleh fill-mode: both.
 *
 * Dipasang di app/template.tsx sehingga scan ulang tiap navigasi.
 */
export function MotionEnhancer() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );

    const watch = (scope: ParentNode) => {
      scope.querySelectorAll(ANIM_SELECTOR).forEach((el) => {
        if (!el.classList.contains("in-view")) io.observe(el);
      });
    };
    watch(document);

    // Konten yang muncul belakangan (ganti tab, data baru) ikut diamati.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node as Element;
          if (el.matches(ANIM_SELECTOR) && !el.classList.contains("in-view")) {
            io.observe(el);
          }
          watch(el);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onAnimationEnd = (e: AnimationEvent) => {
      if (e.animationName === "rise" || e.animationName === "fadeIn") {
        (e.target as Element).classList?.add("anim-done");
      }
    };
    document.addEventListener("animationend", onAnimationEnd, true);

    return () => {
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("animationend", onAnimationEnd, true);
    };
  }, []);

  return null;
}
