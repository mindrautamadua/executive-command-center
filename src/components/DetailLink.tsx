import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { NAV } from "@/lib/nav";

/**
 * Tautan "Detail" dari kartu dashboard korporat ke halaman dimensi terkait.
 * Tidak dirender bila dimensi tujuan belum siap (`ready: false` di nav.ts).
 */
export function DetailLink({ href }: { href: string }) {
  const target = NAV.find((n) => n.href === href);
  if (!target?.ready) return null;

  return (
    <Link
      href={href}
      className="flex shrink-0 items-center gap-[2px] whitespace-nowrap text-[9px] font-semibold text-ptpn-green transition-opacity hover:opacity-70"
      title={`Buka ${target.label}`}
    >
      Detail
      <ChevronRight size={11} />
    </Link>
  );
}
