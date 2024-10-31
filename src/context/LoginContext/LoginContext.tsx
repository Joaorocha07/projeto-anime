'use client'
import React, { useReducer, createContext } from 'react'

import { reducer } from './reducer'
import { initialState } from './data'
import { type IPropsLogin } from '@/types/login/login'
import { type IRootLayout } from '@/types/global'

import actions from './action'

interface ILoginContext {
  state: {
    login: null | IPropsLogin
  }
  salvarLogin: (payload: IPropsLogin | null) => void
}

export const LoginContext = createContext<ILoginContext | null>(null)

export default function LoginProvider ({
  children
}: IRootLayout): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)

  const salvarLogin = (payload: IPropsLogin | null): void => {
    dispatch({ type: actions.SAVE_LOGIN, payload })
  }

  return (
    <LoginContext.Provider
      value={{
        state,
        salvarLogin
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
