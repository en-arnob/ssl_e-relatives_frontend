import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";

const ShowCollReqPoint = () => {
  const { currentUser } = useContext(UserContext);
  const [bloodReqDetails, setBloodReqDetails] = useState([]);
  useEffect(() => {
    if (currentUser.role_id === 13) {
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
    }
  }, []);
  console.log(bloodReqDetails);
  const background = {
    backgroundColor: "rgb(246, 241, 233)",
  };

  console.log(bloodReqDetails);


  return (
    <div>
      <div className="cards min-vh-100 mt-4">
        <div>
          {bloodReqDetails.length > 0 ? (
            <>
              {bloodReqDetails.map((item, i) => (
                <div className="card w-75 mx-auto my-3">
                  <div
                    className="card-body"
                    style={i % 2 === 0 ? background : {}}
                  >
                    <div className="row">
                      <div className="col">
                        <p className="mb-0 fw-semibold">
                          Request No: {item.req_no}
                        </p>
                        <p className="mb-0">
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
                        <p>Requested By: {' '}{item.donorBy.f_name}</p>
                        {/* <p className="mb-0">
                          Collection Point: {item?.col_point.f_name}
                        </p> */}
                        {/* <p className="mb-0">
                          Collection Point Address: {item?.col_point.address_1},{" "}
                          {item?.col_point.user_detail.city.name},{" "}
                          {item?.col_point.user_detail.state.name},{" "}
                          {item?.col_point.user_detail.country.name}
                        </p> */}
                      </div>
                      <div className="col">
                        {/* <p className="mb-0 ">Request Type: Blood</p> */}
                        {/* <p>Total: {item.count} Bag(s)</p> */}
                      </div>
                      <div className="col">
                        <p className="mb-0">
                          Request Date Time: {item?.createdAt.split("T")[0]}
                        </p>
                        <p className="mb-0">
                          Needed Date Time: {item?.date_time.split("T")[0]}
                        </p>
                        <p>Donate By:{' '}{item.requestedBy.f_name}</p>
                     
                      </div>
                    </div>
                  </div>
                 
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
    </div>
  );
};

export default ShowCollReqPoint;
