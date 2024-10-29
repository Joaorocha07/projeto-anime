'use client'
import React, { useState } from 'react'

import {
  Box,
  Typography
} from '@mui/material'

import Image from 'next/image'
import Footer from './components/Footer'
import FormStepOne from './components/FormStepOne'
import FormStepTwo from './components/FormSetpTwo'
import Logo from '../../../public/images/logo.webp'

export default function Cadastro (): JSX.Element {
  const [currentStep, setCurrentStep] = useState(1)

  const [email, setEmail] = useState<string | undefined>('')
  const [emailError, setEmailError] = useState<boolean>(false)

  const handleNextStep = (): void => {
    if (validateEmail(email)) {
      setCurrentStep(prevStep => prevStep + 1)
      setEmailError(false)
    } else {
      setEmailError(true)
    }
  }

  const validateEmail = (email: string | undefined): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email ?? '')
  }

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
              Recupere sua conta
            </Typography>

            {currentStep === 1 &&
              <FormStepOne
                email={email}
                setEmail={setEmail}
                emailError={emailError}
                setEmailError={setEmailError}
              />
            }
            {currentStep === 2 &&
              <FormStepTwo />
            }
          </Box>

          <Footer onNextStep={handleNextStep} />
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
