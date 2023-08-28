import React, { useContext, useEffect, useState } from "react";
import Blood from "./blood";
import RequestToMe from "./request-to-me";
import Test from "./test.jsx"
import { useRouter } from "next/router";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";

const ReqByMe = () => {
  const { currentUser } = useContext(UserContext);
  const [blood, setBlood] = useState(true);
  const [test, setTest] = useState(false);
  const router = useRouter();
  // console.log(currentUser.role_id);

  const [bloodReqDetails, setBloodReqDetails] = useState([]);

  // console.log(bloodReqDetails);

  const bloodBtnStle = {
    backgroundColor: blood ? "blue" : "#bcb6b6",
    color: blood ? "white" : "black",
  };
  const testBtnStyle = {
    backgroundColor: test ? "blue" : "#bcb6b6",
    color: test ? "white" : "black",
  };

  useEffect(() => {
    if (currentUser?.role_id === 13) {
      setBlood(false);
    }
  }, [currentUser.role_id]);

  return (
    <div>
      <div className="w-50 w-sm-100 mx-auto d-flex justify-content-center gap-3 align-item-center mt-2 ">
        {currentUser.role_id !== 13 && (
          <div className="bg-secondary p-1 rounded">
            <button
              className="btn btn-outline me-3"
              style={testBtnStyle}
              onClick={() => {
                setBlood(false);
                setTest(true);
              }}
            >
              Test
            </button>
            <button
              className="btn btn-outline"
              style={bloodBtnStle}
              onClick={() => {
                setBlood(true);
                setTest(false);
              }}
            >
              Blood
            </button>
          </div>
        )}
      </div>
      <div>
        {blood && <Blood />}
        {test && <Test />}
      </div>
    </div>
  );
};

export default ReqByMe;
