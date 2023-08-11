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
                Health is wealth. Health is the root of happiness. However, an
                  improved health system is still unavailable in most countries
                  of the world, including Bangladesh. The major difference in
                  the quality of health care between the developed world and the
                  Third World is unmeasurable. This is why, people use to visit
                  frequently abroad for better treatments. The advent of
                  e-relatives is to bring health services to the doorsteps of
                  the people by elevating them to the best standard around the
                  world. Our initiative is about Blood Transfusion Management,
                  Accurate Diagnosis Management, Effective Health Management,
                  and Easy Supply Management of Health and Organic Products.<br/><br/>
                  e-Relatives is only the platform where a patient can avail of
                  modern services in health systems such as Blood, Diagnostic
                  Centers, hospitals, pharmacies, Ambulances, and Health Product
                  Suppliers. This is a groundbreaking step for ensuring Health
                  Service for people around the globe where all necessary
                  opportunities and advantages have happened. The long and
                  Healthy Lives of the people are the only desire of
                  e-Relatives.
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
