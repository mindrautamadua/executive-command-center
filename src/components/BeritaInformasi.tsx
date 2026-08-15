import { intelijen } from "@/lib/data";

/**
 * Kartu ini dulu memuat judul rilis pers korporat. Di Executive Command Center
 * ruang sepenting ini harus dipakai untuk temuan yang mengubah keputusan:
 * setiap baris membawa nilai rupiah dan tingkat relevansinya, bukan sekadar
 * kabar. Berita korporat tetap bisa hidup di portal perusahaan.
 */
const RELEVANSI: Record<string, { text: string; bg: string }> = {
  Tinggi: { text: "#dc2626", bg: "#fee2e2" },
  Sedang: { text: "#ea9a1a", bg: "#fef3c7" },
  Rendah: { text: "#2f7de1", bg: "#dbeafe" },
};

export function BeritaInformasi() {
  return (
    <div className="card flex min-h-0 flex-1 flex-col px-4 pb-2 pt-2">
      <div className="flex items-center justify-between">
        <h3 className="card-title">INTELIJEN EKSEKUTIF</h3>
        <button className="link-more">Lihat semua</button>
      </div>

      <div className="mt-0.5 flex flex-1 flex-col justify-around">
        {intelijen.map((it, i) => {
          const r = RELEVANSI[it.relevansi] ?? RELEVANSI.Rendah;
          return (
            <div
              key={it.title}
              className={`py-[4px] ${i !== 0 ? "border-t border-[#f2f5f8]" : ""}`}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className="h-[7px] w-[7px] shrink-0 rounded-full"
                  style={{ background: `hsl(${it.hue} 55% 45%)` }}
                />
                <span className="text-[9px] text-ink-400">{it.date}</span>
                <span
                  className="ml-auto shrink-0 rounded px-1 py-[1px] text-[8px] font-bold"
                  style={{ color: r.text, background: r.bg }}
                >
                  RELEVANSI {it.relevansi.toUpperCase()}
                </span>
              </div>

              <p className="mt-[2px] line-clamp-2 text-[10px] font-semibold leading-[1.3] text-ink-900">
                {it.title}
              </p>
              <p className="mt-[2px] text-[9.5px] font-bold" style={{ color: r.text }}>
                {it.dampak}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
