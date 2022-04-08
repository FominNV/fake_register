import { FC, useEffect, useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setLoading, setUser } from "store/user/actions"
import { useTypedSelector } from "store/selectors"
import MainLayout from "layouts/MainLayout"
import Container from "components/Container"
import Register from "components/Register"
import Login from "components/Login"
import { PATHS } from "routes/consts"

import "./styles.scss"
import classNames from "classnames"
import dataMainContent from "./data"

const Main: FC = () => {
  const { user } = useTypedSelector((state) => state.user)
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    Object.keys(localStorage).map(async (elem) => {
      if (elem.split('_')[1] === '1') {
        const authUser = await JSON.parse(localStorage.getItem(elem) as string)
        dispatch(setUser(authUser))
        navigate(PATHS.CONTACTS)
      }
    })
  }, [navigate, dispatch])

  useEffect(() => {
    if (user) {
      navigate(PATHS.CONTACTS)
    }
  }, [user, navigate])

  useEffect(() => {
    if (!user && !params.id) {
      navigate(PATHS.MAIN_LOGIN)
    }
  }, [user, params.id, navigate])

  useEffect(() => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 1500)
  }, [dispatch])

  const content = useMemo<JSX.Element[]>(() => (
    dataMainContent.map((elem) => {
      const itemClassName = classNames(
        "Main__item",
        { Main__item_active: params.id === elem.id }
      )

      return (
        <div
          className={itemClassName}
          key={elem.id}
        >
          {elem.component}
        </div>
      )
    })
  ), [params.id])

  return (
    <MainLayout title="Takeoff Staff">
      <div className="Main">
        <Container>
          <div className="Main__content">
            {content}
          </div>
        </Container>
      </div>
    </MainLayout>
  )
}

export default Main
