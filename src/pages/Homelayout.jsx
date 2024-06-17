import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

const Homelayout = () => {
  //   const [modal, showModal] = React.useState(true)

  return (
    <div className=" bg-gray-900 h-screen relative mx-auto w-screen ">
      <nav>
        <Nav />
      </nav>
      <section className="bg-gray-900">
        <Outlet />
      </section>
      {/* <div className="absolute w-full  z-30 bg-gray-600 h-full  top-0 bottom-0 ">
        {modal ? <Modal /> : ''} 
      </div> */}
    </div>
  )
}

export default Homelayout
