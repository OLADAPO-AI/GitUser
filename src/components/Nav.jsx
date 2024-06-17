import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsTextParagraph,
  BsStack,
} from 'react-icons/bs'
import { navItems } from '../assets/Data'
import { useGlobalcontext } from '../context'

const Navbar = () => {
  const { toggle, setToggle } = useGlobalcontext()
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const [drop, setDrop] = useState(toggle)

  const handleDrop = () => {
    setDrop(!drop)
  }

  return (
    <div className=" flex flex-row justify-between align-middle p-4 ">
      <div className="  w-2/3 justify-center flex flex-col ">
        <h2 className="text-[30px] font-semibold text-left text-[#1b417a]">
          Oladapo Github
        </h2>
      </div>

      <div className="justify-center relative flex flex-row align-middle gap-3 mt-6">
        {/* big navbar */}
        <div className="  md:block hidden ">
          <ul className=" flex flex-row justify-between font-medium text-[#1b417a] text-[14px] font-montserrat gap-4 align-middle">
            {navItems.map((nav) => {
              return (
                <li key={nav.id}>
                  <NavLink to={nav.path}>{nav.name}</NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        {/* small navbar */}
        <div
          className={` sm:hidden block absolute bg-slate-300 top-[-80px] ${
            drop ? 'right-[400px]' : 'right-[150px]'
          }   h-[500px] w-[300px] transition-all ease-in duration-500`}
        >
          <ul className=" flex flex-col justify-between mt-[50px] text-[14px] font-montserrat gap-4 align-middle">
            {navItems.map((nav) => {
              return (
                <li key={nav.id}>
                  <NavLink to={nav.path}>{nav.name}</NavLink>
                </li>
              )
            })}
          </ul>
          <button onClick={handleToggle} className="  mt-[100px] text-2xl">
            {toggle ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
          </button>
        </div>
        <div className=" flex flex-row justify-center align-middle mb-6 gap-3">
          <button
            onClick={handleToggle}
            className="  text-2xl md:block hidden text-slate-200"
          >
            {toggle ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
          </button>
          <button onClick={handleDrop} className=" block md:hidden text-2xl">
            {drop ? <BsStack /> : <BsTextParagraph />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
