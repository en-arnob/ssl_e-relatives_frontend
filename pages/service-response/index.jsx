import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../../components/_App/Navbar";
import RequestToMe from "./request-to-me";
import RequestByMe from "./request-by-me";
import { useRouter } from "next/router";
import Footer from "../../components/_App/Footer";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";

import ServiceCenter from "./service-center";

const ServiceResponse = () => {
  const { currentUser } = useContext(UserContext);
  const [requestByMe, setRequestByMe] = useState(true);
  const [requestToMe, setRequestToMe] = useState(false);
  const router = useRouter();
  // console.log(currentUser.role_id);

  const [bloodReqDetails, setBloodReqDetails] = useState([]);

  // console.log(bloodReqDetails);

  const reqByMeBtnStyle = {
    backgroundColor: requestByMe ? "blue" : "#bcb6b6",
    color: requestByMe ? "white" : "black",
  };
  const reqToMeBtnStyle = {
    backgroundColor: requestToMe ? "blue" : "#bcb6b6",
    color: requestToMe ? "white" : "black",
  };

  useEffect(() => {
    if (currentUser?.role_id === 13) {
      setRequestByMe(false);
    }
  }, [currentUser.role_id]);

  return (
    <div>
      <Navbar />
      <h5 className="mx-auto text-center mt-2 mb-2">Request List</h5>
      <div className="w-50 mx-auto d-flex justify-content-center gap-3 align-item-center mt-2  ">
        {currentUser.role_id !== 13 && (
          <div className="p-1 rounded bg-secondary">
            <button
              className="btn btn-outline me-3"
              style={reqToMeBtnStyle}
              onClick={() => {
                setRequestByMe(false);
                setRequestToMe(true);
              }}
            >
              To Me
            </button>
            <button
              className="btn btn-outline"
              style={reqByMeBtnStyle}
              onClick={() => {
                setRequestByMe(true);
                setRequestToMe(false);
              }}
            >
              By Me
            </button>
          </div>
        )}
      </div>
      <div>
        {requestByMe && <RequestByMe />}
        {requestToMe && <RequestToMe />}
        {currentUser.role_id === 13 && <ServiceCenter />}
      </div>
      <Footer />
    </div>
  );
};

export default ServiceResponse;
