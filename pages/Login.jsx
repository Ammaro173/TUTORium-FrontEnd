import React from "react";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState();

  const handleChange = (e) => {
    setUserData({
      ...userData, ///copy the old data and edit without deleting
      [e.target.name]: e.target.value || null,
    });
  };

  const getUserInfo = (token) => {
    var decoded = jwt_decode(token);
    return decoded;
  };

  const checkUser = (username, password) => {
    if (localStorage.getItem("access_token")) {
      const token = localStorage.getItem("access_token");
      const decodeToken = getUserInfo(token);

      if (decodeToken.username == username) {
        setLogin(true);
        localStorage.setItem("login", true);

        Router.push("/");

        const storageToken = localStorage.getItem("access_token");
        const myEmail = localStorage.getItem("email")
        console.log("hiu,", userData)
        axios
          .post(
            "https://tutorium.herokuapp.com/api/visitor-post",
            {
              name: userData.username,
              email: myEmail,
              password: userData.password,
            },
            {
              headers: {
                Authorization: `Bearer ${storageToken}`,
              },
            }
          )
          .catch((err) => {
            console.log(err);
          });
      } else {
        Router.push("/Register");
        alert("You don't have an account! PLease Register.");
      }
    } else {
      console.log(userData);
      axios
        .post("http://tutorium.herokuapp.com/api/token/", userData)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access);

          setLogin(true);
          localStorage.setItem("login", true);

          Router.push("/");
          const storageToken = localStorage.getItem("access_token");
          const myEmail = localStorage.getItem("email")
          
          axios
            .post(
              "https://tutorium.herokuapp.com/api/visitor-post",
              {
                name: userData.username,
                email: myEmail,
                password: userData.password,
              },
              {
                headers: {
                  Authorization: `Bearer ${storageToken}`,
                },
              }
            )
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          Router.push("/Register");
          alert("Please Register First!");
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    checkUser(username, password);
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

      <Navbar login={login} setLogin={setLogin} />

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
                  <form className="php-email-form" onSubmit={handleSubmit}>
                    <div className="form-group p-1">
                      <input
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                    
                    <div className="form-group p-1">
                      <input
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        type="password"
                      />
                    </div>
                    <div className="text-center">
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
                        <a className="m-1 ">Register here!</a>
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

      <Footer />
    </>
  );
};

export default Login;
