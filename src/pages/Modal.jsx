import React from 'react'
import { Form } from 'react-router-dom'

const Modal = () => {
  return (
    <div id="dialog" className="flex flex-row justify-center mt-4">
      <Form
        method="dialog"
        className=" flex flex-col  justify-start gap-4 items-start p-3 border-2 border-slate-600 bg-slate-600  rounded-xl w-2/5"
      >
        <div className="space-x-3 text-lg text-gray-200">
          <label>Repository name</label>
          <input type="text" required className=" rounded-lg" />
        </div>
        <div className="space-x-3 text-lg text-gray-200">
          <label>Description</label>
          <input type="text" required className=" rounded-lg" />
        </div>
        <div className="space-x-3 text-lg text-gray-200">
          <label>Add a README file</label>
          <input
            type="checkbox"
            name="Add a README file"
            className=" rounded-lg"
          />
        </div>
        <button className=" mt-2 bg-gradient-to-r from-[#ffffff] to-[#000000] hover:from-white hover:to-white hover:text-black focus:outline-none font-medium focus:ring focus:ring-purple-300 active:bg-blue-700 px-4 py-2 w-4/6 lg:w-full rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          create a repo
        </button>
      </Form>
    </div>
  )
}

export default Modal
