import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import Select from "react-select";
import { toast } from "react-hot-toast";

const ServiceHistory = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  const [myReqs, setMyReqs] = useState([]);
  const [show, setShow] = useState(false);
  const [investigationsList, setInvestigationsList] = useState([]);
  const [selectedInvestigations, setSelectedInvestigations] = useState([]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  function fetchData() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/diagnosis-reqs/history/${currentUser?.id}`
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

  function renderInvestigationNames(invIds) {
    const invArr = invIds.split(",");
    // console.log(invArr)
    const investigationsArray = investigationsList.filter((item) =>
      invArr.includes(item.id.toString())
    );
    const investigationNamesArr = investigationsArray.map((item) => item.name);
    const investigationNames = investigationNamesArr.join(", ");

    // console.log(investigationsArray);
    return (
      <div>
        <span className="fw-bold">Investigation(s): {investigationNames}</span>
      </div>
    );
  }

  async function saveInvestigations(reqNo) {
    const invs = selectedInvestigations.map((item) => item.value);
    const invsCsv = invs.join(",");
    const obj = {
      invsCsv,
      reqNo,
      donorId: currentUser?.id,
    };
    // console.log(obj);
    try {
      const upd = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/service-history/save-investigations`,
        obj
      );
      if (upd.status === 200) {
        toast.success("Investigations added successfully");
        fetchData();
        setShow(false);
      }
    } catch (error) {
      console.log(error);
    }
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
  }, [currentUser]);

  return (
    <>
      <Navbar />
      <div className="cards min-vh-100 mt-4">
        <h3 className="text-center mb-1 text-success">Service History</h3>
        <div className="mt-4">
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
                          <p className="mb-0 ">Request Type: Test</p>
                          <p className="mb-0 ">
                            Request ID:{" "}
                            <span className="fw-semibold">{item.req_no}</span>{" "}
                          </p>

                        </div>
                        <div className="col">
                          <p className="mb-0 fw-bold">
                            Requested By:{" "}
                            {item?.test_requester ? (
                              item?.test_requester?.f_name
                            ) : (
                              <span className="text-danger">"Unknown"</span>
                            )}
                          </p>

                          <p className="mb-0 ">
                            Status:{" "}
                            <span className="text-success fw-bold">
                              {item.status === 4 && "Completed"}
                            </span>
                          </p>

                          {/* {item?.investigation_ids ? (
                            renderInvestigationNames(item.investigation_ids)
                          ) : (
                            <Button variant="success" onClick={handleShow}>
                              Add Investigations
                            </Button>
                          )} */}
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
                            <div className="row col-md-12">
                              <div className="col-md-6 justify-content-right">
                                <Button
                                  variant="success"
                                  onClick={(e) =>
                                    saveInvestigations(item.req_no)
                                  }
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
                  <h6 className="text-center fw-light">Empty!</h6>
                </div>
              </div>
            )}
          </>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServiceHistory;
