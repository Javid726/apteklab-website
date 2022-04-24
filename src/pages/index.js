import React from "react"
import "./styles/global.css"
import classes from "./styles/container.css"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <p className="container-paragraph">Tezliklə xidmətinizdəyik...</p>
      </div>
    </div>
  )
}
