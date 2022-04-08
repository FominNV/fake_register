import { FC, useCallback, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser, setUser } from "store/user/actions"
import { ButtonBgColor } from "components/Button/types"
import { IUser } from "store/user/types"
import Button from "components/Button"
import Input from "components/Input"

import validator from "validator"
import dataRegisterInputs from "./data"

import "./styles.scss"

const Register: FC = () => {
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [retryPassword, setRetryPassword] = useState<string>("")
  const [formError, setFormError] = useState<Nullable<string>>(null)

  const dispatch = useDispatch()

  const checkName = useCallback<CheckFieldType>(() => {
    if (username?.trim().length < 5) {
      setFormError("Имя должно содержать 5 и более символов")
      return false
    }
    setFormError(null)
    return true
  }, [username])

  const checkEmail = useCallback<CheckFieldType>(() => {
    if (!validator.isEmail(email)) {
      setFormError("Некорректный Email")
      return false
    }

    let flag = true
    Object.keys(localStorage).map((elem) => {
      if (elem.split('_')[0] === email) {
        flag = false
      }
    })

    if (!flag) {
      setFormError("Данный Email уже используется")
      return false
    }

    setFormError(null)
    return true
  }, [email])

  const checkPassword = useCallback<CheckFieldType>(() => {
    if (password.length < 6) {
      setFormError("Пароль должен содержать 6 и более символов")
      return false
    }

    if (password !== retryPassword) {
      setFormError("Пароли должны совпадать")
      return false
    }
    setFormError(null)
    return true
  }, [password, retryPassword])

  const onSubmitHandler = useCallback<OnSubmitHandlerType>((event) => {
    event.preventDefault()

    if (checkName() && checkEmail() && checkPassword()) {
      const user: IUser = {
        username,
        email,
        password
      }

      dispatch(registerUser(user))
      dispatch(setUser(user))
    }
  }, [checkName, checkEmail, checkPassword, dispatch, username, email, password])

  const inputs = useMemo<JSX.Element[]>(() => {
    const setStates = [setUsername, setEmail, setPassword, setRetryPassword]

    return (
      dataRegisterInputs.map((elem, index) => (
        <Input
          id={elem.id}
          label={elem.label}
          type={elem.type}
          placeholder={elem.placeholder}
          setState={setStates[index]}
          key={elem.id}
        />
      ))
    )
  }, [])

  return (
    <div className="Register form-component">
      <form
        className="form-component__form"
        onSubmit={onSubmitHandler}
      >
        <div className="form-component__error">
          {formError}
        </div>

        <div className="form-component__inputs">
          {inputs}
          <div className="form-component__btn">
            <Button
              name="Отправить"
              bgColor={ButtonBgColor.PURPLE}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
