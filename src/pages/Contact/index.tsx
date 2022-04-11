import { FC, useCallback, useEffect, useMemo } from "react"
import { useTypedSelector } from "store/selectors"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loadContacts, setLoading } from "store/user/actions"
import { PATHS } from "routes/consts"
import MainLayout from "layouts/MainLayout"
import Container from "components/Container"

import contactsImg from 'assets/images/contacts.jpg'

import "./styles.scss"
import ContactCard from "components/ContactCard"
import dataContacts from "./data"

const Contact: FC = () => {
  const { user, contacts } = useTypedSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      dispatch(loadContacts(null))
      navigate(PATHS.MAIN_LOGIN)
    } else {
      dispatch(loadContacts(dataContacts))
    }
  }, [user, navigate, dispatch])

  useEffect(() => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 1500)
  }, [dispatch])

  const contactCards = useMemo<Nullable<JSX.Element[]>>(() => (
    contacts && contacts.map((elem) => (
      <ContactCard
        key={`contact_${elem.id}`}
        name={elem.name}
        phone={elem.phone}
      />
    ))
  ), [contacts])

  return (
    <MainLayout title="Takeoff Staff / Контакты">
      <div className="Contact">
        <Container>
          <div className="Contact__content">
            <div className="Contact__user-block">
              <div className="Contact__username">{`Здравствуйте, ${user?.username}!`}</div>
              <img
                src={contactsImg}
                alt="contacts"
                className="Contact__img"
              />
            </div>

            <div className="Contact__cardlist">
              {contactCards}
            </div>

          </div>
        </Container>
      </div>
    </MainLayout>
  )
}

export default Contact
