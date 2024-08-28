import React from 'react'
import "./Card.css"
function Card(props) {
  return (
    <>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="card-img" />
        <h3 className="card-heading">{props.title}</h3>
        <p className="card-disc">{props.description}</p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1724105266499-fceb8fbe7bb5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="card-img" />
        <h3 className="card-heading">This is manu</h3>
        <p className="card-disc"></p>
      </div>
      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1669050701946-d34455dce075?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="card-img" />
        <h3 className="card-heading"></h3>
        <p className="card-disc"></p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1549002942-c6af9c116f79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="card-img" />
        <h3 className="card-heading"></h3>
        <p className="card-disc"></p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="card-img" />
        <h3 className="card-heading"></h3>
        <p className="card-disc"></p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1724198169550-ba2fde71cfc7?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="card-img" />
        <h3 className="card-heading"></h3>
        <p className="card-disc"></p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1655803346107-ffc081d81d07?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="card-img" />
        <h3 className="card-heading"></h3>
        <p className="card-disc"></p>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1723654458465-afe98a2f7b32?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="" className="card-img" />
        <h3 className="card-heading"></h3>
        <p className="card-disc"></p>
      </div>
    </>
  )
}

export default Card
