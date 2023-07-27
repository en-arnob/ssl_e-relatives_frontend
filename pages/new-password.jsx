import React, { useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const PassReset = () => {
  const Router = useRouter();
  const [otp, setOtp] = useState("");
  const { data } = Router.query;
  const mobile = data ? JSON.parse(data) : null;
  // console.log(mobile);
  const [otpVerified, setOtpVerified] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(mobile);
    try {
      if (otp) {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/verify-otp-put/${mobile}/${otp}`
        );
        if (res.status === 200) {
          toast.success("Verified, now enter a new password");
          Router.push({
            pathname: "/enter-new-password",
            query: {
              data: JSON.stringify(mobile),
            },
            as: "/sign-in",
          });
        } else {
          toast.error("Sorry, OTP not matched!");
        }
      } else {
        toast.error("OTP required to confirm.");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Create New Password!"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Create Password!"
        imgClass="bg-3"
      />

      <div className="user-area-all-style recover-password-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Confirm OTP!</h3>
                </div>
                <form method="post">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="number"
                          name="otp"
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter OTP from SMS"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="default-btn btn-two"
                        type="submit"
                        onClick={submitHandler}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Subscribe /> */}

      <Footer />
    </>
  );
};

export default PassReset;
