import Login from "components/Login"
import Register from "components/Register"
import { IMainContentItem } from "./types"

const dataMainContent: IMainContentItem[] = [
  {
    id: "register",
    component: <Register />
  },
  {
    id: "login",
    component: <Login />
  }
]

export default dataMainContent
