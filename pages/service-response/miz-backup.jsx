import React, { useContext, useState, useEffect } from "react";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";

const RequestByMe = () => {
  const { currentUser } = useContext(UserContext);
  const [myReqs, setMyReqs] = useState([]);
  const [selectedDonors, setSelectedDonors] = useState([]); // State to store the filtered donors
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setSelectedDonors([]);
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
  const handleShow = (bloodGroup) => {
    // Filter the donors based on the clicked blood group
    const donors =
      data.find((item) => item.bloodGroup === bloodGroup)?.donors || [];
    setSelectedDonors(donors);
    console.log(donors);
    setShow(true);
  };

  //   const data = [
  //     {
  //       id: "0634356",
  //       type: "Request for Blood",
  //       reqDateTime: "10 Jan 2023 10:00 am",
  //       bloodGroup: "A+",
  //       total: 3,
  //       neededDateTime: "11 Jan 2023 2:00 pm",
  //       collectionPoint: "Dhaka",
  //       donors: [
  //         {
  //           id: "1212",
  //           name: "John",
  //           phone: "01700000000",
  //           address: "Badda, Dhaka",
  //           gender: "male",
  //         },
  //         {
  //           id: "112",
  //           name: "Sunny",
  //           phone: "01700000000",
  //           address: "Mohammadpur, Dhaka",
  //           gender: "male",
  //         },
  //         {
  //           id: "12122",
  //           name: "Maria",
  //           phone: "01700000000",
  //           address: "Gulshan, Dhaka",
  //           gender: "female",
  //         },
  //       ],
  //       collectionPointAddress: "Mirpur, Dhaka",
  //     },
  //     {
  //       id: "7634356",
  //       type: "Request for Plasma",
  //       reqDateTime: "15 Feb 2023 8:00 am",
  //       bloodGroup: "B-",
  //       total: 2,
  //       neededDateTime: "16 Feb 2023 4:00 pm",
  //       collectionPoint: "Chittagong",
  //       donors: [
  //         {
  //           id: "5212",
  //           name: "Alex",
  //           phone: "01800000000",
  //           address: "Agrabad, Chittagong",
  //           gender: "male",
  //         },
  //         {
  //           id: "732",
  //           name: "Emily",
  //           phone: "01710000000",
  //           address: "Halishahar, Chittagong",
  //           gender: "female",
  //         },
  //       ],
  //       collectionPointAddress: "Sholoshohor, Chittagong",
  //     },
  //     {
  //       id: "213456",
  //       type: "Request for Platelets",
  //       reqDateTime: "20 Mar 2023 1:00 pm",
  //       bloodGroup: "O+",
  //       total: 5,
  //       neededDateTime: "21 Mar 2023 9:00 am",
  //       collectionPoint: "Rajshahi",
  //       donors: [
  //         {
  //           id: "312",
  //           name: "William",
  //           phone: "01600000000",
  //           address: "Lalbagh, Rajshahi",
  //           gender: "male",
  //         },
  //         {
  //           id: "419",
  //           name: "Sophia",
  //           phone: "01510000000",
  //           address: "Boalia, Rajshahi",
  //           gender: "female",
  //         },
  //         {
  //           id: "1412",
  //           name: "Michael",
  //           phone: "01910000000",
  //           address: "Ghuramara, Rajshahi",
  //           gender: "male",
  //         },
  //         {
  //           id: "652",
  //           name: "Olivia",
  //           phone: "01720000000",
  //           address: "Paba, Rajshahi",
  //           gender: "female",
  //         },
  //       ],
  //       collectionPointAddress: "Kadirganj, Rajshahi",
  //     },
  //   ];
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
            {myReqs.map((item, i) => (
              <div className="card w-75 mx-auto my-3">
                <div
                  className="card-body"
                  style={i % 2 === 0 ? background : {}}
                >
                  <div className="row">
                    <div className="col">
                      <p className="mb-0 fw-semibold">Request ID: {item.id}</p>
                      <p className="mb-0">Blood Group: {item.bloodGroup}</p>
                      <p className="mb-0">
                        Collection Point: {item.collectionPoint}
                      </p>
                      <p className="mb-0">
                        Collection Point Address: {item.collectionPointAddress}
                      </p>
                    </div>
                    <div className="col">
                      <p className="mb-0 ">Request Type: {item.type}</p>
                      <p>Total: {item.total}</p>
                    </div>
                    <div className="col">
                      <p className="mb-0">
                        Request Date Time: {item.reqDateTime}
                      </p>
                      <p className="mb-0">
                        Needed Date Time: {item.neededDateTime}
                      </p>
                      <Button
                        variant="primary"
                        onClick={() => handleShow(item.bloodGroup)}
                      >
                        Donor List
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
                          {selectedDonors.map((donor, i) => (
                            <tr key={i}>
                              {console.log(donor.name)}
                              <td>{i + 1}</td>
                              <td>{donor.name}</td>
                              <td>{donor.address}</td>
                              <td>{donor.phone}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
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
