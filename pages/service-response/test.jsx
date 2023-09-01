import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";
import { toast } from "react-hot-toast";
import { formatDate } from "./../../utils/dateFormatter";
import { Tooltip } from "react-tooltip";

const Test = () => {
  const { currentUser } = useContext(UserContext);
  const [myReqs, setMyReqs] = useState([]);
  const [serviceCenterResponse, setServiceCenterResponse] = useState([]); // State to store the filtered donors
  const [reqIdToCancel, setReqIdToCancel] = useState("");
  const [selectedItem, setSelectedItem] = useState({});

  const groupedReqs = myReqs.reduce((result, current) => {
    const existingItem = result.find(
      (item) => item.service_center_id === current.service_center_id
    );
    if (existingItem) {
      existingItem.cost += 1;
    } else {
      result.push({ ...current, count: 1 });
    }
    return result;
  }, []);

  const groupedMap = new Map();
  serviceCenterResponse.forEach((obj) => {
    const serviceCenterId = obj.service_center_id;
    if (groupedMap.has(serviceCenterId)) {
      const existingObj = groupedMap.get(serviceCenterId);
      existingObj.cost = parseFloat(existingObj.cost) + parseFloat(obj.cost);
    } else {
      groupedMap.set(serviceCenterId, { ...obj });
    }
  });
  const mergedArray = Array.from(groupedMap.values());
  console.log(mergedArray);

  //cancel modal start
  const [showCancel, setShowCancel] = useState(false);
  const handleCancelModalClose = () => setShowCancel(false);
  //cancel modal end
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setServiceCenterResponse([]);
  };
  function fetchData() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/request/test/${currentUser?.id}`
      )
      .then((response) => {
        const data = response.data.data;
        // console.log(data);
        setMyReqs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleShow = (requestNo, userId, item) => {
    function fetchServiceCenterResponse() {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/diagnosis-reqs/get-responses/${requestNo}`
        )
        .then((response) => {
          const data = response.data.data;
          // console.log(data);
          setServiceCenterResponse(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchServiceCenterResponse();
    setShow(true);
    setSelectedItem(item);
  };

  const background = {
    backgroundColor: "rgb(246, 241, 233)",
  };

  const background2 = {
    backgroundColor: "rgb(248, 246, 244)",
  };

  useEffect(() => {
    fetchData();
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
  function getInvestigationDetailsString(array, serviceCenterId) {
    const filteredObjects = array.filter(
      (obj) => obj.service_center_id === serviceCenterId
    );
    if (filteredObjects.length === 0) {
      return "No data found for the provided service_center_id.";
    }

    const detailsStringArray = filteredObjects.map(
      (obj) => `${obj.investigationDetails.name}: ${obj.cost} Tk`
    );
    return detailsStringArray.join(", ");
  }
  function confirmResponse(testId) {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/request/test/confirm/${testId}`
      )
      .then((response) => {
        if (response.data.status === "OK") {
          toast.success("Successfully Confirmed!");
        }
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="cards min-vh-100 mt-4">
      <div>
        {myReqs.length > 0 ? (
          <>
            {myReqs.map((item, i) => (
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
                            onClick={() =>
                              handleShow(item.req_no, item.user_id, item)
                            }
                          >
                            Show Responses
                          </Button>
                        )}
                      </div>
                      <div>
                        {item.status === 0 ? (<Button
                            variant="danger"
                            className="me-2"
                            onClick={() => {
                              setReqIdToCancel(item.req_no);
                              setShowCancel(true);
                            }}
                          >
                            Cancel Request
                          </Button>) : item.status === 1 ? (<Button
                            variant="danger"
                            className="me-2"
                            onClick={() => {
                              setReqIdToCancel(item.req_no);
                              setShowCancel(true);
                            }}
                          >
                            Cancel Request
                          </Button>) : item.status === 2 ? "Confirmed" : item.status === 3 ? "Cancelled": "Completed"  }
                        
                      </div>
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
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Service Center Responses</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {serviceCenterResponse.length > 0 ? (
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Service Center</th>
                              <th>Address</th>
                              <th>Price</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mergedArray?.map((response, i) => (
                              <tr key={i}>
                                {/* {console.log(donor.name)} */}
                                <td>{i + 1}</td>
                                <td>{response?.diagno_responder?.f_name}</td>
                                <td>{response?.diagno_responder?.address_1}</td>
                                <td>{response.cost}</td>

                                <td>
                                  {selectedItem?.status === 2 || 4 ? (
                                    "Confirmed"
                                  ) : (
                                    <button
                                      onClick={() =>
                                        confirmResponse(response?.req_no)
                                      }
                                      className="btn btn-primary btn-sm"
                                    >
                                      Confirm
                                    </button>
                                  )}

                                  <a
                                    className="mt-1 btn btn-success btn-sm"
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={getInvestigationDetailsString(
                                      serviceCenterResponse,
                                      response.service_center_id
                                    )}
                                  >
                                    Details
                                  </a>
                                  <Tooltip id="my-tooltip" />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      ) : (
                        "Data will be shown here"
                      )}
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

export default Test;
