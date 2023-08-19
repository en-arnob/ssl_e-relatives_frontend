import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import Parser from "html-react-parser";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { UserContext } from "../Context/UserContextAPI";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const SignUp = () => {
  const Router = useRouter();
  const { check } = useContext(UserContext);
  const [selectedRole, setSelectedRole] = useState(0);
  const [roles, setRoles] = useState([]);
  const [rodalVisible, setRodalVisible] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [passwd, setPassWd] = useState("");
  const [confirmPasswd, setConfirmPasswd] = useState("");
  const [tcAgree, setTCAgree] = useState(false);

  const [serviceCats, setServiceCats] = useState([]);
  const [selectedServiceCat, setSelectedServiceCat] = useState(0);

  const handleCheck = () => {
    setTCAgree(!tcAgree);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      role_id: selectedRole?.id,
      service_category_id: selectedServiceCat?.id,
      name: name,
      mobile: mobile,
      email: email,
      userName: userName,
      password: passwd,
    };

    if (passwd === confirmPasswd) {
      // console.log(data);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/signup`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 201) {
        const userData = res?.data.data;
        // console.log(res.data);
        toast.success("Registration Success!");
        Router.push({
          pathname: "/sign-in",
          // query: {
          //   data: JSON.stringify(userData),
          // },
          // as: "/otp-verify",
        });

        // const otpGET = await axios.get(
        //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/otp-generate`
        // );

        // if (otpGET.status === 200) {
        // const otpData = {
        //   userData,
        //   OTP: otpGET?.data?.data,
        // };
        // const OTP = otpGET?.data?.data;
        // const message = `Dear ${name}, Please confirm Your OTP: ${OTP} in the browser to continue registration.`;
        // smsAPI(mobile, message)
        //   .then((res) => {
        //     console.log(res);
        //     toast.success("OTP sent to your mobile number.");
        //     // navigate to OTP Verify
        //     Router.push({
        //       pathname: "/otp-verify",
        //       query: {
        //         data: JSON.stringify(otpData),
        //       },
        //       as: "/otp-verify",
        //     });
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        // }
      } else {
        toast.error("User already created using this mobile number");
      }
    } else {
      toast.error("Password Not Matched!!");
    }
  }

  const valid =
    name !== "" &&
    email !== "" &&
    userName !== "" &&
    mobile !== "" &&
    passwd !== "" &&
    confirmPasswd !== "" &&
    tcAgree
      ? true
      : false;

  function selectRoleHandler(e) {
    setSelectedRole(
      roles.find((role) => {
        return role.id == e.target.value;
      })
    );
  }
  function selectServiceHandler(e) {
    setSelectedServiceCat(
      serviceCats.find((cat) => {
        return cat.id == e.target.value;
      })
    );
  }

  function getRoles() {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/roles/priority/5/6`)
      .then((response) => {
        const allData = response.data.data;
        setRoles(allData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    check();
    function getServiceCategories() {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/service-category/findbyrole/${selectedRole?.id}`
        )
        .then((response) => {
          const allData = response.data.data;
          setServiceCats(allData);
          // console.log(allData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getServiceCategories();
  }, [selectedRole]);

  const [tnCTitle, setTnCTitle] = useState("");
  const [tnC, setTnC] = useState("");

  useEffect(() => {
    const fetchTnC = () => {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/terms-conditions/${selectedRole?.id}`
        )
        .then((response) => {
          if (response.data) {
            setTnCTitle(response.data.name);
            setTnC(response.data.info);
          } else {
            setTnCTitle("");
            setTnC("");
          }
        })
        .catch((err) => console.log(err));
    };
    fetchTnC();
  }, [selectedRole]);

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Sign Up"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign Up"
        imgClass="bg-2"
      />

      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Create an account!</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-action">
                <form method="post">
                  <div className="row">
                    {/* <div className="col-lg-4 col-md-4 col-sm-12">
                      <button className="default-btn" type="submit">
                        Google
                      </button>
                    </div> */}

                    {/* <div className="col-lg-4 col-md-4 col-sm-12">
                      <button className="default-btn" type="submit">
                        Facebook
                      </button>
                    </div> */}

                    {/* <div className="col-lg-4 col-md-4 col-sm-12">
                      <button className="default-btn" type="submit">
                        Twitter
                      </button>
                    </div> */}

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <select
                          className="form-select"
                          onChange={selectRoleHandler}
                        >
                          <option value="" disabled selected>
                            Account type -
                          </option>
                          {roles?.map((role) => {
                            return (
                              <option value={role?.id} key={role?.id}>
                                {role?.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    {serviceCats.length > 0 ? (
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <select
                            className="form-select"
                            onChange={selectServiceHandler}
                          >
                            <option value="" disabled selected>
                              {selectedRole?.id === 11
                                ? "Field of practice - "
                                : selectedRole.id === 12
                                ? "Vehicle type - "
                                : ""}
                            </option>
                            {serviceCats?.map((cat) => {
                              return (
                                <option value={cat?.id} key={cat?.id}>
                                  {cat?.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="">
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder={
                              selectedRole?.id === 12
                                ? "Company Name"
                                : selectedRole?.id === 13
                                ? "Collection Point Name"
                                : selectedRole?.id === 14
                                ? "Company Name"
                                : selectedRole?.id === 15
                                ? "Business Entity Name"
                                : "Enter Your Name"
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="tel"
                            name="mobile"
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Enter Your Mobile Number"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="username"
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter Your Username"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={(e) => setPassWd(e.target.value)}
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12 ">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="password"
                            name="cpassword"
                            onChange={(e) => setConfirmPasswd(e.target.value)}
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>

                      {selectedRole?.id ? (
                        <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                          <div className="agree-label">
                            <input
                              type="checkbox"
                              id="chb1"
                              checked={tcAgree}
                              onChange={handleCheck}
                            />
                            <label htmlFor="chb1">
                              I agree with {selectedRole?.name}'s{" "}
                              <a
                                role="button"
                                // href={{
                                //   pathname: "/terms-conditions",
                                //   query: selectedRole, // the data
                                // }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setRodalVisible(true);
                                }}
                              >
                                Terms Conditions
                              </a>
                            </label>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="col-12">
                        {valid ? (
                          <button
                            className="default-btn btn-two"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Sign Up
                          </button>
                        ) : (
                          <span>All fields are required.</span>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Already have an account?{" "}
                        <Link href="/sign-in">Log In</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sign-in-img"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <Subscribe /> */}
      <Rodal
        visible={rodalVisible}
        onClose={() => setRodalVisible(false)}
        closeOnEsc={true}
        showMask={true}
        height={700}
        width={900}
      >
        <div>
          {tnCTitle}
          <div className="terms-conditions ptb-100">
            <div className="container">
              <div className="single-privacy">{Parser(tnC)}</div>
            </div>
          </div>
        </div>
      </Rodal>

      <Footer />
    </>
  );
};

export default SignUp;
