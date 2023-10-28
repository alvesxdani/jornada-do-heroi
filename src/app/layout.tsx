"use client";
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { useDataStore } from './store/useDataStore'
import { useEffect } from 'react'
import Header from './components/Header'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { heroes, powerType, isLoading, error, fetchData, togglePower } = useDataStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) return <div>Ocorreu um erro</div>;
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
