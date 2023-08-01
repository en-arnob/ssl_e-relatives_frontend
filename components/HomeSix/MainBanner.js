import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-six">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="content">
                      <span className="top-title">
                        Connecting Hearts, Sharing Life.
                      </span>
                      <h1>e-Relatives: Unite to Save Lives!</h1>
                      <p>
                        Welcome to e-Relatives, your lifeline for hope and
                        healing. Our platform connects blood donors with those
                        in need, saving lives one donation at a time.
                      </p>

                      <Link href="/sign-up/" className="default-btn">
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pr-0 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="banner-image-slider"
              >
                <SwiperSlide>
                  <div
                    className="banner-image"
                    style={{
                      backgroundImage: `url(/img/home-six/pexels-lucas-oliveira-4680300.jpg)`,
                    }}
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    div
                    className="banner-image"
                    style={{
                      backgroundImage: `url(/img/home-six/doc-consult.jpg)`,
                    }}
                  ></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="shape">
          <img src="/img/home-six/home-six-shape1.png" alt="Image" />
        </div>
        <div className="shape-2">
          <img src="/img/home-six/home-six-shape2.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
