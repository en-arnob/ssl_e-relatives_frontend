import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import PageBanner from "../../components/Common/PageBanner";

const HealthManager = () => {
  const Router = useRouter();
  const { currentUser } = useContext(UserContext);
  const userId = currentUser?.id;

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Health Manager Account"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Getting Started"
        imgClass="bg-1"
      />
      <div className="min-vh-100">
        <div>
          <div>
            <div className="container-fluid">
              <div className="container p-5">
                <div className="row mt-5">
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div className="card card1 h-100">
                      <div className="card-body">
                        <h5 className="card-title">Regular Account</h5>
                        {/*<small className="text-muted">Account</small>*/}
                        <br />
                        <br />
                        <span className="h2">600৳</span>/year
                        <br />
                        <br />
                        <div className="d-grid my-3">
                          <button className="btn btn-outline-dark btn-block">
                            Register
                          </button>
                        </div>
                        <ul>
                          <li>Feature 1</li>
                          <li>Feature 2</li>
                          <li>Feature 3</li>
                          <li>Feature 4</li>
                          <li>Feature 5</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div className="card card2 h-100">
                      <div className="card-body">
                        <h5 className="card-title">Premium Account</h5>
                        {/*<small className="text-muted">Small Business</small>*/}
                        <br />
                        <br />
                        <span className="h2">900৳</span>/year
                        <br />
                        <br />
                        <div className="d-grid my-3">
                          <button className="btn btn-outline-dark btn-block">
                            Register
                          </button>
                        </div>
                        <ul>
                          <li>Feature 1</li>
                          <li>Feature 2</li>
                          <li>Feature 3</li>
                          <li>Feature 4</li>
                          <li>Feature 5</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div className="card card3 h-100">
                      <div className="card-body">
                        <h5 className="card-title">Priority Account</h5>
                        {/*<small className="text-muted">Large Company</small>*/}
                        <br />
                        <br />
                        <span className="h2">1200৳</span>/month
                        <br />
                        <br />
                        <div className="d-grid my-3">
                          <button className="btn btn-outline-dark btn-block">
                            Register
                          </button>
                        </div>
                        <ul>
                          <li>Feature 1</li>
                          <li>Feature 2</li>
                          <li>Feature 3</li>
                          <li>Feature 4</li>
                          <li>Feature 5</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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

export default HealthManager;
