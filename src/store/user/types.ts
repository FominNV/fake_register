export interface IUserState {
  user: Nullable<IUser>
  loading: boolean
}

export interface IUser {
  username: string
  email: string
  password: string
}

export type UserDispatch<T> = (arg1: T, arg2?: T) => UserAction
export type SetLoadingType = (arg1: boolean) => UserAction

export enum UserActionTypes {
  SET_USER = "SET_USER",
  REGISTER_USER = "REGISTER_USER",
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
  SET_LOADING = "SET_LOADING"
}

type SetUserAction = {
  type: UserActionTypes.SET_USER
  payload: { user: IUser | null }
}

type RegisterUserAction = {
  type: UserActionTypes.REGISTER_USER
}

type LoginUserAction = {
  type: UserActionTypes.LOGIN_USER
}

type LogoutUserAction = {
  type: UserActionTypes.LOGOUT_USER
}

type SetLoadingAction = {
  type: UserActionTypes.SET_LOADING
  payload: { loading: boolean }
}

export type UserAction =
  | SetUserAction
  | RegisterUserAction
  | LoginUserAction
  | LogoutUserAction
  | SetLoadingAction
