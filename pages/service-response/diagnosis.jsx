import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";
import { toast } from "react-hot-toast";
import { formatDate } from "./../../utils/dateFormatter";
import { v4 as uuidv4 } from "uuid";
import DiagAutoMode from "./diag-automode";
import DiagPhotoMode from "./diag-photomode";

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
  }, [currentUser, show]);
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
  const markCompleted = (req_no) => {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/diagnosis-reqs/mark-as-completed/${req_no}/${currentUser?.id}`
      )
      .then((response) => {
        if (response.data.status === "OK") {
          toast.success("Saved as completed!");
        }
        fetchData();
      });
  };

  return (
    <div className="cards min-vh-100 mt-4">
      <div>
        {testReqs.length > 0 ? (
          <>
            {testReqs.map(
              (item, i) =>
                item.status !== 4 && (
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
                            {item.status === 0 ? (
                              <Button
                                variant="primary"
                                onClick={() => handleShow(item)}
                              >
                                View Request
                              </Button>
                            ) : item.status === 1 ? (
                              "Submitted"
                            ) : item.status === 2 ? (
                              <>
                                <p className='text-success'>Request Confirmed</p>
                                <Button
                                  variant="success"
                                  onClick={() => markCompleted(item.req_no)}
                                >
                                  Mark As Completed
                                </Button>
                              </>
                            ) : (
                              "Completed"
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
                          {selectedReq.select_type === 1 ? (
                            <DiagAutoMode requ={selectedReq} />
                          ) : selectedReq.select_type === 2 ? (
                            <DiagPhotoMode requ={selectedReq} />
                          ) : (
                            "Error"
                          )}
                        </Modal.Body>
                      </Modal>
                    </>
                  </div>
                )
            )}
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
