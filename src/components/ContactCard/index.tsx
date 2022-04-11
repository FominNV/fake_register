import { FC } from 'react'
import profile from 'assets/images/profile.jpg'
import { ReactComponent as Phone } from 'assets/icons/ContactCard/phone.svg'
import { IContactCardProps } from './types'

import './styles.scss'

const ContactCard: FC<IContactCardProps> = ({ name, phone }) => {
  return (
    <div className="ContactCard">
      <img
        src={profile}
        alt="user_photo"
        className="ContactCard__img"
      />

      <div className="ContactCard__user">
        <p className="ContactCard__user_name">{name}</p>
        <a
          href={`tel:${phone}`}
          className="ContactCard__user_phone"
        ><Phone
          width={32}
          height={32}
        />
        </a>
      </div>
    </div>
  )
}

export default ContactCard
