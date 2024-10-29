'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '@/app/head'

export default function CadstroLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
        <CustomHead
          title="Login"
          description='Página de esqueceu seus dados | Recupere sua conta!'
        />
        {children}
    </>
  )
}
