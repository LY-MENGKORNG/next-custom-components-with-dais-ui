import { User } from "@/types"
import React from "react"

interface DropdownItemsType {
  text: string
  href?: string
  icon?: React.ReactNode
}

export const DROPDOWN_ITEMS: DropdownItemsType[] = [
  { text: "Dropdown 1", href: '/' },
  { text: "Dropdown 2", icon: "" },
  { text: "Dropdown 3", },
]

export const USERS: User[] = [
  { name: "Jonh Smith", country: "United States", job: "Computer Science", subJob: "Desktop Support Technician", favorite: "Laugh", checked: true },
  { name: "Jonh Doe", country: "UK", job: "Computer Science", subJob: "Desktop Support Technician", favorite: "Laugh", checked: false },
  { name: "k'pum pit", country: "Khmer", job: "Developer", subJob: "Desktop Support Technician", favorite: "Laugh", checked: false },
  { name: "Denis", country: "French", job: "Computer Science", subJob: "Desktop Support Technician", favorite: "Laugh", checked: false },
]