import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'

const RepoButton = ({ handleModal }) => {
  //   const [modal, showModal] = React.useState(true)

  //   const handleModal = () => {
  //     showModal(!modal)
  //   }

  return (
    <div className="relative">
      <span className=" absolute top-3 left-2">
        <FaPlusCircle />
      </span>
      <button
        onClick={handleModal}
        className="px-8 py-2 font-semibold text-[#1b417a] rounded-xl shadow-md bg-slate-100"
      >
        Create Repository
      </button>
    </div>
  )
}

export default RepoButton
