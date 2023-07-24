import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

const MainBanner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setOpen(false)}
      />

      <div className="main-banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner-text">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      Smarter Service Care
                    </span>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      We are Committed to Your Best Health
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua gravida. Risus commodo.
                    </p>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                    >
                      <Link href="/appointment" className="default-btn outline-btn">
                        Medical verification
                      </Link>

                      <Link
                        href="/sign-up"
                        className="default-btn active popup-youtube"
                      >
                        Patient registration
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 pr-0">
                  <div className="banner-img-wrap">
                    <div
                      className="banner-img"
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1200"
                    >
                      <img
                        src="/img/home-one/home-one-banner.png"
                        alt="Image"
                      />
                    </div>

                    <div className="banner-shape">
                      <img src="/img/home-one/home-one-shape.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="first-facility-area">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-care"></i>
                      <h3>Special Service</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-support"></i>
                      <h3>24/7 Advanced Care</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="first-facility-item"
                      data-aos="fade-in"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      <i className="flaticon-online-learning"></i>
                      <h3>Get Result Online</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </p>
                    </div>
                  </div>
                </div>

                <div className="shape">
                  <img src="/img/shape/shape1.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
