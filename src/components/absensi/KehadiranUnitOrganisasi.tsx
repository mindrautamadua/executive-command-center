import { ArrowRight, ChevronDown } from "lucide-react";
import { kehadiranUnit } from "@/lib/absensi-data";
import { PALETTE } from "@/lib/chart-palette";

/** Unit dengan kehadiran >= 96% ditandai hijau, sisanya biru. */
const HIJAU = 96;

export function KehadiranUnitOrganisasi() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "120ms" } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="card-title-navy">Kehadiran Berdasarkan Unit Organisasi</h3>
        <button className="select-chip whitespace-nowrap px-2.5 py-[5px] text-[9.5px]">
          Top 10 Unit <ChevronDown size={11} />
        </button>
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col justify-around">
        {kehadiranUnit.map((u, i) => {
          const hijau = u.value >= HIJAU;
          return (
            <div key={u.nama} className="flex items-center gap-2">
              <span className="w-[120px] shrink-0 whitespace-nowrap text-[9.5px] text-ink-700">
                {u.nama}
              </span>
              <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-[#f1f5f8]">
                <div
                  className="anim-grow-x h-full rounded-full"
                  style={
                    {
                      width: `${u.value}%`,
                      background: hijau ? PALETTE.green : PALETTE.blue,
                      "--d": `${i * 50}ms`,
                    } as React.CSSProperties
                  }
                />
              </div>
              <span className="w-[32px] shrink-0 text-right text-[9.5px] font-bold tabular-nums text-ink-900">
                {u.label}
              </span>
            </div>
          );
        })}
      </div>

      <button className="link-more mt-1 flex items-center gap-1">
        Lihat semua unit organisasi <ArrowRight size={11} />
      </button>
    </div>
  );
}
