import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";
import { toast } from "react-hot-toast";
import { formatDate } from "./../../utils/dateFormatter";
import { v4 as uuidv4 } from "uuid";

const Diagnosis = () => {
  const { currentUser } = useContext(UserContext);
  const [testReqs, setTestReqs] = useState([]);
  const [acceptedDonors, setAcceptedDonors] = useState([]); // State to store the filtered donors
  const [reqIdToCancel, setReqIdToCancel] = useState("");

  const [selectedReq, setSelectedReq] = useState({});
  const [investigationsList, setInvestigationsList] = useState([]);
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

  //multi column table
  const [table, setTable] = useState([
    {
      id: uuidv4(),
      serviceCenterId: currentUser.id,
      investigation: "",
      cost: "",
    },
  ]);
  function incrementTableRow() {
    setTable((prevItems) => {
      return [
        ...prevItems,
        {
          id: uuidv4(),
          serviceCenterId: currentUser.id,
          investigation: "",
          cost: "",
        },
      ];
    });
  }
  function decrementTableRow(index) {
    setTable((prevItems) => {
      return prevItems.filter((_, i) => i !== index);
    });
  }
  function handleOnChange(e, index) {
    const tgName = e.target.name;
    const tgValue = e.target.value;
    // console.log(e.target.value);

    setTable((prevItems) => {
      prevItems[index][tgName] = tgValue;
      return [...prevItems];
    });
  }

  const submitHandler = () => {
    console.log(table);
  };

  //cancel modal start
  const [showCancel, setShowCancel] = useState(false);
  const handleCancelModalClose = () => {
    setSelectedReq({});
    setShowCancel(false);
  };
  //cancel modal end
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setAcceptedDonors([]);
  };
  function fetchData() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/diagnosis-reqs/${currentUser?.id}`
      )
      .then((response) => {
        const data = response.data.data;
        // console.log(data);
        setTestReqs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleShow = (item) => {
    setSelectedReq(item);
    // console.log(selectedReq.req_no)
    // function fetchDonors() {
    //   axios
    //     .get(
    //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-by-me/donors/${requestNo}/${userId}`
    //     )
    //     .then((response) => {
    //       const data = response.data.data;
    //       // console.log(data);
    //       setAcceptedDonors(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // fetchDonors();
    setShow(true);
  };
  const background = {
    backgroundColor: "rgb(246, 241, 233)",
  };
  const background2 = {
    backgroundColor: "rgb(248, 246, 244)",
  };
  useEffect(() => {
    fetchData();
    getInvestigationsList();
  }, [currentUser]);
  // console.log(groupedReqs);

  const handleCancelReqByMe = (req_no) => {
    // console.log(req_no);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/request/test/cancel/${req_no}`
      )
      .then((response) => {
        if (response.data.status === "OK") {
          toast.success("Request cancelled successfully!");
        }
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const viewPhotoMode = () => {
    return (
      <div>
        <h6 className="bg-success p-2 text-white fw-light">
          Uploaded investigation image:
        </h6>
        <img
          src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/investigations/${selectedReq.inv_image}`}
        />
        <div className="card-body">
          <div className="border p-3 rounded">
            <div className="card-box p-2 text-white rounded">
              <h6 className="mb-0 text-uppercase ">
                Investigation Price Table
              </h6>
            </div>
            <hr />
            <div className="mb-3 row">
              <div className="row col-md-12">
                <div className="col-md-12 col-sm-5 fs-6 fw-semibold ">
                  <table className="table table-bordered">
                    <thead>
                      <tr className="bg-success">
                        <th className="fw-light text-white">Investigation</th>
                        <th className="fw-light text-white">Cost</th>
                        <th className="fw-light text-white">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.map((feature, index) => (
                        <tr key={feature.id}>
                          <td>
                            <select
                              className="form-control"
                              onChange={(e) => handleOnChange(e, index)}
                              name="investigation"
                            >
                              <option value="" disable selected>
                                Select Investigation
                              </option>
                              {investigationsList?.map((role) => {
                                return (
                                  <option value={role?.id} key={role?.id}>
                                    {role?.name}
                                  </option>
                                );
                              })}
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              name="cost"
                              onChange={(e) => handleOnChange(e, index)}
                              className="form-control form-control-input"
                              placeholder="Enter cost"
                            />
                          </td>
                          <td className="">
                            <div className="d-flex gap-3">
                              {table.length === 1 ||
                              index === table.length - 1 ? (
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={incrementTableRow}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-plus-circle"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                  </svg>
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => decrementTableRow(index)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-x-octagon"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                  </svg>
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const viewAutoMode = () => {
    return (
      <div>
        <div className="card-body">
          <div className="border p-3 rounded">
            <div className="card-box p-2 text-white rounded">
              <h6 className="mb-0 text-uppercase ">
                Investigation Price Table
              </h6>
            </div>
            <hr />
            <div className="mb-3 row">
              <div className="row col-md-12">
                <div className="col-md-12 col-sm-5 fs-6 fw-semibold ">
                  <table className="table table-bordered">
                    <thead>
                      <tr className="bg-success">
                        <th className="fw-light text-white">Investigation</th>
                        <th className="fw-light text-white">Cost</th>
                        <th className="fw-light text-white">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.map((feature, index) => (
                        <tr key={feature.id}>
                          <td>
                            <select
                              className="form-control"
                              onChange={(e) => handleOnChange(e, index)}
                              name="investigation"
                            >
                              <option value="" disable selected>
                                Select Investigation
                              </option>
                              {investigationsList?.map((role) => {
                                return (
                                  <option value={role?.id} key={role?.id}>
                                    {role?.name}
                                  </option>
                                );
                              })}
                            </select>
                          </td>
                          <td>
                            <input
                              type="text"
                              name="cost"
                              onChange={(e) => handleOnChange(e, index)}
                              className="form-control form-control-input"
                              placeholder="Enter cost"
                            />
                          </td>
                          <td className="">
                            <div className="d-flex gap-3">
                              {table.length === 1 ||
                              index === table.length - 1 ? (
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={incrementTableRow}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-plus-circle"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                  </svg>
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => decrementTableRow(index)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-x-octagon"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                  </svg>
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="cards min-vh-100 mt-4">
      <div>
        {testReqs.length > 0 ? (
          <>
            {testReqs.map((item, i) => (
              <div className="card w-75 mx-auto my-3" key={item.id}>
                <div
                  className="card-body"
                  style={i % 2 === 0 ? background : {}}
                >
                  <div className="row">
                    <div className="col">
                      <p className="mb-0 fw-semibold">
                        Request No: {item.req_no}
                      </p>
                      <p className="mb-0 fw-semibold">
                        Requested By: {item.test_requester?.f_name}
                      </p>
                    </div>
                    <div className="col">
                      <p className="mb-0 ">Request Type: Diagnosis Test</p>
                      <p className="mb-0">
                        Request Date:{" "}
                        {formatDate(item?.createdAt.split("T")[0])}
                      </p>
                    </div>
                    <div className="col">
                      <div className="mb-2">
                        {item.status !== 3 && (
                          <Button
                            variant="primary"
                            onClick={() => handleShow(item)}
                          >
                            View Request
                          </Button>
                        )}
                      </div>
                      {/* <div>
                        {item.status !== 3 ? (
                          <Button
                            variant="danger"
                            className="me-2"
                            onClick={() => {
                              setReqIdToCancel(item.req_no);
                              setShowCancel(true);
                            }}
                          >
                            Cancel Request
                          </Button>
                        ) : (
                          <h6
                            className="text-danger

                          "
                          >
                            Cancelled
                          </h6>
                        )}
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* start cancel Modal */}
                <>
                  <Modal show={showCancel} onHide={handleCancelModalClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Cancel Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="d-flex justify-content-center">
                        <p>Are you sure to cancel the request?</p>
                      </div>
                      <hr />
                      <div>
                        <div className="d-flex justify-content-center">
                          <Button
                            variant="danger"
                            className="me-2"
                            onClick={() => {
                              handleCancelReqByMe(reqIdToCancel);
                              setShowCancel(false);
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={handleCancelModalClose}
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>

                {/* end cancel Modal */}
                <>
                  <Modal
                    scrollable={true}
                    show={show}
                    onHide={handleClose}
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Response to Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {selectedReq.select_type === 1
                        ? viewAutoMode()
                        : selectedReq.select_type === 2
                        ? viewPhotoMode()
                        : "Error"}
                      <div className="row col-md-12 mb-2 mt-4">
                        <div className="justify-items-right align-items-right d-flex">
                          <button
                            onClick={() => submitHandler(selectedReq)}
                            type="submit"
                            className="ms-auto btn btn-success"
                            style={{
                              width: "6.25rem",
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>
              </div>
            ))}
          </>
        ) : (
          <div className="card w-75 mx-auto my-3">
            <div className="card-body">
              <h6 className="text-center">No requests yet!</h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diagnosis;
