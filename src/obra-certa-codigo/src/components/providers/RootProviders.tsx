'use client'

import { ReactNode } from 'react'

import { ThemeProvider } from 'next-themes'

export const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
