'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '@/app/head'
import LoginProvider from '@/context/LoginContext/LoginContext'

export default function LoginLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
        <CustomHead
          title="Login"
          description='Página de login | Crie sua conta!'
        />
        <LoginProvider>{children}</LoginProvider>
    </>
  )
}
