import React from 'react'

import { Box, Typography, Modal, Rating, IconButton } from '@mui/material'

import Image from 'next/image'
import Comentarios from './Comentarios'
import CloseIcon from '@mui/icons-material/Close'
import CommentIcon from '@mui/icons-material/Comment'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'

interface CatalogoModalProps {
  open: boolean
  handleClose: () => void
  item: {
    image: any
    imageModal: string
    title: string
    season: string
    genre: string
    description: string
    rating: number
    releaseYear: string
    cast: string
    highlights: string
    ageRating: string
    comments?: Comment[]
  } | null
}

export default function CatalogoModal ({ open, handleClose, item }: CatalogoModalProps): JSX.Element | null {
  if (item == null) return null

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        bgcolor: '#141414',
        color: '#fff',
        borderRadius: 2,
        maxWidth: 1000,
        mx: 'auto',
        my: '3vh',
        overflow: 'hidden',
        borderColor: 'none',
        position: 'relative',
        maxHeight: '100%',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}>
        <IconButton onClick={handleClose} sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: '#fff',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }
        }}>
          <CloseIcon />
        </IconButton>

        <Box sx={{ position: 'relative', height: 450 }}>
          <Image src={item.imageModal} alt={item.title} layout="fill" objectFit="cover" />
          <Box sx={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            display: 'flex',
            gap: 1,
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: 1,
            p: 1
          }}>
            <IconButton sx={{ color: '#fff' }}>
              <ThumbUpAltIcon />
            </IconButton>
            <IconButton sx={{ color: '#fff' }}>
              <ThumbDownAltIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>{item.title}</Typography>

          <Box sx={{ display: 'flex', mb: 1, gap: 2.5 }}>
            <Typography variant="subtitle2">{item.releaseYear}</Typography>
            <Typography variant="subtitle2">{item.season}</Typography>
            <Typography variant="subtitle2" sx={{ maxWidth: 150, overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.cast}</Typography>
            <Typography variant="subtitle2" sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', px: 1, borderRadius: 1, color: '#FFF' }}>
              {item.ageRating}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating value={item.rating} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">{item.highlights}</Typography>
            <Typography variant="body2" color="text.secondary">{item.genre}</Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3 }}>{item.description}</Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
            <CommentIcon />
            <Typography variant="subtitle2">Comentários</Typography>
          </Box>
          <Comentarios animes={item} />
        </Box>
      </Box>
    </Modal>
  )
}
