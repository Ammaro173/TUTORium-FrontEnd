import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = ({ login, setLogin }) => {

  const [isLoggedin, setIsLoggedin] = useState(login);

  let show = false;
  const [curr, setCurr] = useState("Technology");

  useEffect(() => {
    setIsLoggedin(localStorage.getItem("login"));
  }, []);

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

      <div
        className="container d-flex align-items-center"
        style={{ gap: "20px" }}
      >
        <h1 className="logo me-auto">
          <Link href="/Home">TUTORium</Link>
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link className="active" href="/Home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Profile">Profile</Link>
            </li>

            <li
              className="dropdown"
              style={{ cursor: "pointer", marginLeft: "30px", fontWeight: 510 }}
            >
              <Link href="#">
                <div>
                  Categories <i className="bi bi-chevron-down" />
                </div>
              </Link>
              <ul>
                <li>
                  <Link href="/Courses_Art"><a
                    href="/Courses_Art"
                    name="Arts and Crafts"
                    onClick={(e) => setCurr(e.target.name)}
                  >
                    Arts and Crafts
                    </a></Link>
                </li>

                <li>
                  <Link href="/Courses_Tech">
                    <a
                      href="/Courses_Tech"
                      type="submit"
                      name="Technology"
                      onClick={(e) => {
                        setCurr(e.target.name);
                        console.log(curr);
                      }}
                    >
                      Technology
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/Courses_Health">Health</Link>
                </li>
                <li>
                  <Link href="/Courses_Sports">Sports</Link>
                </li>
                <li>
                  <Link href="/Courses_Sciences">Sciences</Link>
                </li>
                <li>
                  <Link href="/Courses_Buisness">Buisness</Link>
                </li>
                <li>
                  <Link href="/Courses_Languages">Languages</Link>
                </li>
                <li>
                  <Link href="/Courses_Beauty">Beauty</Link>
                </li>
                <li>
                  <Link href="/Courses_Cooking">Cooking</Link>
                </li>
                <li>
                  <Link href="/Courses_Agriculture">Agriculture</Link>
                </li>
                <li>
                  <Link href="/Courses_Music">Music</Link>
                </li>
                <li>
                  <Link href="/Courses_Others">Others</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle dropdown" />
        </nav>

        {isLoggedin ? (
          <div>
            <Link href="/Logout" className="get-started-btn">
              Logout
            </Link>
          </div>
        ) : (
          <div>
            <Link href="/Login" className="get-started-btn">
              Login/Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
