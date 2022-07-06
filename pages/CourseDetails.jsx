import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const CourseDetails = ({ courses, id }) => {
  const [isenrolled, setIsenrolled] = useState(false);
  const [enrollCourse, setEnrolledCourses] = useState()


  useEffect(()=>{
    const mytoken = localStorage.getItem("access_token")
    axios.put(`https://tutorium.herokuapp.com/api/visitor-rud/${id}`, {
      headers: {
        Authorization : ` Bearer ${mytoken}`,
      },
    }).then((res)=>{
      console.log(res, "the course is enrolled")
    }).catch((err)=>{
      console.log(err)
    })
  })

  console.log("hiiiiiiii", courses[id]);
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

      <hr></hr>
      {/* ======= Counts Section ======= */}
      <section id="counts" className="counts section-bg mb-4"></section>
      {/* End Counts Section */}

      <main id="main">
        {/* ======= Courses Section ======= */}

        <>
          <section id="course-details" className="course-details">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <img
                    src="assets/img/course-details.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <h3>{courses[id].name}</h3>
                  <p>{courses[id].description}</p>
                </div>
                <div className="col-lg-4">
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Trainer</h5>
                    <p>
                      <Link href="#">{courses[id].tutor || "im empty"}</Link>
                    </p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Course Fee</h5>
                    <p>{courses[id].price}$</p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Available Seats</h5>
                    <i
                      className="bx bx-user justify-content-between"
                      style={{ marginLeft: "10vw" }}
                    />
                    {courses[id].available_seat} &nbsp;
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Schedule</h5>
                    <p>5.00 pm - 7.00 pm</p>
                  </div>

                  {/* check if enrolled, put the zoom link , else put enroll button */}
                  {isenrolled ? (
                    <Link href="/zoomlink"></Link>
                  ) : (
                    <section className="about" style={{ padding: 10 }}>
                      <form
                        className="php-email-form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          alert("Booked");
                          enrollCourse.enrolled_courses.push(courses[id].name)
                        }}
                      >
                        <div className="text-center ">
                          <button
                            className="px-5 btn btn-primary profile-button"
                            type="submit"
                            style={{ margin: "auto" }}
                          >
                            Enroll
                          </button>
                        </div>
                      </form>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      </main>
      {/* End main */}

      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs">
        <div className="container">
          <h3>Contact Us</h3>
          <p>
            Feel free to contact us and give us your feedback. We will be glad
            to hear from you!
          </p>
        </div>
      </div>
      {/* End Breadcrumbs */}

      <Footer />
    </>
  );
};

export default CourseDetails;
