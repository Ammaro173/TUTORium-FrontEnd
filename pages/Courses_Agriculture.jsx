import Navbar from "./Navbar";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";

const Courses = () => {
  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);
  // const [token, setToken] = useState(null);

  const [courses, setCourses] = useState([]);
  const [curr, setCurr] = useState([]);
  const [CourseData, setCoursesData] = useState([]);

  // // search bar
  // const [data, setData] = useState([]);
  // const [value, setValue] = useState("");

  // // search bar
  // const handelSearch = async (e) => {
  //   e.preventDefault();
  //   return await axios.get(`?q=${value}`).then((response) => {
  //     setData(response.data), setValue("");
  //   });
  // };

  useEffect(() => {
    const storageToken = localStorage.getItem("access_token");
    axios
      .get("http://tutorium.herokuapp.com/api/courses", {
        headers: {
          Authorization: `Bearer ${storageToken}`,
        },
      })
      .then((res) => {
        let arr = [];
        res.data.length > 0 &&
          res.data.map((ele) => {
            if (ele.course_category === 2) {
              arr.push(ele);
            }
          });
        setCourses(res.data);
        setCoursesData([...arr]);
        console.log(res.data)
      })
      .catch((err) => {
        console.log("im err", err);
      });
  }, []);

  return (
    <>
      {/* Google Fonts */}
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

      {/* Template Main CSS File */}
      <link href="assets/css/style.css" rel="stylesheet" />

      <Navbar />

      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>{"Agriculture Courses"}</h2>
          </div>
        </div>
        {/* End Breadcrumbs */}

        {/* search bar form */}
        {/* <form
          className="form-inline d-flex justify-content-center md-form form-sm mt-3"
          style={{ width: "40vw", gap: "15px", margin: "auto" }}
        >
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <i
            class="bi bi-search"
            onClick={handelSearch}
            style={{ transform: "scale(1.2)" }}
          ></i>
        </form> */}

        <section section id="courses" className="courses">
          <div className="container">
            <div className="row" style={{ margin: "auto" }}>
              {CourseData.length > 0 &&
                CourseData.map((ele) => (
                  <div
                    key={ele.id}
                    className="col-lg-6 col-md-6 d-flex align-items-stretch mt-5 "
                    style={{ border: "1px gray", margin: "auto" }}
                  >
                    <div className="course-item">
                      <img
                        src="assets/img/course-2.jpg"
                        className="img-fluid"
                        alt="..."
                      />
                      <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h3>
                            <Link href="#courseDetails">
                              <a
                                href="#courseDetails"
                                onClick={() => {
                                  setCurr(ele);
                                  setShow(true);
                                  setId(ele.id);
                                }}
                              >
                                {ele.name}
                              </a>
                            </Link>
                          </h3>
                          <p className="price">{ele.price}$</p>
                        </div>
                        <p>{ele.description}</p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                          <div className="trainer-profile d-flex align-items-center">
                            <img
                              src="assets/img/trainers/trainer-2.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <span>Tutor</span>
                          </div>
                          <div
                            className="trainer-rank d-flex align-items-center"
                            style={{ gap: "9px" }}
                          >
                            <i className="bx bx-user" />
                            &nbsp;{ele.available_seat}
                            <button
                              className="bx bx-heart"
                              aria-label="Button"
                              style={{
                                border: "none",
                                background: "white",
                                padding: 0,
                              }}
                            />
                            &nbsp;{(ele.likes = 1111)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <div id="courseDetails">
        {show && <CourseDetails courses={courses} id={id - 1} />}
      </div>

      {/* End #main */}
    </>
  );
};

export default Courses;
