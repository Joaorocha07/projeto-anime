'use client'
import React from 'react'

import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { Box, TextField } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'

import * as Yup from 'yup'
import 'react-toastify/dist/ReactToastify.css'
import CadastrarUsuario from '@/services/cadastro/CadastrarUsuario'
import CustomButtonPrimary from '@/components/CutomButton/CustomButtonPrimary'

export default function Form (): JSX.Element {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      nomeUsuario: '',
      email: '',
      senha: '',
      repitaSenha: '',
      dataDeAniversario: ''
    },
    validationSchema: Yup.object({
      nomeUsuario: Yup.string().required('Nome de usuário é obrigatório'),
      email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
      senha: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
      repitaSenha: Yup.string()
        .oneOf([Yup.ref('senha')], 'As senhas devem coincidir')
        .required('Repita sua senha'),
      dataDeAniversario: Yup.date().required('Data de aniversário é obrigatória')
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true)
      try {
        const response = await CadastrarUsuario({
          nomeUsuario: values.nomeUsuario,
          email: values.email,
          senha: values.senha,
          dataDeAniversario: values.dataDeAniversario
        })

        if (response !== null) {
          if (!(response?.error)) {
            toast.success(response.msgUser)
            setTimeout(() => {
              router.push('/login')
            }, 3000)
          } else {
            toast.error(response?.msgUser ?? 'Erro ao cadastrar usuário')
          }
        } else {
          toast.error('Erro ao cadastrar usuário')
        }
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error)
      } finally {
        setSubmitting(false)
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ display: 'block', width: '100%' }}>
        <ToastContainer />
        <TextField
          fullWidth
          label="Nome de usuário"
          variant="outlined"
          {...formik.getFieldProps('nomeUsuario')}
          error={(formik.touched.nomeUsuario ?? false) && Boolean(formik.errors.nomeUsuario)}
          helperText={(formik.touched.nomeUsuario ?? false) && formik.errors.nomeUsuario}
          sx={{ mb: 4 }}
        />
        <TextField
          fullWidth
          type="email"
          label="E-mail"
          variant="outlined"
          {...formik.getFieldProps('email')}
          error={(formik.touched.email ?? false) && Boolean(formik.errors.email)}
          helperText={(formik.touched.email ?? false) && formik.errors.email}
          sx={{ mb: 4 }}
        />
        <TextField
          fullWidth
          type="password"
          label="Senha"
          variant="outlined"
          {...formik.getFieldProps('senha')}
          error={(formik.touched.senha ?? false) && Boolean(formik.errors.senha)}
          helperText={(formik.touched.senha ?? false) && formik.errors.senha}
          sx={{ mb: 4 }}
        />
        <TextField
          fullWidth
          type="password"
          label="Repita sua senha"
          variant="outlined"
          {...formik.getFieldProps('repitaSenha')}
          error={(formik.touched.repitaSenha ?? false) && Boolean(formik.errors.repitaSenha)}
          helperText={(formik.touched.repitaSenha ?? false) && formik.errors.repitaSenha}
          sx={{ mb: 4 }}
        />
        <TextField
          fullWidth
          type="date"
          variant="outlined"
          {...formik.getFieldProps('dataDeAniversario')}
          error={(formik.touched.dataDeAniversario ?? false) && Boolean(formik.errors.dataDeAniversario)}
          helperText={(formik.touched.dataDeAniversario ?? false) && formik.errors.dataDeAniversario}
          sx={{ mb: 4 }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 2
          }}
        >
          <CustomButtonPrimary onClick={formik.handleSubmit} />
        </Box>
        {/* {JSON.stringify(formik.values.dataDeAniversario, null, 2)} */}
      </Box>
    </form>
  )
}
