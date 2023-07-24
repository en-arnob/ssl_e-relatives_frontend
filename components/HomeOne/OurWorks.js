import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const OurWorks = () => {
  return (
    <>
      <div className="our-work-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Works</span>
            <h2>Our Intensive Care Unit</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              vel consequatur tempora atque blanditiis exercitationem incidunt,
              alias corporis quam assumenda dicta, temporibus.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="our-work-slide"
          >
            <SwiperSlide>
              <div className="single-work">
                <img src="/img/work1.jpg" alt="Image" />

                <h3 className="work-title">
                  <i className="flaticon-kidney"></i>
                  Surgery Dep
                </h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>Surgery Dep</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-work">
                <img src="/img/work2.jpg" alt="Image" />

                <h3 className="work-title">
                  <i className="flaticon-doll"></i>
                  Childcare Dep
                </h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>Childcare Dep</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-work">
                <img src="/img/work3.jpg" alt="Image" />

                <h3 className="work-title">
                  <i className="flaticon-cardiology"></i>
                  Cardiology Dep
                </h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>Cardiology Dep</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-work">
                <img src="/img/work4.jpg" alt="Image" />

                <h3 className="work-title">
                  <i className="flaticon-cardiology"></i>
                  Cardiologist
                </h3>

                <div className="work-content-wrap">
                  <div className="work-content">
                    <h3>Cardiologist</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>

                    <Link href="/service-details" className="read-more">
                      Details <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="shape">
          <img src="/img/shape/work-shape.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default OurWorks;
