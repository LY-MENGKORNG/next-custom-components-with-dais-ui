"use client"
import { CustomBtnProps } from "@/types"

/**
 * @name {@link CustomBtn}
 * @description Button Component that for the whole application
 * @prop {`title`, `type`, `style`, `color`, `size`, `icon`, `onClick`, `loading`, `disable`, `children`, }: {@link CustomBtnProps}
 */
const CustomBtn = ({
  title,
  type,
  style,
  color,
  size,
  icon,
  loading,
  disable,
  onClick,
  children,
}: CustomBtnProps) => {
  const handleLoading = () => {
    title = !!loading ? (title = "Loading...") : title
    icon = !!loading ? "" : icon || ""
    return !!loading ? <span className='loading loading-spinner'></span> : ""
  }

  return (
    <button
      type={type}
      className={`btn ${color} ${style} ${size}`}
      onClick={onClick}
      disabled={loading || disable}>
      {handleLoading()}
      {children}
      {`${icon } ${title}`}
    </button>
  )
}

export default CustomBtn
