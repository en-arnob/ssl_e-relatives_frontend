import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { UserContext } from "../Context/UserContextAPI";
import axios from "axios";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  const [userDetails, setUserDetails] = useState({});
  function getUserDetails() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/details/user/${currentUser?.id}`
      )
      .then((response) => {
        const userData = response.data.data;
        // console.log(response.data.data);
        setUserDetails(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function formatDate(inputDateString) {
    if (inputDateString) {
      const dateParts = inputDateString?.split("-");
      return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    } else {
      return null;
    }
  }
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="min-vh-100">
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
                  <label className="labels fs-5">
                    <span className="fw-bold">{currentUser?.f_name}</span>
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
                  <h4 className="text-right ">
                    {parseInt(currentUser?.role_id) === 11
                      ? "Doctor's "
                      : parseInt(currentUser?.role_id) === 10
                      ? "User "
                      : parseInt(currentUser?.role_id) === 12
                      ? "Delivery Person's "
                      : parseInt(currentUser?.role_id) === 13
                      ? "Service Center "
                      : parseInt(currentUser?.role_id) === 14
                      ? "Ambulance/ Carcass "
                      : parseInt(currentUser?.role_id) === 15
                      ? "Store Profile "
                      : "User"}
                    Profile
                  </h4>
                  <Link
                    href="/update-profile"
                    className="btn btn-info text-white"
                  >
                    Update Profile
                  </Link>
                </div>

                <div className="row mt-3">
                  {currentUser.role_id !== 13 && (
                    <>
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Gender
                        </div>
                        <div className="col-md-1 col-sm-1 mb-2">:</div>
                        <div className="col-md-4 col-sm-5 mb-2">
                          {parseInt(userDetails?.gender_id) === 1
                            ? "Male"
                            : parseInt(userDetails?.gender_id) === 2
                            ? "Female"
                            : "Not Defined"}
                        </div>
                      </div>
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Blood Group
                        </div>
                        <div className="col-md-1 col-sm-1 mb-2">:</div>
                        <div className="col-md-4 col-sm-5 mb-2">
                          {parseInt(userDetails?.blood_group) === 1
                            ? "A+"
                            : parseInt(userDetails?.blood_group) === 2
                            ? "A-"
                            : parseInt(userDetails?.blood_group) === 3
                            ? "B+"
                            : parseInt(userDetails?.blood_group) === 4
                            ? "B-"
                            : parseInt(userDetails?.blood_group) === 5
                            ? "O+"
                            : parseInt(userDetails?.blood_group) === 6
                            ? "O-"
                            : parseInt(userDetails?.blood_group) === 7
                            ? "AB+"
                            : parseInt(userDetails?.blood_group) === 8
                            ? "AB-"
                            : "Unknown"}
                        </div>
                      </div>
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Date of Birth
                        </div>
                        <div className="col-md-1 col-sm-1 mb-2">:</div>
                        <div className="col-md-4 col-sm-5 mb-2">
                          {formatDate(currentUser?.date_of_birth)}
                        </div>
                      </div>
                    </>
                  )}
                  {currentUser?.role_id === 10 && (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                        Last Blood Donation Date
                      </div>
                      <div className="col-md-1 col-sm-1 mb-2">:</div>
                      <div className="col-md-4 col-sm-5 mb-2">
                        {userDetails?.last_blood_donate !== "0000-00-00"
                          ? formatDate(userDetails?.last_blood_donate)
                          : "Never Donated"}
                      </div>
                    </div>
                  )}
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                      Country
                    </div>
                    <div className="col-md-1 col-sm-1 mb-2">:</div>
                    <div className="col-md-4 col-sm-5 mb-2">
                      {userDetails?.country?.name}
                    </div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                      Division/State
                    </div>
                    <div className="col-md-1 col-sm-1 mb-2">:</div>
                    <div className="col-md-4 col-sm-5 mb-2">
                      {userDetails?.state?.name}
                    </div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                      District/City
                    </div>
                    <div className="col-md-1 col-sm-1 mb-2">:</div>
                    <div className="col-md-4 col-sm-5 mb-2">
                      {userDetails?.city?.name}
                    </div>
                  </div>

                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5  fs-6 fw-semibold">
                      Address
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">
                      {currentUser?.address_1}
                    </div>
                  </div>
                  {currentUser?.role_id === 11 && (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Name of the Institution
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.institution_name}
                      </div>
                    </div>
                  )}

                  {(currentUser?.role_id === 11 ||
                    currentUser?.role_id === 12 ||
                    currentUser?.role_id === 13 ||
                    currentUser?.role_id === 14 ||
                    currentUser?.role_id === 15) && (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Designation
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.designation}
                      </div>
                    </div>
                  )}

                  {currentUser?.role_id === 11 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        BMDC License No
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.bmdc_license}
                      </div>
                    </div>
                  ) : null}

                  {currentUser?.role_id === 15 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Drug License No.
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.drug_license}
                      </div>
                    </div>
                  ) : null}
                  {currentUser?.role_id === 11 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Available time Schedule for Online Service
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.online_service_time}
                      </div>
                    </div>
                  ) : null}

                  {currentUser?.role_id === 11 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Degree/Specialization
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.specialization_degree}
                      </div>
                    </div>
                  ) : null}
                  {(currentUser?.role_id === 12 ||
                    currentUser?.role_id === 13 ||
                    currentUser?.role_id === 14 ||
                    currentUser?.role_id === 15) && (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Owner/Chairman/Manageing Director Name
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.owner_name}
                      </div>
                    </div>
                  )}

                  {(currentUser?.role_id === 12 ||
                    currentUser?.role_id === 13 ||
                    currentUser?.role_id === 14 ||
                    currentUser?.role_id === 15) && (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Responsiible Person Name
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.responsible_person_name}
                      </div>
                    </div>
                  )}

                  {currentUser?.role_id === 12 ||
                    (currentUser.role_id === 14 && (
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                          Vehicle License No
                        </div>
                        <div className="col-md-1 col-sm-1">:</div>
                        <div className="col-md-4 col-sm-5 ">
                          {userDetails?.vehicle_license}
                        </div>
                      </div>
                    ))}

                  {currentUser?.role_id === 12 ||
                  currentUser?.role_id === 14 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Driving License
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.driving_license}
                      </div>
                    </div>
                  ) : null}
                  {currentUser?.role_id === 12 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        National ID No
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {currentUser?.nid}
                      </div>
                    </div>
                  ) : null}

                  {currentUser?.roleId === 12 || currentUser?.role_id === 14 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Years of Experiance
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.driving_exp_years}
                      </div>
                    </div>
                  ) : null}

                  {currentUser?.role_id === 12 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Delivery Person's Name
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.delivery_person_name}
                      </div>
                    </div>
                  ) : null}
                  {(currentUser?.role_id === 13 ||
                    currentUser.role_id === 15) && (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Trade License NO
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.trade_license}
                      </div>
                    </div>
                  )}

                  {currentUser?.role_id === 13 ||
                  currentUser?.role_id === 14 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        DGHS License No
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.dghs_license}
                      </div>
                    </div>
                  ) : null}

                  {currentUser?.role_id === 13 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Available Service
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.available_service}
                      </div>
                    </div>
                  ) : null}

                  {currentUser?.role_id === 14 ? (
                    <div className="row col-md-12 mb-2">
                      <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                        Driver's Name
                      </div>
                      <div className="col-md-1 col-sm-1">:</div>
                      <div className="col-md-4 col-sm-5 ">
                        {userDetails?.driver_name}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
