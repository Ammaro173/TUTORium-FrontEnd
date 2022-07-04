import Navbar from "./Navbar";
import Link from 'next/link'
// import { Card, CardGroup, Button } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from 'react';

import CourseDetails from "./CourseDetails";

const Courses = () => {

  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null);
  const userData = {

    username: 'admin123',
    password: "aabbcc112233"
  }

  const [courses, setCourses] = useState([]);
  const [curr, setCurr] = useState([]);


  useEffect(() => {

    if (localStorage.getItem("token") === null) {
      if (ele.category === 'Buisness') { }
      console.log("getting token");
      axios.post('http://127.0.0.1:8000/api/token/', userData).then(res => {
        console.log('im res', res);
        localStorage.setItem("token", res.data.access);
      })
      setToken(localStorage.getItem("token"));
    }
    setToken(localStorage.getItem("token"));
    console.log('im token', token);
  }, [])



  useEffect(() => {
    if (token) {
      axios.get('http://127.0.0.1:8000/api/courses', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        console.log('im new res', res.data);
        setCourses(res.data);
      }).catch(err => {
        console.log('im err', err);
      }
      )
    }
  }, [token])


  const RenderCourse = () => {

    useEffect(() => {
      // console.log('im courses', courses);
      // window.location.reload(true);

      return () => {


      }

    }, [id])

  }


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
            <h2>Arts And Crafts Courses</h2>
          </div>
        </div>
        {/* End Breadcrumbs */}
        <RenderCourse />
        <section section id="courses" className="courses" >
          <div className="container">
            <div className="row" style={{ margin: 'auto' }}>
              {
                courses && courses.map((ele) => {
                  if (ele.course_category === 'Languages') {
                    return (
                      <div key={ele.id} className="col-lg-6 col-md-6 d-flex align-items-stretch mt-5 " style={{ border: '1px gray', margin: 'auto' }}>
                        <div className="course-item">
                          <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
                          <div className="course-content">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <h3>
                                <Link href="#courseDetails" onClick={() => { setCurr(ele); setShow(true); setId(ele.id) }}>
                                  {ele.name}
                                </Link>
                              </h3>
                              <p className="price">{ele.price}$</p>
                            </div>
                            <p>{ele.short_bio}</p>
                            <div className="trainer d-flex justify-content-between align-items-center">
                              <div className="trainer-profile d-flex align-items-center">
                                <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt="" />
                                <span>Tutor</span>
                              </div>
                              <div className="trainer-rank d-flex align-items-center" style={{ gap: '9px' }}>
                                <i className="bx bx-user" />
                                &nbsp;{ele.available_seat}
                                <button className="bx bx-heart" aria-label='Button' style={{ border: 'none', background: 'white', padding: 0 }} />
                                &nbsp;{ele.likes = 1111}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }

                })}
            </div>
          </div>
        </section >

      </main >
      <div id='courseDetails' >{show && <CourseDetails courses={courses} id={id - 1} />}</div>

      {/* End #main */}
    </>
  );
};


export default Courses;








// {/* ======= Courses Section ======= */}
// <section id="courses" className="courses">
//   <div className="container">
//     <div className="row">
//       <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
//         <div className="course-item">
//           <img
//             src="assets/img/course-1.jpg"
//             className="img-fluid"
//             alt="..."
//           />
//           <div className="course-content">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <h3>
//                 <a href="course-details.html">Course Name</a>
//               </h3>
//               <p className="price">Price</p>
//             </div>
//             <p>Course Breif Description</p>
//             <div className="trainer d-flex justify-content-between align-items-center">
//               <div className="trainer-profile d-flex align-items-center">
//                 <img
//                   src="assets/img/trainers/trainer-1.jpg"
//                   className="img-fluid"
//                   alt=""
//                 />
//                 <span>Tutor</span>
//               </div>
//               <div className="trainer-rank d-flex align-items-center">
//                 <i className="bx bx-user" />
//                 &nbsp;50 &nbsp;&nbsp;
//                 <i className="bx bx-heart" />
//                 &nbsp;65
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>{" "}
//       {/* End Course Item*/}



// {/* End Course Item*/ }
// <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
//   <div className="course-item">
//     <img
//       src="assets/img/course-3.jpg"
//       className="img-fluid"
//       alt="..."
//     />
//     <div className="course-content">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3>
//           <a href="course-details.html">Course Name</a>
//         </h3>
//         <p className="price">Price</p>
//       </div>
//       <p>Course Breif Description</p>
//       <div className="trainer d-flex justify-content-between align-items-center">
//         <div className="trainer-profile d-flex align-items-center">
//           <img
//             src="assets/img/trainers/trainer-3.jpg"
//             className="img-fluid"
//             alt=""
//           />
//           <span>Tutor</span>
//         </div>
//         <div className="trainer-rank d-flex align-items-center">
//           <i className="bx bx-user" />
//           &nbsp;20 &nbsp;&nbsp;
//           <i className="bx bx-heart" />
//           &nbsp;85
//         </div>
//       </div>
//     </div>
//   </div>
// </div>{ " " }
// {/* End Course Item*/ }