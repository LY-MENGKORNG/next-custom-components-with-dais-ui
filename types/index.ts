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

export interface TaostProps {
  title: string
  message?: string
  type?: 'info' | 'success' | 'warn' | 'error'
  position?: ['top' | 'bottom', 'start' | 'end']
}

export interface ModalProps {
  id: string
  buttonText: string
  children?: React.ReactNode
}

export interface BadgeProps {
  title: string
  color?: 'badge-neutral' | 'badge-primary' | 'badge-secondary' | 'badge-accent' | 'badge-ghost'
  outline?: boolean
  children?: React.ReactNode
}

export interface SelectProps {
  items: Array<{
    label: string,
    value: string | number,
  }>
  color?: 'select-primary' | 'select-secondary' | 'select-accent' | 'select-ghost' | 'select-info' | 'select-success' | 'select-warning' | 'select-error'
  title?: string
}

export interface BreadcrumbProps {
  previous: Array<{
    label: string,
    value: string
  }>
  current: {label: string}
}

export interface CustomCardProps {
  title: string
  description?: string
  img?: string
  children?: React.ReactNode
  className?: string
}