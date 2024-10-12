"use client"

import {
  CustomBtn,
  CustomDropdown,
  Modal,
  Toast,
  Badge,
  Select,
  CustomCard,
  Skeleton,
} from "@components"
import { DROPDOWN_ITEMS } from "@/constants"
import { useState } from "react"

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <div className='flex flex-col w-full items-center justify-center gap-5'>
      <section className='flex gap-5 items-center justify-center rounded-md ring-[1px] p-2 w-full ring-green-300'>
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
        <Modal
          id='modal_1'
          buttonText='Open modal'>
          <h1>Hello world</h1>
        </Modal>
        <Badge
          color='badge-primary'
          title='In Progress'
        />
        <Toast
          title='🤌😒'
          type='warn'
          message='You have successfully confirmed'
          position={["top", "end"]}
        />
      </section>
      <section className='flex gap-5 items-center justify-center rounded-md ring-[1px] p-2 w-full ring-green-300'>
        <Select
          color='select-primary'
          // title="Please select you country"
          items={[
            { label: "CAMBODIA", value: "cambodia" },
            { label: "AMERICAN", value: "american" },
          ]}
        />
      </section>
      <section className='flex gap-5 items-center justify-center rounded-md ring-[1px] p-2 w-full ring-green-300'>
        <CustomCard
          title='Nike Air Zoom Pegasus 360'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ultricies neque.
            Quisque non eleifend dolor.'>
          <Badge
            title='NEW'
            color='badge-secondary'
          />
        </CustomCard>
      </section>
      <section className='flex gap-5 items-center justify-center rounded-md ring-[1px] p-2 w-full ring-green-300'>
        <Skeleton.CardSkeleton />
      </section>
    </div>
  )
}
