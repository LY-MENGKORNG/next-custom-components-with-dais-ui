"use client"

import { ModalProps } from "@types"
import React from "react"
import CustomBtn from "./CustomBtn"

const Modal = ({ id, buttonText, children }: ModalProps) => {
  return (
    <>
      <dialog
        id={id}
        className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          {children}
        </div>
        <form
          method='dialog'
          className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
      <CustomBtn
        title={buttonText}
        onClick={() => {
          const modal = document.getElementById(`${id}`)
          if (modal instanceof HTMLDialogElement) modal.showModal()
        }}
      />
    </>
  )
}

export default Modal
