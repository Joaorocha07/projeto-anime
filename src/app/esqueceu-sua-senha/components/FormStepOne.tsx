import React from 'react'

import { Box, TextField, FormHelperText } from '@mui/material'

interface FormStepOneProps {
  emailError: boolean
  email: string | undefined
  setEmailError: React.Dispatch<React.SetStateAction<boolean>>
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function FormStepOne ({ email, setEmail, emailError, setEmailError }: FormStepOneProps): JSX.Element {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newEmail = e.target.value
    setEmail(newEmail)

    if (emailRegex.test(newEmail)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
  }

  return (
    <Box sx={{ display: 'block', mb: 7, width: '100%' }}>
      <TextField
        fullWidth
        type="email"
        label="Insira seu E-mail"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
      />
      {emailError && (
        <FormHelperText error>
          Por favor, insira um e-mail válido.
        </FormHelperText>
      )}
    </Box>
  )
}
