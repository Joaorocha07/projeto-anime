import React, { useState } from 'react'
import { Modal, Box, Typography, IconButton, Avatar, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

interface ProfileModalProps {
  open: boolean
  onClose: () => void
}

export default function ProfileModal ({ open, onClose }: ProfileModalProps): JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    '/images/1.webp',
    '/images/2.webp',
    '/images/3.webp',
    '/images/4.webp',
    '/images/5.webp',
    '/images/6.webp'
  ]

  const handleNextImage = (): void => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePreviousImage = (): void => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 10, top: 10 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" component="h2">
          Meu Perfil
        </Typography>

        {/* Avatar */}
        <Avatar
          alt="User Profile"
          src="/path/to/profile.jpg"
          sx={{ width: 60, height: 60, mb: 2 }}
        />

        {/* Carrossel de Imagens */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton onClick={handlePreviousImage}>
            <ArrowBackIcon />
          </IconButton>
          <img
            src={images[currentImageIndex]}
            alt={`Imagem ${currentImageIndex + 1}`}
            style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '0 10px', borderRadius: 15 }}
          />
          <IconButton onClick={handleNextImage}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        {/* Informações do Usuário */}
        <Typography variant="body1"><strong>Nome:</strong> João da Silva</Typography>
        <Typography variant="body1"><strong>Email:</strong> joao@example.com</Typography>
        <Typography variant="body1"><strong>Data de Nascimento:</strong> 01/01/1990</Typography>

        {/* Botão para editar perfil */}
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => { console.log('Editar Perfil') }}>
          Editar Perfil
        </Button>
      </Box>
    </Modal>
  )
}
