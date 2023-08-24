import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const bloodReq = () => {
  const Router = useRouter();
  const { currentUser } = useContext(UserContext);
  const userId = currentUser?.id;
  const [bloodGroup, setBloodGroup] = useState("");
  const [bagNum, setBagNum] = useState(0);
  const [dateTime, setDateTime] = useState("");
  const [time, setTime] = useState("");
  const [collectionPointObj, setCollectionPointObj] = useState({});
  const [collectionPointsArray, setCollectionPointsArray] = useState([]);

  function getCollectionPoints() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/request/blood/collection-points`
      )
      .then((response) => {
        const data = response.data.data;
        setCollectionPointsArray(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const valid =
    bloodGroup !== "" &&
    bagNum > 0 &&
    bagNum <= 5 &&
    dateTime !== "" &&
    time !== "" &&
    collectionPointObj?.id;

  const submitHandler = async (e) => {
    const data = {
      userId: userId,
      bg: bloodGroup,
      bags: bagNum,
      dateTime: dateTime,
      time: time,
      collectionPoint: collectionPointObj.id,
    };
    e.preventDefault();
    if (valid) {
      console.log(data);
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/request/blood`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.status === 200) {
          // console.log(res);
          toast.success("Successfully submitted the request.");
          Router.push("/service-response");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Please fill-up the form properly.");
    }
  };

  useEffect(() => {
    getCollectionPoints();
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
                          {currentUser?.f_name}
                        </span>{" "}
                        ({currentUser?.username})
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
                      <h4 className="text-right ">Request for blood</h4>
                    </div>

                    <div className="row mt-3">
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Required Blood Group
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <select
                              className="form-control"
                              onChange={(e) => setBloodGroup(e.target.value)}
                            >
                              <option value="">&#x2630; Select Blood</option>
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
                      </div>
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Number of Bags
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="number"
                              name="bagNum"
                              onChange={(e) => setBagNum(e.target.value)}
                              placeholder="Maximum 5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Date
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <input
                            className="form-control w-100"
                            type="date"
                            onChange={(e) => setDateTime(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Time
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <select
                              className="form-control"
                              onChange={(e) => setTime(e.target.value)}
                            >
                              <option value="">&#x2630; Select Time </option>
                              <option value="12:00 AM - 3:00 AM">
                                12:00 AM - 3:00 AM
                              </option>
                              <option value="3:00 AM - 6:00 AM">
                                3:00 AM - 6:00 AM
                              </option>
                              <option value="6:00 AM - 9:00 AM">
                                6:00 AM - 9:00 AM
                              </option>
                              <option value="9:00 AM - 12:00 PM">
                                9:00 AM - 12:00 PM
                              </option>
                              <option value="12:00 PM - 3:00 PM">
                                12:00 PM - 3:00 PM
                              </option>
                              <option value="3:00 PM - 6:00 PM">
                                3:00 PM - 6:00 PM
                              </option>
                              <option value="6:00 PM - 9:00 PM">
                                6:00 PM - 9:00 PM
                              </option>
                              <option value="9:00 PM - 12:00 AM">
                                9:00 PM - 12:00 AM
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Collection Point
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <select
                              className="form-control"
                              onChange={(e) => {
                                setCollectionPointObj(
                                  collectionPointsArray.find((cP) => {
                                    return cP.id == e.target.value;
                                  })
                                );
                              }}
                            >
                              <option value="">
                                &#x2630; Select Service Center
                              </option>
                              {collectionPointsArray?.map((cP) => {
                                return (
                                  <option value={cP?.id} key={cP?.id}>
                                    {cP?.f_name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Address
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              type="textarea"
                              name="address"
                              rows={3}
                              // onChange={(e) => setMobile(e.target.value)}
                              value={
                                collectionPointObj?.id
                                  ? `${collectionPointObj?.address_1}, ${collectionPointObj?.user_detail?.city?.name}, ${collectionPointObj?.user_detail?.state?.name}, ${collectionPointObj?.user_detail?.country?.name}`
                                  : "Address will be imported from collection point"
                              }
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-2 justify-content-center">
                        <button
                          className="default-btn btn-two"
                          type="submit"
                          onClick={submitHandler}
                        >
                          Send Request
                        </button>
                      </div>
                    </div>
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

export default bloodReq;
