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
                <h2>
                  {" "}
                  Our vision is to provide best service in the health sector.
                </h2>
                <p>
                  {" "}
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
                  and Easy Supply Management of Health and Organic Products.
                  <br />
                  <br />
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
          {/* Objective mission vission */}
          <div className="row mt-5">
            <div className="col-md-4 about-content ms-0" >
              <h4>Our Objective</h4>
              <ul>
                <li>
                  <i className="flaticon-tick"></i>
                  To establish a bonding relationship to donate blood on time.
                </li>
                <li>
                  <i className="flaticon-tick"></i>
                  To open a new era of diagnosis from world standard Diagnostic
                  Centers around the world.
                </li>
                <li>
                  <i className="flaticon-tick"></i>
                  To arrange service in the best hospitals in the world.
                </li>
                <li>
                  <i className="flaticon-tick"></i>
                  To ensure global health products in a single platform.
                </li>
                <li>
                  <i className="flaticon-tick"></i>
                  To be your trusted health manager.
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Our Mission</h4>
              <p>
                “Our mission is to promote diagnostic tests of clinical value to
                the medical and patient community. We will deliver information
                that is accurate, relevant, timely, and useful for guiding
                patient care.”
              </p>
            </div>
            <div className="col-md-4">
              <h4>Our Vision</h4>
              <p>
                Our target is to ensure all health services are under one
                umbrella.
              </p>
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
