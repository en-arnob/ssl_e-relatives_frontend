import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import { UserContext } from "../Context/UserContextAPI";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Image from "next/image";

const SignIn = () => {
  const Router = useRouter();
  const { methodSignin, currentUser } = useContext(UserContext);
  const [mobile, setMobile] = useState("");
  const [passwd, setPasswd] = useState("");

  // form dynamic data states
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [selectedState, setSelectedState] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);
  const [selectedService, setSelectedService] = useState(0);

  // form dynamic data fetch
  const fetchCountryList = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/city/country/data`)
      .then((response) => setCountryList(response.data.data))
      .catch((err) => console.log(err));
  };

  const fetchStateList = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/city/state/data/${selectedCountry?.id}`
      )
      .then((response) => {
        setStateList(response.data.data);
      })
      .catch((err) => console.log(err));
  };
  const fetchCityList = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/city/data/${selectedState?.id}`
      )
      .then((response) => {
        setCityList(response.data.data);
      })
      .catch((err) => console.log(err));
  };
  const fetchServiceList = () => {
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_API_BASE_URL
        }/service_category_list/service-list/service-cat/${6}`
      )
      .then((response) => {
        setServiceList(response.data.data);
      })
      .catch((err) => console.log(err));
  };

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
          console.log(res);
          if (res.status === 200) {
            const userData = res.data;
            window.localStorage.setItem("jwtToken", userData.token);
            Router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Mobile and Password required to login");
    }
  };

  useEffect(() => {
    fetchCountryList();
    fetchServiceList();
  }, []);

  useEffect(() => {
    fetchStateList();
    fetchCityList();
  }, [selectedCountry, selectedState]);

  return (
    <>
      <Navbar />

      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h3>
              Hey <span className="text-danger">{currentUser?.f_name}</span>,
              Complete your profile to enhance your experience here. We'll
              gently remind you during your next login if you decide to skip for
              now. Your profile helps us better serve you. Thank you!
            </h3>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-action">
                <form method="post">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group content-center item-center text-center">
                        {/* <input
                          className="form-control"
                          type="file"
                          name="image"
                          src="/img/avatar-user.png"
                          width="30px"
                          // onChange={(e) => setMobile(e.target.value)}
                        /> */}
                        <label for="image">
                          <input
                            type="file"
                            name="image"
                            id="image"
                            style={{ display: "none" }}
                          />
                          <Image
                            src="/img/avatar-user.png"
                            width={100}
                            height={100}
                            alt="Picture of the author"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          // onChange={selectRoleHandler}
                        >
                          <option value="" disabled selected>
                            Gender
                          </option>

                          <option value={1}>Male</option>
                          <option value={2}>Female</option>
                          <option value={3}>Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          // onChange={selectRoleHandler}
                        >
                          <option value="" disabled selected>
                            Blood Group
                          </option>
                          {/* {roles?.map((role) => {
                            return (
                              <option value={role?.id} key={role?.id}>
                                {role?.name}
                              </option>
                            );
                          })} */}
                          <option value={1}>A+</option>
                          <option value={2}>A-</option>
                          <option value={3}>B+</option>
                          <option value={4}>B-</option>
                          <option value={5}>O+</option>
                          <option value={6}>O-</option>
                          <option value={7}>AB+</option>
                          <option value={8}>AB-</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="px-1">Date of Birth</label>
                        <input
                          id="date"
                          type="date"
                          name="date_of_birth"
                          // defaultValue={record?.date_of_birth}
                          className="form-control"
                          placeholder="Date Picker..."
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          onChange={(e) => {
                            setSelectedCountry(
                              countryList.find((country) => {
                                return country.id == e.target.value;
                              })
                            );
                          }}
                        >
                          <option value="" disabled selected>
                            Country
                          </option>
                          {countryList?.map((country) => {
                            return (
                              <option value={country?.id} key={country?.id}>
                                {country?.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          onChange={(e) => {
                            setSelectedState(
                              stateList.find((state) => {
                                return state.id == e.target.value;
                              })
                            );
                          }}
                        >
                          <option value="" disabled selected>
                            Division/State
                          </option>
                          {stateList?.map((state) => {
                            return (
                              <option value={state?.id} key={state?.id}>
                                {state?.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          onChange={(e) => {
                            setSelectedCity(
                              cityList.find((city) => {
                                return city.id == e.target.value;
                              })
                            );
                          }}
                        >
                          <option value="" disabled selected>
                            District/City
                          </option>
                          {cityList?.map((city) => {
                            return (
                              <option value={city?.id} key={city?.id}>
                                {city?.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="adress"
                          placeholder="Address (Thana, Union/Post Office, Village)"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form-action">
                <form method="post">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Owner/Chairman/Managing Director’s Name"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Name of the Institution"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Responsible Person’s Name"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Designation"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Vehicle License No."
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Trade License No."
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="BMDC License No."
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="National ID No."
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="DGHS License No."
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Drug License No."
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Available Time Schedule for Online Service"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          // onChange={selectRoleHandler}
                        >
                          <option value="" disabled selected>
                            Available Services
                          </option>
                          {serviceList?.map((service) => {
                            return (
                              <option value={service?.id} key={service?.id}>
                                {service?.name}
                              </option>
                          
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Delivery Person Name"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Driver’s Name"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Driving License No."
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Degree/ Specialization"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="owner_name"
                          placeholder="Years of Driving Experience"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="default-btn btn-two"
                        type="submit"
                        onClick={submitHandler}
                      >
                        Submit
                      </button>
                      <p className="text-center mt-2">Skip for now</p>
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

export default SignIn;
