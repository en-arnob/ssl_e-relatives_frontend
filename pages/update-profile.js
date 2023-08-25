import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import { UserContext } from "../Context/UserContextAPI";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Image from "next/image";
import imagee from "../public/img/avatar/avatar.jpeg";

const UpdateProfile = () => {
  const [userDetails, setUserDetails] = useState({});

  const Router = useRouter();
  const { currentUser, loading, setLoading } = useContext(UserContext);
  console.log("current user:", currentUser);
  function getUserDetails() {
    try {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/details/user/${currentUser?.id}`
        )
        .then((response) => {
          const userData = response.data.data;
          setUserDetails(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    getUserDetails();
  }, [currentUser]);

  console.log("user Details:", userDetails);

  // data states
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [responsiblePName, setResponsiblePName] = useState("");
  const [designation, setDesignation] = useState("");
  const [vehicleLicense, setVehicleLicense] = useState("");
  const [tradeLicense, setTradeLicense] = useState("");
  const [bmdcLicense, setBmdcLicense] = useState("");
  const [dghsLicense, setDghsLicense] = useState("");
  const [drugLicense, setDrugLicense] = useState("");
  const [onlineServiceTime, setOnlineServiceTime] = useState("");
  const [availableService, setAvailableService] = useState("");
  const [deliveryPName, setDeliveryPName] = useState("");
  const [driverName, setDriverName] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [lastBloodDonate, setLastBloodDonate] = useState("");
  const [specializationDegree, setSpecializationDegree] = useState("");
  const [drivingExpYears, setDrivingExpYears] = useState("");
  const [nid, setNid] = useState("");
  // const [requiredField, setRequiredField] = useState(false);
  let requiredField = false;

  // form dynamic data states
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [selectedState, setSelectedState] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);

  useEffect(() => {
    setGender(userDetails.gender_id);
    setBloodGroup(userDetails.blood_group);
    setDob(currentUser.date_of_birth);
    setSelectedCountry(userDetails.country);
    setSelectedState(userDetails.state);
    setSelectedCity(userDetails.city);
    setAddress(currentUser.address_1);
    setOwnerName(userDetails.owner_name);
    setResponsiblePName(userDetails.responsible_person_name);
    setDesignation(userDetails.designation);
    setVehicleLicense(userDetails.vehicle_license);
    setNid(userDetails.nationality_id);
    setDeliveryPName(userDetails.delivery_person_name);
    setDrivingLicense(userDetails.driving_license);
    setDrivingExpYears(userDetails.driving_exp_years);
    setNid(currentUser.nid);
    setLastBloodDonate(userDetails.last_blood_donate);
    setTradeLicense(userDetails.trade_license);
    setDghsLicense(userDetails.dghs_license);
  }, [
    userDetails.gender_id,
    userDetails.blood_group,
    currentUser.date_of_birth,
    userDetails.country,
    userDetails.state_id,
    userDetails.city,
    currentUser.address_1,
    userDetails.owner_name,
    userDetails.responsible_person_name,
    userDetails.designation,
    userDetails.vehicle_license,
    userDetails.nationality_id,
    userDetails.delivery_person_name,
    userDetails.driving_license,
    userDetails.driving_exp_years,
    currentUser.nid,
    userDetails.last_blood_donate,
    userDetails.trade_license,
    userDetails.dghs_license,
  ]);

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

  const submitHandler = async (e) => {
    // console.log(lastBloodDonate);
    e.preventDefault();

    const data = {
      gender,
      bloodGroup,
      dob,
      country: selectedCountry.id,
      state: selectedState.id,
      city: selectedCity.id,
      address,
      ownerName,
      institutionName,
      responsiblePName,
      designation,
      vehicleLicense,
      tradeLicense,
      bmdcLicense,
      dghsLicense,
      drugLicense,
      onlineServiceTime,
      availableService,
      deliveryPName,
      driverName,
      drivingLicense,
      specializationDegree,
      drivingExpYears,
      nid,
    };
    if (lastBloodDonate !== "0000-00-00") {
      data.lastBloodDonate = lastBloodDonate;
    }

    if (currentUser.role_id === 10) {
      {
        lastBloodDonate ? (requiredField = true) : (requiredField = false);
      }
    } else if (currentUser.role_id === 11) {
      {
        institutionName &&
        designation &&
        bmdcLicense &&
        onlineServiceTime &&
        specializationDegree
          ? (requiredField = true)
          : (requiredField = false);
      }
    } else if (currentUser.role_id === 12) {
      {
        ownerName &&
        responsiblePName &&
        designation &&
        vehicleLicense &&
        nid &&
        deliveryPName &&
        drivingLicense &&
        drivingExpYears
          ? (requiredField = true)
          : (requiredField = false);
      }
    } else if (currentUser.role_id === 13) {
      {
        ownerName &&
        responsiblePName &&
        designation &&
        tradeLicense &&
        dghsLicense &&
        availableService
          ? (requiredField = true)
          : (requiredField = false);
      }
    } else if (currentUser.role_id === 14) {
      ownerName &&
      responsiblePName &&
      designation &&
      drivingLicense &&
      vehicleLicense &&
      dghsLicense &&
      driverName &&
      drivingExpYears
        ? (requiredField = true)
        : (requiredField = false);
    } else if (currentUser.role_id === 15) {
      {
        ownerName &&
        responsiblePName &&
        designation &&
        tradeLicense &&
        drugLicense
          ? (requiredField = true)
          : (requiredField = false);
      }
    }
    const formData = new FormData();
    formData.append("image", image);
    if (requiredField) {
      console.log(data);
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/user/upload-image`,
          formData
        );
        const imagePath = res.data.filename;
        if (imagePath) {
          data.image = imagePath;
        }
        console.log("form submit:", data);

        const upd = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/user/details/update/${currentUser?.id}`,
          data
        );
        if (upd.status === 200) {
          toast.success("Details Updated Successfully!");
          Router.push("/");
        } else {
          toast.error("Error");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please fill all required fields!");
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
  console.log(currentUser);

  return (
    <>
      <Navbar />

      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="section-title">
            {currentUser?.user_details_added === 0 ? (
              <h3>
                Hey <span className="text-danger">{currentUser?.f_name}</span>,
                Complete your profile to enhance your experience here. We'll
                gently remind you during your next login if you decide to skip
                for now. Your profile helps us better serve you. Thank you!
              </h3>
            ) : (
              <h3>
                Update{" "}
                {parseInt(currentUser?.role_id) === 11
                  ? "Doctor's "
                  : parseInt(currentUser?.role_id) === 10
                  ? "User "
                  : parseInt(currentUser?.role_id) === 12
                  ? "Delivery Person's "
                  : parseInt(currentUser?.role_id) === 13
                  ? "Collection Point "
                  : parseInt(currentUser?.role_id) === 14
                  ? "Ambulance/ Carcass "
                  : parseInt(currentUser?.role_id) === 15
                  ? "Store Profile "
                  : "User"}{" "}
                Profile
              </h3>
            )}

            {currentUser?.user_details_added === 1 && (
              <Link
                href="/"
                className="text-center justify-content-center w-100 mt-1"
              >
                Go Back.
              </Link>
            )}
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-action">
                <form method="post">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group content-center item-center text-center">
                        {/* <label htmlFor="image">
                          {currentUser?.image ? (
                            <img
                              className="rounded-circle img-fluid "
                              src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/users/${currentUser?.image}`}
                              style={{ width: "100px", height: "100px" }}
                              alt=""
                            />
                          ) : (
                              <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={(e) => setImage(e.target.files[0])}
                                // style={{ display: "none" }}
                              />
                          )}
                        </label> */}

                        <label for="image">
                          <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={(e) => setImage(e.target.files[0])}
                            style={{ display: "none" }}
                          />
                          {image !== "" ? (
                            <img
                              src={URL.createObjectURL(image)}
                              width={100}
                              height={100}
                              alt="Picture of the author"
                              className="rounded-circle"
                            />
                          ) : (
                            <img
                              src="/img/avatar-user.png"
                              width={100}
                              height={100}
                              alt="Picture of the author"
                              className="rounded-circle"
                            />
                          )}
                        </label>
                      </div>
                    </div>
                    {currentUser.role_id !== 13 && (
                      <>
                        <div className="col-12">
                          <div className="form-group">
                            <select
                              className="form-control"
                              onChange={(e) => setGender(e.target.value)}
                              value={gender}
                            >
                              <option value="" disabled selected>
                                Gender *
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
                              onChange={(e) => setBloodGroup(e.target.value)}
                              value={bloodGroup}
                            >
                              <option value="" disabled selected>
                                Blood Group *
                              </option>

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
                            <label className="px-1">Date of Birth *</label>
                            <input
                              id="date"
                              type="date"
                              name="date_of_birth"
                              value={dob}
                              onChange={(e) => setDob(e.target.value)}
                              className="form-control"
                              placeholder="Date Picker..."
                            />
                          </div>
                        </div>
                      </>
                    )}
                    <div className="col-12">
                      <div className="form-group">
                        <select
                          className="form-control"
                          value={selectedCountry}
                          onChange={(e) => {
                            setSelectedCountry(
                              countryList.find((country) => {
                                return country.id == e.target.value;
                              })
                            );
                          }}
                        >
                          <option value="">{selectedCountry?.name}</option>
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
                          <option value="">{selectedState?.name}</option>
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
                          <option value="">{selectedCity?.name}</option>
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
                          name="adress"
                          placeholder="Address (Thana, Union/Post Office, Village)"
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                        />
                      </div>
                    </div>
                    {currentUser?.role_id === 12 ||
                    currentUser?.role_id === 13 ||
                    currentUser?.role_id === 14 ||
                    currentUser?.role_id === 15 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="owner_name"
                            placeholder="Owner/Chairman/Managing Director’s Name *"
                            onChange={(e) => setOwnerName(e.target.value)}
                            value={ownerName}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 11 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="institution"
                            placeholder="Name of the Institution *"
                            onChange={(e) => setInstitutionName(e.target.value)}
                            value={institutionName}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 12 ||
                    currentUser?.role_id === 13 ||
                    currentUser?.role_id === 14 ||
                    currentUser?.role_id === 15 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="responsible"
                            placeholder="Responsible Person's Name  *"
                            onChange={(e) =>
                              setResponsiblePName(e.target.value)
                            }
                            value={responsiblePName}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 11 ||
                    currentUser?.role_id === 12 ||
                    currentUser?.role_id === 13 ||
                    currentUser?.role_id === 14 ||
                    currentUser?.role_id === 15 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="designation"
                            placeholder="Designation  *"
                            onChange={(e) => setDesignation(e.target.value)}
                            value={designation}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 12 ||
                    currentUser.role_id === 14 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="vehicle_license"
                            placeholder="Vehicle License No. "
                            onChange={(e) => setVehicleLicense(e.target.value)}
                            value={vehicleLicense}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 13 ||
                    currentUser.role_id === 15 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="trade_license"
                            placeholder="Trade License No.  *"
                            onChange={(e) => setTradeLicense(e.target.value)}
                            value={tradeLicense}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 11 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="bmdc_license"
                            placeholder="BMDC License No.  *"
                            onChange={(e) => setBmdcLicense(e.target.value)}
                            value={bmdcLicense}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 12 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="nid"
                            placeholder="National ID No.  *"
                            onChange={(e) => setNid(e.target.value)}
                            value={nid}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 13 ||
                    currentUser?.role_id === 14 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="dghs_license"
                            placeholder="DGHS License No.  *"
                            onChange={(e) => setDghsLicense(e.target.value)}
                            value={dghsLicense}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 15 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="drug_license"
                            placeholder="Drug License No. *  "
                            onChange={(e) => setDrugLicense(e.target.value)}
                            value={drugLicense}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 11 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="time_schedule"
                            placeholder="Available Time Schedule for Online Service  *"
                            onChange={(e) =>
                              setOnlineServiceTime(e.target.value)
                            }
                            value={onlineServiceTime}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 13 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <select
                            className="form-control"
                            onChange={(e) =>
                              setAvailableService(e.target.value)
                            }
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
                    ) : null}
                    {currentUser?.role_id === 12 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="deliveryPName"
                            placeholder="Delivery Person Name "
                            onChange={(e) => setDeliveryPName(e.target.value)}
                            value={deliveryPName}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 14 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="driver_name"
                            placeholder="Driver’s Name *"
                            onChange={(e) => setDriverName(e.target.value)}
                            value={driverName}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 12 ||
                    currentUser?.role_id === 14 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="driving_license"
                            placeholder="Driving License No. * "
                            onChange={(e) => setDrivingLicense(e.target.value)}
                            value={drivingLicense}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 10 && (
                      <div className="col-12">
                        <div className="form-group">
                          <label className="px-1">
                            Last Blood Donation Date
                          </label>
                          <input
                            id="date"
                            type="date"
                            name="lastBloodDonate"
                            value={lastBloodDonate}
                            onChange={(e) => setLastBloodDonate(e.target.value)}
                            className="form-control"
                            placeholder="Date Picker... "
                          />
                        </div>
                      </div>
                    )}
                    {currentUser?.role_id === 11 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="degree"
                            placeholder="Degree/ Specialization * "
                            onChange={(e) =>
                              setSpecializationDegree(e.target.value)
                            }
                            value={specializationDegree}
                          />
                        </div>
                      </div>
                    ) : null}
                    {currentUser?.role_id === 12 ||
                    currentUser?.role_id === 14 ? (
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="exp_driving"
                            placeholder="Years of Driving Experience  *"
                            onChange={(e) => setDrivingExpYears(e.target.value)}
                            value={drivingExpYears}
                          />
                        </div>
                      </div>
                    ) : null}
                    <div className="col-12">
                      <button
                        className="default-btn btn-two"
                        type="submit"
                        onClick={submitHandler}
                      >
                        Update
                      </button>
                      {currentUser?.user_details_added === 0 && (
                        <Link
                          href="/"
                          className="text-center justify-content-center w-100 mt-1"
                        >
                          Skip for now.
                        </Link>
                      )}
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

export default UpdateProfile;
