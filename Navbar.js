import React from 'react'
// import { Container } from 'react-bootstrap'
import EDYODA from'../Image/EDYODA.png'
import './Nav.css'
import search from'../Image/search icon.png'

 const Navbar = () => {
  return (
    <div className='Nav' id='Nav'> 

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div className='row'>
        <div className='col-sm-2'>
     <img  id="img1"src={EDYODA} alt=''/>
     </div>
     <div className='col-sm-2'>
     <ul>
     
     {/* <select>
        <option>
     <p className='course'>Courses</p>
     </option>
     </select>
     </li>
     
     <li>
     <select>
        <option>
     <p id='Program'>Programs</p>
     </option>
     </select> */}
     {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
     </li> */}
     <li id="li">
        <select id='option'><option><p>Course</p></option>
        <option>Software Testing</option>
        <option>Web Development</option>
        </select>
     </li>
     </ul>
     </div>
     <div className='col-sm-2'>
<ul>
     <li id='li'>
        <select id='option'><option >Program</option></select>
     </li>
     </ul>
     </div>
     <div className='col-sm-3'>
     {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      </div>
      <div className='col-sm-1'>
      <img  id="img2" src={search}  alt='' />
      </div>
      <div className='col-sm-1'>
        
       <p id="ptag"> Login</p>
        </div>
        <div className='col-sm-1'>
        <button id='join'>JOIN NOW</button>
        
        </div>
        

        
      
      
     
     </div>
     </div>
     </nav>
     
    


</div>
  )
}

export default Navbar
