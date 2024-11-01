import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'

interface ICatalogoMobileProps {
  titulo: string
  images: any[]
}

export default function CatalogoMobile ({ titulo, images }: ICatalogoMobileProps): JSX.Element {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <Box sx={{ position: 'relative', color: '#fff', p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2.2, textAlign: 'center' }}>
        {titulo}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          pl: 4,
          pr: 4,
          touchAction: 'pan-y'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: isMobile ? 4 : 2.5,
            width: '100%',
            transition: 'transform 600ms ease-in-out',
            overflowX: isMobile ? 'scroll' : 'hidden',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                minWidth: isMobile ? '220px' : '220px',
                height: isMobile ? '350px' : '350px',
                overflow: 'hidden',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.15)'
                }
              }}
            >
              <Image src={image} alt={`Imagem ${index + 1}`} layout="responsive" objectFit="cover" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
