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
    'about.bio1': 'Lulusan Profesi Apoteker (IPK 3.96/4.00) dan Sarjana Farmasi (IPK 3.67/4.00) dari Universitas Tadulako dengan predikat kelulusan sangat memuaskan. Memiliki pengalaman komprehensif dalam pelayanan farmasi klinis rumah sakit (RSUD Undata), apotek komunitas (Kimia Farma Unit Bisnis Palu), industri farmasi (PT Prima Medika Laboratory), distribusi PBF (PT Sehat Mitra Sejati), serta asisten dosen praktikum fitokimia & farmakognosi. Berdedikasi tinggi terhadap patient safety, ketepatan terapi, dan standar praktik kefarmasian profesional.',
    'about.cv.prompt': 'Ingin tahu lebih lanjut?',
    'about.cv.link': 'Download CV saya',
    'about.current.label': 'FOKUS SAAT INI',
    'about.current.1.title': 'Farmasi Klinis RS',
    'about.current.1.sub': 'Skrining Resep & Dispensing UDD',
    'about.current.2.title': 'Patient Safety',
    'about.current.2.sub': 'Visite Bangsal, CPPT & Konseling',
    'about.current.3.title': 'Logistik & Regulasi',
    'about.current.3.sub': 'CPOB, CDOB, SIPNAP & SIMONA',

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
    'trait.4.desc': 'Berpengalaman lintas bidang kefarmasian: bangsal rumah sakit, apotek komunitas, lini produksi industri CPOB, hingga gudang logistik PBF.',

    // ── Quote
    'about.quote': '“Mengutamakan keselamatan pasien, ketepatan terapi, dan pelayanan kefarmasian yang berintegritas.”',

    // ── Metrics
    'metric.ipk': 'IPK PROFESI',
    'metric.ipk.sub': 'Universitas Tadulako (3.96 / 4.00)',
    'metric.medal': 'IPK SARJANA',
    'metric.medal.sub': 'Sarjana Farmasi UNTAD (3.67 / 4.00)',
    'metric.org': 'ROTASI PRAKTIK',
    'metric.org.sub': 'RSUD Undata, Kimia Farma, Prima Medika, PBF SMS',
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
    'education.1.desc': 'Program Studi Profesi Apoteker (PSPPA) dengan rotasi komprehensif di rumah sakit (RSUD Undata Palu), apotek komunitas (Kimia Farma Unit Bisnis Palu), industri farmasi (PT Prima Medika Laboratory Tangerang), dan Pedagang Besar Farmasi (PT Sehat Mitra Sejati Palu). Menyelesaikan pendidikan profesi dengan IPK 3.96/4.00.',
    'education.1.tag': 'Pendidikan Profesi',
    'education.1.caption': 'Pelantikan & Sumpah Apoteker PSPPA Universitas Tadulako',
    'education.1.h1': 'Skrining ~25 resep per shift, dispensing Unit Daily Dose (UDD), visite bangsal, dan dokumentasi CPPT di RSUD Undata',
    'education.1.h2': 'Observasi handling sitostatika kemoterapi steril di Cleanroom BSC dan pelayanan farmasi Instalasi Bedah Sentral',
    'education.1.h3': 'Penerimaan perbekalan farmasi dari PBF (FEFO), stock opname fisik, serta pelaporan SIPNAP & SIMONA di Kimia Farma',
    'education.1.h4': 'Pemahaman alur produksi sediaan steril/nonsteril CPOB di PT Prima Medika dan inspeksi CDOB di PBF SMS',

    'education.2.institution': 'Universitas Tadulako',
    'education.2.program': 'Sarjana Farmasi',
    'education.2.degree': 'Sarjana Farmasi (S.Farm.)',
    'education.2.period': '2021 — 2025',
    'education.2.gpa': '3.67 / 4.00',
    'education.2.status': 'Lulus (3.5 Tahun)',
    'education.2.desc': 'Menempuh studi sarjana farmasi selama 3.5 tahun dengan fokus pada farmakologi, teknologi formulasi bahan alam, fitokimia, dan kimia farmasi. Aktif sebagai Asisten Dosen Praktikum Fitokimia & Farmakognosi serta menyelesaikan skripsi penelitian eksperimental laboratorium dengan predikat Sangat Memuaskan.',
    'education.2.tag': 'Pendidikan Sarjana',
    'education.2.caption': 'Wisuda Sarjana Farmasi Universitas Tadulako',
    'education.2.h1': 'Asisten Dosen Praktikum Fitokimia & Farmakognosi selama 2 tahun membimbing mahasiswa dan evaluasi laporan',
    'education.2.h2': 'Riset skripsi eksperimental dalam ekstraksi, fraksinasi, dan identifikasi fitokimia senyawa bahan alam',
    'education.2.h3': 'Penguasaan instrumen laboratorium, KLT, spektrofotometri, dan standar kepatuhan K3 keselamatan kerja lab',
    'education.2.h4': 'Menyelesaikan kurikulum sarjana farmasi tepat waktu dalam 3.5 tahun dengan IPK 3.67/4.00',

    // ── Work Section
    'work.label': 'PENGALAMAN PRAKTIK & ROTASI',
    'work.title': 'Pengalaman Praktik Kerja Profesi',
    'work.subtitle': 'Rotasi komprehensif di instalasi farmasi rumah sakit, apotek ritel, industri manufaktur CPOB, distribusi CDOB, dan asistensi akademik.',
    'work.cta': 'Lihat Semua Pengalaman',

    'work.1.role': 'Clinical Pharmacy Intern',
    'work.1.inst': 'RSUD UNDATA PALU',
    'work.1.loc': 'Palu, Sulawesi Tengah',
    'work.1.period': 'April — Juni 2026',
    'work.1.sub': 'Pelayanan Farmasi Klinis, Rawat Inap & Handling Sitostatika',
    'work.1.desc': 'Melaksanakan skrining administratif, farmasetik, dan klinis terhadap sekitar 25 resep per shift pasien BPJS & non-BPJS. Menyiapkan dan mendistribusikan obat dengan sistem Unit Daily Dose (UDD), mengikuti visite dokter spesialis, mengisi catatan CPPT, memberikan konseling obat khusus (insulin pen & suppositoria), peracikan obat pulveres/kapsul, serta mengamati peracikan sitostatika kemoterapi steril di Cleanroom BSC.',

    'work.2.role': 'Community Pharmacy Intern',
    'work.2.inst': 'APOTEK KIMIA FARMA UNIT BISNIS PALU',
    'work.2.loc': 'Palu, Sulawesi Tengah',
    'work.2.period': 'Oktober — November 2025',
    'work.2.sub': 'Pelayanan Farmasi Komunitas & Manajemen FEFO',
    'work.2.desc': 'Melayani skrining dan dispensing sekitar 15 resep dokter per hari, melayani swamedikasi masyarakat, serta memeriksa kesesuaian penerimaan sediaan farmasi dari PBF hingga 4 kali sehari. Menata penyimpanan berdasarkan FEFO, alfabetis, bentuk sediaan, dan suhu dingin, melakukan stock opname fisik mingguan/bulanan, serta menyusun pelaporan SIPNAP & SIMONA.',

    'work.3.role': 'Industrial Pharmacy Intern — Production',
    'work.3.inst': 'PT. PRIMA MEDIKA LABORATORY',
    'work.3.loc': 'Tangerang, Banten',
    'work.3.period': 'Januari — Maret 2026',
    'work.3.sub': 'Produksi Sediaan Steril/Nonsteril, CPOB & QA/QC',
    'work.3.desc': 'Mempelajari alur produksi sediaan farmasi steril dan nonsteril berstandar CPOB, sistem penunjang kritis industri (HVAC, purified water system, compressed air, boiler), pengujian mutu Quality Control (QC), sistem penjaminan mutu Quality Assurance (QA), penelaahan batch record, serta membantu penyusunan jadwal produksi berdasarkan otorisasi batch QA.',

    'work.4.role': 'Pharmaceutical Distribution Intern',
    'work.4.inst': 'PBF PT. SEHAT MITRA SEJATI',
    'work.4.loc': 'Palu, Sulawesi Tengah',
    'work.4.period': 'Oktober 2026',
    'work.4.sub': 'Distribusi Farmasi, Kepatuhan CDOB & Logistik Gudang',
    'work.4.desc': 'Memverifikasi keabsahan Surat Pesanan (SP) dan faktur obat serta alat kesehatan. Melakukan verifikasi penerimaan barang dari industri prinsipal berdasarkan 4 aspek CDOB (nama produk, jumlah, nomor batch, tanggal kedaluwarsa). Terlibat aktif dalam stock opname fisik gudang dan memastikan tata letak penyimpanan sesuai stabilitas produk.',

    'work.5.role': 'Asisten Dosen Praktikum Fitokimia & Farmakognosi',
    'work.5.inst': 'JURUSAN FARMASI UNIVERSITAS TADULAKO',
    'work.5.loc': 'Palu, Sulawesi Tengah',
    'work.5.period': '2023 — 2025',
    'work.5.sub': 'Instruksi Praktikum Laboratorium & Bimbingan Akademik',
    'work.5.desc': 'Mendampingi dosen dan menginstruksikan mahasiswa reguler dalam pelaksanaan praktikum Fitokimia dan Farmakognosi. Membimbing teknik ekstraksi maserasi, perkolasi, sokhletasi, fraksinasi, dan identifikasi kromatografi lapis tipis (KLT). Mengawasi kepatuhan K3 keselamatan kerja serta memimpin responsi dan evaluasi laporan praktikum.',

    // ── Organizations / Research Section
    'trainings.label': 'RISET & ASISTENSI AKADEMIK',
    'trainings.title': 'Penelitian Skripsi & Asistensi Lab',
    'trainings.campus': 'UNIVERSITAS TADULAKO',

    'org.1.role': 'Peneliti Skripsi S1 Farmasi Bahan Alam',
    'org.1.inst': 'Laboratorium Farmasi Bahan Alam — Universitas Tadulako',
    'org.1.period': '2024 — 2025',
    'org.1.loc': 'Palu, Sulawesi Tengah',
    'org.1.desc': 'Melaksanakan riset eksperimental komprehensif dalam preparasi simplisia, ekstraksi senyawa bioaktif, fraksinasi, uji fitokimia, dan analisis laboratorium untuk tugas akhir sarjana farmasi yang diselesaikan dengan predikat Sangat Memuaskan.',

    'org.2.role': 'Asisten Dosen Praktikum Fitokimia & Farmakognosi',
    'org.2.inst': 'Jurusan Farmasi — Universitas Tadulako',
    'org.2.period': '2023 — 2025',
    'org.2.loc': 'Palu, Sulawesi Tengah',
    'org.2.desc': 'Menjadi asisten laboratorium resmi selama dua tahun akademik, membimbing ratusan mahasiswa farmasi dalam prosedur keselamatan kerja K3, preparasi reagen kimia, pengujian mikroskopis simplisia, serta pelaksanaan ujian responsi akhir praktikum.',

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
    'award.1.desc': 'Surat Tanda Registrasi resmi sebagai tenaga kesehatan Apoteker yang berwenang dan tersertifikasi menjalankan praktik kefarmasian di seluruh fasilitas pelayanan kesehatan Republik Indonesia.',

    'award.2.title': 'Sertifikat Kompetensi Uji Kompetensi Profesi Apoteker',
    'award.2.issuer': 'Kolegium Farmasi Indonesia',
    'award.2.cat': 'SERTIFIKASI KOMPETENSI',
    'award.2.desc': 'Sertifikat pengakuan kompetensi nasional profesi apoteker dari Kolegium Farmasi Indonesia yang mencakup pelayanan farmasi klinis, dispensing, farmasi komunitas, dan penjaminan mutu sediaan.',

    'award.3.title': 'Safety & K3 Awareness',
    'award.3.issuer': 'PT Micasa Edukasi Indonesia',
    'award.3.cat': 'SERTIFIKASI K3 & KESELAMATAN',
    'award.3.desc': 'Pelatihan dan sertifikasi penerapan standar Keselamatan dan Kesehatan Kerja (K3) industri, biosafety laboratorium, dan mitigasi kecelakaan kerja kefarmasian.',

    'award.4.title': 'Pelatihan Dasar Tanggap Bencana',
    'award.4.issuer': 'Program Studi Pendidikan Profesi Apoteker, Universitas Tadulako',
    'award.4.cat': 'PELATIHAN TANGGAP BENCANA',
    'award.4.desc': 'Pelatihan manajemen logistik darurat obat, penanganan medis lapangan, dan pelayanan kefarmasian tanggap bencana pasca-gempa dan kedaruratan yang diselenggarakan oleh PSPPA Universitas Tadulako.',

    // ── Skills Section
    'skills.label': 'KOMPETENSI KLINIS & TEKNIS',
    'skills.title': 'Kemampuan Teknis',
    'skills.desc': 'Menggabungkan keahlian farmasi klinis rumah sakit, pelayanan perapotekan komunitas, standar industri CPOB, dan distribusi CDOB untuk keselamatan pasien.',
    'skills.card1.tag': 'FARMASI KLINIS & PELAYANAN PASIEN',
    'skills.card1.desc': 'Melaksanakan skrining resep administratif/klinis, dispensing sistem Unit Daily Dose (UDD), visite bangsal rawat inap bersama dokter spesialis, dokumentasi CPPT, konseling obat khusus (insulin/suppositoria), PIO, peracikan, dan penelaahan handling sitostatika steril.',
    'skills.card2.tag': 'INDUSTRI, DISTRIBUSI & REGULASI',
    'skills.card2.desc': 'Memahami implementasi pedoman CPOB lini produksi steril/nonsteril, In-Process Control (IPC), Quality Assurance batch record, prinsip FEFO, manajemen cold chain gudang PBF berstandar CDOB, serta pelaporan regulasi Kemenkes SIPNAP & SIMONA.',

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
    'personal.soft.3.t': 'Teliti & Zero Defect',
    'personal.soft.3.d': 'Pemeriksaan berulang (double check) pada skrining resep, dosis obat, dan potensi medication error.',
    'personal.soft.4.t': 'Komunikatif & Kolaboratif',
    'personal.soft.4.d': 'Mampu berkoordinasi efektif dengan dokter, perawat, dan rekan sejawat dalam tim interprofesional.',
    'personal.soft.5.t': 'Kerja Tim & Kepemimpinan',
    'personal.soft.5.d': 'Pengalaman memimpin praktikum mahasiswa dan bekerja sinergis dalam depo farmasi rumah sakit.',
    'personal.soft.6.t': 'Adaptif & Cepat Belajar',
    'personal.soft.6.d': 'Cepat menguasai pedoman terapi baru, formularium rumah sakit, serta sistem inventori farmasi.',

    // ── Contact Section
    'contact.label': 'KONTAK & KONSULTASI',
    'contact.title': 'Hubungi Saya',
    'contact.tagline': 'Apoteker Berlisensi — Siap Berkontribusi untuk Keselamatan Pasien',
    'contact.subtitle': 'Terbuka untuk peluang karir di bidang farmasi klinis rumah sakit, apotek, regulasi kefarmasian, dan industri farmasi.',
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
    'about.bio1': 'Licensed Pharmacist graduate (GPA 3.96/4.00) and Bachelor of Pharmacy (GPA 3.67/4.00) from Universitas Tadulako. Possesses comprehensive practice experience in hospital clinical pharmacy (RSUD Undata Palu), community pharmacy (Kimia Farma Palu), pharmaceutical industry (PT Prima Medika Laboratory Tangerang), pharmaceutical distribution (PT Sehat Mitra Sejati), and laboratory teaching assistant in phytochemistry & pharmacognosy. Highly committed to patient safety, therapeutic accuracy, and professional pharmacy practice standards.',
    'about.cv.prompt': 'Want to learn more?',
    'about.cv.link': 'Download my CV',
    'about.current.label': 'CURRENT FOCUS',
    'about.current.1.title': 'Hospital Pharmacy',
    'about.current.1.sub': 'Prescription Screening & UDD',
    'about.current.2.title': 'Patient Safety',
    'about.current.2.sub': 'Ward Rounds, CPPT & Counseling',
    'about.current.3.title': 'Logistics & Compliance',
    'about.current.3.sub': 'GMP, GDP, SIPNAP & SIMONA',

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
    'trait.4.desc': 'Experienced across diverse pharmacy sectors: hospital wards, community retail pharmacies, GMP manufacturing lines, and GDP distribution hubs.',

    // ── Quote
    'about.quote': '“Prioritizing patient safety, therapeutic precision, and pharmacy services with uncompromising integrity.”',

    // ── Metrics
    'metric.ipk': 'PROFESSION GPA',
    'metric.ipk.sub': 'Universitas Tadulako (3.96 / 4.00)',
    'metric.medal': 'BACHELOR GPA',
    'metric.medal.sub': 'B.Pharm UNTAD (3.67 / 4.00)',
    'metric.org': 'CLINICAL ROTATIONS',
    'metric.org.sub': 'RSUD Undata, Kimia Farma, Prima Medika, PBF SMS',
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
    'education.1.desc': 'Comprehensive Pharmacist Professional Program with intensive rotations at general hospital (RSUD Undata Palu), community pharmacy (Kimia Farma Palu), pharmaceutical manufacturing (PT Prima Medika Laboratory Tangerang), and pharmaceutical wholesaler (PT Sehat Mitra Sejati Palu). Graduated with a 3.96/4.00 GPA.',
    'education.1.tag': 'Professional Education',
    'education.1.caption': 'Pharmacist Oath & Graduation Ceremony, PSPPA Universitas Tadulako',
    'education.1.h1': 'Screening ~25 prescriptions/shift, Unit Daily Dose (UDD) dispensing, ward rounds, and CPPT documentation at RSUD Undata',
    'education.1.h2': 'Observed sterile cytostatic chemotherapy compounding in Cleanroom BSC and surgery theater pharmacy services',
    'education.1.h3': 'Wholesaler drug receiving (FEFO), physical stock taking, and regulatory reporting via SIPNAP & SIMONA at Kimia Farma',
    'education.1.h4': 'Sterile/non-sterile GMP manufacturing workflows at PT Prima Medika and GDP warehouse distribution at PBF SMS',

    'education.2.institution': 'Universitas Tadulako',
    'education.2.program': 'Bachelor of Pharmacy',
    'education.2.degree': 'Bachelor of Pharmacy (S.Farm.)',
    'education.2.period': '2021 — 2025',
    'education.2.gpa': '3.67 / 4.00',
    'education.2.status': 'Graduated (3.5 Years)',
    'education.2.desc': 'Completed undergraduate pharmacy studies in 3.5 years focusing on pharmacology, natural product formulation technology, phytochemistry, and pharmaceutical chemistry. Served as Laboratory Teaching Assistant for Phytochemistry & Pharmacognosy, completing experimental thesis research with honors.',
    'education.2.tag': 'Undergraduate Degree',
    'education.2.caption': 'Bachelor of Pharmacy Graduation, Universitas Tadulako',
    'education.2.h1': 'Teaching Assistant for Phytochemistry & Pharmacognosy Laboratory for 2 years, mentoring students and grading reports',
    'education.2.h2': 'Experimental thesis research in extraction, fractionation, and phytochemical identification of natural bioactive compounds',
    'education.2.h3': 'Proficiency in laboratory instrumentation, TLC, spectrophotometry, and occupational lab safety standards (K3)',
    'education.2.h4': 'Completed Bachelor of Pharmacy curriculum in 3.5 years with a cumulative GPA of 3.67/4.00',

    // ── Work Section
    'work.label': 'WORK & CLINICAL ROTATIONS',
    'work.title': 'Internship & Clinical Experience',
    'work.subtitle': 'Comprehensive clinical and professional rotations across hospital wards, retail community pharmacy, GMP manufacturing, GDP logistics, and academic instruction.',
    'work.cta': 'View All Experiences',

    'work.1.role': 'Clinical Pharmacy Intern',
    'work.1.inst': 'RSUD UNDATA PALU',
    'work.1.loc': 'Palu, Central Sulawesi',
    'work.1.period': 'April — June 2026',
    'work.1.sub': 'Clinical Pharmacy Services, Inpatient Care & Cytostatic Handling',
    'work.1.desc': 'Conducted administrative, pharmaceutical, and clinical screening for ~25 prescriptions per shift across BPJS and non-BPJS patients. Dispensed medication using Unit Daily Dose (UDD), participated in specialist doctor ward rounds, recorded clinical interventions in CPPT, provided specialized patient counseling (insulin pen & suppositories), compounded powders/capsules, and observed sterile cytostatics handling in BSC cleanrooms.',

    'work.2.role': 'Community Pharmacy Intern',
    'work.2.inst': 'KIMIA FARMA PALU PHARMACY',
    'work.2.loc': 'Palu, Central Sulawesi',
    'work.2.period': 'October — November 2025',
    'work.2.sub': 'Community Pharmacy Services & FEFO Management',
    'work.2.desc': 'Screened and dispensed ~15 prescriptions daily, provided self-medication guidance to community patients, and verified incoming drug shipments from wholesalers up to 4 times daily. Organized drug storage strictly adhering to FEFO, alphabetical, dosage form, and temperature requirements, conducted physical stocktaking, and managed monthly SIPNAP & SIMONA reporting.',

    'work.3.role': 'Industrial Pharmacy Intern — Production',
    'work.3.inst': 'PT. PRIMA MEDIKA LABORATORY',
    'work.3.loc': 'Tangerang, Banten',
    'work.3.period': 'January — March 2026',
    'work.3.sub': 'Sterile & Non-Sterile Production, GMP Compliance & QA/QC',
    'work.3.desc': 'Studied manufacturing workflows for sterile and non-sterile pharmaceutical dosage forms under GMP/CPOB standards, critical plant utilities (HVAC, purified water, compressed air, boilers), Quality Control (QC) assays, Quality Assurance (QA) release workflows, batch record reviews, and production scheduling assistance.',

    'work.4.role': 'Pharmaceutical Distribution Intern',
    'work.4.inst': 'PBF PT. SEHAT MITRA SEJATI',
    'work.4.loc': 'Palu, Central Sulawesi',
    'work.4.period': 'October 2026',
    'work.4.sub': 'Pharmaceutical Wholesaler, GDP Compliance & Warehouse Logistics',
    'work.4.desc': 'Verified purchase orders (SP) and sales invoices for pharmaceuticals and medical devices. Inspected incoming goods from manufacturing principals based on 4 GDP aspects (drug identity, quantity, batch number, expiry date). Actively conducted physical warehouse stocktakes and maintained climate-controlled storage conditions.',

    'work.5.role': 'Teaching Assistant for Phytochemistry & Pharmacognosy',
    'work.5.inst': 'DEPARTMENT OF PHARMACY — UNIVERSITAS TADULAKO',
    'work.5.loc': 'Palu, Central Sulawesi',
    'work.5.period': '2023 — 2025',
    'work.5.sub': 'Laboratory Instruction & Academic Mentorship',
    'work.5.desc': 'Instructed regular undergraduate students in Phytochemistry and Pharmacognosy laboratory practicals. Guided natural extraction methods (maceration, percolation, soxhletation), fractionation, and thin-layer chromatography (TLC). Enforced laboratory occupational safety (K3) and evaluated student practical reports.',

    // ── Organizations / Research Section
    'trainings.label': 'ACADEMIC RESEARCH & TEACHING',
    'trainings.title': 'Thesis Research & Lab Assistantship',
    'trainings.campus': 'UNIVERSITAS TADULAKO',

    'org.1.role': 'Undergraduate Thesis Researcher in Natural Products',
    'org.1.inst': 'Natural Product Pharmacy Laboratory — Universitas Tadulako',
    'org.1.period': '2024 — 2025',
    'org.1.loc': 'Palu, Central Sulawesi',
    'org.1.desc': 'Conducted experimental laboratory research covering botanical simplisia preparation, natural bioactive extraction, fractionation, phytochemical profiling, and pharmacological assays, completing the thesis defense with honors.',

    'org.2.role': 'Teaching Assistant for Phytochemistry & Pharmacognosy',
    'org.2.inst': 'Department of Pharmacy — Universitas Tadulako',
    'org.2.period': '2023 — 2025',
    'org.2.loc': 'Palu, Central Sulawesi',
    'org.2.desc': 'Served as official laboratory assistant for two academic years, training hundreds of pharmacy students in K3 safety guidelines, chemical reagent preparation, microscopic herbal inspection, and practical oral examinations.',

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
    'award.1.desc': 'Official professional registration license authorizing legal clinical pharmacy practice across all healthcare facilities in the Republic of Indonesia.',

    'award.2.title': 'Pharmacist Competency Certificate',
    'award.2.issuer': 'Indonesian Pharmacy Collegium',
    'award.2.cat': 'COMPETENCY CERTIFICATE',
    'award.2.desc': 'National competency credential certifying professional mastery in hospital clinical pharmacy, dispensing, community pharmacy, and pharmaceutical quality assurance.',

    'award.3.title': 'Safety & K3 Awareness',
    'award.3.issuer': 'PT Micasa Edukasi Indonesia',
    'award.3.cat': 'K3 & OCCUPATIONAL SAFETY',
    'award.3.desc': 'Professional certification in industrial and laboratory Occupational Health and Safety (K3), biosafety cabinets, and workplace hazard mitigation.',

    'award.4.title': 'Basic Pharmaceutical Disaster Response Training',
    'award.4.issuer': 'Pharmacist Profession Study Program, Universitas Tadulako',
    'award.4.cat': 'DISASTER RESPONSE',
    'award.4.desc': 'Certified training in emergency medical supply logistics, field triage pharmacy services, and rapid disaster healthcare response.',

    // ── Skills Section
    'skills.label': 'CLINICAL & TECHNICAL SKILLS',
    'skills.title': 'Technical Competencies',
    'skills.desc': 'Combining hospital clinical pharmacy expertise, community retail dispensing, industrial GMP protocols, and GDP distribution standards for patient safety.',
    'skills.card1.tag': 'CLINICAL PHARMACY & PATIENT CARE',
    'skills.card1.desc': 'Prescription screening, Unit Daily Dose (UDD) dispensing, multidisciplinary ward rounds, CPPT clinical notes, specialized medication counseling (insulin & suppositories), PIO, pharmaceutical compounding, and sterile cytostatic handling inspection.',
    'skills.card2.tag': 'INDUSTRY, DISTRIBUTION & REGULATION',
    'skills.card2.desc': 'GMP / CPOB manufacturing protocols, In-Process Control (IPC), Quality Assurance batch records, FEFO inventory, cold-chain warehouse GDP adherence, and MoH regulatory compliance via SIPNAP & SIMONA.',

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
    'personal.soft.3.t': 'Detail-Oriented & Zero Defect',
    'personal.soft.3.d': 'Rigorous double-checking in prescription screening, dosage calculation, and medication error prevention.',
    'personal.soft.4.t': 'Communicative & Collaborative',
    'personal.soft.4.d': 'Effective interprofessional coordination with doctors, nurses, and allied healthcare staff.',
    'personal.soft.5.t': 'Teamwork & Leadership',
    'personal.soft.5.d': 'Proven track record in mentoring students and thriving in collaborative pharmacy environments.',
    'personal.soft.6.t': 'Adaptive & Fast Learner',
    'personal.soft.6.d': 'Quickly mastering new clinical guidelines, hospital formularies, and pharmacy inventory systems.',

    // ── Contact Section
    'contact.label': 'CONTACT & INQUIRIES',
    'contact.title': 'Get in Touch',
    'contact.tagline': 'Licensed Pharmacist — Ready to Contribute to Patient Safety',
    'contact.subtitle': 'Open to professional career opportunities in hospital clinical pharmacy, community pharmacy, regulation, and pharmaceutical manufacturing.',
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
