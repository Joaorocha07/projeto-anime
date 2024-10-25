'use client'
import React from 'react'

import {
  Box,
  Paper,
  Divider,
  useTheme,
  TextField,
  Container,
  Typography,
  useMediaQuery,
  CircularProgress
} from '@mui/material'

import { UseContato } from '@/hooks/contato/useContato'
import { CustomButton } from '@/components/button/CustomButtonPrimary'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function Contato (): JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { formik, loading } = UseContato()
  return (
    <Container
      sx={{
        py: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 236px)'
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 3 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: isMobile ? '2rem' : '2.5rem'
          }}
        >
          Entre em contato conosco
        </Typography>
        <Typography paragraph>
          Estamos aqui para ajudar! Se você tiver
          alguma dúvida, sugestão ou problema,
          sinta-se à vontade para nos contatar
          através do formulário abaixo.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            required
            label="Seu E-mail"
            variant="outlined"
            margin="normal"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(Boolean(formik.touched.email)) && Boolean(formik.errors.email)}
            helperText={(Boolean(formik.touched.email)) && formik.errors.email}
          />
          <TextField
            fullWidth
            required
            label="Assunto"
            variant="outlined"
            margin="normal"
            id="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(Boolean(formik.touched.subject)) && Boolean(formik.errors.subject)}
            helperText={(Boolean(formik.touched.subject)) && formik.errors.subject}
          />
          <TextField
            fullWidth
            required
            label="Mensagem"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(Boolean(formik.touched.message)) && Boolean(formik.errors.message)}
            helperText={(Boolean(formik.touched.message)) && formik.errors.message}
          />
          <CustomButton
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
            disabled={loading}
          >
          {loading
            ? (
                <CircularProgress size={24} />
              )
            : (
                'Enviar'
              )
          }
          </CustomButton>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Box>
      </Paper>
    </Container>
  )
}
