import React from "react";
import Link from "next/link";

const OurMission = () => {
  return (
    <>
      <div className="ours-doctors-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="doctors-content ptb-100">
                <span className="top-title">Our Mission</span>
                <h2> Empowering Hope, Saving Lives</h2>
                <p>
                “Our mission is to promote diagnostic tests of clinical value
                 to the medical and patient community. We will deliver 
                 information that is accurate, relevant, timely, and useful 
                 for guiding patient care.”

                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Connect blood donors with those in need, fostering a
                    life-giving force.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Provide comprehensive medical and healthcare support for our
                    community.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Ensure timely access to medical care through effortless
                    doctor's appointments.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Offer online consulting services with experienced healthcare
                    professionals for medical advice from the comfort of home.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Provide quick and reliable ambulance services in
                    emergencies, where every second counts.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Remain committed to being the lifeline that supports and
                    guides individuals throughout their journey of healing and
                    recovery.
                  </li>
                </ul>

                {/* <Link href="/about" className="default-btn">
                  More About Us
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="doctors-img about"></div>
            </div>
          </div>
        </div>

        <div className="shape">
          <img src="/img/home-six/home-six-about-shape.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default OurMission;
