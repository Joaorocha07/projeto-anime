import React from 'react'

import { Box, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'

export default function Form (): JSX.Element {
  return (
    <>
      <Box sx={{ display: 'block', mb: 20, width: '100%' }}>
        <TextField
          fullWidth
          type="email"
          label="E-mail"
          variant="outlined"
          sx={{ mb: 4 }}
        />
        <TextField
          fullWidth
          type="email"
          label="Senha"
          variant="outlined"
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                appearance: 'none',
                width: '20px',
                height: '20px',
                backgroundColor: 'var(--light-grey)',
                marginRight: '8px',
                borderRadius: '3px',
                '&:checked': {
                  backgroundColor: 'var(--blue)'
                }
              }}
            />
          }
          label={
            <Typography
              sx={{
                fontFamily: 'Lexend Deca',
                fontWeight: 500,
                fontSize: '16px',
                color: 'var(--text-color)'
              }}
            >
              Lembrar meus dados
            </Typography>
          }
          sx={{ mt: 2, ml: 0, fontFamily: 'Lexend Deca', fontWeight: 400 }}
        />
      </Box>
    </>
  )
}
