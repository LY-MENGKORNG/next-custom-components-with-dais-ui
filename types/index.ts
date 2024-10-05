import { MouseEventHandler } from "react"

export interface User {
  name: string
  country: string
  pic?: string
  job: string
  subJob: string
  favorite: string
  checked?: boolean
}

export type BtnColor = 'btn-neutral' | 'btn-primary' | 'btn-secondary' | 'btn-accent' | 'btn-accent' | 'btn-info' | 'btn-success' | 'btn-warning' | 'btn-error' | 'btn-ghost' | 'btn-link' | 'btn-outline' | 'btn-active' | 'btn-disabled' | 'glass' | 'no-animation'

export interface CustomBtnProps {
  title: string
  type?: 'button' | 'reset' | 'submit'
  style?: string
  color?: BtnColor
  size?: 'btn-lg' | 'btn-md' | 'btn-sm' | 'btn-xs' | 'btn-wide' | 'btn-block' | 'btn-circle' | 'btn-square'
  icon?: React.ReactNode
  loading?: true | false
  disable?: true | false
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

export interface CustomDropdownProps {
  title: string
  items: { text: string, href?: string, icon?: React.ReactNode }[]
}

export interface CustomTableProps {
  cols: Array<string | boolean>
  rows: User[]
  children?: React.ReactNode
}