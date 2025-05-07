import { ReactNode } from 'react'

import { Navbar } from '@/components/navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col">
      <Navbar />
      <div className="w-full pb-8">{children}</div>
    </div>
  )
}
