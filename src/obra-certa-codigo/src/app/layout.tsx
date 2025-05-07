import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'
import { RootProviders } from '@/components/providers/RootProviders'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kanit',
  display: 'swap',
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
      <body className={`${kanit.variable}  antialiased`}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  )
}
