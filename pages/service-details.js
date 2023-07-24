import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const ServicesDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Details"
        imgClass="bg-1"
      />

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-img mb-4">
                <img
                  src="/img/service-details/service-details1.jpg"
                  alt="Image"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="services-item-wrap"
              >
                <SwiperSlide>
                  <div className="services-item">
                    <img
                      src="/img/service-details/service-details2.jpg"
                      alt="Image"
                      className="w-100"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <img
                      src="/img/service-details/service-details3.jpg"
                      alt="Image"
                      className="w-100"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <img
                      src="/img/service-details/service-details4.jpg"
                      alt="Image"
                      className="w-100"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="services-details-text">
            <h2>Our Healthcare Service</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum not only five centuries, but also the leap into
              electronic typesetting, remaining essentiall.
            </p>

            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with
            </p>

            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first generator.
            </p>
          </div>

          <div className="scrives-item-2 mt-4 ">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/service-details/service-details5.jpg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <h3>Cardiac Arrhythmia</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc generators on the
                  Internet tend to repeat predefined chunks as necessary, making
                  this the first generator dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks.
                </p>
              </div>
            </div>
          </div>

          <div className="scrives-item-3 mt-4">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="social">
                  <ul className="social-link">
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
              </div>

              <div className="col-lg-6">
                <div className="share">
                  <a href="#">
                    <i className="bx bx-share-alt"></i> Share
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />

      <Footer />
    </>
  );
};

export default ServicesDetails;
