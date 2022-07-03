import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Register = () => {
  return (
    <>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Register - Mentor Bootstrap Template</title>
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


    <Navbar/>



    <main id="register" className="about">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs" >
        <div className="container">
          <h2>Register Now!</h2>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
            >
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <div className="flex flex-col items-center w-full p-4 bg-white space-y-9 md:w-1/2">
            {/* welcome */}

 

            {/* inputs */}
            <form className="php-email-form button">
            <div  className=" form-group p-1">
                
                <input
                  className="form-control "
                  placeholder="First Name"
                  type="text"
                />
              </div>

              <div  className=" form-group p-1">
                
                <input
                  className="form-control "
                  placeholder="Last Name"
                  type="text"
                />
              </div>
              <div  className=" form-group p-1">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="password"
                />
              </div>
              <div  className=" form-group p-1" >
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
              </div>

             
               <label className='p-1' id='tutorcheck'>
                <input  type="checkbox" value={true}  />
                   <span> </span>Register as Tutor</label>
        


              <div className='text-center'>
              <button
                className=" px-5 py-1 mt-2 "
                type="submit"
              >
                Register
              </button>
              </div>
            </form>

     
          </div>
            
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
  
    </main>





    
    <Footer/>
  </>
  
  )
}

export default Register