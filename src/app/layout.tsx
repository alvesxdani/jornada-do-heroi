'use client'
import { Open_Sans } from 'next/font/google'
import Header from '../components/Header'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
