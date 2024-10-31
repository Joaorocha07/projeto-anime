import React from 'react'
import { Box, Link } from '@mui/material'

export default function Footer (): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Link
        href="/esqueceu-sua-senha"
        sx={{
          fontSize: '0.8em',
          textDecoration: 'none',
          color: 'var(--medium-grey)',
          textTransform: 'uppercase',
          marginBottom: '5px',
          fontWeight: 700,
          '&:hover': {
            color: 'var(--deep-grey)'
          }
        }}
      >
        esqueceu sua senha?
      </Link>

      <Link
        href="/cadastro"
        sx={{
          fontSize: '0.8em',
          textDecoration: 'none',
          color: 'var(--medium-grey)',
          textTransform: 'uppercase',
          marginBottom: '5px',
          fontWeight: 700,
          '&:hover': {
            color: 'var(--deep-grey)'
          }
        }}
      >
        criar conta
      </Link>
    </Box>
  )
}
