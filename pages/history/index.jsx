import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import { UserContext } from "../../Context/UserContextAPI";
import InvestigationHistory from "./serviceCenter/investigation";
import BloodCollection from "./serviceCenter/bloodCollection";
import Donation from "./blood/donation";
import Taken from "./blood/taken";
import Investigation from "./blood/investigation";

const History = () => {
  const { currentUser } = useContext(UserContext);
  const [donation, setDonation] = useState(false);
  const [bloodRecieve, setBloodRecieve] = useState(false);
  const [investigation, setInvestigation] = useState(false);
  const [bloodCollection, setBloodCollection] = useState(false);
  const [userInvestigation, setUserInvestigation] = useState(false);
  // console.log(currentUser.role_id);

  // console.log(bloodReqDetails);

  const donationBtnStyle = {
    backgroundColor: donation ? "blue" : "#bcb6b6",
    color: donation ? "white" : "black",
  };
  const bloodRecieveBtnStyle = {
    backgroundColor: bloodRecieve ? "blue" : "#bcb6b6",
    color: bloodRecieve ? "white" : "black",
  };
  const investigationBtnStyle = {
    backgroundColor: investigation ? "blue" : "#bcb6b6",
    color: investigation ? "white" : "black",
  };
  const bloodCollectionBtnStyle = {
    backgroundColor: bloodCollection ? "blue" : "#bcb6b6",
    color: bloodCollection ? "white" : "black",
  };
  const userInvestigationBtnStyle = {
    backgroundColor: userInvestigation ? "blue" : "#bcb6b6",
    color: userInvestigation ? "white" : "black",
  };

  useEffect(() => {
    if (currentUser?.role_id === 10) {
      setDonation(true);
    } else if (currentUser?.role_id === 13) {
      setInvestigation(true);
    }
  }, [currentUser.role_id]);

  return (
    <div className="min-vh-100">
      <Navbar />
      <h5 className="mx-auto text-center mt-2 mb-2">Service History</h5>
      <div className="w-50 mx-auto d-flex justify-content-center gap-3 align-item-center mt-2  ">
        <div className="p-1 rounded bg-secondary">
          {currentUser?.role_id === 10 && (
            <>
              <button
                className="btn btn-outline me-3"
                style={donationBtnStyle}
                onClick={() => {
                  setBloodRecieve(false);
                  setDonation(true);
                  setUserInvestigation(false);
                }}
              >
                Blood Donation History
              </button>
              <button
                className="btn btn-outline me-3"
                style={bloodRecieveBtnStyle}
                onClick={() => {
                  setDonation(false);
                  setBloodRecieve(true);
                  setUserInvestigation(false);
                }}
              >
                Blood Receive History
              </button>
              <button
                className="btn btn-outline"
                style={userInvestigationBtnStyle}
                onClick={() => {
                  setDonation(false);
                  setBloodRecieve(false);
                  setUserInvestigation(true);
                }}
              >
                Investigation History
              </button>
            </>
          )}

          {currentUser.role_id === 13 && (
            <>
              <button
                className="btn btn-outline me-3"
                style={investigationBtnStyle}
                onClick={() => {
                  setInvestigation(true);
                  setBloodCollection(false);
                }}
              >
                Investigation
              </button>
              <button
                className="btn btn-outline"
                style={bloodCollectionBtnStyle}
                onClick={() => {
                  setBloodCollection(true);
                  setInvestigation(false);
                }}
              >
                Blood Collection
              </button>
            </>
          )}
        </div>
      </div>
      <div>
        {donation && <Donation />}
        {bloodRecieve && <Taken />}
        {investigation && <InvestigationHistory />}
        {bloodCollection && <BloodCollection />}
        {userInvestigation && <Investigation />}
      </div>
      <Footer />
    </div>
  );
};

export default History;
