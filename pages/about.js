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
                <h2> Empowering Hope, Saving Lives</h2>
                <p>
                  In 2023, e-Relatives embarked on a journey fueled by
                  compassion and a shared vision of transforming lives. Our
                  mission was clear - to be a beacon of hope, uniting blood
                  donors with those in need and providing comprehensive medical
                  support. Since our inception, we have grown into a heroic
                  community, spreading kindness and embracing hope. Every step
                  of the way, we have remained committed to making a positive
                  impact, illuminating the path to healing, and creating
                  brighter tomorrows for all. Our platform offers a wide range
                  of services, including quick and convenient online doctor
                  appointments and expert medical consultancy, ensuring timely
                  access to healthcare support from the comfort of your home. In
                  times of emergencies, our reliable ambulance services are just
                  a call away, providing urgent medical attention when every
                  second counts. As we continue to evolve, our dedication to
                  empowering lives and fostering hope remains unwavering.
                  Together, we stand united, driven by the belief that even the
                  smallest acts of kindness can make a world of difference. Join
                  us in this transformative journey and be a part of something
                  truly remarkable. At e-Relatives, our platform serves as a
                  lifeline for hope and healing, offering a range of services
                  that empower lives and make a positive impact on our
                  community. Here's how we achieve our mission:
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
