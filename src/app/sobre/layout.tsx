'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '@/app/head'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function SobreLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
      <CustomHead
        title='Vid Drop - Sobre'
        description='
          Sobre | O Vid Drop é uma ferramenta online projetada
          para ajudar usuários a baixarem vídeos e
          áudios do TikTok sem marca d&rsquo;água de
          maneira fácil e rápida.
        '
      />
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
