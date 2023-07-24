import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const DoctorsStyleOne = () => {
  return (
    <>
      <div className="doctors-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Doctors</span>
            <h2>Our Specialist Doctors</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              vel consequatur tempora atque blanditiis exercitationem incidunt,
              alias corporis quam assumenda dicta, temporibus.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="doctors-slide"
          >
            <SwiperSlide>
              <div className="single-doctor">
                <img src="/img/doctors/doctor1.png" alt="Image" />
                <h3>Dr. Jelin Alis</h3>
                <span className="top-title">Cardiologist</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmodin
                </p>

                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-doctor">
                <img src="/img/doctors/doctor2.png" alt="Image" />
                <h3>Dr. Jemse Watson</h3>
                <span className="top-title">Necrologist</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmodin
                </p>

                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-doctor">
                <img src="/img/doctors/doctor3.png" alt="Image" />
                <h3>Dr. Neels Bore</h3>
                <span className="top-title">Surgery Specialist</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmodin
                </p>

                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-doctor">
                <img src="/img/doctors/doctor11.png" alt="Image" />
                <h3>Dr. Kilva Alis</h3>
                <span className="top-title">Cardiologist</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmodin
                </p>

                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DoctorsStyleOne;
