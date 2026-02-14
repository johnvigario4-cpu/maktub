import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Poppins } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'MAKTUB - Nosso Amor Estava Escrito',
  description: 'A romantic celebration of John and Renata\'s love story, from friendship to forever.',
  generator: 'v0.app',
  keywords: ['love', 'romance', 'story', 'maktub', 'destiny'],
  openGraph: {
    title: 'MAKTUB - Nosso Amor Estava Escrito',
    description: 'A romantic celebration of John and Renata\'s love story',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  )
}
