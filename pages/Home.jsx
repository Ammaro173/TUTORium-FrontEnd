import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";

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
        res.data.length > 0 &&
          res.data.map((ele) => {
            arr.push(ele);
          })
          setCourses([...arr])
      }).catch((err)=>{
        console.log(err)
      })
      console.log(courses)
  }, []);


  const handleclick = () => {
    if (!localStorage.getItem("login")) {
      confirm("Please Login first!");
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
          <Link href="/#features">
            <a href="/#features" className="btn-get-started">
              Get Started!
            </a>
          </Link>
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
                    {!path ? (
                      <a href="/Courses_Art" onClick={handleclick}>
                        Arts and Crafts
                      </a>
                    ) : (
                      <a href="/Login">Arts and Crafts</a>
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
                    {!path ? (
                      <a href="/Courses_Tech" onClick={handleclick}>
                        Technology
                      </a>
                    ) : (
                      <a href="/Login">Technology</a>
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
                    {!path ? (
                      <a href="/Courses_Health" onClick={handleclick}>
                        Health
                      </a>
                    ) : (
                      <a href="/Login">Health</a>
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
                    {!path ? (
                      <a href="/Courses_Sports" onClick={handleclick}>
                        Sports
                      </a>
                    ) : (
                      <a href="/Login">Sports</a>
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
                    {!path ? (
                      <a href="/Courses_Sciences" onClick={handleclick}>
                        Sciences
                      </a>
                    ) : (
                      <a href="/Login">Sciences</a>
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
                    {!path ? (
                      <a href="/Courses_Business" onClick={handleclick}>
                        Business
                      </a>
                    ) : (
                      <a href="/Login">Business</a>
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
                    {!path ? (
                      <a href="/Courses_Languages" onClick={handleclick}>
                        Languages
                      </a>
                    ) : (
                      <a href="/Login">Languages</a>
                    )}
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-markup-fill" style={{ color: "#4233ff" }} />
                  <h3>
                    {!path ? (
                      <a href="/Courses_Beauty" onClick={handleclick}>
                        Beauty
                      </a>
                    ) : (
                      <a href="/Login">Beauty</a>
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
                    {!path ? (
                      <a href="/Courses_Cooking" onClick={handleclick}>
                        Cooking
                      </a>
                    ) : (
                      <a href="/Login">Cooking</a>
                    )}
                  </h3>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className=" ri-earth-line" style={{ color: "#ffbb2c" }} />
                  <h3>
                    {!path ? (
                      <a href="/Courses_Agriculture" onClick={handleclick}>
                        Agriculture
                      </a>
                    ) : (
                      <a href="/Login">Agriculture</a>
                    )}
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-disc-line" style={{ color: "#b20969" }} />
                  <h3>
                    {!path ? (
                      <a href="/Courses_Music" onClick={handleclick}>
                        Music
                      </a>
                    ) : (
                      <a href="/Login">Music</a>
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
                    {!path ? (
                      <a href="/Others" onClick={handleclick}>
                        Others
                      </a>
                    ) : (
                      <a href="/Login">Others</a>
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
        {courses.length > 0 && courses.map((ele)=>{
              
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
                    <p>
                      {ele.description}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div> 
          </div>
        
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
