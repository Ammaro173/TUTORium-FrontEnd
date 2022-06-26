import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Login - Mentor Bootstrap Template</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
      {/* Favicons */}
      <link href="assets/img/favicon.png" rel="icon" />
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      {/* Vendor CSS Files */}
      <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
      <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
      <link
        href="assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link
        href="assets/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />
      {/* Template Main CSS File */}
      <link href="assets/css/style.css" rel="stylesheet" />

      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">TUTORium</a>
          </h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="active" href="/Home">
                  Home
                </a>
              </li>
        
              <li className="dropdown">
                <a href="#">
                  <span>Categories</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="#">Arts and Crafts</a>
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
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}

      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Login To TUTORium</h2>
          </div>
        </div>
        {/* End Breadcrumbs */}

        {/* ======= About Section ======= */}
        <section id="login" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <div className="flex flex-col items-center w-full p-4 bg-white space-y-9 md:w-1/2">
                  {/* welcome */}

                  {/* inputs */}
                  <form className="php-email-form">
                    <div className="form-group p-1">
                      <input
                        className="form-control"
                        placeholder="Username"
                        type="text"
                      />
                    </div>
                    <div className="form-group p-1">
                      <input
                        className="form-control"
                        placeholder="Password"
                        type="password"
                      />
                    </div>
                    <div className='text-center'>
                    <button className=" px-5 py-1 mt-2 " type="submit">
                      Login
                    </button>
                    </div>
                  </form>

                  {/* links */}
                  <div className="flex flex-col items-center py-1">
                    <p>
                      Join Us Now
                      <Link href="/Register">
                        <a className="m-1 text-blue-400 hover:underline">
                          Register here!
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
      </main>
      {/* End #main */}

      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Copyright
              <strong>
                <span> TUTORium</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype" />
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Login;
