import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <h1 className="logo">AptekLab</h1>
        <ul className="navbar-list">
          <li className="navbar-list--item">
            <Link className="navbar-list--link" to="/">
              Drug Search
            </Link>
          </li>
          <li className="navbar-list--item">
            <Link to="/">Online Store</Link>
          </li>
          <li className="navbar-list--item">
            <Link to="/">Mobile App</Link>
          </li>
          <li className="navbar-list--item">
            <Link to="/">Help</Link>
          </li>
        </ul>
        <div className="navbar-action">
          <span className="navbar-action--search"></span>
          <button className="navbar-action--button">Sign In</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar
