'use client'
import React, { useRef } from 'react'

import { Box, TextField, Typography } from '@mui/material'

export default function FormStepTwo (): JSX.Element {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  const handleChange = (event: any, index: number): void => {
    const { value } = event.target

    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    if (value.length > 1) {
      event.target.value = value[0]
    }
  }
  return (
    <>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 7 }}>
            {[...Array(6)].map((_, index) => (
                <TextField
                    key={index}
                    type="text"
                    variant="outlined"
                    inputRef={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => { handleChange(e, index) }}
                    inputProps={{
                      maxLength: 1, // Limita a 1 caractere por campo
                      style: { textAlign: 'center' }
                    }}
                    sx={{
                      width: '45px', // Ajuste a largura conforme necessário
                      height: '45px',
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px'
                      }
                    }}
                />
            ))}
        </Box>
        <Typography
            variant="h6"
            sx={{
              color: '#343434',
              fontSize: '1rem',
              marginBottom: '30px',
              fontFamily: 'Lexend Deca',
              fontWeight: 400,
              textAlign: 'center',
              mt: -4
            }}
        >
            Enviamos um codigo para o seu e-mail
        </Typography>
    </>
  )
}
