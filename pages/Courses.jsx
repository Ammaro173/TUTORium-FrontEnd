import Navbar from "./Navbar";

const Courses = () => {
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

        {/* ======= Courses Section ======= */}
        <section id="courses" className="courses">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    src="assets/img/course-1.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>
                        <a href="course-details.html">Course Name</a>
                      </h3>
                      <p className="price">Price</p>
                    </div>
                    <p>Course Breif Description</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src="assets/img/trainers/trainer-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span>Tutor</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bx bx-user" />
                        &nbsp;50 &nbsp;&nbsp;
                        <i className="bx bx-heart" />
                        &nbsp;65
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img
                    src="assets/img/course-2.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>
                        <a target="_blank" href="/CourseDetails">
                          Course Name
                        </a>
                      </h3>
                      <p className="price">Price</p>
                    </div>
                    <p>Course Breif Description</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src="assets/img/trainers/trainer-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span>Tutor</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bx bx-user" />
                        &nbsp;35 &nbsp;&nbsp;
                        <i className="bx bx-heart" />
                        &nbsp;42
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img
                    src="assets/img/course-3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3>
                        <a href="course-details.html">Course Name</a>
                      </h3>
                      <p className="price">Price</p>
                    </div>
                    <p>Course Breif Description</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src="assets/img/trainers/trainer-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span>Tutor</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bx bx-user" />
                        &nbsp;20 &nbsp;&nbsp;
                        <i className="bx bx-heart" />
                        &nbsp;85
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* End Course Item*/}
            </div>
          </div>
        </section>
        {/* End Courses Section */}
      </main>
      {/* End #main */}
    </>
  );
};

export default Courses;
