import actions from './action'
import { type initialState } from './data'

type ACTIONTYPE =
  | {
    type: typeof actions.SAVE_LOGIN
    payload: any
  }

export const reducer = (
  state: typeof initialState,
  action: ACTIONTYPE
): any => {
  switch (action.type) {
    case actions.SAVE_LOGIN:
      return { ...state, login: action.payload }
    default:
      return state
  }
}
