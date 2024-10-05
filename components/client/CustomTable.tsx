"use client"
import { CustomTableProps } from "@/types"
import React from "react"

const CustomTable = ({ cols, rows, children }: CustomTableProps) => {
  const handleCheck = (index: number) => {
    
  }
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>
              <label>
                <input
                  placeholder='check'
                  type='checkbox'
                  className='checkbox'
                />
              </label>
            </th>
            {cols.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export default CustomTable
