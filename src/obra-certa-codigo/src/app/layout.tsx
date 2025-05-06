import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { RootProviders } from '@/components/providers/RootProviders'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Obra Certa - Admin',
  description: 'Obra Certa, Gestão de Equipamentos e Máquinas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className="light"
      style={{
        colorScheme: 'light',
      }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  )
}
