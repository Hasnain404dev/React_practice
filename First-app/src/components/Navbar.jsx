import React from 'react'
import"./Navbar.css"
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
            <li className="list-item">Home</li>
            <li className="list-item">About Us</li>
            <li className="list-item">Career's</li>
            <li className="list-item">Our Work</li>
            <li className="list-item">Client Reviews</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
