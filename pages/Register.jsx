import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import Router from "next/router";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState();

  const handleChange = (e) => {
    setUserData(
      Object.freeze({
        ...userData,
        [e.target.name]: e.target.value || null,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    axios.post("http://127.0.0.1:8000/api/register/", userData).then((res) => {
      Router.push("/Login");
    });
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link href="assets/css/style.css" rel="stylesheet" />



      <Navbar />

      <main id="register" className="about">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Register Now!</h2>
          </div>
        </div>
        {/* End Breadcrumbs */}

        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <div className="flex flex-col items-center w-full p-4 bg-white space-y-9 md:w-1/2">
                  {/* welcome */}

                  {/* inputs */}
                  <form className="php-email-form button">
                    <div className=" form-group p-1">
                      <input
                        className="form-control "
                        placeholder="First Name"
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                      />
                    </div>

                    <div className=" form-group p-1">
                      <input
                        className="form-control "
                        placeholder="Last Name"
                        name="last_name"
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                    <div className=" form-group p-1">
                      <input
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        type="email"
                      />
                    </div>

                    <div className=" form-group p-1">
                      <input
                        className="form-control"
                        placeholder="username"
                        name="username"
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                    <div className=" form-group p-1">
                      <input
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        type="password"
                      />
                    </div>
                    <div className=" form-group p-1">
                      <input
                        className="form-control"
                        placeholder="Repeat Password"
                        name="ensure_password"
                        onChange={handleChange}
                        type="password"
                      />
                    </div>

                    <label className="p-1">
                      <input type="checkbox" value={true} />
                      <span> </span>Register as Tutor
                    </label>

                    <div className="text-center">
                      <button
                        className=" px-5 py-1 mt-2 "
                        type="submit"
                        onClick={handleSubmit}
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

      <Footer />
    </>
  );
};

export default Register;
