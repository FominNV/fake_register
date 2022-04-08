import { FC, useCallback, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser, setUser } from "store/user/actions"
import { ButtonBgColor } from "components/Button/types"
import Button from "components/Button"
import Input from "components/Input"

import validator from "validator"
import dataLoginInputs from "./data"

import "./styles.scss"

const Login: FC = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [formError, setFormError] = useState<Nullable<string>>(null)

  const dispatch = useDispatch()

  const checkEmail = useCallback<CheckFieldType>(() => {
    if (!validator.isEmail(email)) {
      setFormError("Некорректный Email")
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

    setFormError(null)
    return true
  }, [password])

  const onSubmitHandler = useCallback<OnSubmitHandlerType>((event) => {
    event.preventDefault()

    let flag = false
    if (checkEmail() && checkPassword()) {
      Object.keys(localStorage).map(async (elem) => {
        if (elem.split('_')[0] === email) {
          flag = true
          const user = await JSON.parse(localStorage.getItem(elem) as string)
          dispatch(setUser(user))
          dispatch(loginUser(email))
        }
      })

      if (!flag) {
        setFormError("Email или пароль введен неправильно!")
      }
    }
  }, [checkEmail, checkPassword, dispatch, email])

  const inputs = useMemo<JSX.Element[]>(() => {
    const setStates = [setEmail, setPassword]

    return (
      dataLoginInputs.map((elem, index) => (
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
    <div className="Login form-component">
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
              name="Войти"
              bgColor={ButtonBgColor.CLOUDY}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
