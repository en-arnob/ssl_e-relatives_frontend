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
                        in need, saving lives one donation at a time. But we are
                        more than just a blood donation platform. We also
                        provide comprehensive medical and healthcare support to
                        our community. Need to see a doctor? Book appointments
                        effortlessly through our platform, ensuring timely
                        access to medical care. Seeking medical advice from the
                        comfort of your home? Our online consulting service
                        connects you with experienced healthcare professionals.
                        In times of emergencies, every second counts. That's why
                        we offer a quick and reliable ambulance service to
                        ensure you receive the urgent medical attention you
                        need. Join our heroic community of compassionate
                        individuals, whether you're a blood donor, a patient
                        seeking support, or a healthcare professional dedicated
                        to making a difference. Together, we can make a positive
                        impact on countless lives. Don't wait – become a blood
                        donor today and light up lives with your kindness.
                        e-Relatives is here for you, every step of the way.
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
                      backgroundImage: `url(/img/home-six/home-six-banner-img.jpg)`,
                    }}
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    div
                    className="banner-image"
                    style={{
                      backgroundImage: `url(/img/home-six/home-six-banner2.jpg)`,
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
