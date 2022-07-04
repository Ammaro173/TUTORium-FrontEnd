import React, { useState } from 'react'
import Courses from "./Courses_Art";

const Navbar = () => {
  let show = false
  const [curr, setCurr] = useState('Technology');


  return (


    <header id="header" className="fixed-top">
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <meta content="" name="description" />
      <meta content="" name="keywords" />

      <link
        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      {/* <Courses curr={curr} /> */}

      < div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="/Home">TUTORium</a>
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="active" href="/Home">
                Home
              </a>
            </li>
            <li>
              <a href="/Profile">Profile</a>
            </li>

            <li className="dropdown">
              <a href="#">
                <span>Categories</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <a href="/Courses_Art" name="Arts and Crafts" onClick={(e) => setCurr(e.target.name)}>Arts and Crafts</a>
                </li>

                <li>
                  <a href="/Courses_Tech" type='submit' name="Technology" onClick={(e) => { setCurr(e.target.name); console.log(curr) }} >Technology</a>
                </li>
                <li>
                  <a href="/Courses_Health">Health</a>
                </li>
                <li>
                  <a href="/Courses_Sports">Sports</a>
                </li>
                <li>
                  <a href="/Courses_Sciences">Sciences</a>
                </li>
                <li>
                  <a href="/Courses_Buisness">Buisness</a>
                </li>
                <li>
                  <a href="/Courses_Languages">Languages</a>
                </li>
                <li>
                  <a href="/Courses_Beauty">Beauty</a>
                </li>
                <li>
                  <a href="/Courses_Cooking">Cooking</a>
                </li>
                <li>
                  <a href="/Courses_Agriculture">Agriculture</a>
                </li>
                <li>
                  <a href="/Courses_Music">Music</a>
                </li>
                <li>
                  <a href="/Courses_Others">Others</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle dropdown" />
        </nav>
        <div>

          <a href="/Login" className="get-started-btn">
            Login
          </a>

        </div>



      </div >

    </header >

  )
}

export default Navbar