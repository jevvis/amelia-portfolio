'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key) => key,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

// ─── COMPLETE BILINGUAL TRANSLATION DICTIONARY FOR apt. AMELIA PUTRI BIDUL ───
const translations: Record<Language, Record<string, string>> = {
  id: {
    // ── Navbar
    'nav.about': 'TENTANG SAYA',
    'nav.education': 'PENDIDIKAN',
    'nav.work': 'MAGANG',
    'nav.org': 'RISET & ASISTENSI',
    'nav.awards': 'SERTIFIKASI',
    'nav.skills': 'KEAHLIAN',
    'nav.contact': 'HUBUNGI SAYA',

    // ── Hero
    'hero.scroll': 'GULIR KE BAWAH',
    'hero.badge.major': 'Profesi Apoteker UNTAD',
    'hero.badge.medal': 'IPK 3.96 & STR',
    'hero.badge.event': 'PSPPA Untad & KFI',

    // ── About Section
    'about.label': 'TENTANG SAYA',
    'about.title': 'Clinical & Hospital Pharmacist. Patient Safety First.',
    'about.ipk': 'IPK Profesi',
    'about.toefl': 'IPK S1',
    'about.year': 'Apoteker',
    'about.bio1': 'Apoteker lulusan Universitas Tadulako (Profesi Apoteker IPK 3.96/4.00, S1 Farmasi IPK 3.67/4.00) dengan pengalaman praktik kefarmasian di rumah sakit, apotek, pedagang besar farmasi (PBF), dan industri farmasi. Memiliki kompetensi dalam pengkajian dan skrining resep, dispensing dan peracikan obat, Pelayanan Informasi Obat (PIO), serta Pemantauan Terapi Obat (PTO). Memiliki pemahaman monitoring efek samping obat (MESO), Evaluasi Penggunaan Obat (EPO), pengelolaan sediaan farmasi, dan penerapan keselamatan pasien. Berkomitmen memberikan pelayanan kefarmasian yang profesional, aman, dan berorientasi pada ketepatan terapi serta kebutuhan pasien.',
    'about.cv.prompt': 'Ingin tahu lebih lanjut?',
    'about.cv.link': 'Download CV saya',
    'about.current.label': 'FOKUS SAAT INI',
    'about.current.1.title': 'Farmasi Klinis RS',
    'about.current.1.sub': 'Skrining Resep & Dispensing UDD',
    'about.current.2.title': 'Patient Safety',
    'about.current.2.sub': 'Visite Bangsal, CPPT & Konseling',
    'about.current.3.title': 'Pengelolaan Sediaan',
    'about.current.3.sub': 'FEFO, Stock Opname & Inventori',

    // ── Trait Deck
    'trait.card.label': 'KARAKTER KERJA',
    'trait.change': 'Ganti',
    'trait.hint': 'Klik untuk melihat karakter kerja lainnya',
    'trait.1.title': 'Teliti',
    'trait.1.sub': 'Precision & Zero Error',
    'trait.1.tag': 'Akurasi Resep',
    'trait.1.desc': 'Memastikan ketelitian tinggi dalam pengkajian resep klinis & administratif, penyiapan dosis UDD, serta verifikasi obat berbasis prinsip FEFO.',
    'trait.2.title': 'Empati',
    'trait.2.sub': 'Patient-Centered Care',
    'trait.2.tag': 'Edukasi Pasien',
    'trait.2.desc': 'Memberikan pelayanan konseling obat khusus (insulin & suppositoria) serta swamedikasi dengan empati, ramah, dan komunikatif.',
    'trait.3.title': 'Kolaboratif',
    'trait.3.sub': 'Interprofessional Team',
    'trait.3.tag': 'Visite Multidisiplin',
    'trait.3.desc': 'Mampu berkolaborasi aktif dengan dokter, perawat, dan tenaga medis rumah sakit saat visite rawat inap dan dokumentasi CPPT.',
    'trait.4.title': 'Adaptif',
    'trait.4.sub': 'Multi-Setting Pharmacy',
    'trait.4.tag': 'Cepat Tanggap',
    'trait.4.desc': 'Berpengalaman lintas bidang kefarmasian: rumah sakit, apotek komunitas, industri farmasi, hingga pedagang besar farmasi (PBF).',

    // ── Quote
    'about.quote': '“Mengutamakan keselamatan pasien, ketepatan terapi, dan pelayanan kefarmasian yang berintegritas.”',

    // ── Metrics
    'metric.ipk': 'IPK PROFESI',
    'metric.ipk.sub': 'Universitas Tadulako (3.96 / 4.00)',
    'metric.medal': 'IPK SARJANA',
    'metric.medal.sub': 'Sarjana Farmasi UNTAD (3.67 / 4.00)',
    'metric.org': 'PENGALAMAN PRAKTIK',
    'metric.org.sub': 'RSUD Undata (2x), Kimia Farma, Prima Medika, PBF SMS',
    'metric.toefl': 'LISENSI RESMI',
    'metric.toefl.sub': 'STR Apoteker & Sertifikat Kompetensi KFI',

    // ── Education Section
    'education.label': 'RIWAYAT AKADEMIK',
    'education.title': 'Pendidikan',
    'education.degreeLabel': 'Gelar',
    'education.highlights.label': 'Kompetensi & Aktivitas Utama',

    'education.1.institution': 'Universitas Tadulako',
    'education.1.program': 'Profesi Apoteker',
    'education.1.degree': 'Apoteker (apt.)',
    'education.1.period': '2025 — 2026',
    'education.1.gpa': '3.96 / 4.00',
    'education.1.status': 'Lulus',
    'education.1.desc': 'Program Studi Pendidikan Profesi Apoteker (PSPPA) dengan praktik kerja di rumah sakit (RSUD Undata Palu), apotek komunitas (Kimia Farma Unit Bisnis Palu), industri farmasi (PT Prima Medika Laboratory Tangerang), dan Pedagang Besar Farmasi (PT Sehat Mitra Sejati Palu). Menyelesaikan pendidikan profesi dengan IPK 3.96/4.00.',
    'education.1.tag': 'Pendidikan Profesi',
    'education.1.caption': 'Pelantikan & Sumpah Apoteker PSPPA Universitas Tadulako',
    'education.1.h1': 'Skrining ~25 resep per shift, dispensing Unit Daily Dose (UDD), visite bangsal, dan dokumentasi CPPT di RSUD Undata',
    'education.1.h2': 'Praktik pelayanan kefarmasian di ruang handling sitostatika dan Instalasi Bedah Sentral (IBS) RSUD Undata',
    'education.1.h3': 'Verifikasi penerimaan sediaan dari PBF, penyimpanan FEFO, stock opname, serta mempelajari pelaporan SIPNAP & SIMONA di Kimia Farma',
    'education.1.h4': 'Mempelajari produksi sediaan steril & nonsteril di PT Prima Medika serta verifikasi pesanan dan stock opname di PBF PT Sehat Mitra Sejati',

    'education.2.institution': 'Universitas Tadulako',
    'education.2.program': 'Sarjana Farmasi',
    'education.2.degree': 'Sarjana Farmasi (S.Farm.)',
    'education.2.period': '2021 — 2025',
    'education.2.gpa': '3.67 / 4.00',
    'education.2.status': 'Lulus',
    'education.2.desc': 'Menempuh studi Sarjana Farmasi di Universitas Tadulako dengan IPK 3.67/4.00. Selama studi menjadi Asisten Dosen Praktikum Farmakognosi dan Fitokimia, menjalani magang di RSUD Undata, serta menyelesaikan penelitian skripsi yang didanai hibah.',
    'education.2.tag': 'Pendidikan Sarjana',
    'education.2.caption': 'Wisuda Sarjana Farmasi Universitas Tadulako',
    'education.2.h1': 'Asisten Dosen Praktikum Farmakognosi (2023–2024) dan Fitokimia (2025)',
    'education.2.h2': 'Magang Pharmacy Assistant di RSUD Undata Palu (Oktober 2024)',
    'education.2.h3': 'Penelitian skripsi di laboratorium yang didanai hibah',
    'education.2.h4': 'Lulus Sarjana Farmasi dengan IPK 3.67/4.00',

    // ── Work Section
    'work.label': 'PENGALAMAN PRAKTIK & ROTASI',
    'work.title': 'Pengalaman Praktik Kerja Profesi',
    'work.subtitle': 'Pengalaman praktik di rumah sakit, apotek komunitas, industri farmasi, pedagang besar farmasi (PBF), dan asistensi praktikum.',
    'work.cta': 'Lihat Semua Pengalaman',

    'work.1.role': 'Clinical Pharmacy Intern',
    'work.1.inst': 'RSUD UNDATA PALU',
    'work.1.loc': 'Palu, Sulawesi Tengah',
    'work.1.period': 'April — Juni 2026',
    'work.1.sub': 'Pelayanan Farmasi Klinis, Pengelolaan Perbekalan & Rawat Inap',
    'work.1.desc': 'Melakukan skrining sekitar 25 resep per shift (BPJS & non-BPJS) dan menyiapkan obat sesuai standar. Memverifikasi penerimaan sediaan dari PBF, mendukung pengadaan melalui e-purchasing (e-Katalog), penyimpanan, dan distribusi ke depo. Melaksanakan dispensing sistem Unit Daily Dose (UDD), mengikuti visite sekitar 10 pasien dan mendokumentasikannya di CPPT, memberikan PIO dan konseling (termasuk insulin dan suppositoria), meracik kapsul, puyer, dan salep, mengikuti PTO, MESO, dan EPO, serta praktik di ruang handling sitostatika dan IBS.',

    'work.2.role': 'Community Pharmacy Intern',
    'work.2.inst': 'APOTEK KIMIA FARMA UNIT BISNIS PALU',
    'work.2.loc': 'Palu, Sulawesi Tengah',
    'work.2.period': 'Oktober — November 2025',
    'work.2.sub': 'Pelayanan Farmasi Komunitas & Pengelolaan Sediaan',
    'work.2.desc': 'Melakukan skrining sekitar 15 resep per hari dan menyiapkan obat sesuai jenis dan dosis. Memverifikasi penerimaan sediaan farmasi dari PBF hingga 4 kali sehari berdasarkan faktur dan surat pesanan. Mempelajari pemesanan obat serta menerapkan penyimpanan FEFO, alfabetis, bentuk sediaan, suhu, dan jenis obat. Melakukan stock opname, mempelajari pelaporan SIPNAP dan SIMONA, serta memberikan PIO dan pelayanan swamedikasi.',

    'work.3.role': 'Industrial Pharmacy Intern — Production',
    'work.3.inst': 'PT. PRIMA MEDIKA LABORATORY',
    'work.3.loc': 'Tangerang, Banten',
    'work.3.period': 'Januari — Maret 2026',
    'work.3.sub': 'Produksi Sediaan Steril & Nonsteril',
    'work.3.desc': 'Mempelajari proses produksi 2 kategori sediaan farmasi, yaitu steril dan nonsteril, sesuai prosedur operasional industri. Mempelajari alur produksi, Quality Control (QC), Quality Assurance (QA), serta dokumentasi industri farmasi, dan membantu menyusun jadwal produksi berdasarkan batch produk yang telah memperoleh persetujuan QA.',

    'work.4.role': 'Pharmaceutical Distribution Intern',
    'work.4.inst': 'PBF PT. SEHAT MITRA SEJATI',
    'work.4.loc': 'Palu, Sulawesi Tengah',
    'work.4.period': 'Oktober 2026',
    'work.4.sub': 'Distribusi Farmasi & Administrasi Gudang',
    'work.4.desc': 'Membantu memverifikasi keakuratan data pemesan obat dan alat kesehatan serta kesesuaian dokumen pesanan. Melakukan stock opname dengan mencocokkan persediaan fisik di gudang dengan data sistem, mengelola pengarsipan faktur dan dokumen pemesanan, serta mempelajari verifikasi penerimaan berdasarkan 4 aspek (nama obat, jumlah, nomor batch, dan tanggal kedaluwarsa) sesuai faktur dan surat pesanan.',

    'work.5.role': 'Asisten Dosen Praktikum Farmakognosi & Fitokimia',
    'work.5.inst': 'FARMASI UNIVERSITAS TADULAKO',
    'work.5.loc': 'Palu, Sulawesi Tengah',
    'work.5.period': '2023 — 2025',
    'work.5.sub': 'Farmakognosi (2023–2024) & Fitokimia (2025)',
    'work.5.desc': 'Mendampingi mahasiswa dalam praktikum Farmakognosi dan Fitokimia sesuai materi dan prosedur. Membantu menjelaskan tahapan kerja serta penggunaan bahan dan peralatan laboratorium, membantu mahasiswa memahami karakteristik bahan alam dan simplisia, membimbing pengamatan hasil dan penyusunan laporan, serta mendukung penerapan prosedur keselamatan laboratorium.',

    'work.6.role': 'Pharmacy Assistant Intern',
    'work.6.inst': 'RSUD UNDATA PALU',
    'work.6.loc': 'Palu, Sulawesi Tengah',
    'work.6.period': 'Oktober 2024',
    'work.6.sub': 'Magang S1 — Depo Rawat Jalan, Rawat Inap & IGD',
    'work.6.desc': 'Melakukan skrining sekitar 20 resep per sif di depo farmasi rawat jalan, rawat inap, dan IGD. Memberikan PIO kepada sekitar 20 pasien serta konseling penggunaan obat khusus seperti insulin dan suppositoria. Melaksanakan dispensing termasuk peracikan kapsul, puyer, dan salep, serta mendukung inventaris dan pengelolaan logistik farmasi mulai dari perencanaan, pemesanan, penyimpanan, hingga distribusi ke depo.',

    // ── Organizations / Research Section
    'trainings.label': 'RISET & ASISTENSI AKADEMIK',
    'trainings.title': 'Penelitian Skripsi & Asistensi Lab',
    'trainings.campus': 'UNIVERSITAS TADULAKO',

    'org.1.role': 'Penelitian Skripsi S1 Farmasi',
    'org.1.inst': 'Laboratorium Farmasi — Universitas Tadulako',
    'org.1.period': '2024 — 2025',
    'org.1.loc': 'Palu, Sulawesi Tengah',
    'org.1.desc': 'Melaksanakan penelitian skripsi di laboratorium yang didanai hibah, mulai dari penyiapan bahan baku hingga pengujian, sebagai tugas akhir Sarjana Farmasi.',

    'org.2.role': 'Asisten Dosen Praktikum Farmakognosi & Fitokimia',
    'org.2.inst': 'Farmasi — Universitas Tadulako',
    'org.2.period': '2023 — 2025',
    'org.2.loc': 'Palu, Sulawesi Tengah',
    'org.2.desc': 'Asisten Dosen Praktikum Farmakognosi (2023–2024) dan Fitokimia (2025). Mendampingi mahasiswa sesuai materi dan prosedur praktikum, menjelaskan penggunaan bahan dan peralatan laboratorium, membimbing pengamatan dan penyusunan laporan, serta mendukung penerapan prosedur keselamatan laboratorium.',

    // ── Awards Section
    'awards.label': 'LISENSI & SERTIFIKASI',
    'awards.title': 'Sertifikasi & Lisensi Resmi',
    'awards.sub': 'Lisensi profesi resmi, sertifikat kompetensi nasional, dan bukti keahlian praktik kefarmasian yang terverifikasi.',
    'awards.openDoc': 'Buka Sertifikat',
    'awards.issuer': 'Penerbit Lisensi',
    'awards.viewOriginal': 'Lihat Dokumen Asli →',

    'award.1.title': 'Surat Tanda Registrasi (STR) Apoteker',
    'award.1.issuer': 'Kementerian Kesehatan Republik Indonesia',
    'award.1.cat': 'LISENSI RESMI PROFESI',
    'award.1.desc': 'Surat Tanda Registrasi (STR) sebagai tenaga kesehatan Apoteker yang diterbitkan oleh Kementerian Kesehatan Republik Indonesia.',

    'award.2.title': 'Sertifikat Kompetensi Uji Kompetensi Profesi Apoteker',
    'award.2.issuer': 'Kolegium Farmasi Indonesia',
    'award.2.cat': 'SERTIFIKASI KOMPETENSI',
    'award.2.desc': 'Sertifikat Kompetensi hasil Uji Kompetensi Profesi Apoteker yang diterbitkan oleh Kolegium Farmasi Indonesia.',

    'award.3.title': 'Safety & K3 Awareness',
    'award.3.issuer': 'PT Micasa Edukasi Indonesia',
    'award.3.cat': 'SERTIFIKASI K3 & KESELAMATAN',
    'award.3.desc': 'Pelatihan Keselamatan dan Kesehatan Kerja (K3) oleh PT Micasa Edukasi Indonesia, mencakup identifikasi dan penilaian risiko, inspeksi K3, serta pelaporan dan dokumentasi K3.',

    'award.4.title': 'Pelatihan Dasar Tanggap Bencana',
    'award.4.issuer': 'Program Studi Pendidikan Profesi Apoteker, Universitas Tadulako',
    'award.4.cat': 'PELATIHAN TANGGAP BENCANA',
    'award.4.desc': 'Pelatihan Dasar Tanggap Bencana yang diselenggarakan oleh Program Studi Pendidikan Profesi Apoteker FMIPA Universitas Tadulako pada 22–23 Desember 2025.',

    // ── Skills Section
    'skills.label': 'KOMPETENSI KLINIS & TEKNIS',
    'skills.title': 'Kemampuan Teknis',
    'skills.desc': 'Menggabungkan pelayanan farmasi klinis, pengelolaan sediaan farmasi, dan penerapan keselamatan pasien dalam pelayanan kefarmasian.',
    'skills.card1.tag': 'FARMASI KLINIS & PELAYANAN PASIEN',
    'skills.card1.desc': 'Pengkajian dan skrining resep secara administratif, farmasetik, dan klinis, dispensing dan peracikan obat, PIO, konseling dan edukasi pasien, PTO, MESO, EPO, evaluasi dosis dan ketepatan pemilihan obat, swamedikasi, distribusi UDD, serta dokumentasi CPPT.',
    'skills.card2.tag': 'PENGELOLAAN SEDIAAN & LOGISTIK',
    'skills.card2.desc': 'Pengelolaan dan penyimpanan sediaan farmasi berdasarkan prinsip FEFO, manajemen inventori dan stock opname, pengelolaan logistik dan pengadaan perbekalan farmasi, serta pemahaman alur produksi sediaan steril dan nonsteril di industri farmasi.',

    // ── Personal Skills Section
    'personal.label': 'KEMAMPUAN PERSONAL & SOFTWARE',
    'personal.title': 'Karakter & Software Kerja',
    'personal.sub': 'Karakter personal pendukung pelayanan prima serta penguasaan perangkat lunak untuk administrasi resep, pelaporan logistik, dan edukasi pasien.',
    'personal.soft.label': 'SOFT SKILLS',
    'personal.soft.title': 'Kemampuan Personal',
    'personal.hard.label': 'SOFTWARE TOOLS',
    'personal.hard.title': 'Kemampuan Software',
    'personal.orientation': 'Karakter Pelayanan:',
    'personal.quality': 'Patient Safety & Pelayanan Prima',
    'personal.app': 'Aplikasi Kerja:',
    'personal.ready': 'Ms. Word, Excel, PowerPoint',

    'personal.soft.1.t': 'Disiplin & Tanggung Jawab',
    'personal.soft.1.d': 'Komitmen tinggi terhadap ketepatan waktu pelayanan resep dan ketelitian administrasi obat.',
    'personal.soft.2.t': 'Ramah, Sopan & Empati',
    'personal.soft.2.d': 'Pendekatan penuh perhatian dan keramahan dalam konseling serta penanganan keluhan pasien.',
    'personal.soft.3.t': 'Teliti',
    'personal.soft.3.d': 'Pemeriksaan berulang (double check) pada skrining resep, dosis obat, dan potensi medication error.',
    'personal.soft.4.t': 'Komunikatif',
    'personal.soft.4.d': 'Mampu berkoordinasi efektif dengan dokter, perawat, dan rekan sejawat dalam tim interprofesional.',
    'personal.soft.5.t': 'Kerja Tim',
    'personal.soft.5.d': 'Terbiasa bekerja sama dalam depo farmasi rumah sakit dan saat mendampingi praktikum mahasiswa.',
    'personal.soft.6.t': 'Adaptif & Cepat Belajar',
    'personal.soft.6.d': 'Cepat menguasai pedoman terapi baru, formularium rumah sakit, serta sistem inventori farmasi.',

    // ── Contact Section
    'contact.label': 'KONTAK & KONSULTASI',
    'contact.title': 'Hubungi Saya',
    'contact.tagline': 'Apoteker Berlisensi — Siap Berkontribusi untuk Keselamatan Pasien',
    'contact.subtitle': 'Terbuka untuk peluang karir di rumah sakit, apotek, pedagang besar farmasi (PBF), dan industri farmasi.',
    'contact.chatNow': 'Hubungi Sekarang',
    'contact.direct': 'Saluran Komunikasi Langsung',
    'contact.directSub': 'Hubungi melalui kontak berikut:',
    'contact.openHours': 'Jam Respons:',
    'contact.openVal': 'Senin — Sabtu (08.00 — 17.00 WITA)',
    'contact.location': 'LOKASI',
    'contact.phone': 'TELEPON / WHATSAPP',
  },

  en: {
    // ── Navbar
    'nav.about': 'ABOUT ME',
    'nav.education': 'EDUCATION',
    'nav.work': 'INTERNSHIP',
    'nav.org': 'RESEARCH & ASST',
    'nav.awards': 'CERTIFICATIONS',
    'nav.skills': 'COMPETENCIES',
    'nav.contact': 'CONTACT ME',

    // ── Hero
    'hero.scroll': 'SCROLL DOWN',
    'hero.badge.major': 'Pharmacist Grad UNTAD',
    'hero.badge.medal': 'GPA 3.96 & STR',
    'hero.badge.event': 'PSPPA Untad & KFI',

    // ── About Section
    'about.label': 'ABOUT ME',
    'about.title': 'Clinical & Hospital Pharmacist. Patient Safety First.',
    'about.ipk': 'Profession GPA',
    'about.toefl': 'Bachelor GPA',
    'about.year': 'Licensed',
    'about.bio1': 'Pharmacist graduate of Universitas Tadulako (Pharmacist Profession GPA 3.96/4.00, Bachelor of Pharmacy GPA 3.67/4.00) with practice experience in hospitals, community pharmacy, pharmaceutical wholesalers (PBF), and the pharmaceutical industry. Competent in prescription review and screening, dispensing and compounding, Drug Information Services (PIO), and Therapeutic Drug Monitoring (PTO), with an understanding of adverse drug reaction monitoring (MESO), Drug Use Evaluation (EPO), pharmaceutical supply management, and patient safety. Committed to delivering professional, safe pharmacy services focused on therapeutic accuracy and patient needs.',
    'about.cv.prompt': 'Want to learn more?',
    'about.cv.link': 'Download my CV',
    'about.current.label': 'CURRENT FOCUS',
    'about.current.1.title': 'Hospital Pharmacy',
    'about.current.1.sub': 'Prescription Screening & UDD',
    'about.current.2.title': 'Patient Safety',
    'about.current.2.sub': 'Ward Rounds, CPPT & Counseling',
    'about.current.3.title': 'Supply Management',
    'about.current.3.sub': 'FEFO, Stock Taking & Inventory',

    // ── Trait Deck
    'trait.card.label': 'WORK TRAITS',
    'trait.change': 'Switch',
    'trait.hint': 'Click to view more work traits',
    'trait.1.title': 'Precise',
    'trait.1.sub': 'Precision & Zero Error',
    'trait.1.tag': 'Prescription Accuracy',
    'trait.1.desc': 'Ensuring high accuracy in clinical and administrative prescription screening, Unit Daily Dose (UDD) dispensing, and FEFO inventory verifications.',
    'trait.2.title': 'Empathetic',
    'trait.2.sub': 'Patient-Centered Care',
    'trait.2.tag': 'Patient Education',
    'trait.2.desc': 'Delivering compassionate patient counseling for specialized medication (insulin pens & suppositories) and self-medication consultation.',
    'trait.3.title': 'Collaborative',
    'trait.3.sub': 'Interprofessional Team',
    'trait.3.tag': 'Multidisciplinary Rounds',
    'trait.3.desc': 'Proactively collaborating with physicians, nurses, and hospital medical teams during inpatient ward rounds and CPPT documentation.',
    'trait.4.title': 'Adaptive',
    'trait.4.sub': 'Multi-Setting Pharmacy',
    'trait.4.tag': 'Quick Responder',
    'trait.4.desc': 'Experienced across pharmacy settings: hospitals, community pharmacies, the pharmaceutical industry, and pharmaceutical wholesalers (PBF).',

    // ── Quote
    'about.quote': '“Prioritizing patient safety, therapeutic precision, and pharmacy services with uncompromising integrity.”',

    // ── Metrics
    'metric.ipk': 'PROFESSION GPA',
    'metric.ipk.sub': 'Universitas Tadulako (3.96 / 4.00)',
    'metric.medal': 'BACHELOR GPA',
    'metric.medal.sub': 'B.Pharm UNTAD (3.67 / 4.00)',
    'metric.org': 'PRACTICE EXPERIENCES',
    'metric.org.sub': 'RSUD Undata (2x), Kimia Farma, Prima Medika, PBF SMS',
    'metric.toefl': 'OFFICIAL LICENSE',
    'metric.toefl.sub': 'Pharmacist License (STR) & KFI Competency',

    // ── Education Section
    'education.label': 'ACADEMIC BACKGROUND',
    'education.title': 'Education',
    'education.degreeLabel': 'Degree',
    'education.highlights.label': 'Key Competencies & Activities',

    'education.1.institution': 'Universitas Tadulako',
    'education.1.program': 'Pharmacist Profession Program',
    'education.1.degree': 'Apoteker (apt.)',
    'education.1.period': '2025 — 2026',
    'education.1.gpa': '3.96 / 4.00',
    'education.1.status': 'Graduated',
    'education.1.desc': 'Pharmacist Profession Program with practice placements at a hospital (RSUD Undata Palu), community pharmacy (Kimia Farma Palu), pharmaceutical industry (PT Prima Medika Laboratory Tangerang), and pharmaceutical wholesaler (PT Sehat Mitra Sejati Palu). Graduated with a 3.96/4.00 GPA.',
    'education.1.tag': 'Professional Education',
    'education.1.caption': 'Pharmacist Oath & Graduation Ceremony, PSPPA Universitas Tadulako',
    'education.1.h1': 'Screening ~25 prescriptions/shift, Unit Daily Dose (UDD) dispensing, ward rounds, and CPPT documentation at RSUD Undata',
    'education.1.h2': 'Pharmacy practice in the cytostatic handling room and Central Surgical Unit (IBS) at RSUD Undata',
    'education.1.h3': 'Verified wholesaler deliveries, FEFO storage, stock taking, and learned SIPNAP & SIMONA reporting at Kimia Farma',
    'education.1.h4': 'Learned sterile & non-sterile production at PT Prima Medika, plus order verification and stock taking at PBF PT Sehat Mitra Sejati',

    'education.2.institution': 'Universitas Tadulako',
    'education.2.program': 'Bachelor of Pharmacy',
    'education.2.degree': 'Bachelor of Pharmacy (S.Farm.)',
    'education.2.period': '2021 — 2025',
    'education.2.gpa': '3.67 / 4.00',
    'education.2.status': 'Graduated',
    'education.2.desc': 'Completed the Bachelor of Pharmacy at Universitas Tadulako with a 3.67/4.00 GPA. During the program, served as Teaching Assistant for Pharmacognosy and Phytochemistry practicals, interned at RSUD Undata, and completed grant-funded thesis research.',
    'education.2.tag': 'Undergraduate Degree',
    'education.2.caption': 'Bachelor of Pharmacy Graduation, Universitas Tadulako',
    'education.2.h1': 'Teaching Assistant for Pharmacognosy (2023–2024) and Phytochemistry (2025) practicals',
    'education.2.h2': 'Pharmacy Assistant internship at RSUD Undata Palu (October 2024)',
    'education.2.h3': 'Grant-funded undergraduate thesis research in the laboratory',
    'education.2.h4': 'Graduated Bachelor of Pharmacy with a 3.67/4.00 GPA',

    // ── Work Section
    'work.label': 'WORK & CLINICAL ROTATIONS',
    'work.title': 'Internship & Clinical Experience',
    'work.subtitle': 'Practice experience in hospitals, community pharmacy, the pharmaceutical industry, a pharmaceutical wholesaler (PBF), and practical teaching assistance.',
    'work.cta': 'View All Experiences',

    'work.1.role': 'Clinical Pharmacy Intern',
    'work.1.inst': 'RSUD UNDATA PALU',
    'work.1.loc': 'Palu, Central Sulawesi',
    'work.1.period': 'April — June 2026',
    'work.1.sub': 'Clinical Pharmacy Services, Supply Management & Inpatient Care',
    'work.1.desc': 'Screened ~25 prescriptions per shift (BPJS & non-BPJS) and prepared medication to pharmacy standards. Verified deliveries from wholesalers, supported procurement via e-purchasing (e-Katalog), storage, and distribution to depots. Dispensed using Unit Daily Dose (UDD), joined ward rounds covering ~10 patients and documented them in CPPT, provided drug information and counseling (including insulin and suppositories), compounded capsules, powders, and ointments, took part in PTO, MESO, and EPO, and practiced in the cytostatic handling room and Central Surgical Unit (IBS).',

    'work.2.role': 'Community Pharmacy Intern',
    'work.2.inst': 'KIMIA FARMA PALU PHARMACY',
    'work.2.loc': 'Palu, Central Sulawesi',
    'work.2.period': 'October — November 2025',
    'work.2.sub': 'Community Pharmacy Services & Supply Management',
    'work.2.desc': 'Screened ~15 prescriptions per day and prepared medication matching drug type and dose. Verified wholesaler deliveries up to 4 times a day against invoices and purchase orders. Learned ordering by product category and applied FEFO, alphabetical, dosage-form, temperature, and drug-type storage. Conducted stock taking, learned SIPNAP and SIMONA reporting, and provided drug information and self-medication services.',

    'work.3.role': 'Industrial Pharmacy Intern — Production',
    'work.3.inst': 'PT. PRIMA MEDIKA LABORATORY',
    'work.3.loc': 'Tangerang, Banten',
    'work.3.period': 'January — March 2026',
    'work.3.sub': 'Sterile & Non-Sterile Production',
    'work.3.desc': 'Learned the production of 2 dosage form categories, sterile and non-sterile, following industry operating procedures. Studied the production flow, Quality Control (QC), Quality Assurance (QA), and pharmaceutical industry documentation, and helped prepare production schedules for batches approved by QA.',

    'work.4.role': 'Pharmaceutical Distribution Intern',
    'work.4.inst': 'PBF PT. SEHAT MITRA SEJATI',
    'work.4.loc': 'Palu, Central Sulawesi',
    'work.4.period': 'October 2026',
    'work.4.sub': 'Pharmaceutical Distribution & Warehouse Administration',
    'work.4.desc': 'Helped verify customer order data for drugs and medical devices and checked order documents. Conducted stock taking by matching physical warehouse stock with system data, filed invoices and order documents, and learned receiving verification based on 4 aspects (drug name, quantity, batch number, and expiry date) against invoices and purchase orders.',

    'work.5.role': 'Teaching Assistant for Pharmacognosy & Phytochemistry',
    'work.5.inst': 'PHARMACY — UNIVERSITAS TADULAKO',
    'work.5.loc': 'Palu, Central Sulawesi',
    'work.5.period': '2023 — 2025',
    'work.5.sub': 'Pharmacognosy (2023–2024) & Phytochemistry (2025)',
    'work.5.desc': 'Assisted students in Pharmacognosy and Phytochemistry practicals according to course material and procedures. Explained work steps and the use of laboratory materials and equipment, helped students understand natural materials and simplicia, guided observations and report writing, and supported laboratory safety procedures.',

    'work.6.role': 'Pharmacy Assistant Intern',
    'work.6.inst': 'RSUD UNDATA PALU',
    'work.6.loc': 'Palu, Central Sulawesi',
    'work.6.period': 'October 2024',
    'work.6.sub': 'Undergraduate Internship — Outpatient, Inpatient & ER Depots',
    'work.6.desc': 'Screened ~20 prescriptions per shift at the outpatient, inpatient, and emergency pharmacy depots. Provided drug information to ~20 patients and counseling on special medications such as insulin and suppositories. Dispensed medication including compounded capsules, powders, and ointments, and supported inventory and pharmacy logistics from planning and ordering to storage and distribution to depots.',

    // ── Organizations / Research Section
    'trainings.label': 'ACADEMIC RESEARCH & TEACHING',
    'trainings.title': 'Thesis Research & Lab Assistantship',
    'trainings.campus': 'UNIVERSITAS TADULAKO',

    'org.1.role': 'Undergraduate Pharmacy Thesis Research',
    'org.1.inst': 'Pharmacy Laboratory — Universitas Tadulako',
    'org.1.period': '2024 — 2025',
    'org.1.loc': 'Palu, Central Sulawesi',
    'org.1.desc': 'Conducted grant-funded thesis research in the laboratory, from preparing raw materials through testing, as the final project of the Bachelor of Pharmacy.',

    'org.2.role': 'Teaching Assistant for Pharmacognosy & Phytochemistry',
    'org.2.inst': 'Pharmacy — Universitas Tadulako',
    'org.2.period': '2023 — 2025',
    'org.2.loc': 'Palu, Central Sulawesi',
    'org.2.desc': 'Teaching Assistant for Pharmacognosy (2023–2024) and Phytochemistry (2025) practicals. Assisted students according to course procedures, explained the use of laboratory materials and equipment, guided observations and report writing, and supported laboratory safety procedures.',

    // ── Awards Section
    'awards.label': 'LICENSES & CERTIFICATIONS',
    'awards.title': 'Official Licenses & Certifications',
    'awards.sub': 'Official practice licenses, national competency credentials, and verified certifications supporting professional pharmacy practice.',
    'awards.openDoc': 'Open Document',
    'awards.issuer': 'Issuing Body',
    'awards.viewOriginal': 'View Original Document →',

    'award.1.title': 'Pharmacist Registration Certificate (STR)',
    'award.1.issuer': 'Ministry of Health Republic of Indonesia',
    'award.1.cat': 'PROFESSIONAL LICENSE',
    'award.1.desc': 'Pharmacist Registration Certificate (STR) issued by the Ministry of Health of the Republic of Indonesia.',

    'award.2.title': 'Pharmacist Competency Certificate',
    'award.2.issuer': 'Indonesian Pharmacy Collegium',
    'award.2.cat': 'COMPETENCY CERTIFICATE',
    'award.2.desc': 'Competency Certificate from the Pharmacist Profession Competency Examination, issued by the Indonesian Pharmacy Collegium.',

    'award.3.title': 'Safety & K3 Awareness',
    'award.3.issuer': 'PT Micasa Edukasi Indonesia',
    'award.3.cat': 'K3 & OCCUPATIONAL SAFETY',
    'award.3.desc': 'Occupational Health and Safety (K3) training by PT Micasa Edukasi Indonesia, covering hazard identification and risk assessment, K3 inspection, and K3 reporting and documentation.',

    'award.4.title': 'Basic Disaster Response Training',
    'award.4.issuer': 'Pharmacist Profession Study Program, Universitas Tadulako',
    'award.4.cat': 'DISASTER RESPONSE',
    'award.4.desc': 'Basic Disaster Response Training organized by the Pharmacist Profession Study Program, FMIPA Universitas Tadulako, on 22–23 December 2025.',

    // ── Skills Section
    'skills.label': 'CLINICAL & TECHNICAL SKILLS',
    'skills.title': 'Technical Competencies',
    'skills.desc': 'Combining clinical pharmacy services, pharmaceutical supply management, and patient safety in pharmacy practice.',
    'skills.card1.tag': 'CLINICAL PHARMACY & PATIENT CARE',
    'skills.card1.desc': 'Administrative, pharmaceutical, and clinical prescription review, dispensing and compounding, drug information (PIO), patient counseling and education, PTO, MESO, EPO, dose and drug-selection evaluation, self-medication services, UDD distribution, and CPPT documentation.',
    'skills.card2.tag': 'SUPPLY & LOGISTICS MANAGEMENT',
    'skills.card2.desc': 'FEFO-based storage of pharmaceutical supplies, inventory management and stock taking, pharmacy logistics and procurement, and an understanding of sterile and non-sterile production in the pharmaceutical industry.',

    // ── Personal Skills Section
    'personal.label': 'PERSONAL & SOFTWARE SKILLS',
    'personal.title': 'Character & Software Tools',
    'personal.sub': 'Service ethos and digital productivity tools for clinical records, inventory tracking, and patient education visual design.',
    'personal.soft.label': 'SOFT SKILLS',
    'personal.soft.title': 'Personal Traits',
    'personal.hard.label': 'SOFTWARE TOOLS',
    'personal.hard.title': 'Software Competencies',
    'personal.orientation': 'Service Ethos:',
    'personal.quality': 'Patient Safety & Service Excellence',
    'personal.app': 'Productivity Tools:',
    'personal.ready': 'Ms. Word, Excel, PowerPoint',

    'personal.soft.1.t': 'Discipline & Responsibility',
    'personal.soft.1.d': 'High commitment to timely prescription fulfillment and meticulous drug recordkeeping.',
    'personal.soft.2.t': 'Warm, Courteous & Empathetic',
    'personal.soft.2.d': 'Thoughtful and caring communication in patient counseling and health consultations.',
    'personal.soft.3.t': 'Detail-Oriented',
    'personal.soft.3.d': 'Rigorous double-checking in prescription screening, dosage calculation, and medication error prevention.',
    'personal.soft.4.t': 'Communicative',
    'personal.soft.4.d': 'Effective interprofessional coordination with doctors, nurses, and allied healthcare staff.',
    'personal.soft.5.t': 'Teamwork',
    'personal.soft.5.d': 'Used to working together in hospital pharmacy depots and when assisting student practicals.',
    'personal.soft.6.t': 'Adaptive & Fast Learner',
    'personal.soft.6.d': 'Quickly mastering new clinical guidelines, hospital formularies, and pharmacy inventory systems.',

    // ── Contact Section
    'contact.label': 'CONTACT & INQUIRIES',
    'contact.title': 'Get in Touch',
    'contact.tagline': 'Licensed Pharmacist — Ready to Contribute to Patient Safety',
    'contact.subtitle': 'Open to career opportunities in hospitals, community pharmacies, pharmaceutical wholesalers (PBF), and the pharmaceutical industry.',
    'contact.chatNow': 'Contact Now',
    'contact.direct': 'Direct Communication Channels',
    'contact.directSub': 'Reach out via the channels below:',
    'contact.openHours': 'Response Hours:',
    'contact.openVal': 'Monday — Saturday (08:00 — 17:00 WITA)',
    'contact.location': 'LOCATION',
    'contact.phone': 'PHONE / WHATSAPP',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id')

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('site_language') as Language
      if (savedLang === 'id' || savedLang === 'en') {
        setLangState(savedLang)
        return
      }
      const userLang = navigator.language || (navigator as any).userLanguage || ''
      if (userLang.toLowerCase().startsWith('id')) {
        setLangState('id')
      } else {
        setLangState('en')
      }
    } catch {
      setLangState('id')
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('site_language', newLang)
    } catch {}
  }

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations['id']?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
