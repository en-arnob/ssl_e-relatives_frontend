import React, { useState, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import Parser from "html-react-parser";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState(0);
  const [roles, setRoles] = useState([]);
  const [rodalVisible, setRodalVisible] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [passwd, setPassWd] = useState("");
  const [confirmPasswd, setConfirmPasswd] = useState("");

  const valid =
    name !== "" &&
    email !== "" &&
    userName !== "" &&
    mobile !== "" &&
    passwd !== "" &&
    confirmPasswd !== ""
      ? true
      : false;

  function selectRoleHandler(e) {
    setSelectedRole(
      roles.find((role) => {
        return role.id == e.target.value;
      })
    );
  }

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
                            Register as -
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

                    <div className="">
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
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
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Enter Your Username"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12 ">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="password"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                        <div className="agree-label">
                          <input type="checkbox" id="chb1" />
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

                      <div className="col-12">
                        {selectedRole?.id ? (
                          <button className="default-btn btn-two" type="submit">
                            Sign Up
                          </button>
                        ) : (
                          <button
                            className="btn btn-primary"
                            disabled
                            type="submit"
                          >
                            All fields are required.
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Already have an account?{" "}
                        <Link href="/log-in">Log In</Link>
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
        width="auto"
        height={700}
        closeOnEsc={true}
        showMask={true}
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
