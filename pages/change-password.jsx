import React, { useContext, useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { UserContext } from "../Context/UserContextAPI";

const ChangePassword = () => {
  const Router = useRouter();
  const [passwd, setPasswd] = useState("");
  const [cPasswd, setCPasswd] = useState("");
  const { data } = Router.query;
  const mobile = data ? JSON.parse(data) : null;
  console.log(data);
  const [otpVerified, setOtpVerified] = useState(false);
  const { currentUser } = useContext(UserContext);
//   console.log(currentUser.mobile);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    console.log(passwd, cPasswd);
    if (passwd && cPasswd) {
      if (passwd === cPasswd) {
        const userInfo = {
          mobile: currentUser.mobile,
          newPassword: passwd,
          confirmPassword: cPasswd,
        };
        console.log(userInfo);
        changePassword(userInfo);
      } else {
        toast.error("Password Not Matched!!");
      }
    }
  };

  const changePassword = async (userInfo) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/password`,
        userInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(res);use
      // const data = res.data;

      if (res.status === 200) {
        toast.success("Password Change Successfully!!");
        // Router.push("/sign-in");
      }
    } catch (error) {
      console.error(error);
      console.error(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />


      <div className="user-area-all-style recover-password-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Enter New Password!</h3>
                </div>
                <form method="post">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="passwd"
                          onChange={(e) => setPasswd(e.target.value)}
                          placeholder="Enter new password"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="cPasswd"
                          onChange={(e) => setCPasswd(e.target.value)}
                          placeholder="Confirm new password"
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

export default ChangePassword;
