import React, { useState, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import {
  FcPortraitMode,
  FcLike,
  FcManager,
  FcShop,
  FcSportsMode,
  FcShipped,
  FcPaid,
  FcAbout,
} from "react-icons/fc";
import { FaAmbulance } from "react-icons/fa";

const Services2 = () => {
  const [roles, setRoles] = useState([]);
  function getRoles() {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/roles/${5}`)
      .then((response) => {
        const allData = response.data.data;
        setRoles(allData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getRoles();
  }, []);
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        imgClass="bg-3"
      />

      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Service</span>
            <h2>Our Healthcare Service</h2>
            <p>
              e-Relatives offers a diverse range of account types to cater to
              various roles and responsibilities.
            </p>
          </div>
          <div className="row">
            {roles?.length >= 0
              ? roles?.map((role) => (
                  <div key={role?.id} className="col-lg-4 col-sm-6">
                    <div className="single-services">
                      <span>
                        {" "}
                        <h1>
                          {role.id === 3 ? (
                            <FcPortraitMode />
                          ) : role.id === 10 ? (
                            <FcLike />
                          ) : role.id === 11 ? (
                            <FcManager />
                          ) : role.id === 12 ? (
                            <FcSportsMode />
                          ) : role.id === 13 ? (
                            <FcPaid />
                          ) : role.id === 14 ? (
                            <FaAmbulance className="text-warning" />
                          ) : role.id === 15 ? (
                            <FcShop />
                          ) : (
                            <FcAbout />
                          )}
                        </h1>{" "}
                      </span>
                      <h3>{role.name}</h3>
                      <p>{role.info}</p>

                      <Link href="/sign-up" className="read-more">
                        Register Now <i className="bx bx-plus"></i>
                      </Link>

                      <div className="services-shape">
                        <img src="/img/services-card-shape.png" alt="Image" />
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>

      {/* <div className="second-facility-area pb-70">
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
      </div> */}

      {/* <div className="first-facility-area mt-0 services-page-one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-care"></i>
                <h3>Special Service</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-support"></i>
                <h3>24/7 Advanced Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="first-facility-item">
                <i className="flaticon-online-learning"></i>
                <h3>Get Result Online</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
              </div>
            </div>
          </div>

          <div className="shape">
            <img src="/img/shape/shape1.png" alt="Image" />
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
};

export default Services2;
