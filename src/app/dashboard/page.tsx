'use client'
import React from 'react'

// import Background from '../../../public/images/background-dashboard.webp'
import { Box, useMediaQuery } from '@mui/material'

import Header from './components/Header'
import Banner from './components/Banner'
import Catalogo from './components/Catalogo'
import CatalogoMobile from './components/CatalogoMobile'
import { images } from '@/variaveis/catalogo'

export default function Dashboard (): JSX.Element {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <>
      <Box
        sx={{
          // backgroundImage: `url(${Background.src})`,
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
            <Catalogo titulo="Minha lista" images={images} />
            <Catalogo titulo="Os mais avaliados" images={images} />
          </>
        )}
      </Box>
    </>
  )
}
