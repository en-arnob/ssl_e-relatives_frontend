import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area four abouts-six pb-100">
        <div className="container-fluid">
          <div className="row flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About Us</span>
                <h2>Free Medical Camp Importance & Objectives</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Registration of Deserving Cases for Surgeries
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Hepatitis B & C Screening Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Consultation & Medicine
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Blood Pressure Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Diabetes Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Childbirth
                  </li>
                </ul>

                <Link href="/about" className="default-btn">
                  More About Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="about-img about-img-2"></div>
            </div>
          </div>
          {/* <div className="shape">
          <img src="/img/home-six/home-six-about-shape.png" alt="Image" />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
