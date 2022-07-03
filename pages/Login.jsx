import React from "react";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from './Navbar';

const Login = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Login - Mentor Bootstrap Template</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
      <link href="assets/img/favicon.png" rel="icon" />
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
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
      <link href="assets/css/style.css" rel="stylesheet" />


      <Navbar/>




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
                        <a className="m-1 ">
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

      <Footer/>
    </>
  );
};

export default Login;
