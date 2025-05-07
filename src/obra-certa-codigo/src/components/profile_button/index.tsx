'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { User } from 'lucide-react'

import { Button } from '../ui/button'

export const ProfileButton = () => {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => router.push('/perfil')}
    >
      <User className="w-5 h-5" />
    </Button>
  )
}
