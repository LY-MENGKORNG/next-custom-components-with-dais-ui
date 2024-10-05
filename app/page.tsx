"use client"

import { CustomBtn, CustomDropdown, CustomTable } from "@/components"
import { DROPDOWN_ITEMS, USERS } from "@/constants"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <div className='flex gap-5 items-center'>
        <CustomBtn
          title='Click me!'
          loading={loading}
          color='btn-accent'
          size='btn-md'
          onClick={() => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 1000)
          }}
        />

        <CustomDropdown
          title='Dropdown'
          items={DROPDOWN_ITEMS}
        />
      </div>

      <div className='mt-5'>
        <CustomTable
          cols={["Name", "Job", "Favorites", " "]}
          rows={USERS}>
          {USERS.map(
            ({ name, pic, country, job, subJob, favorite, checked }, index) => (
              <tr key={index}>
                <th>
                  <input
                    type='checkbox'
                    placeholder='checkbox'
                    className='checkbox'
                    onChange={() => {
                      checked = !checked
                    }}
                    onClick={() => {
                      checked = !checked
                    }}
                    checked={checked}
                  />
                </th>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle h-12 w-12'>
                        <Image
                          src={pic ? pic : "/2@94.webp"}
                          alt='Avatar Tailwind CSS Component'
                          width={75}
                          height={75}
                        />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>{name}</div>
                      <div className='text-sm opacity-50'>{country}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job}
                  <br />
                  <span className='badge badge-ghost badge-sm'>{subJob}</span>
                </td>
                <td>{favorite}</td>
                <td>
                  <CustomBtn
                    title='detail'
                    size='btn-sm'
                  />
                </td>
              </tr>
            )
          )}
        </CustomTable>
      </div>
    </div>
  )
}
