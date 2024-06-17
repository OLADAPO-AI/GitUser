import React from 'react'
import { MdLink, MdAssignment, MdExplore } from 'react-icons/md'

const Cards = ({ css, date, pub }) => {
  return (
    <article
      id="card"
      className=" rounded-lg shadow-xl bg-slate-800 border-2 border-gray-600 flex flex-col justify-start items-start w-[300px] p-3"
    >
      <header className="card-header">
        <h2 className="card-title text-xl font-montserrat font-semibold text-gray-300">
          {css}
        </h2>
      </header>
      <section className=" text-gray-300 gap-2 flex flex-row justify-center align-middle">
        <MdLink className=" mt-[6px]" />
        <h3>{css}</h3>
      </section>
      <section className="  text-gray-300 gap-2 flex flex-row justify-center align-middle">
        <MdAssignment className=" mt-[6px]" />
        <h3>{date}</h3>
      </section>
      <section className=" text-gray-300 gap-2  flex flex-row justify-center align-middle">
        <MdExplore className=" mt-[6px]" />
        <h3>{pub}</h3>
      </section>
      <button className=" mt-2 bg-gradient-to-r from-[#ffffff] to-[#000000] hover:from-white hover:to-white hover:text-black focus:outline-none font-medium focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 py-2 w-4/6 lg:w-full rounded-lg text-white font-semi-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        details
      </button>
    </article>
  )
}

export default Cards
