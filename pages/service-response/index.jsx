import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../../components/_App/Navbar";
import RequestByMe from "./request-by-me";
import RequestToMe from "./request-to-me";
import { useRouter } from "next/router";
import Footer from "../../components/_App/Footer";

const ServiceResponse = () => {
  const [requestByMe, setRequestByMe] = useState(true);
  const [requestToMe, setRequestToMe] = useState(false);
  const router = useRouter();

  const reqByMeBtnStyle = {
    backgroundColor: requestByMe ? "blue" : "#bcb6b6",
    color: requestByMe ? "white" : "black",
  };
  const reqToMeBtnStyle = {
    backgroundColor: requestToMe ? "blue" : "#bcb6b6",
    color: requestToMe ? "white" : "black",
  };

  return (
    <div>
      <Navbar />
      <div className="w-25 mx-auto d-flex justify-content-evenly align-item-center mt-2">
        <button
          className="btn btn-outline me-3"
          style={reqToMeBtnStyle}
          onClick={() => {
            setRequestByMe(false);
            setRequestToMe(true);
          }}
        >
          Request To Me
        </button>
        <button
          className="btn btn-outline"
          style={reqByMeBtnStyle}
          onClick={() => {
            setRequestByMe(true);
            setRequestToMe(false);
          }}
        >
          Request By Me
        </button>
      </div>
      <div>
        {requestByMe && <RequestByMe />}
        {requestToMe && <RequestToMe />}
      </div>
      <Footer />
    </div>
  );
};

export default ServiceResponse;
