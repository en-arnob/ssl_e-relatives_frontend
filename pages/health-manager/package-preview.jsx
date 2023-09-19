import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import { ProgressBar, ColorRing } from "react-loader-spinner";

const PackagePreview = () => {
  const Router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { currentUser } = useContext(UserContext);
  const userId = currentUser?.id;
  const packageId = Router.query.package;
  const [packageData, setPackageData] = useState({});
  const [loading, setLoading] = useState(true);

  // console.log(currentUser);

  async function getPackage() {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/package-management/${packageId}`,
      );
      // console.log(res.data.data);
      if (res) {
        // console.log(res.data.data);
        setPackageData(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const payNowHandler = async () => {
    setClicked(true);
    const obj = {
      userId: userId,
      userReg: currentUser?.registration_no,
      userName: currentUser?.f_name,
      productName: packageData?.name,
      totalAmount: packageData?.price,
      productCategory: "Health Manager Subscription",
      userEmail: currentUser?.email,
      userPhone: currentUser?.mobile,
      userAddress: currentUser?.address1,
    };
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment-gateway/ssl/paynow`,
      obj,
    );
    // console.log(res.data);
    if (res) {
      await Router.push(res.data);
    }
  };
  useEffect(() => {
    getPackage();
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
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right fw-normal">
                        Health Manager Account Subscription Details
                      </h4>
                    </div>
                    {loading ? (
                      <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                          "#e15b64",
                          "#f47e60",
                          "#f8b26a",
                          "#abbd81",
                          "#849b87",
                        ]}
                      />
                    ) : (
                      <>
                        <div className="row mt-2">
                          <div className="row col-md-12 mb-2">
                            <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                              Package Name
                            </div>
                            <div className="col-md-6 col-sm-6">
                              {packageData?.name}
                            </div>
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="row col-md-12 mb-2">
                            <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                              Package Duration
                            </div>
                            <div className="col-md-6 col-sm-6">
                              {packageData?.duration}
                            </div>
                          </div>
                        </div>

                        <div className="row mt-2">
                          <div className="row col-md-12 mb-2">
                            <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                              Price
                            </div>
                            <div className="col-md-6 col-sm-6">
                              {packageData?.price} Tk.
                            </div>
                          </div>
                        </div>
                        {clicked ? (
                          <>
                            <ProgressBar
                              height="80"
                              width="80"
                              ariaLabel="progress-bar-loading"
                              wrapperStyle={{}}
                              wrapperClass="progress-bar-wrapper"
                              borderColor="#F4442E"
                              barColor="#51E5FF"
                            />
                          </>
                        ) : (
                          <div className="col-12 mt-3 justify-content-center">
                            <button
                              className="btn btn-success me-2"
                              type="submit"
                              onClick={payNowHandler}
                            >
                              Pay Now
                            </button>
                            <button
                              className="btn btn-outline-dark"
                              type="submit"
                              onClick={() => Router.back()}
                            >
                              Go Back
                            </button>
                          </div>
                        )}
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

export default PackagePreview;
