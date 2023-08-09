import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../../components/_App/Navbar";
import RequestByMe from "./request-by-me";
import RequestToMe from "./request-to-me";
import { useRouter } from "next/router";
import Footer from "../../components/_App/Footer";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";
import ShowCollReqPoint from "../service-request/showCollReqPoint";

const ServiceResponse = () => {
  const { currentUser } = useContext(UserContext);
  const [requestByMe, setRequestByMe] = useState(true);
  const [requestToMe, setRequestToMe] = useState(false);
  const router = useRouter();
  console.log(currentUser.role_id);

  const [bloodReqDetails, setBloodReqDetails] = useState([]);

  if (currentUser.role_id === 13) {
    // useEffect(() => {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/coll-point-requests/59`
        )
        .then((response) => {
          const data = response.data.data;
          setBloodReqDetails(data);
        })
        .catch((error) => {
          console.log(error);
        });
    // }, []);
  }

  console.log(bloodReqDetails);

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
        {currentUser.role_id !== 13 && (
          <>
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
          </>
        )}
        {currentUser.role_id === 13 && (
          <>
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
          </>
        )}
      </div>
      <div>
        {requestByMe && <RequestByMe />}
        {requestToMe && <RequestToMe />}
        {currentUser.role_id === 13 && (
          <ShowCollReqPoint bloodReqDetails={bloodReqDetails} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ServiceResponse;
