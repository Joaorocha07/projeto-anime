import React from 'react'

import {
  Box,
  Typography
} from '@mui/material'

import Image from 'next/image'
import Form from './components/Form'
import Footer from './components/Footer'
import Logo from '../../../public/images/logo.webp'

export default function Login (): JSX.Element {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '500px',
            minHeight: '100vh',
            padding: { xs: '35px', sm: '8%', md: '70px' }
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              src={Logo}
              style={{ width: '100%', height: '100%', marginBottom: '80px' }}
              alt="logo"
            />

            <Typography
              variant="h1"
              sx={{
                color: '#343434',
                fontSize: '1.5em',
                marginBottom: '30px',
                fontFamily: 'Lexend Deca',
                fontWeight: 800
              }}
            >
              Fazer login
            </Typography>

            <Form />
          </Box>

          <Footer />
        </Box>

        <Box
          sx={{
            width: '100%',
            backgroundImage: 'url("/images/background-wallpaper.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            flex: 1
          }}
        />
      </Box>
    </>
  )
}
