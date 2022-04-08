import { FC, MouseEvent, useCallback, useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logoutUser, setUser } from "store/user/actions"
import { ButtonBgColor } from "components/Button/types"
import { PATHS } from "routes/consts"
import Container from "components/Container"
import Button from "components/Button"
import classNames from "classnames"
import dataButtons from "./data"

import "./styles.scss"

const Header: FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = useCallback<EventFunc<MouseEvent>>(() => {
    dispatch(logoutUser())
    dispatch(setUser(null))
  }, [dispatch])

  const linkToRegister = useCallback<EventFunc<MouseEvent>>(() => {
    navigate(PATHS.MAIN_REGISTER)
  }, [navigate])

  const linkToLogin = useCallback<EventFunc<MouseEvent>>(() => {
    navigate(PATHS.MAIN_LOGIN)
  }, [navigate])

  const buttons = useMemo<JSX.Element[]>(() => {
    const events: EventFunc<MouseEvent>[] = [linkToRegister, linkToLogin, logout]
    return (
      dataButtons.map((elem, index) => {
        const buttonClassName = classNames(
          "Header__btn",
          { Header__btn_active: location.pathname === elem.path }
        )

        return (
          <div
            className={buttonClassName}
            key={`button_${index}`}
          >
            <Button
              name={elem.name}
              bgColor={elem.bgColor as ButtonBgColor}
              onClick={events[index]}
            />
          </div>
        )
      })
    )
  }, [location.pathname, linkToLogin, linkToRegister, logout])

  return (
    <header className="Header">
      <Container>
        <div className="Header__content">
          <div className="Header__logo">
            Takeoff Staff
          </div>

          <div className="Header__buttons-block">
            {buttons}
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
