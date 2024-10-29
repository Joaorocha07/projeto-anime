import React from 'react'

import { Box, TextField } from '@mui/material'

export default function Form (): JSX.Element {
  return (
    <>
      <Box sx={{ display: 'block', mb: 7, width: '100%' }}>
        <TextField
          fullWidth
          type="email"
          label="E-mail"
          variant="outlined"
          sx={{ mb: 4 }}
        />
        <TextField
          fullWidth
          type="passwprd"
          label="Senha"
          variant="outlined"
          sx={{ mb: 4 }}
        />
        <TextField
          fullWidth
          type="password"
          label="Repita sua senha"
          variant="outlined"
          sx={{ mb: 4 }}
        />
        <TextField
          fullWidth
          type="number"
          label="Idade"
          variant="outlined"
        />
      </Box>
    </>
  )
}
