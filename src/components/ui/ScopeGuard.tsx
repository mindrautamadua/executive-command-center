"use client";

import Link from "next/link";
import { Info } from "lucide-react";
import { useSubholding } from "@/components/SubholdingProvider";
import { SUBHOLDING_BY_ID, type SubholdingId } from "@/lib/subholding";

/**
 * Pembungkus isi halaman yang seluruh datanya milik satu subholding.
 *
 * Saat filter aktif menunjuk subholding lain, seluruh kartu diganti satu
 * keterangan tingkat halaman — lebih terbaca daripada belasan kartu kosong
 * berisi pesan yang sama. Halaman tetap dapat diakses; hanya isinya yang
 * memang tidak berlaku untuk cakupan tersebut.
 */
export function ScopeGuard({
  owner,
  children,
}: {
  owner: Exclude<SubholdingId, "all">;
  children: React.ReactNode;
}) {
  const { active, def } = useSubholding();
  if (active === "all" || active === owner) return <>{children}</>;

  const ownerDef = SUBHOLDING_BY_ID[owner];

  return (
    <div className="flex min-h-[420px] items-center justify-center px-5 pb-5">
      <div className="card flex max-w-[560px] flex-col items-center px-6 pb-6 pt-5 text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef2f6] text-ink-500">
          <Info size={20} strokeWidth={1.8} />
        </span>
        <h2 className="mt-3 text-[13px] font-extrabold text-ink-900">
          Halaman ini khusus {ownerDef.label}
        </h2>
        <p className="mt-1.5 text-[10.5px] leading-[1.6] text-ink-500">
          Seluruh data pada halaman ini berasal dari {ownerDef.fullLabel}, sehingga tidak ada
          angka yang dapat ditampilkan untuk cakupan {def.fullLabel}.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <ScopeResetButton />
          <Link
            href="/"
            className="rounded-lg border border-[#e3e9ef] bg-white px-3 py-[7px] text-[10px] font-semibold text-ink-700 transition-colors hover:border-ptpn-green hover:text-ptpn-green"
          >
            Dashboard Utama
          </Link>
        </div>
      </div>
    </div>
  );
}

function ScopeResetButton() {
  const { setActive } = useSubholding();
  return (
    <button
      type="button"
      onClick={() => setActive("all")}
      className="rounded-lg bg-ptpn-green px-3 py-[7px] text-[10px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90"
    >
      Tampilkan semua subholding
    </button>
  );
}
