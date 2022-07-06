import React, { useEffect } from "react";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import CourseForm from "./CourseForm";
import axios from "axios";

const Profile = () => {
  const [teacher, setTeacher] = useState(false);
  const [courseForm, setCourseForm] = useState(false);



  const [userData, setUserData] = useState([]);


  useEffect(() => {
    if (localStorage.getItem("isTeacher")) {
      setTeacher(true);
    }
  });

  const handleCourseForm = (e) => {
    e.preventDefault();
    setCourseForm(true);
  };

  useEffect(() => {
    const storageToken = localStorage.getItem("access_token");
    const getEmail = localStorage.getItem("email")
    axios
      .get("http://tutorium.herokuapp.com/api/visitor", {
        headers: {
          Authorization: `Bearer ${storageToken}`,
        },
      }).then((res) => {
        let arr = [];
        res.data.length > 0 &&
          res.data.map((ele) => {
            if (ele.email === getEmail) {
              arr.push(ele);
              console.log(arr);
            }
          });

          setUserData([...arr]);
          localStorage.setItem("id", userData[0]?.id)
      })
      

  }, []);
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

      {/* {CourseData.length > 0 &&
        CourseData.map((ele) => ( */}
      <div >
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

                    <span className="text-black-50">{userData[0]?.email}</span>
                    <div> <Link href="/ProfileEdit">
                      <button
                        className="btn btn-primary profile-button"
                        type="submit"
                      >
                        Edit Profile
                      </button>
                    </Link></div>
                   
                    <span> </span>
                  </div>
                </div>

                <div className="col-md-4 border-right">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right pt-5">{userData[0]?.name}</h4>
                    </div>

                    <div className="row mt-3 w-auto">
                      <p className="pt-2 ">
                        {userData[0]?.bio}
                      </p>

                      <h5 className="pt-3 ">Education and experience</h5>
                      <p className="pt-2 ">{userData[0]?.Education}</p>
                     
                 

                      <p className="pt-5 ">Location: {userData[0]?.city} | {userData[0]?.country}</p>
                      <p>Phone number: {userData[0]?.phone_number}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-center "></div>
                </div>

                <div className="col-md-4 ">
                  <div className="p-3 py-5">
                    <div className="col-mg-4 pt-4 pt-lg-0 order-2 order-lg-1 content">
                      <h4 className="text-right pt-5">My Enrolled Courses</h4>

                      <ul className="pt-2">
                        <li>
                          <i className="bi bi-check-circle" />
                          <Link href="/">Course Name</Link>
                        </li>
                        <li>
                          <i className="bi bi-check-circle" />
                          <Link href="/">Course Name</Link>
                        </li>
                        <li>
                          <i className="bi bi-check-circle" />
                          <Link href="/">Course Name</Link>
                        </li>
                        <li>
                          <i className="bi bi-check-circle" />
                          <Link href="/">Course Name</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* only for teachers */}

                  {teacher ? (
                    <div className="p-3 py-1 ">
                      <div className="col-mg-4 pt-lg-0 order-2 order-lg-1 content">
                        <h4 className="text-right ">My Submitted Courses</h4>

                        <ul className="pt-3">
                          <li>
                            <i className="bi bi-check-circle" />{" "}
                            <Link href="/">Course Name</Link>
                          </li>
                          <li>
                            <i className="bi bi-check-circle" />
                            <Link href="/">Course Name</Link>
                          </li>
                          <li>
                            <i className="bi bi-check-circle" />
                            <Link href="/">Course Name</Link>
                          </li>
                          <li>
                            <i className="bi bi-check-circle" />
                            <Link href="/">Course Name</Link>
                          </li>
                        </ul>

                        <button
                          onClick={handleCourseForm}
                          className="btn btn-primary profile-button mb-3"
                          type="submit"
                        >
                          Add Courses
                        </button>
                      </div>
                    </div>
                  ) : null}

                  {/* {courseForm ? <CourseForm/> : null} */}
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>

      {courseForm ? <CourseForm /> : null}

      <Footer />
    </>
  );
};

export default Profile;
