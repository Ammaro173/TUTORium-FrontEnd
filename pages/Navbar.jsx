import React, { useState } from 'react'
import Link from 'next/link'


const Navbar = ({login, setLogin}) => {
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
          <Link href="/Home"><a href="/Home">TUTORium</a></Link>
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
            <Link href="/Home"><a className="active" href="/Home">Home</a></Link>
            </li>
            <li>
               <Link href="/Profile"><a href="/Profile">Profile</a></Link>
            </li>

            <li className="dropdown">
               <Link href="/#"><a href="#">
                <span>Categories</span> <i className="bi bi-chevron-down" />
              </a></Link>
              <ul>
                <li>
                   <Link href="/Courses_Art"><a href="/Courses_Art" name="Arts and Crafts" onClick={(e) => setCurr(e.target.name)}>Arts and Crafts</a></Link>
                </li>

                <li>
                   <Link href="/Courses_Tech"><a href="/Courses_Tech" type='submit' name="Technology" onClick={(e) => { setCurr(e.target.name); console.log(curr) }} >Technology</a></Link>
                </li>
                <li>
                   <Link href="/Courses_Health"><a href="/Courses_Health">Health</a></Link>
                </li>
                <li>
                   <Link href="/Courses_Sports"><a href="/Courses_Sports">Sports</a></Link>
                </li>
                <li>
                   <Link href="/Courses_Sciences"><a href="/Courses_Sciences">Sciences</a></Link>
                </li>
                <li>
                   <Link href="/Courses_Buisness"><a href="/Courses_Buisness">Buisness</a></Link>
                </li>
                <li>
                   <Link href="/Courses_Languages"><a href="/Courses_Languages">Languages</a></Link>
                </li>
                <li>
                   <Link href="/Courses_Beauty"><a href="/Courses_Beauty">Beauty</a></Link>
                </li>
                <li>
                   <Link href="/Courses_Cooking"><a href="/Courses_Cooking">Cooking</a></Link>
                </li>
                <li>
                   <Link href="/Courses_Agriculture"><a href="/Courses_Agriculture">Agriculture</a></Link>
                </li>
                <li>
                   <Link href="/Courses_Music"><a href="/Courses_Music">Music</a></Link>
                </li>
                <li>
                   <Link href="/Courses_Others"><a href="/Courses_Others">Others</a></Link>
                </li>
              </ul>
            </li>
            <li>
               <Link href="/Contact"><a href="/Contact">Contact</a></Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle dropdown" />
        </nav>

        {login ? (
          <div>
             <Link href="/Logout"><a href="/Logout" className="get-started-btn">
              Logout
            </a></Link>
          </div>
        ) : (
          <div>
             <Link href="/Login"><a href="/Login" className="get-started-btn">
              Login/Register
            </a></Link>
          </div>
        )}



      </div >

    </header >

  )
}

export default Navbar