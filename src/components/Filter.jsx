import React from 'react'

import { FaFilter } from 'react-icons/fa'

const Filter = () => {
  return (
    // <div>
    //   <div className="relative">
    //     <span className=" absolute top-3 left-2"></span>
    //     <button className="px-8 py-2 font-semibold text-slate-100 rounded-xl shadow-md  bg-[#1b417a]">
    //       Create Repository
    //     </button>
    //   </div>
    // </div>
    <div className=" relative ">
      <form className="flex items-center space-x-2">
        <select className="px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">filter</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="content">Content</option>
        </select>
      </form>
      <button className=" absolute left-[10px] top-3 text-xl text-blue-500">
        <FaFilter />
      </button>
    </div>
  )
}

export default Filter
