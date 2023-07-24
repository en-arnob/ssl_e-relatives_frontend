import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const DoctorDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Doctors Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctors Details"
        imgClass="bg-3"
      />

      <div className="doctors-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="doctors-sidebar">
                <div className="doctors-img">
                  <img src="/img/doctors/doctor4.jpg" alt="Image" />

                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/" target="_blank">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="availability">
                  <h3>
                    <i className="bx bx-time"></i>
                    Availability
                  </h3>

                  <ul>
                    <li>
                      Monday - Friday
                      <span>9.00 - 20.00</span>
                    </li>
                    <li>
                      Saturday
                      <span>10.00 - 16.00</span>
                    </li>
                    <li>
                      Sunday
                      <span>9.30 - 18.00</span>
                    </li>
                    <li>
                      Friday
                      <span>Closed</span>
                    </li>
                  </ul>

                  <Link href="#" className="default-btn mt-4">
                    Request An Appointment
                  </Link>
                </div>

                <div className="client-area doctors-feedback">
                  <div className="client-wrap-two owl-carousel owl-theme">
                    <div className="single-client">
                      <img src="/img/client/client1.jpg" alt="img" />

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem Ipsum is simply dummy text of the
                        printing and Quis suspendisse typesetting ipsum dolor
                        sit amet, consectetur
                      </p>

                      <ul>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                      </ul>

                      <h3>Steven Jony</h3>
                      <span>CEO of Company</span>
                    </div>

                    <div className="single-client">
                      <img src="/img/client/client2.jpg" alt="img" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem Ipsum is simply dummy text of the
                        printing and Quis suspendisse typesetting ipsum dolor
                        sit amet, consectetur
                      </p>

                      <ul>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                      </ul>

                      <h3>Omit Jacson</h3>
                      <span>Company Founder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="doctors-detailss">
                <div className="doctors-history">
                  <h2>Dr.Merris Jelly</h2>
                  <span>MBBS (Sydney), FRACS (Paediatric Surgery)</span>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, totam! Dicta rerum deserunt itaque. Incidunt in
                    quo architecto eveniet rem facere, necessitatibus, dolorem
                    voluptas deleniti iure fuga magni velit molestiae ipsum
                    dolor sit amet consectetur adipisicing elit. Repellat, totam
                    adipisicing.
                  </p>

                  <div className="row borders">
                    <div className="col-lg-3 pl-0">
                      <div className="left-title">
                        <h3>Specialty</h3>
                      </div>
                    </div>

                    <div className="col-lg-9">
                      <div className="right-title">
                        <ul>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            Endocrinology
                          </li>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            Paediatric Medicine
                          </li>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            Urology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row borders">
                    <div className="col-lg-3 pl-0">
                      <div className="left-title">
                        <h3>Education</h3>
                      </div>
                    </div>

                    <div className="col-lg-9">
                      <div className="right-title">
                        <ul>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            Endocrinology
                          </li>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            Doctor of Medicine, University of Texas, USA (1990)
                          </li>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            Medical Orientation Program, St. Louis University
                            (St. Louis, Missouri 1996)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row borders">
                    <div className="col-lg-3 pl-0">
                      <div className="left-title">
                        <h3>Experience</h3>
                      </div>
                    </div>

                    <div className="col-lg-9">
                      <div className="right-title">
                        <ul>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            25 years of Experience in Medicine
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row borders">
                    <div className="col-lg-3 pl-0">
                      <div className="left-title">
                        <h3>Address</h3>
                      </div>
                    </div>

                    <div className="col-lg-9">
                      <div className="right-title">
                        <ul>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            123, Western Road, Melbourne Australia
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row borders">
                    <div className="col-lg-3 pl-0">
                      <div className="left-title">
                        <h3>Phone</h3>
                      </div>
                    </div>

                    <div className="col-lg-9">
                      <div className="right-title">
                        <ul>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            +822456974
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row borders">
                    <div className="col-lg-3 pl-0">
                      <div className="left-title">
                        <h3>Email</h3>
                      </div>
                    </div>

                    <div className="col-lg-9">
                      <div className="right-title">
                        <ul>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            hello@corf.com
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row borders">
                    <div className="col-lg-3 pl-0">
                      <div className="left-title">
                        <h3>Website</h3>
                      </div>
                    </div>

                    <div className="col-lg-9">
                      <div className="right-title">
                        <ul>
                          <li>
                            <i className="bx bxs-hand-right"></i>
                            <a href="#" target="_blank">
                              www.corf.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="appointment-here-form">
                  <span className="top-title">Make An Appointment</span>
                  <h2>We Are Here For You</h2>

                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <label>Your Name</label>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="Name"
                            placeholder="Enter Your Name"
                          />
                          <i className="flaticon-account"></i>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label>Your Email</label>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="Email"
                            placeholder="Enter Your Email"
                          />
                          <i className="flaticon-email"></i>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label>Your Phone</label>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="Phone"
                            placeholder="Enter Your Phone"
                          />
                          <i className="flaticon-smartphone"></i>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label>Select Service</label>
                        <div className="form-group">
                          <select className="form-control">
                            <option value="0">Select Service</option>
                            <option value="1">Another option</option>
                            <option value="2">A option</option>
                            <option value="3">Potato</option>
                          </select>
                          <i className="flaticon-heart"></i>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label>Appointment Date</label>
                        <div className="form-group">
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="form-control"
                          />
                          <i className="flaticon-appointment"></i>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label>Time</label>
                        <div className="form-group">
                          <select className="form-control">
                            <option value="0">Seclect Time</option>
                            <option value="1">Another option</option>
                            <option value="2">A option</option>
                            <option value="3">Potato</option>
                          </select>
                          <i className="flaticon-clock"></i>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <label>Message</label>
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            id="Message"
                            cols="30"
                            rows="8"
                            placeholder="Your Message"
                          ></textarea>
                          <i className="flaticon-edit"></i>
                        </div>
                      </div>

                      <div className="col-12">
                        <button type="submit" className="default-btn">
                          Send Request
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />

      <Footer />
    </>
  );
};

export default DoctorDetails;
