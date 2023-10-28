import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Get Heroes - conheça vários heróis!',
  description: 'Site de informações gerais sobre heróis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
