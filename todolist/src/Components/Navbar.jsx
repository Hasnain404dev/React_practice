import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex bg-violet-700 justify-evenly  text-white py-2">
        <div className="logo">
          <h1 className="logoText  text-xl font-bold font-sans cursor-pointer">iTask</h1>
        </div>

        <ul className="nav-ul flex  gap-9 " >
          <li className="navlist hover:font-bold  hover:border-b-2 cursor-pointer transition-all duration-75 ease-out  ">Home</li>
          <li className="navlist hover:font-bold hover:border-b-2 cursor-pointer transition-all duration-75">Tasks</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
