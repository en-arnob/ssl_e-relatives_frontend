import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";

const RequestByMe = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  const [myReqs, setMyReqs] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  function fetchData() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-by-me/${currentUser?.id}`
      )
      .then((response) => {
        const data = response.data.data;
        console.log(data);
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
  }, [currentUser]);
  return (
    <div className="cards min-vh-100 mt-4">
      <div>
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
                        Reached Donor:{" "}
                        {item?.assigned_donor ? (
                          item?.assigned_donor?.f_name
                        ) : (
                          <span className="text-danger">
                            No available donor
                          </span>
                        )}
                      </p>
                      <p className="mb-0 ">
                        Status:{" "}
                        <span className="text-primary fw-bold">
                          {item.status === 0
                            ? "Pending"
                            : item?.status === 1
                            ? "Accepted"
                            : item?.status === 2
                            ? "Given"
                            : "Declined"}
                        </span>
                      </p>
                      <Button variant="success">Call Donor</Button>
                      <Button variant="secondary" className="mx-2 text-white">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Donors List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myReqs.map((donor, i) => (
                        <tr key={i}>
                          {console.log(donor.name)}
                          <td>{i + 1}</td>
                          <td>{donor.name}</td>
                          <td>{donor.address}</td>
                          <td>{donor.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table> */}
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
      </div>
    </div>
  );
};

export default RequestByMe;
