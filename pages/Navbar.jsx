import React from 'react'

const Navbar = () => {
  return (
    <header id="header" className="fixed-top">
      
        <link
        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />

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
                <a href="/Courses">Arts and Crafts</a>
              </li>

              <li>
                <a href="/Courses">Technology</a>
              </li>
              <li>
                <a href="/Courses">Health</a>
              </li>
              <li>
                <a href="/Courses">Sports</a>
              </li>
              <li>
                <a href="/Courses">Sciences</a>
              </li>
              <li>
                <a href="/Courses">Business</a>
              </li>
              <li>
                <a href="/Courses">Languages</a>
              </li>
              <li>
                <a href="/Courses">Beauty</a>
              </li>
              <li>
                <a href="/Courses">Cooking</a>
              </li>
              <li>
                <a href="/Courses">Agriculture</a>
              </li>
              <li>
                <a href="/Courses">Music</a>
              </li>
              <li>
                <a href="/Courses">Others</a>
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