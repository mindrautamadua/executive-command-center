import { ArrowRight } from "lucide-react";
import { ddCategories, ddEntries } from "@/lib/dd-data";
import { SectionHead } from "../hc/SectionHead";

const FREQ_CLS: Record<string, string> = {
  Harian: "bg-ptpn-greenLight text-ptpn-green",
  Bulanan: "bg-[#e8f1fd] text-[#2f6fe4]",
  Triwulanan: "bg-[#f1ecfd] text-[#8b5cf6]",
};

const catColor = (name: string) =>
  ddCategories.find((c) => c.name === name)?.color ?? "#94a3b8";

export function DdTable() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-3 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <SectionHead no="1" title="Katalog Istilah & Metrik" />
      <p className="mt-[3px] text-[9px] text-ink-500">
        12 metrik inti dari 128 istilah terdokumentasi
      </p>

      <div className="scroll-thin mt-2 min-h-0 flex-1 overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-[var(--surface,#fff)]">
            <tr className="border-b border-[#eef2f6] text-left text-[8px] font-semibold uppercase tracking-[0.04em] text-ink-400">
              <th className="pb-1.5 pr-2 font-semibold">Istilah / Metrik</th>
              <th className="pb-1.5 pr-2 font-semibold">Definisi</th>
              <th className="pb-1.5 pr-2 font-semibold">Formula</th>
              <th className="pb-1.5 pr-2 font-semibold">Sumber</th>
              <th className="pb-1.5 text-center font-semibold">Update</th>
            </tr>
          </thead>
          <tbody>
            {ddEntries.map((e) => (
              <tr key={e.term} className="border-b border-[#f5f8fa] align-top last:border-0">
                <td className="w-[150px] py-[7px] pr-2">
                  <span className="flex items-start gap-1.5">
                    <span
                      className="mt-[3px] h-[7px] w-[7px] shrink-0 rounded-[2px]"
                      style={{ background: catColor(e.category) }}
                      title={e.category}
                    />
                    <span className="text-[9px] font-extrabold leading-[1.3] text-ink-900">
                      {e.term}
                    </span>
                  </span>
                </td>
                <td className="py-[7px] pr-2 text-[8.5px] leading-[1.4] text-ink-500">
                  {e.definition}
                </td>
                <td className="w-[170px] py-[7px] pr-2 text-[8.5px] italic leading-[1.4] text-ink-700">
                  {e.formula}
                </td>
                <td className="w-[92px] whitespace-nowrap py-[7px] pr-2 text-[8.5px] font-semibold text-ink-700">
                  {e.source}
                </td>
                <td className="w-[74px] py-[7px] text-center">
                  <span
                    className={`inline-flex items-center rounded-md px-1.5 py-[2px] text-[8px] font-extrabold ${FREQ_CLS[e.frequency]}`}
                  >
                    {e.frequency}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="mt-2 flex w-full shrink-0 items-center justify-center gap-1 rounded-lg border border-[#e3e9ef] bg-[#f8fafc] py-[7px] text-[9.5px] font-semibold text-ptpn-greenDark transition-colors hover:bg-[#eef4f0]">
        Lihat Seluruh 128 Istilah <ArrowRight size={11} />
      </button>
    </div>
  );
}
