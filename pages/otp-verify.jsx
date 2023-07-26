import React, { useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import axios from "axios";

const SignIn = () => {
  const Router = useRouter();

  const { data } = Router.query;
  const obj = data ? JSON.parse(data) : null;
  // console.log(obj);

  const [otpInput, setOtpInput] = useState("");

  const checkOTP = async (e) => {
    e.preventDefault();
    console.log(obj?.OTP, otpInput);
    if (parseInt(obj?.OTP) === parseInt(otpInput)) {
      const otpConfirm = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/verify-otp-put/${obj.userData.mobile}`
      );

      if (otpConfirm.status === 200) {
        toast.success("Success, Now login to continue");
        Router.push("/sign-in");
      } else {
        toast.error("Sorry, Error occurred");
      }
    } else {
      toast.error("Sorry, OTP not matched!");
    }
  };
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="OTP Verification"
        homePageUrl="/sign-up"
        homePageText="Sign Up"
        activePageText="OTP Verification"
        imgClass="bg-4"
      />

      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Verify OTP to complete registration!</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-action">
                <form method="post">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="otp"
                          placeholder="OTP from SMS"
                          onChange={(e) => {
                            setOtpInput(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="default-btn btn-two"
                        type="submit"
                        onClick={checkOTP}
                      >
                        Continue
                      </button>
                    </div>

                    {/* <div className="col-12">
                      <p className="account-desc">
                        Not a member? <Link href="/sign-up">Sign Up</Link>
                      </p>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="log-in-img"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <Subscribe /> */}

      <Footer />
    </>
  );
};

export default SignIn;
