import Navbar from './Navbar'
import Footer from "./Footer";


const Home = () => {

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



     <Navbar/>



      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
      >
        
        <div className="container position-relative" data-aos-delay={100}>
          <h1>
            Learning Today,
            <br />
            Leading Tomorrow
          </h1>
          <h2>
            Welcome To TUTORium, <br /> Where You Can Learn Or Teach Anything!
          </h2>
          <a href="/#features" className="btn-get-started">
            Get Started!
          </a>
        </div>
      </section>
      {/* End Hero */}




      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2 " id="imghome">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>Learning For Everyone</h3>
                <p className="fst-italic">
                  TUTORium is a web application that allows anyone to either
                  offer teaching classes or to request them in any field!
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" /> Students can also be
                    teachers!
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Classes can be arranged
                    or held by our TUTORium video meetings!
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Students can easily
                    check for the nearset, highest rating classes.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Teachers/students can
                    choose to have private classes.
                  </li>
                </ul>
                <p>
                  Our vision is to spread knowledge in all fields through giving
                  the chance to everyone at any age to express their skills and
                  abilities.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}





        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts section-bg mb-4"></section>
        {/* End Counts Section */}





        {/* ======= Categories Section ======= */}
        <section id="features" className="features">
          <div className="text-center m-4 ">
            <h3>Courses Categories</h3>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <i
                    className="ri-paint-brush-line"
                    style={{ color: "#e361ff" }}
                  />
                  <h3>
                    <a href="/Courses">Arts and Crafts</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-code-s-slash-fill"
                    style={{ color: "#ff5828" }}
                  />
                  <h3>
                    <a href="/Courses">Technology</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-mental-health-line"
                    style={{ color: "#e80368" }}
                  />
                  <h3>
                    <a href="/Courses">Health</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i
                    className="ri-football-line"
                    style={{ color: "#b2904f" }}
                  />
                  <h3>
                    <a href="/Courses">Sports</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-microscope-line"
                    style={{ color: "#47aeff" }}
                  />
                  <h3>
                    <a href="/Courses">Sciences</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-bar-chart-box-line"
                    style={{ color: "#5578ff" }}
                  />
                  <h3>
                    <a href="/Courses">Business</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-file-list-3-line"
                    style={{ color: "#11dbcf" }}
                  />
                  <h3>
                    <a href="/Courses">Languages</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-markup-fill" style={{ color: "#4233ff" }} />
                  <h3>
                    <a href="/Courses">Beauty</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-restaurant-line"
                    style={{ color: "#ffa76e" }}
                  />
                  <h3>
                    <a href="/Courses">Cooking</a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className=" ri-earth-line" style={{ color: "#ffbb2c" }} />
                  <h3>
                    <a href="/Courses">Agriculture</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-disc-line" style={{ color: "#b20969" }} />
                  <h3>
                    <a href="/Courses">Music</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-fingerprint-line"
                    style={{ color: "#29cc61" }}
                  />
                  <h3>
                    <a href="/Courses">Others</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}





        {/* ======= Trainers Section ======= */}
        <section id="trainers" className="trainers">
          <div className="container">
            <div className="row" >
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img
                    src="assets/img/trainers/trainer-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-content">
                    <h4>Walter White</h4>
                    <span>Web Development</span>
                    <p>
                      Magni qui quod omnis unde et eos fuga et exercitationem.
                      Odio veritatis perspiciatis quaerat qui aut aut aut
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img
                    src="assets/img/trainers/trainer-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-content">
                    <h4>Sarah Jhinson</h4>
                    <span>Marketing</span>
                    <p>
                      Repellat fugiat adipisci nemo illum nesciunt voluptas
                      repellendus. In architecto rerum rerum temporibus
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img
                    src="assets/img/trainers/trainer-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="member-content">
                    <h4>William Anderson</h4>
                    <span>Content</span>
                    <p>
                      Voluptas necessitatibus occaecati quia. Earum totam
                      consequuntur qui porro et laborum toro des clara
                    </p>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Trainers Section */}


      </main>
      {/* End #main */}



      <Footer/>
    </>
  );
};

export default Home;
