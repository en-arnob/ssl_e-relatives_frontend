import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";
import { toast } from "react-hot-toast";
import Select from "react-select";

const RequestToMe = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  const [myReqs, setMyReqs] = useState([]);
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [selectedReq, setSelectedReq] = useState({});
  const [investigationsList, setInvestigationsList] = useState([]);
  const [selectedInvestigations, setSelectedInvestigations] = useState([]);
  const [image, setImage] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (item) => {
    setShow(true);
    setSelectedReq(item);
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

  async function saveInvestigations() {
    const invs = selectedInvestigations.map((item) => item.value);
    const invCsv = invs.join(",");
    let obj = {
      reqNo: selectedReq?.req_no,
      donorId: currentUser.id,
    };
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      try {
        const imgUpload = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/request/test/upload-image`,
          formData,
        );
        const imagePath = imgUpload.data.filename;
        if (imagePath) {
          obj.invImage = imagePath;
          const upd = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/service-history/save-investigations`,
            obj,
          );
          if (upd.status === 200) {
            toast.success("Investigations added successfully");
            fetchData();
            setShow(false);
          }
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      obj.invsCsv = invCsv;
      const upd = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/service-history/save-investigations`,
        obj,
      );
      if (upd.status === 200) {
        toast.success("Investigations added successfully");
        fetchData();
        setShow(false);
      }
    }

    // console.log(obj);
  }

  function acceptReq(id) {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-to-me/accept/${id}/${currentUser?.id}`,
      )
      .then((response) => {
        const data = response.data.data;
        // console.log(data);
        setAccepted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const markGiven = (req_no) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/coll-point-requests/${currentUser?.id}`,
        {
          accepted_donor: currentUser?.id,
          req_no: req_no,
        },
      )
      .then((response) => {
        const responseData = response.data;
        // console.log(responseData)
        if (responseData.status === "OK") {
          fetchData();
          toast.success("Status Updated Successfully!");

          // console.log(bloodReqDetails);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function fetchData() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/requests-to-me/${currentUser?.id}`,
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
    getInvestigationsList();
  }, [currentUser, accepted]);
  const acceptedRequest = myReqs?.find(
    (item) => item.status === 1 || item.status === 2,
  );
  return (
    <div className="cards min-vh-100 mt-4">
      <div>
        {acceptedRequest ? (
          <div className="card w-75 mx-auto my-2">
            <div className="card-body">
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
                    Needed Date: {acceptedRequest?.date_time.split("T")[0]}
                  </p>
                  <p className="mb-0 fw-bold text-primary">
                    Time: {acceptedRequest?.time}
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
                        ? "Donated"
                        : "Other"}
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
                  {acceptedRequest.status === 1 && (
                    <Button
                      variant="success"
                      onClick={(e) => {
                        markGiven(acceptedRequest.req_no);
                      }}
                    >
                      Given
                    </Button>
                  )}
                  {acceptedRequest.status === 2 && (
                    <span>
                      <button
                        onClick={() => handleShow(acceptedRequest)}
                        className="btn btn-sm btn-info"
                      >
                        {" "}
                        Add Investigations
                      </button>
                    </span>
                  )}
                </div>
              </div>
            </div>
            <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Investigation List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <>
                    {/*<div className="row col-md-12 mb-2">*/}
                    {/*  <div className="col-md-6 col-sm-5 mb-2 fs-6 fw-semibold">*/}
                    {/*    Selection Type:*/}
                    {/*  </div>*/}
                    {/*  <div className="col-md-6 col-sm-6">*/}
                    {/*    <select*/}
                    {/*      className="form-control form-control-sm"*/}
                    {/*      onChange={handleDropdownChange}*/}
                    {/*    >*/}
                    {/*      <option value="default">Select</option>*/}
                    {/*      <option value="upload">*/}
                    {/*        Upload Picture of Prescription*/}
                    {/*      </option>*/}
                    {/*      <option value="select">*/}
                    {/*        Select Investigations*/}
                    {/*      </option>*/}
                    {/*    </select>*/}
                    {/*  </div>*/}
                    {/*</div>*/}

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
        ) : (
          <>
            {myReqs?.length > 0 ? (
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
                            Needed Date: {item?.date_time.split("T")[0]}
                          </p>
                          <p className="mb-0 fw-bold text-primary">
                            Time: {item?.time}
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
                                ? "Donated"
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
