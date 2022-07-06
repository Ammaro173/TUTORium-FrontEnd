import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Router from "next/router";

const CourseForm = () => {
  const [userData, setUserData] = useState();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value || null,
    });
    console.log(userData)
  };

  const handleSubmit = () => {
  
    const storageToken = localStorage.getItem("access_token");
    axios.post("https://tutorium.herokuapp.com/api/course-post", userData, {
      headers: {
        Authorization: `Bearer ${storageToken}`,
      },
    }).catch((err)=>{
      console.log(err)
    })

    // to empty the form (the select tag)
    // Array.from(document.querySelectorAll("select")).forEach(option=>(option.value = null))
    setUserData({});
    Router.push('/Profile')

    const id = localStorage.getItem("id")
    axios.put(`http://tutorium.herokuapp.com/api/visitor-rud/${id}`,  {
      headers: {
        Authorization: `Bearer ${storageToken}`,
      },
    })
  };

  return (
    <section className="about" id="profileform">
      <form className="php-email-form"  onSubmit={handleSubmit}>
        <div className="container rounded bg-white mt-5 mb-5 ">
          <div className="row">
            <div className="col-md-3 border-right"></div>
            <div className="col-md-7 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Add your course details</h4>
                </div>
                <div className="row mt-2"></div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Course Name"
                      defaultValue=""
                      name="name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Short Description"
                      defaultValue=""
                      maxLength="250"
                      name="short_bio"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12 pt-3">
                    <textarea
                      type="text"
                      className="form-control "
                      placeholder="More Details"
                      defaultValue=""
                      maxLength="1000"
                      name="description"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Price"
                      defaultValue=""
                      min="0"
                      name="price"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      defaultValue=""
                      placeholder="Number of Seats"
                      min="1"
                      name="available_seat"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Course Link"
                      defaultValue=""
                      name="zoom_link"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <select
                    name="course_category"
                    type="text"
                      // class="form-select"
                      // className="form-control "
                      onChange={handleChange}
                      aria-label="Default select example"
                    >
                      <option  >Choose:</option>
                      
                      <option  value="1">Arts and Crafts</option>
                      <option value="3">Beauty</option>
                      <option  value="2">Agriculture</option>
                      <option value="4">Business</option>
                      <option  value="5">Cooking</option>
                      <option  value="6">Health</option>
                      <option  value="7">Languages</option>
                      <option  value="8">Music</option>
                      <option  value="11">Sports</option>
                      <option  value="12">Technology</option>
                      <option  value="10">Sciences</option>
                      <option  value="9">Others</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  {/* <div className="col-md-6">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date"
                      min="0"
                    />
                  </div> */}

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="schedule"
                      placeholder="Date and Time"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-5 text-center ">
           
                    <button
                      className="btn btn-primary profile-button"
                      type="submit"
                     
                    >
                      Add Course!
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CourseForm;
