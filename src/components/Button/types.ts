import React from "react"

export enum ButtonBgColor {
  CLOUDY = "cloudy",
  BROWN_RED = "brownRed",
  PURPLE = 'purple'
}

export enum ButtonColor {
  WHITE = "white",
  GRAY = "gray"
}

export interface IButtonProps {
  name: string
  bgColor: ButtonBgColor
  color?: ButtonColor
  onClick?: (e: React.MouseEvent) => void
}
