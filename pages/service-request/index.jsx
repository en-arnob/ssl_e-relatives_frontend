import React, { useState, useEffect } from "react";
import Navbar from "./../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "./../../components/_App/Footer";
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

const ServiceReq = () => {
  //   const [roles, setRoles] = useState([]);
  //   function getRoles() {
  //     axios
  //       .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/roles/${5}`)
  //       .then((response) => {
  //         const allData = response.data.data;
  //         setRoles(allData);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  useEffect(() => {
    // getRoles();
  }, []);
  return (
    <>
      <Navbar />

      {/* <PageBanner
        pageTitle="Service Request"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Request"
        imgClass="bg-3"
      /> */}

      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Service</span>
            <h2>Service Request</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <span>
                  {" "}
                  <h1>
                    <FcLike />
                  </h1>{" "}
                </span>
                <h3>Request for Blood</h3>
                <Link href="/service-request/blood" className="read-more">
                  Request Now <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <span>
                  {" "}
                  <h1>
                    <FcManager />
                  </h1>{" "}
                </span>
                <h3>Request for Doctor</h3>
                <Link href="/sign-up" className="read-more">
                  Request Now <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <span>
                  {" "}
                  <h1>
                    <FaAmbulance className="text-warning" />
                  </h1>{" "}
                </span>
                <h3>Request for Ambulance/ Carcass</h3>
                <Link href="/sign-up" className="read-more">
                  Request Now <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <span>
                  {" "}
                  <h1>
                    <FcShop />
                  </h1>{" "}
                </span>
                <h3>Request for Medicine/ Goods</h3>
                <Link href="/sign-up" className="read-more">
                  Request Now <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <img src="/img/services-card-shape.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServiceReq;