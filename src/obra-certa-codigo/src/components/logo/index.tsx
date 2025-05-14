import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return (
    <a href="/dashboard" className="flex items-center justify-center">
      <Image
        src="/obracerta_v2_1.svg"
        alt="Logo"
        width={100}
        height={100}
        className="-ml-4  object-contain object-center"
        priority
        quality={100}
      />
    </a>
  )
}
