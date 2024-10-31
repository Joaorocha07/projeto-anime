import { type IPropsLogin } from '@/types/login/login'

export interface IInitialStateColegio {
  login: null | IPropsLogin
}

export const initialState: IInitialStateColegio = {
  login: null
}
