import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

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

      <div className="hero-slider-area">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="hero-slider-wrap"
        >
          <SwiperSlide>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(/img/home-three/home-three-banner1.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="slider-text one">
                          <span className="top-title">
                            Assessment Center & Testing
                          </span>
                          <h1>
                            Assessment Treatment Center For COVID-19 Disease
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil architecto laborum eaque! Deserunt
                            maxime, minus quas molestiae reiciendis esse natus
                            nisi iure.
                          </p>

                          <div className="slider-btn">
                            <Link href="/appointment" className="default-btn">
                              Book An Appointment
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div
                          onClick={() => setOpen(true)}
                          className="video-btn popup-youtube"
                        >
                          <i className="flaticon-play-button-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(/img/home-three/home-three-banner2.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="slider-text two">
                          <span className="top-title">
                            Assessment Center & Testing
                          </span>
                          <h1>
                            Emergency? The world’s Wait for Find Doctor <br />{" "}
                            Easy Way
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil architecto laborum eaque! Deserunt
                            maxime, minus quas molestiae reiciendis esse natus
                            nisi iure.
                          </p>

                          <div className="slider-btn">
                            <Link href="/appointment" className="default-btn">
                              Book An Appointment
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div
                          onClick={() => setOpen(true)}
                          className="video-btn popup-youtube"
                        >
                          <i className="flaticon-play-button-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(/img/home-three/home-three-banner3.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-9">
                        <div className="slider-text two">
                          <span className="top-title">
                            Assessment Center & Testing
                          </span>
                          <h1>Free Health Checkup Ensure A Better Life!</h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil architecto laborum eaque! Deserunt
                            maxime, minus quas molestiae reiciendis esse natus
                            nisi iure.
                          </p>

                          <div className="slider-btn">
                            <Link href="/appointment" className="default-btn">
                              Book An Appointment
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div
                          onClick={() => setOpen(true)}
                          className="video-btn popup-youtube"
                        >
                          <i className="flaticon-play-button-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainBanner;
