import React, { useState } from 'react'

import { Box, Avatar, Typography, TextField, InputAdornment, IconButton } from '@mui/material'

import SendIcon from '@mui/icons-material/Send'
import FavoriteIcon from '@mui/icons-material/Favorite'

interface Comentario {
  id: number
  usuario: string
  avatar: string
  conteudo: string
  curtidas: number
  tempo: string
  respostas?: Comentario[]
}

const initialComentarios: Comentario[] = [
  {
    id: 1,
    usuario: 'Usuário 1',
    avatar: '/path/to/profile1.jpg',
    conteudo: 'Realidade importante sobre decisões financeiras. Equilíbrio e consciência hoje te garantem um futuro mais tranquilo amanhã!',
    curtidas: 12,
    tempo: '2h atrás'
  },
  {
    id: 2,
    usuario: 'Usuário 2',
    avatar: '/path/to/profile2.jpg',
    conteudo: 'Muito bom! Reflexão que vale para todas as fases da vida',
    curtidas: 5,
    tempo: '4h atrás',
    respostas: [
      {
        id: 3,
        usuario: 'Usuário 3',
        avatar: '/path/to/profile3.jpg',
        conteudo: 'Concordo! Isso faz toda a diferença no longo prazo.',
        curtidas: 2,
        tempo: '1h atrás'
      }
    ]
  }
]

interface IPropsComentarios {
  animes: any
}

export default function Comentarios ({ animes }: IPropsComentarios): JSX.Element {
  const [novoComentario, setNovoComentario] = useState<string>('')
  const [comentarios, setComentarios] = useState<Comentario[]>(initialComentarios)
  const [mostrarRespostas, setMostrarRespostas] = useState<Record<number, boolean>>({})

  console.log(animes)

  const alternarRespostas = (comentarioId: number): void => {
    setMostrarRespostas(prevState => ({
      ...prevState,
      [comentarioId]: !prevState[comentarioId]
    }))
  }

  const enviarComentario = (): void => {
    if (novoComentario.trim() === '') return
    const novoComentarioObj: Comentario = {
      id: comentarios.length + 1,
      usuario: 'Novo Usuário',
      avatar: '/path/to/default_avatar.jpg',
      conteudo: novoComentario,
      curtidas: 0,
      tempo: 'Agora'
    }
    setComentarios([...comentarios, novoComentarioObj])
    setNovoComentario('')
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Escreva um comentário..."
          value={novoComentario}
          onChange={e => { setNovoComentario(e.target.value) }}
          sx={{
            input: {
              color: 'white'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white'
              },
              '&:hover fieldset': {
                borderColor: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white'
              }
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={enviarComentario}>
                  <SendIcon sx={{ color: 'white' }} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>
      {comentarios.map(comentario => (
        <Box key={comentario.id} sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Avatar src={comentario.avatar} alt={comentario.usuario} />
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{comentario.usuario}</Typography>
            <Typography variant="body2">{comentario.conteudo}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              <FavoriteIcon sx={{ color: comentario.id === 2 ? 'red' : '#fff' }} />
              <Typography variant="caption">{comentario.curtidas} curtidas</Typography>
              <Typography variant="caption">{comentario.tempo}</Typography>
              <Typography variant="caption" sx={{ cursor: 'pointer' }}>Responder</Typography>
            </Box>
            {(comentario.respostas != null) && (
              <>
                <Typography
                  variant="caption"
                  onClick={() => { alternarRespostas(comentario.id) }}
                  sx={{ cursor: 'pointer', color: '#a8a8a8', mt: 1 }}
                >
                  {mostrarRespostas[comentario.id] ? '___ Ocultar Respostas' : '___ Ver Respostas (1)'}
                </Typography>
                {mostrarRespostas[comentario.id] && comentario.respostas.map(resposta => (
                  <Box key={resposta.id} sx={{ display: 'flex', gap: 2, mt: 2, ml: 2, pl: 2 }}>
                    <Avatar src={resposta.avatar} alt={resposta.usuario} sx={{ width: 30, height: 30 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{resposta.usuario}</Typography>
                      <Typography variant="body2">{resposta.conteudo}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <FavoriteIcon sx={{ color: 'red', fontSize: 16 }} />
                        <Typography variant="caption">{resposta.curtidas} curtidas</Typography>
                        <Typography variant="caption">{resposta.tempo}</Typography>
                        <Typography variant="caption" sx={{ cursor: 'pointer' }}>Responder</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
