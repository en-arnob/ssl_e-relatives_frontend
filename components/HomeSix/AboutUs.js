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
                  In 2023, e-Relatives embarked on a compassionate journey,
                  uniting blood donors with those in need and providing
                  comprehensive medical support. Discover the full version of
                  our transformative story and how we spread kindness and
                  embrace hope, making a positive impact on countless lives.
                  Join us on this remarkable journey!
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Registration: Join our community without any cost,
                    making it easy and accessible for everyone to be a part of
                    e-Relatives.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Quick Profile Setup: Set up your profile swiftly, ensuring a
                    seamless and hassle-free onboarding process.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Expert Individuals: Connect with a network of experienced
                    and caring individuals, including blood donors and
                    healthcare professionals, dedicated to making a difference.
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
