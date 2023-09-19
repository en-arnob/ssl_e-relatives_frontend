import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import { ProgressBar } from "react-loader-spinner";

const Fail = () => {
  const Router = useRouter();
  const [clicked, setClicked] = useState(true);
  const { currentUser } = useContext(UserContext);
  const userId = currentUser?.id;

  // console.log(currentUser);

  useEffect(() => {
    const timer = setTimeout(() => {
      Router.push("https://e-relatives.com/health-manager");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-vh-100">
        <div>
          <div>
            <div className="container rounded bg-white mt-2 mb-5">
              <div className="row d-flex justify-content-between">
                <div className="col-md-3 border-right me-3">
                  <div className="d-flex flex-column align-items-center  p-3 py-1">
                    {currentUser?.image ? (
                      <img
                        className="rounded-circle mt-5 border border-2"
                        width="150px"
                        src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/users/${currentUser?.image}`}
                      />
                    ) : (
                      <img
                        className="rounded-circle mt-5 border border-2"
                        width="150px"
                        src="/img/avatar-user.png"
                      />
                    )}
                    <div className="col-md-11 mt-1 text-center">
                      <label className="labels fs-6">
                        <span className="fw-semibold">
                          {currentUser?.f_name} ({currentUser?.registration_no})
                        </span>{" "}
                      </label>
                    </div>
                    <div className="col-md-11 text-center">
                      <label className="labels fs-6 fw-semibold">
                        {currentUser?.role?.name}
                      </label>
                    </div>
                    {/* <div className="col-md-11">
                  <label className="labels fs-6">
                    Service Category: Surgery
                  </label>
                </div> */}
                    <div className="col-md-11 text-center">
                      <label className="labels fs-6 fw-semibold">
                        Phone: {currentUser?.mobile}
                      </label>
                    </div>
                    <div className="col-md-11 text-center">
                      <label className="labels fs-6 fw-semibold">
                        Email: {currentUser?.email}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 border-right">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 className="text-right text-danger fw-normal">
                        Your Health Manager Subscription payment is failed!
                      </h4>
                    </div>
                    <div className=" align-items-center ">
                      <h5 className="text-right fw-normal ">
                        Please try again. Thank You.
                      </h5>

                      <p>System will redirect you in a moment..</p>
                    </div>

                    {clicked && (
                      <>
                        <ProgressBar
                          height="80"
                          width="80"
                          ariaLabel="progress-bar-loading"
                          wrapperStyle={{}}
                          wrapperClass="progress-bar-wrapper"
                          borderColor="#f43741"
                          barColor="#51E5FF"
                        />
                      </>
                    )}
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

export default Fail;
