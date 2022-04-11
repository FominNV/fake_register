import { IContact, IUser, SetLoadingType, UserActionTypes, UserDispatch } from "./types"

export const setUser: UserDispatch<Nullable<IUser>> = (user) => {
  return {
    type: UserActionTypes.SET_USER,
    payload: { user }
  }
}

export const registerUser: UserDispatch<IUser> = (user) => {
  const userStr = JSON.stringify(user)
  localStorage.setItem(`${user.email}_1`, userStr)

  return {
    type: UserActionTypes.REGISTER_USER
  }
}

export const logoutUser: UserDispatch<void> = () => {
  Object.keys(localStorage).map((elem) => {
    if (elem.split("_")[1] === "1") {
      const user = localStorage.getItem(elem)

      if (user) {
        localStorage.setItem(`${elem.split("_")[0]}_0`, user)
        localStorage.removeItem(elem)
      }
    }
  })

  return {
    type: UserActionTypes.LOGOUT_USER
  }
}

export const loginUser: UserDispatch<string> = (email) => {
  Object.keys(localStorage).map((elem) => {
    if (elem.split("_")[0] === email) {
      const user = localStorage.getItem(elem)

      if (user) {
        localStorage.setItem(`${email}_1`, user)
        localStorage.removeItem(elem)
      }
    }
  })

  return {
    type: UserActionTypes.LOGIN_USER
  }
}

export const setLoading: SetLoadingType = (loading) => {
  return {
    type: UserActionTypes.SET_LOADING,
    payload: { loading }
  }
}

export const loadContacts: UserDispatch<Nullable<IContact[]>> = (contacts) => {
  return {
    type: UserActionTypes.LOAD_CONTACTS,
    payload: { contacts }
  }
}
