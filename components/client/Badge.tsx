import { BadgeProps } from "@types"
import React from "react"

const Badge = ({ color, outline, title, children }: BadgeProps) => {
  return (
    <div className={`badge ${color} ${outline ? "badge-outline" : ""}`}>
      <span>{children}</span>
      {title}
    </div>
  )
}

export default Badge
