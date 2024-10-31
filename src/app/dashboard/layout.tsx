'use client'
import React, { useEffect } from 'react'

import { useRouter } from 'next/navigation'
import { type IRootLayout } from '@/types/global'

import Cookies from 'js-cookie'
import CustomHead from '@/app/head'

export default function DashboardLayout ({
  children
}: IRootLayout): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    const jwt = Cookies.get('jwt')

    if (jwt == null) {
      router.push('/login')
    }
  }, [router])
  return (
    <>
      <CustomHead
        title="Dashboard"
        description='Página do dashboard | Aproveite e veja as melhores avaliações!'
      />
      {children}
    </>
  )
}
