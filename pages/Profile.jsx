import React from "react";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Profile = () => {
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

      <section id="profileform" className="about">
        <form className="php-email-form">
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  />

                  <span className="text-black-50">edogaru@mail.com.my</span>
                  <span>attached file here</span>
                  <Link href="/ProfileEdit">
                    <button
                      className="btn btn-primary profile-button"
                      type="submit"
                    >
                      Edit Profile
                    </button>
                  </Link>
                  <span> </span>
                </div>
              </div>

              <div className="col-md-4 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right pt-5">name</h4>
                  </div>

                  <div className="row mt-3 w-auto">
                    <p className="pt-2 ">Hello, this is the bio</p>

                    <h5 className="pt-3 ">Education</h5>
                    <p className="pt-2 ">Put education here</p>
                    <h5 className="pt-3 ">Experiences</h5>
                    <p className="pt-2 ">Experiences here</p>

                    <h5 className="pt-3">Skills</h5>
                    <ul className="pt-2 ">
                      <li>skill</li>
                      <li>skill</li>
                      <li>skill</li>
                      <li>skill</li>
                    </ul>

                    <p className="pt-2 ">Location: your location</p>
                    <p>Phone number</p>
                  </div>
                </div>
                <div className="mt-5 text-center "></div>
              </div>

              <div className="col-md-4 ">
                <div className="p-3 py-5">
                  <div className="col-mg-4 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h4 className="text-right pt-5">My Courses</h4>

                    <ul className="pt-5">
                      <li>
                        <i className="bi bi-check-circle" />{" "}
                        <a href="/">Course Name</a>
                      </li>
                      <li>
                        <i className="bi bi-check-circle" />
                        <a href="/">Course Name</a>
                      </li>
                      <li>
                        <i className="bi bi-check-circle" />
                        <a href="/">Course Name</a>
                      </li>
                      <li>
                        <i className="bi bi-check-circle" />
                        <a href="/">Course Name</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Profile;
