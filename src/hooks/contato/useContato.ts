import { useState } from 'react'
import { notifyError, notifySuccess } from '@/components/modals'
import { type FormikProps, useFormik } from 'formik'

import * as Yup from 'yup'
import emailjs from 'emailjs-com'

interface IFormValues {
  email: string
  subject: string
  message: string
}

interface IUseContato {
  loading: boolean
  formik: FormikProps<IFormValues>
}

const EMAILJS_SERVICE_ID = 'service_483wq2a'
const EMAILJS_TEMPLATE_ID = 'template_1g301ol'
const EMAILJS_PUBLIC_KEY = 'piRQAG_-_b21XODsg'

export const UseContato = (): IUseContato => {
  const [loading, setLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Por favor, insira um e-mail válido.').required('Campo obrigatório.'),
      subject: Yup.string().required('Campo obrigatório.'),
      message: Yup.string().required('Campo obrigatório.')
    }),
    onSubmit: (values, { resetForm }) => {
      setLoading(true)
      const { email, subject, message } = values

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        email,
        subject,
        message
      }, EMAILJS_PUBLIC_KEY)
        .then(() => {
          notifySuccess('E-mail enviado com sucesso!')
          setLoading(false)
          resetForm()
        })
        .catch((error) => {
          notifyError('Falha ao enviar o e-mail. Tente novamente mais tarde!')
          setLoading(false)
          console.log(error)
        })
    }
  })

  return {
    formik,
    loading
  }
}
