import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderStyle.css"

const Header = () => {
  return (
    <div className='main_nav'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <Link className="nav-link " aria-current="page" to="/index">Data Entry  </Link>
        <Link className="nav-link " aria-current="page" to="/getdata">Display all </Link>
        <Link className="nav-link " aria-current="page" to="/maxtemp">MaxTemp </Link>
        <Link className="nav-link " aria-current="page" to="/mintemp">MinTemp </Link>
        <Link className="nav-link " aria-current="page" to="/search">Search </Link>
      </div>
        
    </div>
  </div>
</nav>
    </div>


  )
}

export default Header