

const Contact = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Contact - Mentor Bootstrap Template</title>
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




  <main id="main">
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
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">

      <div className="container" >
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
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

export default Contact