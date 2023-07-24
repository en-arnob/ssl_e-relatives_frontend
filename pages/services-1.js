import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import OurWorks from "../components/HomeOne/OurWorks";

const Services1 = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style One"
        imgClass="bg-1"
      />

      <div className="first-facility-area services-page-one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-care"></i>
                <h3>Special Service</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-support"></i>
                <h3>24/7 Advanced Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-online-learning"></i>
                <h3>Get Result Online</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </div>
          </div>

          <div className="shape">
            <img src="/img/shape/shape1.png" alt="Image" />
          </div>
        </div>
      </div>

      <div className="second-facility-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="second-facility-item">
                <img src="/img/facility-img/facility-icon1.png" alt="Image" />
                <h3>Qualified Doctors</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="second-facility-item">
                <img src="/img/facility-img/facility-icon2.png" alt="Image" />
                <h3>Emergency Helicopter</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="second-facility-item">
                <img src="/img/facility-img/facility-icon3.png" alt="Image" />
                <h3>Leading Technology</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="emergency-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="emergency-content ptb-100">
                <h2>Emergency? For any Help Contact Us Now</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li className="active">
                    <i className="bx bx-phone-call"></i>
                    <span>Call Now</span>
                    <h3>+821-456-789</h3>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <span>Mail Us</span>
                    <h3>hello@info.com</h3>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="emergency-img"></div>
            </div>
          </div>
        </div>

        <div className="shape">
          <img src="/img/shape/emergency-shape.png" alt="Image" />
        </div>
      </div>

      <OurWorks />

      <Subscribe />

      <Footer />
    </>
  );
};

export default Services1;
