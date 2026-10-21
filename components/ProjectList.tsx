'use client'

import { siteData } from '@/lib/data'

const techColors: Record<string, string> = {
  'Skrining Resep': 'bg-emerald-600',
  'Kesesuaian Dosis': 'bg-indigo-600',
  'BPJS & Non-BPJS': 'bg-teal-600',
  'Unit Daily Dose': 'bg-green-700',
  Dispensing: 'bg-cyan-600',
  'Rawat Inap': 'bg-blue-700',
  'Patient Safety': 'bg-rose-600',
  PIO: 'bg-amber-600',
  'Konseling Pasien': 'bg-purple-600',
  Insulin: 'bg-violet-600',
  Suppositoria: 'bg-fuchsia-600',
  Visite: 'bg-sky-600',
  CPPT: 'bg-emerald-700',
  'Kolaborasi Interprofesional': 'bg-indigo-700',
  PTO: 'bg-emerald-600',
  MESO: 'bg-pink-600',
  EPO: 'bg-amber-700',
  Peracikan: 'bg-teal-700',
  Kapsul: 'bg-cyan-700',
  Puyer: 'bg-blue-600',
  Salep: 'bg-violet-700',
  Sitostatika: 'bg-red-600',
  IBS: 'bg-rose-700',
  'e-Katalog': 'bg-sky-700',
  'Verifikasi PBF': 'bg-amber-700',
  'Faktur & SP': 'bg-orange-600',
  'Prinsip FEFO': 'bg-green-600',
  'Stock Opname': 'bg-orange-700',
  SIPNAP: 'bg-rose-600',
  SIMONA: 'bg-blue-600',
  'Sediaan Steril': 'bg-cyan-600',
  'Sediaan Nonsteril': 'bg-blue-600',
  'QC & QA': 'bg-purple-600',
  'Penjadwalan Produksi': 'bg-amber-600',
  'Verifikasi Pesanan': 'bg-indigo-600',
  'Stock Opname Gudang': 'bg-orange-700',
  'Manajemen Faktur': 'bg-emerald-700',
  Penelitian: 'bg-teal-600',
  Laboratorium: 'bg-cyan-600',
  'Dana Hibah': 'bg-amber-600',
  'Asisten Dosen': 'bg-amber-600',
  Farmakognosi: 'bg-green-700',
  Fitokimia: 'bg-green-600',
  'Bimbingan Mahasiswa': 'bg-purple-600',
}

export default function ProjectList() {
  const projects = siteData.technicalProjects

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">PORTOFOLIO KEFARMASIAN & PENGALAMAN</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Pengalaman Praktik Kefarmasian</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Rincian kegiatan praktik di RSUD Undata Palu, Apotek Kimia Farma Unit Bisnis Palu, PT Prima Medika Laboratory, PBF PT Sehat Mitra Sejati, serta kegiatan akademik di Universitas Tadulako.
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework}
                </p>
                {/* Tech stack badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${techColors[tech] || 'bg-gray-600'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
