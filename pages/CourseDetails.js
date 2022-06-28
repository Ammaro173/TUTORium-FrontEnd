

const CourseDetails = () => {
    return (
      <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Mentor Bootstrap Template - Index</title>
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
            <a href="/Login" className="get-started-btn">
              Login
            </a>
          </div>
        </header>
  
  
  
  
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs" >
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            Feel free to contact us and give us your feedback. We will be glad to hear from you!
          </p>
        </div>
      </div>
      {/* End Breadcrumbs */}
  
    <main id="main" >
  
    
      {/* ======= Courses Section ======= */}
      <>
    <section id="course-details" className="course-details">
      <div className="container" >
        <div className="row">
          <div className="col-lg-8">
            <img
              src="assets/img/course-details.jpg"
              className="img-fluid"
              alt=""
            />
            <h3>Et enim incidunt fuga tempora</h3>
            <p>
              Qui et explicabo voluptatem et ab qui vero et voluptas. Sint
              voluptates temporibus quam autem. Atque nostrum voluptatum
              laudantium a doloremque enim et ut dicta. Nostrum ducimus est iure
              minima totam doloribus nisi ullam deserunt. Corporis aut officiis
              sit nihil est. Labore aut sapiente aperiam. Qui voluptas qui vero
              ipsum ea voluptatem. Omnis et est. Voluptatem officia voluptatem
              adipisci et iusto provident doloremque consequatur. Quia et porro
              est. Et qui corrupti laudantium ipsa. Eum quasi saepe aperiam qui
              delectus quaerat in. Vitae mollitia ipsa quam. Ipsa aut qui numquam
              eum iste est dolorum. Rem voluptas ut sit ut.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Trainer</h5>
              <p>
                <a href="#">Walter White</a>
              </p>
            </div>
            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Course Fee</h5>
              <p>$165</p>
            </div>
            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Available Seats</h5>
              <p>30</p>
            </div>
            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Schedule</h5>
              <p>5.00 pm - 7.00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  
    </main>
    {/* End main */}
  
  
  
  
  
  
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
  
  export default CourseDetails