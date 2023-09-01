import React, { useContext, useEffect, useState } from "react";
import Blood from "./showCollReqPoint";
import Diagnosis from "./diagnosis";
import { useRouter } from "next/router";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";

const ServiceCenter = () => {
  const { currentUser } = useContext(UserContext);
  const [blood, setBlood] = useState(true);
  const [diagnosis, setDiagnosis] = useState(false);
  const router = useRouter();
  // console.log(currentUser.role_id);

  // console.log(bloodReqDetails);

  const bloodBtnStle = {
    backgroundColor: blood ? "blue" : "#bcb6b6",
    color: blood ? "white" : "black",
  };
  const testBtnStyle = {
    backgroundColor: diagnosis ? "blue" : "#bcb6b6",
    color: diagnosis ? "white" : "black",
  };

  return (
    <div>
      <div className="w-50 w-sm-100 mx-auto d-flex justify-content-center gap-3 align-item-center mt-2 ">
        <div className="bg-secondary p-1 rounded">
        <button
            className="btn btn-outline me-3"
            style={bloodBtnStle}
            onClick={() => {
              setBlood(true);
              setDiagnosis(false);
            }}
          >
            Blood
          </button>
          {currentUser.service_category_id === 12 && (
            <button
              className="btn btn-outline "
              style={testBtnStyle}
              onClick={() => {
                setBlood(false);
                setDiagnosis(true);
              }}
            >
              Investigation
            </button>
          )}
          
        </div>
      </div>
      <div>
        {blood && <Blood />}
        {diagnosis && <Diagnosis />}
      </div>
    </div>
  );
};

export default ServiceCenter;
