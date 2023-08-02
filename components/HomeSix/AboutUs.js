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
                <h2>Our Journey 🚀</h2>
                <p>
                  e-Relatives is the only platform where Blood Donor, Blood
                  Receiver/ Patient, Diagnostic Center, Hospital, Pharmacy,
                  Health Product Supplier and Ambulance are gathering to serve.
                  This is a groundbreaking step for ensuring Health Service for
                  the people in the globe where all necessary opportunities and
                  advantages are happen.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    To established a bonding of relationship to donate blood on
                    time.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    To open a new era of diagnosis from world standard
                    Diagnostic Centers around the world.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    To arrange service in the best hospitals in world.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    To ensure the global health products in a single platform.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    To be your trusted health manager.
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
