import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const Services3 = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Style Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Three"
        imgClass="bg-2"
      />

      <div className="second-facility-area two pt-100 pb-70">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Services</span>
            <h2>Our Healthcare Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              vel consequatur tempora atque blanditiis exercitationem incidunt,
              alias corporis quam assumenda dicta, temporibus.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-man"></span>
                <h3>Cancer Service</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-liver"></span>
                <h3>Liver Transport</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-kidney"></span>
                <h3>Kidney Transport</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-heart"></span>
                <h3>Cardiac Arrhythmia</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-brain"></span>
                <h3>Neurology Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-walker"></span>
                <h3>Orthopedic Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-facility-area pb-70">
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

      <div className="prevention-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span className="top-title">Prevention</span>
            <h2>How To Protect Yourself</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt labore et dolore magna aliqua. Quis
              ipsum suspendisse
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="prevention-wrap">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-prevention">
                      <i className="flaticon-hand-wash"></i>
                      <h3>Wash Your Hands</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor aliqua. ipsum utislen consectetur
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-prevention">
                      <i className="flaticon-medical-mask"></i>
                      <h3>Use Face Mask</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor aliqua. ipsum utislen consectetur
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-prevention">
                      <i className="flaticon-stay-home"></i>
                      <h3>Stay At Home</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor aliqua. ipsum utislen consectetur
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-prevention">
                      <i className="flaticon-alcohol-gel"></i>
                      <h3>Use Hand Sanitizer</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor aliqua. ipsum utislen consectetur
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-prevention">
                      <i className="flaticon-protection"></i>
                      <h3>Avoid Close Contact</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor aliqua. ipsum utislen consectetur
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-prevention">
                      <i className="flaticon-washing-hands"></i>
                      <h3>Washing Hands</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor aliqua. ipsum utislen consectetur
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-prevention">
                      <i className="flaticon-protection-1"></i>
                      <h3>Don’t Touch Face</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor aliqua. ipsum utislen consectetur
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-prevention">
                      <i className="flaticon-gloves"></i>
                      <h3>Use Your Gloves</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor aliqua. ipsum utislen consectetur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="prevention-img">
                <img src="/img/prevention-img.png" alt="Image" />
                <div className="shape">
                  <img src="/img/prevention-shape-2.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-1">
          <img src="/img/prevention-shape-1.png" alt="Image" />
        </div>
        <div className="shape-2">
          <img src="/img/prevention-shape-1.png" alt="Image" />
        </div>
        <div className="shape-3">
          <img src="/img/prevention-shape-1.png" alt="Image" />
        </div>
        <div className="shape-4">
          <img src="/img/prevention-shape-1.png" alt="Image" />
        </div>
      </div>

      <Subscribe />

      <Footer />
    </>
  );
};

export default Services3;
