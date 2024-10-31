'use client'
import React from 'react'
import Header from './components/Header'

// import Background from '../../../public/images/background-dashboard.webp'
import { Box } from '@mui/material'

export default function Dashboard (): JSX.Element {
  return (
    <>
      <Box
        sx={{
          // backgroundImage: `url(${Background.src})`,
          backgroundColor: '#141414',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Ajuste conforme necessário
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Header />
      </Box>
    </>
  )
}
