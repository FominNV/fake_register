import { FC, useEffect } from "react"
import { useTypedSelector } from "store/selectors"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setLoading } from "store/user/actions"
import { PATHS } from "routes/consts"
import MainLayout from "layouts/MainLayout"
import Container from "components/Container"

import contactsImg from 'assets/images/contacts.jpg'

import "./styles.scss"

const Contact: FC = () => {
  const { user } = useTypedSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate(PATHS.MAIN_LOGIN)
    }
  }, [user, navigate])

  useEffect(() => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 1500)
  }, [dispatch])

  return (
    <MainLayout title="Takeoff Staff / Контакты">
      <div className="Contact">
        <Container>
          <div className="Contact__content">
            <div className="Contact__username">{`Здравствуйте, ${user?.username}!`}</div>
            <img
              src={contactsImg}
              alt="contacts"
              className="Contact__img"
            />

          </div>
        </Container>
      </div>
    </MainLayout>
  )
}

export default Contact
