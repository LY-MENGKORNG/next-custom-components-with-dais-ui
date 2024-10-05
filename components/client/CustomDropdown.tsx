"use client"
import { CustomDropdownProps } from "@/types"
import Link from "next/link"
import React from "react"

const CustomDropdown = ({ title, items }: CustomDropdownProps) => {
  return (
    <div className='dropdown'>
      <div
        tabIndex={0}
        role='button'
        className='btn m-1 btn-primary'>
        {title}
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>
        {items.map(({ text, href, icon }, index) => (
          <li key={index}>
            {icon}
            {href ? <Link href={href}>{text}</Link> : <a>{text}</a>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomDropdown
