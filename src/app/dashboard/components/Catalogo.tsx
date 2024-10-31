import React, { useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Image from 'next/image'

import imgUm from '../../../../public/images/colecao/1.webp'
import imgDois from '../../../../public/images/colecao/2.webp'
import imgTres from '../../../../public/images/colecao/3.webp'
import imgQuatro from '../../../../public/images/colecao/4.webp'
import imgCinco from '../../../../public/images/colecao/5.webp'
import imgSeis from '../../../../public/images/colecao/6.webp'
import imgSete from '../../../../public/images/colecao/7.webp'
import imgOito from '../../../../public/images/colecao/8.webp'
import imgNove from '../../../../public/images/colecao/9.webp'
import imgDez from '../../../../public/images/colecao/10.webp'
import imgOnze from '../../../../public/images/colecao/11.webp'
import imgDoze from '../../../../public/images/colecao/12.webp'
import imgTreze from '../../../../public/images/colecao/13.webp'
import imgQuatorze from '../../../../public/images/colecao/14.webp'

const collection = [
  imgUm, imgDois, imgTres, imgQuatro, imgCinco, imgSeis, imgSete, imgOito, imgNove,
  imgDez, imgOnze, imgDoze, imgTreze, imgQuatorze
]

export default function Catalogo (): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 5

  const handleNext = (): void => {
    // Looping para o início da coleção
    setCurrentIndex((prevIndex) => (prevIndex + 1) % collection.length)
  }

  const handlePrev = (): void => {
    // Looping para o final da coleção
    setCurrentIndex((prevIndex) => (prevIndex - 1 + collection.length) % collection.length)
  }

  return (
    <Box sx={{ position: 'relative', color: '#fff', p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, ml: 2 }}>
        Coleção
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          pl: 4, // padding para alinhar o conteúdo
          pr: 4
        }}
      >
        {/* Botão para a esquerda */}
        <IconButton
          onClick={handlePrev}
          sx={{ position: 'absolute', left: 0, zIndex: 1, color: '#fff' }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
          }}
        >
          {collection.map((image, index) => (
            <Box
              key={index}
              sx={{
                minWidth: '220px', // Aumentando a largura mínima da imagem
                height: '350px', // Aumentando a altura da imagem
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

        {/* Botão para a direita */}
        <IconButton
          onClick={handleNext}
          sx={{ position: 'absolute', right: 0, zIndex: 1, color: '#fff' }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
