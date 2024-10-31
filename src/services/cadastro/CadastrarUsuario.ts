'use server'

import { type ICadastrarUsuarioResponse } from '@/types/cadastrar-usuarios/cadastrar-usuarios'

export interface ICadastrarUsuarioProps {
  nomeUsuario: string
  email: string
  senha: string
  dataDeAniversario: string
}

export default async function CadastrarUsuario ({
  nomeUsuario,
  email,
  senha,
  dataDeAniversario
}: ICadastrarUsuarioProps): Promise<ICadastrarUsuarioResponse | null> {
  try {
    const raw = JSON.stringify({
      nome_usuario: nomeUsuario,
      email,
      password: senha,
      birth_date: dataDeAniversario
    })

    const apiUrl = `${process.env.NEXT_PUBLIC_API_ANIME}/user`

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: raw,
      redirect: 'follow',
      cache: 'no-cache'
    }

    const data = await fetch(apiUrl, requestOptions)
    const jsonData: ICadastrarUsuarioResponse | null = await data.json()

    return jsonData
  } catch (e: any) {
    return null
  }
}
