import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";
import { toast } from "react-hot-toast";
import Select from "react-select";

const RequestByMe = () => {
  const { currentUser } = useContext(UserContext);
  const [myReqs, setMyReqs] = useState([]);
  const [acceptedDonors, setAcceptedDonors] = useState([]); // State to store the filtered donors
  const [reqIdToCancel, setReqIdToCancel] = useState("");
  const [selectedReq, setSelectedReq] = useState(0);
  const [dataWAcceptedDonor, setDataWAcceptedDonor] = useState([]);
  const [investigationsList, setInvestigationsList] = useState([]);
  const [selectedInvestigations, setSelectedInvestigations] = useState([]);
  const [uploadFile, setUploadFile] = useState(false);
  const [selectFromList, setSelectFromList] = useState(false);
  const [image, setImage] = useState("");
  const [selectedDonorResponse, setSelectedDonorResponse] = useState({});

  const groupedReqs = myReqs.reduce((result, current) => {
    const existingItem = result.find((item) => item.req_no === current.req_no);
    if (existingItem) {
      existingItem.count += 1;
    } else {
      result.push({ ...current, count: 1 });
    }
    return result;
  }, []);
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "upload") {
      setUploadFile(true);
      setSelectFromList(false);
    } else if (selectedValue === "select") {
      setUploadFile(false);
      setSelectFromList(true);
    } else {
      setUploadFile(false);
      setSelectFromList(false);
    }
  };
  //cancel modal start
  const [showCancel, setShowCancel] = useState(false);
  const handleCancelModalClose = () => setShowCancel(false);
  //cancel modal end
  const [show, setShow] = useState(false);
  const [invAddShow, setInvAddShow] = useState(false);

  const handleInvAddShow = (item) => {
    // console.log(item);
    setInvAddShow(true);
    setShow(false);
    setSelectedDonorResponse(item);
  };
  const handleInvAddClose = () => {
    setInvAddShow(false);
  };

  async function saveInvestigations() {
    const invs = selectedInvestigations.map((item) => item.value);
    const invCsv = invs.join(",");
    let obj = {
      reqNo: selectedDonorResponse?.req_no,
      donorId: selectedDonorResponse.accepted_donor,
    };
    if (selectFromList) {
      obj.invsCsv = invCsv;
    } else if (uploadFile) {
    }

    // console.log(obj);
    try {
      const upd = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/service-history/save-investigations`,
        obj,
      );
      if (upd.status === 200) {
        toast.success("Investigations added successfully");
        fetchData();
        setInvAddShow(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleClose = () => {
    setShow(false);
    setAcceptedDonors([]);
  };

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

  function fetchData() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-by-me/${currentUser?.id}`,
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

  const markReceived = (req_no, donorId) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/coll-point-requests/${donorId}`,
        {
          accepted_donor: donorId,
          req_no: req_no,
        },
      )
      .then((response) => {
        const responseData = response.data;
        // console.log(responseData)
        if (responseData.status === "OK") {
          fetchData();
          fetchDonors(req_no);
          toast.success("Status Updated Successfully!");

          // console.log(bloodReqDetails);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function fetchDonors(requestNo) {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-by-me/donors/${requestNo}/${currentUser.id}`,
      )
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        setAcceptedDonors(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleShow = (requestNo) => {
    setSelectedReq(requestNo);

    fetchDonors(requestNo);
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
    console.log(req_no);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-by-me/cancel/${req_no}`,
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
                        {item.status === 0 && (
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
                        )}
                        {item.status === 3 && (
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
                  <Modal show={show} size="xl" onHide={handleClose}>
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
                              <th>Action</th>
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
                                <td>
                                  {donor.status === 1 && (
                                    <Button
                                      variant="success"
                                      onClick={(e) => {
                                        markReceived(
                                          donor.req_no,
                                          donor.donor.id,
                                        );
                                      }}
                                    >
                                      Received
                                    </Button>
                                  )}
                                  {donor.status === 2 && (
                                    <button
                                      onClick={() => handleInvAddShow(donor)}
                                      className="btn btn-sm btn-info"
                                    >
                                      {" "}
                                      Add Investigations
                                    </button>
                                  )}
                                </td>
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
                <>
                  <Modal show={invAddShow} onHide={handleInvAddClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Investigation List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <>
                        <div className="row col-md-12 mb-2">
                          <div className="col-md-6 col-sm-5 mb-2 fs-6 fw-semibold">
                            Selection Type:
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <select
                              className="form-control form-control-sm"
                              onChange={handleDropdownChange}
                            >
                              <option value="default">Select</option>
                              <option value="upload">
                                Upload Picture of Prescription
                              </option>
                              <option value="select">
                                Select Investigations
                              </option>
                            </select>
                          </div>
                        </div>
                        {selectFromList && (
                          <div className="row col-md-12 mb-2">
                            <div className="col-md-6 col-sm-5 mb-2 fs-6 fw-semibold">
                              Select Investigation(s)
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <div className="form-group">
                                <Select
                                  className="basic-multi-select"
                                  isMulti
                                  name="colors"
                                  options={investigationsList.map((item) => ({
                                    value: item.id,
                                    label: `${item.name} - ${item.detailed_name}`,
                                  }))}
                                  onChange={(e) => {
                                    setSelectedInvestigations(e);
                                  }}
                                  classNamePrefix="select"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                        {uploadFile && (
                          <div className="row col-md-12 mb-2">
                            <div className="col-md-6 col-sm-5 mb-2 fs-6 fw-semibold">
                              Upload FIle:
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <div className="form-group">
                                <input
                                  className="form-control form-control-sm"
                                  id="image"
                                  name="image"
                                  onChange={(e) => setImage(e.target.files[0])}
                                  type="file"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="row col-md-12">
                          <div className="col-md-6 justify-content-right">
                            <Button
                              variant="success"
                              onClick={(e) => saveInvestigations()}
                            >
                              Save
                            </Button>
                          </div>
                        </div>
                      </>
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
