'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '@/app/head'

export default function LoginLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
        <CustomHead
          title="Login"
          description='Página de login | Crie sua conta!'
        />
        {children}
    </>
  )
}
