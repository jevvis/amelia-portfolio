import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'apt. Amelia Putri Bidul, S.Farm | Portfolio Clinical & Hospital Pharmacist',
  description: 'Licensed Pharmacist | Clinical & Hospital Pharmacy | Patient-Centered Care — Universitas Tadulako',
  keywords: ['Amelia Putri Bidul', 'Apoteker', 'Farmasi Klinis', 'Clinical Pharmacist', 'Universitas Tadulako', 'RSUD Undata', 'Patient Safety', 'Kimia Farma', 'Dispensing', 'CPOB', 'CDOB'],
  openGraph: {
    title: 'apt. Amelia Putri Bidul, S.Farm | Portfolio Clinical & Hospital Pharmacist',
    description: 'Licensed Pharmacist | Clinical & Hospital Pharmacy | Patient Safety First',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
