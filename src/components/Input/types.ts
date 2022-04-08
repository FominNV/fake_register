import { Dispatch, SetStateAction } from "react"

export interface IInput {
  id: string
  label: string
  type: string
  placeholder?: string
}

export interface IInputProps extends IInput {
  setState: Dispatch<SetStateAction<string>>
}
