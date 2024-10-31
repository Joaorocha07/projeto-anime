'use server'

import { type ILoginResponse } from '@/types/login/login'

export interface ICadastrarUsuarioProps {
  email: string
  senha: string
}

export default async function Login ({
  email,
  senha
}: ICadastrarUsuarioProps): Promise<ILoginResponse | null> {
  try {
    const raw = JSON.stringify({
      email,
      password: senha
    })

    const apiUrl = `${process.env.NEXT_PUBLIC_API_ANIME}/login`

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
    const jsonData: ILoginResponse | null = await data.json()

    return jsonData
  } catch (e: any) {
    return null
  }
}
