import React from "react"
import "./styles/global.css"
import classes from "./styles/container.css"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <div className="container">
        <Navbar />
        {/* <p>Soon will be here...</p> */}
      </div>
    </div>
  )
}
