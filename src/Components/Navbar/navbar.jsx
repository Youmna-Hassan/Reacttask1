import React from "react";
import logo from '../../../src/images/tasklogo.jfif'





export default function Navbar() {

    return <>
   <nav className=" navbar navbar-expand-lg ">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
  <img width="100" src={logo} alt="logo"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className=" mx-3 nav-item">
          <a className="navlink" href="#"aria-current="page">Features</a>
        </li>

        <li className=" mx-3 nav-item">
          <a className="navlink" href="#" aria-current="page">Pricing</a>
        </li>

        <li className="mx-3 nav-item">
          <a className="navlink" href="#" aria-current="page" >Blog</a>
        </li>

        <li className=" mx-3 nav-item">
          <a className="navlink" href="#" aria-current="page">Content</a>
        </li>
        
        
        
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className=" mx-2 nav-item">
      <button className="btn button1" type="submit">Log in</button>
        </li>
        <li className=" mx-2 nav-item">
      <button className=" btn button2" type="submit">Contact Us</button>
        </li>
        <li className="mx-2 nav-item">
      <button className="btn button3 " type="submit">Sign Up</button>
        </li>
        
      
        </ul>
    </div>
  </div>
</nav>
    </>
}