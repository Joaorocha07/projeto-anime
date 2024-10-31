export interface ILoginResponse {
  error: boolean
  msgUser: string
  msdOriginal: string
  nick: string
  jwt: string
}

export interface IPropsLogin {
  nick: string
  jwt: string
}
