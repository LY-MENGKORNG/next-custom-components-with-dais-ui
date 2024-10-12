"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const getIconPath = (part: string) => {
  switch (part) {
    case "not-link":
      return "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    default:
      return "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  }
}

const Breadcrumb = () => {
  const pathName: string = usePathname()
  const pathParts: string[] = pathName.split("/").filter(Boolean)
  // if (pathName === "/") return

  return (
    <div className='breadcrumbs text-sm'>
      <ul>
        <li>
          <Link
            href='/'
            className='text-blue-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='h-4 w-4 stroke-current'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
              />
            </svg>
            <span className='ml-1'>Home</span>
          </Link>
        </li>

        {pathParts.map((part, index) => {
          const href = `/${pathParts.slice(0, index + 1).join("/")}`

          return (
            <li key={index}>
              {index === pathParts.length - 1 ? (
                <span className='inline-flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='h-4 w-4 stroke-current'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d={getIconPath("not-link")}
                    />
                  </svg>
                  {part.charAt(0).toUpperCase() + part.slice(1)}
                </span>
              ) : (
                <Link
                  href={href}
                  className='text-blue-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='h-4 w-4 stroke-current'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d={getIconPath(part)}
                    />
                  </svg>
                  <span className='ml-1'>
                    {part.charAt(0).toUpperCase() + part.slice(1)}
                  </span>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb
