import { IInput } from "components/Input/types"

const dataRegisterInputs: IInput[] = [
  {
    id: "register_name",
    label: "Имя",
    type: "text",
    placeholder: "Введите имя"
  },
  {
    id: "register_email",
    label: "Email",
    type: "text",
    placeholder: "Введите E-mail"

  },
  {
    id: "register_password1",
    label: "Пароль",
    type: "password",
    placeholder: "Введите пароль"

  },
  {
    id: "register_password2",
    label: "Подтверждение пароля",
    type: "password",
    placeholder: "Повторите пароль"

  }
]

export default dataRegisterInputs
