import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import Image from "next/image";

const Home = () => {
  const [path, setPath] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storageToken = localStorage.getItem("access_token");
    axios
      .get("http://tutorium.herokuapp.com/api/courses", {
        headers: {
          Authorization: ` Bearer ${storageToken}`,
        },
      })
      .then((res) => {
        let arr = [];
        arr.push(res.data);
        // res.data.length > 0 &&
        //   res.data.map((ele) => {
        //     arr.push(ele);
        //   })
        setCourses([...arr]);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(courses);
  }, []);

  const handleclick = () => {
    if (!localStorage.getItem("login")) {
      alert("Please Login first!");
      setPath(true);
    }
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

      <Navbar />

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
          <div>
            <Link href="/#features" >
              
                Get Started!
              
            </Link>
          </div>
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
                    <i className="bi bi-check-circle" /> Teachers can choose to
                    enroll in any course!
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Teachers/students can
                    choose to have private classes.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Teachers can easily add
                    courses and students can easily enroll!
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Students can search for
                    the courses they want in each category.
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

            <div className="input-group rounded"></div>
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
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Art">Arts and Crafts</Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                         Arts and Crafts
                        </Link>
                      </div>
                    )}
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
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Tech">
                          
                            Technology
                      
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                          Technology
                        </Link>
                      </div>
                    )}
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
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Health">
                          
                            Health
                         
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                        Health
                        </Link>
                      </div>
                    )}
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
                    {path ? (
                      <div onClick={handleclick}> 
                        <Link href="/Courses_Sports">
                          
                            Sports
                      
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                         Sports
                        </Link>
                      </div>
                    )}
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
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Sciences">
                          
                            Sciences
                          
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                        Sciences
                        </Link>
                      </div>
                    )}
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
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Business">
                       
                            Business
                         
                        </Link>
                      </div>
                    ) : (
                      <div >
                        <Link href="/Login">
                         Business
                        </Link>
                      </div>
                    )}
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
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Languages">
                          
                            Languages
                          
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                          Languages
                        </Link>
                      </div>
                    )}
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-markup-fill" style={{ color: "#4233ff" }} />
                  <h3>
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Beauty">
                          
                            Beauty
                         
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                      Beauty
                        </Link>
                      </div>
                    )}
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
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Cooking">
                         
                            Cooking
                        
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                      Cooking
                        </Link>
                      </div>
                    )}
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className=" ri-earth-line" style={{ color: "#ffbb2c" }} />
                  <h3>
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Agriculture">
                       
                            Agriculture
                         
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                    Agriculture
                        </Link>
                      </div>
                    )}
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-disc-line" style={{ color: "#b20969" }} />
                  <h3>
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Music">
                          
                            Music
                   
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                          Music
                        </Link>
                      </div>
                    )}
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
                    {path ? (
                      <div onClick={handleclick}>
                        <Link href="/Courses_Others">
                    
                            Others
                         
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link href="/Login">
                      Others
                        </Link>
                      </div>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}

        {/* ======= Trainers Section ======= */}

        {/* <section id="trainers" className="trainers"> */}
        {courses.length > 0 &&
          courses.map((ele) => {
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    {/* <img
                    src="assets/img/trainers/trainer-1.jpg"
                    className="img-fluid"
                    alt=""
                  /> */}
                    <div className="member-content">
                      <h4>{ele.name}</h4>
                      <span>Description</span>
                      <p>{ele.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>;
          })}
        {/* </section> */}

        {/* End Trainers Section */}
      </main>
      {/* End #main */}

      <Footer />
    </>
  );
};

export default Home;
