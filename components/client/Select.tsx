import { SelectProps } from "@types"
import React from "react"

const Select = ({ items, color, title }: SelectProps) => {
  return (
    <select className={`select ${color ? color : ""} w-full max-w-xs`}>
      {title ? (
        <option
          disabled
          selected>
          {title}
        </option>
      ) : null}
      {items.map(({ value, label }, index) => (
        <option
          key={index}
          value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default Select
