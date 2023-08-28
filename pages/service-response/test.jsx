import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";
import { toast } from "react-hot-toast";

const Test = () => {
  const { currentUser } = useContext(UserContext);
  const [myReqs, setMyReqs] = useState([]);
  const [acceptedDonors, setAcceptedDonors] = useState([]); // State to store the filtered donors
  const [reqIdToCancel, setReqIdToCancel] = useState("");

  const groupedReqs = myReqs.reduce((result, current) => {
    const existingItem = result.find((item) => item.req_no === current.req_no);
    if (existingItem) {
      existingItem.count += 1;
    } else {
      result.push({ ...current, count: 1 });
    }
    return result;
  }, []);
  //cancel modal start
  const [showCancel, setShowCancel] = useState(false);
  const handleCancelModalClose = () => setShowCancel(false);
  //cancel modal end
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setAcceptedDonors([]);
  };
  function fetchData() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-by-me/${currentUser?.id}`
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
  const handleShow = (requestNo, userId) => {
    function fetchDonors() {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-by-me/donors/${requestNo}/${userId}`
        )
        .then((response) => {
          const data = response.data.data;
          // console.log(data);
          setAcceptedDonors(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchDonors();
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
  }, [currentUser]);
  // console.log(groupedReqs);

  const handleCancelReqByMe = (req_no) => {
    console.log(req_no);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-by-me/cancel/${req_no}`
      )
      .then((response) => {
        if (response.data.status === "OK") {
          toast.success("Request cancelled successfully!");
        }
        fetchData();
      });
  };
  return (
    <div className="cards min-vh-100 mt-4">
      <div>
        {groupedReqs.length > 0 ? (
          <>
            {groupedReqs.map((item, i) => (
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
                      <p className="mb-0">
                        Blood Group:{" "}
                        <span className="fw-semibold ">
                          {parseInt(item?.req_blood_group) === 1
                            ? "A+"
                            : parseInt(item?.req_blood_group) === 2
                            ? "A-"
                            : parseInt(item?.req_blood_group) === 3
                            ? "B+"
                            : parseInt(item?.req_blood_group) === 4
                            ? "B-"
                            : parseInt(item?.req_blood_group) === 5
                            ? "O+"
                            : parseInt(item?.req_blood_group) === 6
                            ? "O-"
                            : parseInt(item?.req_blood_group) === 7
                            ? "AB+"
                            : parseInt(item?.req_blood_group) === 8
                            ? "AB-"
                            : "Unknown"}
                        </span>
                      </p>
                      <p className="mb-0">
                        Collection Point: {item?.col_point.f_name}
                      </p>
                      <p className="mb-0">
                        Collection Point Address: {item?.col_point.address_1},{" "}
                        {item?.col_point.user_detail.city.name},{" "}
                        {item?.col_point.user_detail.state.name},{" "}
                        {item?.col_point.user_detail.country.name}
                      </p>
                    </div>
                    <div className="col">
                      <p className="mb-0 ">Request Type: Blood</p>
                      <p>Total: {item.count} Bag(s)</p>
                    </div>
                    <div className="col">
                      <p className="mb-0">
                        Request Date: {item?.createdAt.split("T")[0]}
                      </p>
                      <p className="mb-0">
                        Needed Date: {item?.date_time.split("T")[0]}{" "}
                      </p>
                      <p className="mb-0">Time: {item.time}</p>
                      <div className="mb-2">
                        {item.status !== 3 && (
                          <Button
                            variant="primary"
                            onClick={() =>
                              handleShow(item.req_no, item.user_id)
                            }
                          >
                            Donor List
                          </Button>
                        )}
                      </div>
                      <div>
                        {item.status !== 3 ? (
                          <Button
                            variant="danger"
                            className="me-2"
                            onClick={() => {
                              setReqIdToCancel(item.req_no);
                              setShowCancel(true);
                            }}
                          >
                            Cancel
                          </Button>
                        ) : (
                          <h6
                            className="text-danger

                          "
                          >
                            Cancelled
                          </h6>
                        )}
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
                        <div className="d-flex justify-content-center ">
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
                      <Modal.Title>Donor List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {acceptedDonors.length > 0 ? (
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Address</th>
                              <th>Phone</th>
                            </tr>
                          </thead>
                          <tbody>
                            {acceptedDonors.map((donor, i) => (
                              <tr key={i}>
                                {/* {console.log(donor.name)} */}
                                <td>{i + 1}</td>
                                <td>{donor?.donor?.f_name}</td>
                                <td>{donor?.donor?.address_1}</td>
                                <td>{donor?.donor?.mobile}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      ) : (
                        "No accepted donor."
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
