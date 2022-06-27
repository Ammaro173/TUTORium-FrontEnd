

const Art = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Courses - Mentor Bootstrap Template</title>
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
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link
    href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Template Main CSS File */}
  <link href="assets/css/style.css" rel="stylesheet" />




  {/* ======= Header ======= */}
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
          {/* .navbar */}
          
        </div>
  </header>
  {/* End Header */}




  <main id="main" >
    {/* ======= Breadcrumbs ======= */}
    <div className="breadcrumbs">
      <div className="container">
        <h2>Arts And Crafts Courses</h2>
      </div>
    </div>
    {/* End Breadcrumbs */}


    
    {/* ======= Courses Section ======= */}
    <section id="courses" className="courses">
      <div className="container" >
        <div className="row" >
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-item">
              <img
                src="assets/img/course-1.jpg"
                className="img-fluid"
                alt="..."
              />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>
                  <a href="course-details.html">Course Name</a>
                </h3>
                  <p className="price">Price</p>
                </div>
                <p>
                  Course Breif Description
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img
                      src="assets/img/trainers/trainer-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <span>Tutor</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user" />
                    &nbsp;50 &nbsp;&nbsp;
                    <i className="bx bx-heart" />
                    &nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End Course Item*/}
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img
                src="assets/img/course-2.jpg"
                className="img-fluid"
                alt="..."
              />
              <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>
                  <a target="_blank" href="/CourseDetails">Course Name</a>
                </h3>
                  <p className="price">Price</p>
                </div>
                <p>
                Course Breif Description
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img
                      src="assets/img/trainers/trainer-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <span>Tutor</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user" />
                    &nbsp;35 &nbsp;&nbsp;
                    <i className="bx bx-heart" />
                    &nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End Course Item*/}
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="course-item">
              <img
                src="assets/img/course-3.jpg"
                className="img-fluid"
                alt="..."
              />
              <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>
                  <a href="course-details.html">Course Name</a>
                </h3>
                  <p className="price">Price</p>
                </div>
                <p>
                Course Breif Description
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img
                      src="assets/img/trainers/trainer-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <span>Tutor</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user" />
                    &nbsp;20 &nbsp;&nbsp;
                    <i className="bx bx-heart" />
                    &nbsp;85
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End Course Item*/}
        </div>
      </div>
    </section>
    {/* End Courses Section */}
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

  )
}

export default Art