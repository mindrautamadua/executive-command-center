"use client";

import { useState } from "react";
import { ProfilHero } from "./ProfilHero";
import { ProfilTabs } from "./ProfilTabs";
import { RingkasanKinerja } from "./RingkasanKinerja";
import { InformasiJabatan } from "./InformasiJabatan";
import { TalentPotential } from "./TalentPotential";
import { KompetensiUtama } from "./KompetensiUtama";
import { PelatihanSertifikasi } from "./PelatihanSertifikasi";
import { RiwayatPendidikan } from "./RiwayatPendidikan";
import { RiwayatJabatan } from "./RiwayatJabatan";
import { Penghargaan } from "./Penghargaan";
import { TabInformasiPribadi } from "./tabs/TabInformasiPribadi";
import { TabPekerjaan } from "./tabs/TabPekerjaan";
import { TabKinerja } from "./tabs/TabKinerja";
import { TabKompetensi } from "./tabs/TabKompetensi";
import { TabPengembangan } from "./tabs/TabPengembangan";
import { TabPeopleMath } from "./tabs/TabPeopleMath";
import { TabHpiBem } from "./tabs/TabHpiBem";
import { TabRiwayat } from "./tabs/TabRiwayat";
import { TabDokumen } from "./tabs/TabDokumen";

function Overview() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-[minmax(0,320fr)_minmax(0,300fr)_minmax(0,440fr)] gap-3">
        <RingkasanKinerja />
        <InformasiJabatan />
        <TalentPotential />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <KompetensiUtama />
        <PelatihanSertifikasi />
        <RiwayatPendidikan />
      </div>
      <div className="grid grid-cols-[minmax(0,590fr)_minmax(0,470fr)] gap-3">
        <RiwayatJabatan />
        <Penghargaan />
      </div>
    </div>
  );
}

const CONTENT: Record<string, () => React.ReactElement> = {
  Overview,
  "Informasi Pribadi": TabInformasiPribadi,
  Pekerjaan: TabPekerjaan,
  Kinerja: TabKinerja,
  Kompetensi: TabKompetensi,
  Pengembangan: TabPengembangan,
  "People Math": TabPeopleMath,
  "HPI BEM": TabHpiBem,
  Riwayat: TabRiwayat,
  Dokumen: TabDokumen,
};

export function ProfilBody() {
  const [active, setActive] = useState("Overview");
  const Active = CONTENT[active] ?? Overview;

  return (
    <div className="mx-5 mb-4 space-y-3">
      <div className="card">
        <ProfilHero />
        <ProfilTabs active={active} onChange={setActive} />
      </div>
      {/* key memaksa re-mount agar konten tab masuk dengan fade */}
      <div key={active} className="anim-fade" style={{ "--d": "0ms" } as React.CSSProperties}>
        <Active />
      </div>
    </div>
  );
}
