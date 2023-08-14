import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";
import Select from "react-select";

const Test = () => {
  const { currentUser } = useContext(UserContext);

  const [investigationsList, setInvestigationsList] = useState([]);
  const [selectedInvestigations, setSelectedInvestigations] = useState([]);
  const [collectionPointObj, setCollectionPointObj] = useState({});
  const [collectionPointsArray, setCollectionPointsArray] = useState([]);

  function getInvestigationsList() {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/services/req-for-test`)
      .then((response) => {
        const data = response.data.data;
        setInvestigationsList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const submitHandler = async (e) => {};

  useEffect(() => {
    getInvestigationsList();
  }, []);
  console.log(selectedInvestigations);
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
                      <h4 className="text-right ">Request for Test</h4>
                    </div>

                    <div className="row mt-3">
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Selection Type:
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <input
                            className="form-control form-control-sm"
                            id="formFileSm"
                            type="file"
                          />
                        </div>
                      </div>

                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Select From List
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <Select
                              className="basic-multi-select"
                              isMulti
                              name="colors"
                              options={investigationsList.map((item) => ({
                                value: item.id,
                                label: item.name,
                              }))}
                              onChange={(e) => {
                                setSelectedInvestigations(e);
                              }}
                              classNamePrefix="select"
                            />
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
                              <option value="" >
                                Select Collection Point
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
                          //   onClick={submitHandler}
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

export default Test;


