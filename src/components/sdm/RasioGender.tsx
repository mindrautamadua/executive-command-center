import { ChevronRight } from "lucide-react";
import { gender } from "@/lib/sdm-data";
import { GENDER } from "@/lib/chart-palette";

function IconMale() {
  return (
    <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]">
      <circle cx="12" cy="6" r="3.6" fill={GENDER.lakiLaki} />
      <path d="M4.5 22c.9-5.4 4.2-7.9 7.5-7.9S18.6 16.6 19.5 22Z" fill={GENDER.lakiLaki} />
    </svg>
  );
}

function IconFemale() {
  return (
    <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]">
      <circle cx="12" cy="6" r="3.6" fill={GENDER.perempuan} />
      <path
        d="M12 10.1c3 0 4.6 2.4 5.4 6.2.3 1.3-.5 1.8-1.4 1.6l-.6 4.1H8.6L8 17.9c-.9.2-1.7-.3-1.4-1.6.8-3.8 2.4-6.2 5.4-6.2Z"
        fill={GENDER.perempuan}
      />
    </svg>
  );
}

/** Bar terbelah dua segmen (menggantikan donut) — warna baku GENDER. */
export function RasioGender() {
  return (
    <div
      className="card anim-rise flex h-full flex-col px-4 pb-2.5 pt-3"
      style={{ "--d": "480ms" } as React.CSSProperties}
    >
      <h3 className="card-title-navy">RASIO GENDER</h3>
      <p className="mt-[3px] text-[9.5px] text-ink-500">Seluruh Perusahaan</p>

      <div className="flex min-h-0 flex-1 flex-col justify-center gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <IconMale />
            <div className="leading-tight">
              <div className="whitespace-nowrap text-[9px] text-ink-500">Laki-laki</div>
              <div className="text-[13px] font-extrabold text-ink-900">{gender.pria.pct}</div>
              <div className="text-[9.5px] text-ink-500">{gender.pria.jumlah}</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="text-right leading-tight">
              <div className="whitespace-nowrap text-[9px] text-ink-500">Perempuan</div>
              <div className="text-[13px] font-extrabold text-ink-900">
                {gender.wanita.pct}
              </div>
              <div className="text-[9.5px] text-ink-500">{gender.wanita.jumlah}</div>
            </div>
            <IconFemale />
          </div>
        </div>

        {/* bar terbelah */}
        <div>
          <div className="flex h-[16px] overflow-hidden rounded-full">
            <div
              className="anim-grow-x flex items-center justify-start pl-2"
              style={
                {
                  width: `${gender.pria.share}%`,
                  background: gender.pria.color,
                  "--d": "480ms",
                } as React.CSSProperties
              }
            >
              <span className="text-[9px] font-bold text-white">{gender.pria.pct}</span>
            </div>
            <div
              className="anim-grow-x flex items-center justify-end pr-2"
              style={
                {
                  width: `${gender.wanita.share}%`,
                  background: gender.wanita.color,
                  "--d": "560ms",
                  transformOrigin: "right",
                } as React.CSSProperties
              }
            >
              <span className="text-[9px] font-bold text-white">{gender.wanita.pct}</span>
            </div>
          </div>
          <div className="mt-1.5 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1.5 text-[9px] text-ink-500">
              <span
                className="h-[7px] w-[7px] rounded-full"
                style={{ background: gender.pria.color }}
              />
              Laki-laki
            </span>
            <span className="flex items-center gap-1.5 text-[9px] text-ink-500">
              <span
                className="h-[7px] w-[7px] rounded-full"
                style={{ background: gender.wanita.color }}
              />
              Perempuan
            </span>
          </div>
        </div>
      </div>

      <button className="link-more mt-1.5 flex cursor-pointer items-center gap-0.5">
        Lihat detail D&amp;I <ChevronRight size={12} />
      </button>
    </div>
  );
}
