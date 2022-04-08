import { ButtonBgColor } from "components/Button/types"
import { PATHS } from "routes/consts"
import { IDataHeaderButton } from "./types"

const dataButtons: IDataHeaderButton[] = [
  {
    name: "Регистрация",
    bgColor: ButtonBgColor.CLOUDY,
    path: PATHS.MAIN_LOGIN
  },
  {
    name: "Вход",
    bgColor: ButtonBgColor.PURPLE,
    path: PATHS.MAIN_REGISTER
  },
  {
    name: "Выйти",
    bgColor: ButtonBgColor.BROWN_RED,
    path: PATHS.CONTACTS
  }
]

export default dataButtons
