import Footer from "./Footer";
import Navbar from "./Navbar";

const CourseDetails = () => {
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

      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            Feel free to contact us and give us your feedback. We will be glad
            to hear from you!
          </p>
        </div>
      </div>
      {/* End Breadcrumbs */}

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
                  <h3>Et enim incidunt fuga tempora</h3>
                  <p>
                    Qui et explicabo voluptatem et ab qui vero et voluptas. Sint
                    voluptates temporibus quam autem. Atque nostrum voluptatum
                    laudantium a doloremque enim et ut dicta. Nostrum ducimus
                    est iure minima totam doloribus nisi ullam deserunt.
                    Corporis aut officiis sit nihil est. Labore aut sapiente
                    aperiam. Qui voluptas qui vero ipsum ea voluptatem. Omnis et
                    est. Voluptatem officia voluptatem adipisci et iusto
                    provident doloremque consequatur. Quia et porro est. Et qui
                    corrupti laudantium ipsa. Eum quasi saepe aperiam qui
                    delectus quaerat in. Vitae mollitia ipsa quam. Ipsa aut qui
                    numquam eum iste est dolorum. Rem voluptas ut sit ut.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Trainer</h5>
                    <p>
                      <a href="#">Walter White</a>
                    </p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Course Fee</h5>
                    <p>$165</p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Available Seats</h5>
                    <p>30</p>
                  </div>
                  <div className="course-info d-flex justify-content-between align-items-center">
                    <h5>Schedule</h5>
                    <p>5.00 pm - 7.00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </main>
      {/* End main */}

      <Footer />
    </>
  );
};

export default CourseDetails;
