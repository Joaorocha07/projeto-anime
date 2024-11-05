import React, { useState } from 'react'

import { Box, IconButton, Typography } from '@mui/material'

import Image from 'next/image'
import CatalogoModal from './CatalogoModalProps'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface ICatalogoProps {
  titulo: string
  animeData: Array<{
    image: any
    title: string
    season: string
    genre: string
    description: string
    rating: number
  }>
}

export default function Catalogo ({ titulo, animeData }: ICatalogoProps): JSX.Element {
  const sectionOne = animeData.slice(0, 7)
  const sectionTwo = animeData.slice(7, 14)

  const [currentSection, setCurrentSection] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleNext = (): void => {
    setCurrentSection(1)
  }

  const handlePrev = (): void => {
    setCurrentSection(0)
  }

  const handleOpenModal = (item: any): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setSelectedItem(item)
    setModalOpen(true)
  }
  const handleCloseModal = (): void => {
    setSelectedItem(null)
    setModalOpen(false)
  }

  return (
    <Box sx={{ position: 'relative', color: '#fff', p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, ml: 3.5 }}>
        {titulo}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          pl: 4,
          pr: 4
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 0,
            zIndex: 1,
            color: '#fff',
            display: currentSection === 0 ? 'none' : 'block'
          }}
        >
          <ArrowBackIosIcon sx={{ height: 'auto', width: '50px' }} />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            gap: 2.5,
            width: '100%',
            transition: 'transform 600ms ease-in-out',
            transform: `translateX(-${currentSection * 85}%)` // Controla a transição de posição entre as seções
          }}
        >
          {/* Renderização da Seção 1 */}
          <Box
            sx={{
              display: 'flex',
              gap: 2.5
            }}
          >
            {sectionOne.map((item, index) => (
              <Box
                key={index}
                onClick={() => { handleOpenModal(item) }}
                sx={{
                  minWidth: '220px',
                  height: '350px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.15)'
                  }
                }}
              >
                <Image src={item.image} alt={`Imagem ${index + 1}`} layout="responsive" objectFit="cover" />
              </Box>
            ))}
          </Box>

          {/* Renderização da Seção 2 */}
          <Box
            sx={{
              display: 'flex',
              gap: 2.5
            }}
          >
            {sectionTwo.map((item, index) => (
              <Box
                key={index}
                onClick={() => { handleOpenModal(item) }}
                sx={{
                  minWidth: '220px',
                  height: '350px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.15)'
                  }
                }}
              >
                <Image src={item.image} alt={`Imagem ${index + 8}`} layout="responsive" objectFit="cover" />
              </Box>
            ))}
          </Box>
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 1,
            color: '#fff',
            display: currentSection === 1 ? 'none' : 'block'
          }}
        >
          <ArrowForwardIosIcon sx={{ height: 'auto', width: '50px' }} />
        </IconButton>
      </Box>

      <CatalogoModal open={modalOpen} handleClose={handleCloseModal} item={selectedItem} />
    </Box>
  )
}
