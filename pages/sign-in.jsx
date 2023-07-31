import React, { useState, useContext } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import { UserContext } from "../Context/UserContextAPI";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const SignIn = () => {
  const Router = useRouter();
  const { methodSignin } = useContext(UserContext);
  const [mobile, setMobile] = useState("");
  const [passwd, setPasswd] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(mobile, passwd);
    if (mobile && passwd) {
      const signinData = {
        mobile: mobile,
        password: passwd,
      };
      methodSignin(signinData)
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            const userData = res.data;
            console.log(userData.data.userQuery.user_details_added)
            window.localStorage.setItem("jwtToken", userData.token);
            if(userData.data.userQuery.user_details_added === 0) {
              Router.push("/user-details")
            } else {
              Router.push("/");
            }
            
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Mobile and Password required to login");
    }
  };
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Sign In"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign In"
        imgClass="bg-1"
      />

      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Sign In your account!</h2>
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
                          type="tel"
                          name="mobile"
                          placeholder="Phone Number"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={(e) => setPasswd(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 form-condition">
                      <div className="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label htmlFor="chb1">Remember Me</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <Link href="/recover-password" className="forget">
                        Forgot my password?
                      </Link>
                    </div>

                    <div className="col-12">
                      <button
                        className="default-btn btn-two"
                        type="submit"
                        onClick={submitHandler}
                      >
                        Log In Now
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Not a member? <Link href="/sign-up">Sign Up</Link>
                      </p>
                    </div>
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
