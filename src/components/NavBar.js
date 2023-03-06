import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
<div >
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-3  ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home Sweet Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          
        </li>
        
        <li className="nav-item">
          <Link className="nav-link " to="/sponser">Sponsership</Link>
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Get Involved
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/volunteer">Volunteering</a></li>
            <li><a className="dropdown-item" href="/">Events</a></li>
            <li><a className="dropdown-item" href="/">Careers</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
         
        <li className="nav-item ">
          <a className="nav-link" href="/contact">Contact Us</a>
        </li>
        <li className="nav-item mx-3 mb-3">
          <Link className="nav-link " to="/donate"><button type="button" class="btn btn-primary">Donate Us</button></Link>
          
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 w-75 rounded-5" type="search" placeholder="Search" aria-label="Search"/>
        <a className='my-2'><box-icon name='search'></box-icon></a>
      </form>
    </div>
  </div>
</nav>
</div>
    
  )
}
