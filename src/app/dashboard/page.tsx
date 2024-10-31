'use client'
import React from 'react'

// import Background from '../../../public/images/background-dashboard.webp'
import { Box } from '@mui/material'

import Header from './components/Header'
import Banner from './components/Banner'
import Catalogo from './components/Catalogo'

export default function Dashboard (): JSX.Element {
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
        <Catalogo />
      </Box>
    </>
  )
}
