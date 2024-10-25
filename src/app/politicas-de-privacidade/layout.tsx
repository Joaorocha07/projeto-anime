'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '@/app/head'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function PoliticasDePrivacidadeLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
      <CustomHead
        title='Vid Drop - Políticas de Privacidade'
        description='
          Políticas de Privacidade | Esta Política de Privacidade descreve como suas informações
          pessoais são coletadas, usadas e compartilhadas quando você
          visita ou faz uma compra no Vid Drop.
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