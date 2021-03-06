import { IUserState, UserAction, UserActionTypes } from "./types"

const initialState: IUserState = {
  user: null,
  contacts: null,
  loading: false
}

export function userReducer(state: IUserState = initialState, action: UserAction): IUserState {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload.user
      }

    case UserActionTypes.LOGIN_USER:
      return {
        ...state
      }

    case UserActionTypes.LOGOUT_USER:
      return {
        ...state
      }

    case UserActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading
      }

    case UserActionTypes.LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload.contacts
      }

    default:
      return state
  }
}
