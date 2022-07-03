import React from 'react'

const Navbar = () => {
  return (
    <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
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
                <a href="/Art">Arts and Crafts</a>
              </li>

              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Health</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">Sciences</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Languages</a>
              </li>
              <li>
                <a href="#">Beauty</a>
              </li>
              <li>
                <a href="#">Cooking</a>
              </li>
              <li>
                <a href="#">Agriculture</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Others</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      <a href="/Login" className="get-started-btn">
        Login
      </a>

    </div>
  </header>
  )
}

export default Navbar