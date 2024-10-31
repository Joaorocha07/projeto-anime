'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '@/app/head'

export default function DashboardLayout ({
  children
}: IRootLayout): JSX.Element {
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
