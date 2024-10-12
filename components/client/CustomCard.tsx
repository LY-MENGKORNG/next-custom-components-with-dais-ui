"use client"

import React from "react"
import CustomBtn from "./CustomBtn"
import { CustomCardProps } from "@types"
import Image from "next/image"

const CustomCard = ({ title, description, img, children, className }: CustomCardProps) => {
  return (
    <div className='card bg-base-100 w-96 shadow-xl cursor-pointer'>
      <figure>
        <img
          src={img || `https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {title}
        </h2>
        <p>{description}</p>
        <div className={`card-actions ${className}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CustomCard
