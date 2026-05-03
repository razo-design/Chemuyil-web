import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chemuyil Residencial · Lotes de Inversión en Tulum',
  description:
    'Invierte en el corazón de Tulum. Lotes desde 575 m² dentro de una ciudad sustentable donde naturaleza, plusvalía y estilo de vida premium convergen. Tulum, Quintana Roo, México.',
  keywords:
    'Tulum, lotes Tulum, inversión inmobiliaria Tulum, Quintana Roo, ciudad sustentable, Chemuyil, lotes de inversión, Riviera Maya, bienes raíces Tulum',
  openGraph: {
    title: 'Chemuyil Residencial · Lotes de Inversión en Tulum',
    description:
      'Invierte en el corazón de Tulum. Lotes desde 575 m² dentro de una ciudad sustentable en la Riviera Maya.',
    type: 'website',
    locale: 'es_MX',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#1C3829',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
