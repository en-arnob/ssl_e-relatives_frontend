import React from "react";
import Navbar from "../../components/_App/Navbar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

const RequestToMe = () => {
  const [selectedDonors, setSelectedDonors] = useState([]); // State to store the filtered donors
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setSelectedDonors([]);
  };
  const handleShow = (bloodGroup) => {
    const donors =
      data.find((item) => item.bloodGroup === bloodGroup)?.donors || [];
    console.log(donors);
    setSelectedDonors(donors);

    setShow(true);
  };

  const data = [
    {
      id: "0634356",
      type: "Request for Blood",
      reqDateTime: "10 jan 2023 10 am",
      bloodGroup: "AB+",
      total: 12,
      neededDateTime: "11 jan 2023 2.00 pm",
      collectionPoint: "Dhaka",
      donors: [
        {
          id: "1212",
          name: "John",
          phone: "01700000000",
          address: "Badda,Dhaka",
          gender: "male",
        },
        {
          id: "112",
          name: "Sunny",
          phone: "01700000000",
          address: "Mohammadpur,Dhaka",
          gender: "male",
        },
        {
          id: "12122",
          name: "Maria",
          phone: "01700000000",
          address: "Gulshan,Dhaka",
          gender: "female",
        },
      ],
      collectionPointAddress: "Mirpur Dhaka",
    },
    {
      id: "0634356",
      type: "Request for Blood",
      reqDateTime: "10 jan 2023 10 am",
      bloodGroup: "B+",
      total: 3,
      neededDateTime: "11 jan 2023 2.00 pm",
      collectionPoint: "Dhaka",
      donors: [
        {
          id: "12162",
          name: "Abdul",
          phone: "01700000000",
          address: "Banani, Dhaka",
          gender: "male",
        },
        {
          id: "132",
          name: "Kamal",
          phone: "01700000000",
          address: "Uttara,Dhaka",
          gender: "male",
        },
        {
          id: "12122",
          name: "Forid",
          phone: "01700000000",
          address: "Badda,Dhaka",
          gender: "female",
        },
      ],
      collectionPointAddress: "Mirpur Dhaka",
    },
    {
      id: "0634356",
      type: "Request for Blood",
      reqDateTime: "10 jan 2023 10 am",
      bloodGroup: "A+",
      total: 3,
      neededDateTime: "11 jan 2023 2.00 pm",
      collectionPoint: "Dhaka",
      donors: [
        {
          id: "172",
          name: "Hasan",
          phone: "01700000000",
          address: "Link road,Dhaka",
          gender: "male",
        },
        {
          id: "12172",
          name: "Rahman",
          phone: "01700000000",
          address: "Aftab nagor,Dhaka",
          gender: "male",
        },
        {
          id: "121642",
          name: "Romana",
          phone: "01700000000",
          address: "Mirpur,Dhaka",
          gender: "female",
        },
      ],
      collectionPointAddress: "Mirpur Dhaka",
    },
  ];
  const background={
    backgroundColor: "rgb(233 221 221)"
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div>
        {data.map((item, i) => (
          <div className="card w-75 mx-auto my-3 ">
            <div className="card-body "  style={i%2===0? background: {}}>
              <div className="row">
                <div className="col">
                  <p className="mb-0 fw-semibold">Request ID: {item.id}</p>
                  <p className="mb-0">
                    Blood Group:
                    <span className="fw-semibold"> {item.bloodGroup}</span>
                  </p>
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
                  <p className="mb-0">Request Date Time: {item.reqDateTime}</p>
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
      </div>
    </div>
  );
};

export default RequestToMe;
