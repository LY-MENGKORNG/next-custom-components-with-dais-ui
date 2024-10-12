"use client"

import { TaostProps } from "@types"
import React from "react"

const Toast = ({ title, message, position, type }: TaostProps) => {
  return (
    <div className={`toast toast-${position?.[0]} toast-${position?.[1]}`}>
      <div className={`alert alert-${type}`}>
        <div>
          <h3 className='text-lg font-medium'>{title}</h3>
          <h3 className='font-thin'>{message}</h3>
        </div>
      </div>
    </div>
  )
}

export default Toast
