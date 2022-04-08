import React, { FC } from "react"
import classNames from "classnames"
import { IButtonProps } from "./types"

import "./styles.scss"

const Button: FC<IButtonProps> = ({
  name,
  color,
  bgColor,
  onClick
}) => {
  const buttonClassName = classNames("Button", color, bgColor)

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
    >
      <div className="Button__filter" />
      <div className="Button__name">{name}</div>
    </button>
  )
}

export default React.memo(Button)
