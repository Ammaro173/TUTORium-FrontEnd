import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const ProfileEdit = () => {
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
      <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />

      <Navbar />

      <section className="about" id="profileform">
        <form className="php-email-form">
          <div className="container rounded bg-white mt-5 mb-5 ">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  />
                  <input
                    type="file"
                    className="custom-file-input"
                    id="validatedCustomFile"
                    hidden
                  />
                  <label htmlFor="validatedCustomFile">Choose Image</label>

                  <span className="font-weight-bold">Name</span>
                  <span className="text-black-50">Email@email.com</span>
                  <span> </span>
                </div>
              </div>
              <div className="col-md-7 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name*"
                        defaultValue=""
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                        placeholder="Last Name*"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number*"
                        defaultValue=""
                      />
                    </div>

                    <div className="col-md-12 pt-3">
                      <textarea
                        type="text"
                        className="form-control "
                        placeholder="Bio"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Country*"
                        defaultValue=""
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                        placeholder="City*"
                      />
                    </div>
                  </div>

                  <br />

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Education and Experience</h4>
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Education"
                      defaultValue=""
                    />
                  </div>

                  <div className="col-md-12 pt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Experience"
                      defaultValue=""
                    />
                  </div>

                  <div className="col-md-12 pt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skills"
                      defaultValue=""
                    />
                  </div>

                  <div className="col-md-6 pt-3">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="validatedCustomFile"
                      hidden
                    />
                    <label htmlFor="validatedCustomFile">Import Files</label>
                  </div>

                  <div className="mt-5 text-center ">
                    <Link href="/Profile">
                      <button
                        className="btn btn-primary profile-button"
                        type="submit"
                      >
                        Save Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ProfileEdit;
