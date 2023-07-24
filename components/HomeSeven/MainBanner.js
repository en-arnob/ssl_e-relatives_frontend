import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const MainBanner = () => {
  return (
    <>
      <div className="hero-slider-area hero-slider-area-seven">
        <Swiper
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="hero-slider-slide"
        >
          <SwiperSlide>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(/img/home-seven/home-seven-banner1.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-text one">
                      <span className="top-title">Welcome To Corf</span>
                      <h1>
                        All The Services You Expect From A Clinical Trial Lab
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil architecto laborum eaque! Deserunt maxime, minus
                        quas molestiae reiciendis esse natus nisi iure.
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
              style={{
                backgroundImage: `url(/img/home-seven/home-seven-banner2.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-text two">
                      <span className="top-title">Welcome To Corf</span>
                      <h1>We Ensure Safe Diagnoses And Effective Therapies</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil architecto laborum eaque! Deserunt maxime, minus
                        quas molestiae reiciendis esse natus nisi iure.
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
