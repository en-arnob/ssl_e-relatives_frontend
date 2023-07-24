import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const MainBanner = () => {
  return (
    <>
      <div className="hero-slider-area hero-slider-area-eight">
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="hero-slide-eight"
        >
          <SwiperSlide>
            <div 
              className="slider-item"
              style={{ backgroundImage: `url(/img/home-eight/home-eight-banner1.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-text one">
                      <span className="top-title">Welcome To Corf</span>
                      <h1>Specializing Cosmetic Dental Surgery</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil architecto laborum eaque! Deserunt maxime, minus
                        quas molestiae reiciendis.
                      </p>

                      <div className="slider-btn">
                        <Link href="/appointment" className="default-btn">
                          Book An Appointment
                        </Link>
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
              style={{ backgroundImage: `url(/img/home-eight/home-eight-banner2.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-text two">
                      <span className="top-title">Welcome To Corf</span>
                      <h1>Our Smiles Speak Themselves</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil architecto laborum eaque! Deserunt maxime, minus
                        quas molestiae reiciendis.
                      </p>

                      <div className="slider-btn">
                        <Link href="/appointment" className="default-btn">
                          Book An Appointment
                        </Link>
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
