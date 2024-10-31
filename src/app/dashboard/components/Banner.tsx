import React, { useState, useEffect } from 'react'

import { Box, Typography, Rating, LinearProgress, useMediaQuery } from '@mui/material'

import Image from 'next/image'

import DemonSlayerImage from '../../../../public/images/catalogo-001.webp'
import SoloLevelingImage from '../../../../public/images/catalogo-02.webp'
import NarutoImage from '../../../../public/images/catalogo-03.webp'

import DemonSlayerImageMobile from '../../../../public/images/01-catalogo-mobile.png'
import SoloLevelingImageMobile from '../../../../public/images/02-catalogo-mobile.png'
import NarutoImageMobile from '../../../../public/images/03-catalogo-mobile.png'

const animes = [
  {
    title: 'Demon Slayer',
    image: DemonSlayerImage,
    imageMobile: DemonSlayerImageMobile,
    temporadas: 3,
    genero: 'Ação, Aventura, Sobrenatural',
    avaliacao: 9.5,
    descricao:
      'Demon Slayer segue a história de Tanjiro Kamado, um jovem que se torna um caçador de demônios para vingar sua família e salvar sua irmã. Com uma animação impressionante e cenas de ação épicas, a série rapidamente se tornou um fenômeno mundial.'
  },
  {
    title: 'Solo Leveling',
    image: SoloLevelingImage,
    imageMobile: SoloLevelingImageMobile,
    temporadas: 1,
    genero: 'Ação, Fantasia, Sobrenatural',
    avaliacao: 9.0,
    descricao:
      'Solo Leveling é sobre Jin-Woo, um caçador de monstros que começa sua jornada para se tornar o caçador mais poderoso do mundo. Com um enredo empolgante e batalhas intensas, é um dos manhwas mais populares da atualidade.'
  },
  {
    title: 'Naruto',
    image: NarutoImage,
    imageMobile: NarutoImageMobile,
    temporadas: 20,
    genero: 'Ação, Aventura, Artes Marciais',
    avaliacao: 8.5,
    descricao:
      'Naruto acompanha a jornada de um jovem ninja determinado a se tornar o maior Hokage de todos. Com muitos desafios e batalhas épicas, Naruto inspira a nunca desistir dos sonhos.'
  }
]

export default function Banner (): JSX.Element {
  const [currentAnime, setCurrentAnime] = useState(0)
  const [progress, setProgress] = useState(0)

  const isMobile = useMediaQuery('(max-width:600px)')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnime((prev) => (prev + 1) % animes.length)
      setProgress(0)
    }, 10000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + 1)
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [])

  const anime = animes[currentAnime]

  const handleProgressClick = (index: number): void => {
    setCurrentAnime(index)
    setProgress(0)
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: isMobile ? '600px' : '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        color: '#fff',
        backgroundColor: '#000',
        overflow: 'hidden'
      }}
    >
      <Image
        src={isMobile ? anime.imageMobile : anime.image}
        alt={`Banner ${anime.title}`}
        layout="fill"
        objectFit={isMobile ? 'contain' : 'cover'}
        style={{
          zIndex: 1,
          filter: 'brightness(0.6)'
        }}
      />

      {/* Conteúdo do banner */}
      <Box
        sx={{
          position: 'relative',
          maxWidth: '600px',
          p: 4,
          ml: 3,
          zIndex: 1
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          {anime.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Temporadas:</strong> {anime.temporadas} <br />
          <strong>Gênero:</strong> {anime.genero} <br />
          <strong>Avaliação:</strong> {anime.avaliacao}/10
        </Typography>
        <Rating value={anime.avaliacao / 2} precision={0.5} readOnly size="large" sx={{ mb: 2 }} />
        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
          {anime.descricao}
        </Typography>
      </Box>

      {/* Barra de progresso */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 1
        }}
      >
        {animes.map((_, index) => (
          <LinearProgress
            key={index}
            variant="determinate"
            value={index === currentAnime ? (progress / 100) * 100 : 0}
            sx={{
              width: '100px',
              height: 4,
              cursor: 'pointer',
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              '& .MuiLinearProgress-bar': {
                bgcolor: 'white'
              },
              zIndex: 2
            }}
            onClick={() => { handleProgressClick(index) }}
          />
        ))}
      </Box>
    </Box>
  )
}
