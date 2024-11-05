'use client'
import React from 'react'

import { Box, useMediaQuery } from '@mui/material'
import { animeData, images } from '@/variaveis/catalogo'

import Header from './components/Header'
import Banner from './components/Banner'
import Catalogo from './components/Catalogo'
import CatalogoMobile from './components/CatalogoMobile'

export default function Dashboard (): JSX.Element {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#141414',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Header />
        <Banner />
        {isMobile ? (
          <>
            <CatalogoMobile titulo="Minha lista" images={images} />
            <CatalogoMobile titulo="Os mais avaliados" images={images} />
          </>
        ) : (
          <>
            <Catalogo titulo="Minha lista" animeData={animeData} />
            <Catalogo titulo="Os mais avaliados" animeData={animeData} />
          </>
        )}
      </Box>
    </>
  )
}
