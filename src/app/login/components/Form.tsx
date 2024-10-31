'use client'
import React, { useContext } from 'react'

import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import { LoginContext } from '@/context/LoginContext/LoginContext'
import { Box, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'

import * as Yup from 'yup'
import Cookies from 'js-cookie'
import Login from '@/services/login/Login'
import 'react-toastify/dist/ReactToastify.css'
import CustomButtonPrimary from '@/components/CutomButton/CustomButtonPrimary'

export default function LoginForm (): JSX.Element {
  const router = useRouter()
  const context = useContext(LoginContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
      lembrar: false
    },
    validationSchema: Yup.object({
      email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
      senha: Yup.string().required('Senha é obrigatória')
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      try {
        const response = await Login({
          email: values.email,
          senha: values.senha
        })

        console.log('Resposta da API:', response)

        if (response !== null) {
          if (!(response?.error)) {
            toast.success(response.msgUser)
            context?.salvarLogin({
              nick: response.nick,
              jwt: response.jwt
            })
            Cookies.set('jwt', response.jwt, { expires: 7 })
            setTimeout(() => {
              router.push('/dashboard')
            }, 3000)
          } else {
            toast.error(response?.msgUser ?? 'Erro ao fazer login!')
          }
        } else {
          toast.error('Erro ao fazer login!')
        }
      } catch (error) {
        toast.error('Erro ao fazer login!')
      } finally {
        setSubmitting(false)
      }
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <ToastContainer />
        <Box sx={{ display: 'block', width: '100%' }}>
          <TextField
            fullWidth
            type="email"
            label="E-mail"
            variant="outlined"
            {...formik.getFieldProps('email')}
            error={Boolean((formik.touched.email ?? false) && formik.errors.email)}
            helperText={(formik.touched.email ?? false) && formik.errors.email}
            sx={{ mb: 4 }}
          />
          <TextField
            fullWidth
            type="password"
            label="Senha"
            variant="outlined"
            {...formik.getFieldProps('senha')}
            error={Boolean((formik.touched.senha ?? false) && formik.errors.senha)}
            helperText={(formik.touched.senha ?? false) && formik.errors.senha}
          />
          <FormControlLabel
            control={
              <Checkbox
                {...formik.getFieldProps('lembrar')}
                sx={{
                  appearance: 'none',
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'var(--light-grey)',
                  marginRight: '8px',
                  borderRadius: '3px',
                  '&:checked': {
                    backgroundColor: 'var(--blue)'
                  }
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: 'Lexend Deca',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: 'var(--text-color)'
                }}
              >
                Lembrar meus dados
              </Typography>
            }
            sx={{ mt: 2, ml: 0, fontFamily: 'Lexend Deca', fontWeight: 400 }}
          />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 27
            }}
          >
            <CustomButtonPrimary onClick={formik.handleSubmit} />
          </Box>
        </Box>
      </form>
    </>
  )
}
