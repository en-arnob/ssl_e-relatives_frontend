import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        imgClass="bg-1"
      />

      <div className="about-area about-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/about/about1.jpg" alt="Image" />

                <div className="shape-1">
                  <img src="/img/about/about-shape-1.png" alt="Image" />
                </div>

                <div className="shape-2">
                  <img src="/img/about/about-shape-2.png" alt="Image" />
                </div>

                <div className="shape-3">
                  <img src="/img/about/about-shape-3.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About Us</span>
                <h2> Our vision is to provide best service in the health sector.</h2>
                <p>
                  Few dedicated social workers came together with a strong
                  determination to serve people in the easiest way in affordable
                  cost. That ambition was materialized in the form of
                  “e-Relatives”. e-Relatives is an online platform for
                  maintaining real time Blood Donation Service, Diagnostic
                  Center Service and Health Management Services for the people
                  around the world. The firm is also serving people by attaching
                  some renewed and well reputed Pharmacies and Ambulances so
                  that the peoples can easily purchase their necessary medicines
                  and take ambulance services on time. We also provide some
                  essential health product just on clicks. e-Relatives is the
                  only platform where Blood Donor, Blood Receiver/ Patient,
                  Diagnostic Center, Hospital, Pharmacy, Health Product Supplier
                  and Ambulance are gathering to serve. This is a groundbreaking
                  step for ensuring Health Service for the people in the globe
                  where all necessary opportunities and advantages are happen.
                  “Our mission is to educate and promote diagnostic tests of clinical value to the medical
and patient community. We will deliver information that is accurate, relevant, timely
and useful for guiding patient care.”
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Connect Life-Givers: We unite blood donors with those in
                    need, creating a life-giving force that saves lives one
                    donation at a time.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Comprehensive Medical
                    Support: Our platform provides extensive medical and
                    healthcare support, ensuring our community receives the care
                    they need to thrive.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Timely Access to Medical Care: Effortless doctor's
                    appointments are just a click away, guaranteeing timely
                    access to essential medical services.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Expert Online Consulting: Seek medical advice from
                    experienced healthcare professionals from the comfort of
                    your home through our online consulting services.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Urgent Ambulance Services: In emergencies, every second
                    counts. Our quick and reliable ambulance services ensure you
                    receive immediate medical attention.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Cultivating Heroism: We foster a heroic community of
                    compassionate individuals, including blood donors, patients,
                    and dedicated healthcare professionals.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Empowering Life-Savers: Through blood donations, we empower
                    individuals to be heroes and save lives.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Spreading Hope and Kindness: Each donation lights up lives
                    with kindness and hope, bringing positivity to those in
                    need.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Guiding the Journey of Healing: We remain committed to being
                    the lifeline that supports and guides individuals throughout
                    their journey of healing and recovery.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FunFactStyleOne />

      <Footer />
    </>
  );
};

export default About;
