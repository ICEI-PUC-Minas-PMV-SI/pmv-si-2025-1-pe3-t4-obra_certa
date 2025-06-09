import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return (
    <a href="/dashboard" className="flex items-center justify-center">
      <Image
        src="/obracerta_v3_1.svg"
        alt="Logo"
        width={70}
        height={70}
        className="-ml-4 object-contain object-center"
        priority
        quality={100}
      />
    </a>
  )
}
