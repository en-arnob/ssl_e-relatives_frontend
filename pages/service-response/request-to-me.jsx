import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";

const RequestToMe = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  const [myReqs, setMyReqs] = useState([]);
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  function acceptReq(id) {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-to-me/accept/${id}/${currentUser?.id}`
      )
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        setAccepted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchData() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-to-me/${currentUser?.id}`
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

  const background = {
    backgroundColor: "rgb(246, 241, 233)",
  };
  const background2 = {
    backgroundColor: "rgb(248, 246, 244)",
  };
  useEffect(() => {
    fetchData();
  }, [currentUser, accepted]);

  const acceptedRequest = myReqs.find((item) => item.status === 1);
  return (
    <div className="cards min-vh-100 mt-4">
      <div>
        {acceptedRequest ? (
          <div className="card w-75 mx-auto my-2">
            <div
              className="card-body"
              
            >
              <div className="row">
                <div className="col">
                  <p className="mb-0 ">Request Type: Blood</p>
                  <p className="mb-0 ">
                    Request ID:{" "}
                    <span className="fw-semibold">
                      {acceptedRequest.req_no}
                    </span>{" "}
                  </p>
                  <p className="mb-0 text-danger">
                    Blood Group:{" "}
                    <span className="fw-semibold ">
                      {parseInt(acceptedRequest?.req_blood_group) === 1
                        ? "A+"
                        : parseInt(acceptedRequest?.req_blood_group) === 2
                        ? "A-"
                        : parseInt(acceptedRequest?.req_blood_group) === 3
                        ? "B+"
                        : parseInt(acceptedRequest?.req_blood_group) === 4
                        ? "B-"
                        : parseInt(acceptedRequest?.req_blood_group) === 5
                        ? "O+"
                        : parseInt(acceptedRequest?.req_blood_group) === 6
                        ? "O-"
                        : parseInt(acceptedRequest?.req_blood_group) === 7
                        ? "AB+"
                        : parseInt(acceptedRequest?.req_blood_group) === 8
                        ? "A-"
                        : "Unknown"}
                    </span>
                  </p>
                  <p className="mb-0">
                    Collection Point: {acceptedRequest?.col_point.f_name}
                  </p>
                  <p className="mb-0">
                    Address: {acceptedRequest?.col_point.address_1},{" "}
                    {acceptedRequest?.col_point.user_detail.city.name},{" "}
                    {acceptedRequest?.col_point.user_detail.state.name},{" "}
                    {acceptedRequest?.col_point.user_detail.country.name}
                  </p>
                </div>
                <div className="col">
                  <p className="mb-0">
                    Request Date Time:{" "}
                    {acceptedRequest?.createdAt.split("T")[0]}
                  </p>
                  <p className="mb-0 fw-bold text-primary">
                    Needed Date Time: {acceptedRequest?.date_time.split("T")[0]}
                  </p>
                  <p className="mb-0 fw-bold">
                    Requested By:{" "}
                    {acceptedRequest?.req_by ? (
                      acceptedRequest?.req_by?.f_name
                    ) : (
                      <span className="text-danger">"Unknown"</span>
                    )}
                  </p>

                  <p className="mb-0 ">
                    Status:{" "}
                    <span className="text-primary fw-bold">
                      {acceptedRequest.status === 0
                        ? "Pending"
                        : acceptedRequest.status === 1
                        ? "Accepted"
                        : acceptedRequest.status === 2
                        ? "Declined"
                        : "Given"}
                    </span>
                  </p>
                  {acceptedRequest.status === 0 && (
                    <Button
                      variant="success"
                      onClick={() => acceptReq(acceptedRequest.id)}
                    >
                      Accept
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Donors List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{acceptedRequest.assigned_donor?.f_name}</p>
                </Modal.Body>
              </Modal>
            </>
          </div>
        ) : (
          <>
            {myReqs.length > 0 ? (
              <>
                {myReqs?.map((item, i) => (
                  <div className="card w-75 mx-auto my-2" key={i}>
                    <div
                      className="card-body"
                      style={i % 2 === 0 ? background : background2}
                    >
                      <div className="row">
                        <div className="col">
                          <p className="mb-0 ">Request Type: Blood</p>
                          <p className="mb-0 ">
                            Request ID:{" "}
                            <span className="fw-semibold">{item.req_no}</span>{" "}
                          </p>
                          <p className="mb-0 text-danger">
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
                                ? "A-"
                                : "Unknown"}
                            </span>
                          </p>
                          <p className="mb-0">
                            Collection Point: {item?.col_point.f_name}
                          </p>
                          <p className="mb-0">
                            Address: {item?.col_point.address_1},{" "}
                            {item?.col_point.user_detail.city.name},{" "}
                            {item?.col_point.user_detail.state.name},{" "}
                            {item?.col_point.user_detail.country.name}
                          </p>
                        </div>
                        <div className="col">
                          <p className="mb-0">
                            Request Date Time: {item?.createdAt.split("T")[0]}
                          </p>
                          <p className="mb-0 fw-bold text-primary">
                            Needed Date Time: {item?.date_time.split("T")[0]}
                          </p>
                          <p className="mb-0 fw-bold">
                            Requested By:{" "}
                            {item?.req_by ? (
                              item?.req_by?.f_name
                            ) : (
                              <span className="text-danger">"Unknown"</span>
                            )}
                          </p>

                          <p className="mb-0 ">
                            Status:{" "}
                            <span className="text-primary fw-bold">
                              {item.status === 0
                                ? "Pending"
                                : item.status === 1
                                ? "Accepted"
                                : item.status === 2
                                ? "Declined"
                                : "Given"}
                            </span>
                          </p>
                          {item.status === 0 && (
                            <Button
                              variant="success"
                              onClick={() => acceptReq(item.id)}
                            >
                              Accept
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Donors List</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>{item.assigned_donor?.f_name}</p>
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
          </>
        )}
      </div>
    </div>
  );
};

export default RequestToMe;
