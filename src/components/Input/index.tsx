import { ChangeEvent, FC, MouseEvent, useCallback, useRef, useState } from "react"
import { ReactComponent as Clear } from "assets/icons/Input/clear.svg"
import classNames from "classnames"
import { IInputProps } from "./types"

import "./styles.scss"

const Input: FC<IInputProps> = ({ id, label, type, placeholder, setState }) => {
  const [inputValue, setInputValue] = useState<string>("")
  const input = useRef<Nullable<HTMLInputElement>>(null)

  const onChangeHandler = useCallback<EventFunc<ChangeEvent<HTMLInputElement>>>((event) => {
    setInputValue(event.currentTarget.value)
    setState(event.currentTarget.value)
  }, [setState])

  const clearInputValue = useCallback<EventFunc<MouseEvent>>((event) => {
    event.preventDefault()
    setInputValue("")
    setState("")
    input.current?.focus()
  }, [setState])

  const clearButtonClassName = classNames("Input__btn", {
    Input__btn_active: inputValue
  })

  return (
    <div className="Input">
      <label
        className="Input__label"
        htmlFor={id}
      >
        {label}
      </label>

      <div className="Input__input-block">
        <input
          id={id}
          type={type}
          value={inputValue}
          className="Input__inp"
          name={label}
          ref={input}
          placeholder={placeholder}
          onChange={onChangeHandler}
          autoComplete="on"
        />

        <button
          className={clearButtonClassName}
          onClick={clearInputValue}
        >
          <Clear />
        </button>
      </div>
    </div>
  )
}

export default Input
