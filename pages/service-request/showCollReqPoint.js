import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";
import { toast } from "react-hot-toast";
const filterStatus = [];

const ShowCollReqPoint = () => {
  const { currentUser } = useContext(UserContext);
  const [bloodReqDetails, setBloodReqDetails] = useState([]);
  const [donor_id, setDonor_id] = useState();

  console.log(bloodReqDetails);
  const fetchData = () => {
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
  };
  const submitDonateBy = (donor_id) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/coll-point-requests/${donor_id}`,
        {
          accepted_donor: donor_id,
        }
      )
      .then((response) => {
        const responseData = response.data;
        if (responseData.status === "OK") {
          toast.success("Status Updated Successfully!");
          fetchData();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
    submitDonateBy(donor_id);
  }, [donor_id]);

  const background = {
    backgroundColor: "rgb(246, 241, 233)",
  };
  console.log(filterStatus);
  return (
    <div>
      <div className="cards min-vh-100 mt-4">
        <div>
          {bloodReqDetails.length > 0 ? (
            <>
              {bloodReqDetails.map((item, i) => (
                <div className="card w-75 mx-auto my-3" key={item.req_no}>
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
                        <p>Requested By: {item.req_by.f_name}</p>
                      </div>

                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <div className="d-flex justify-content-end">
                              <div>
                                <p className="mb-0">
                                  Request Date Time:{" "}
                                  {item?.createdAt.split("T")[0]}
                                </p>
                                <p className="mb-0">
                                  Needed Date Time:{" "}
                                  {item?.date_time.split("T")[0]}
                                </p>
                                <p>Donate By: {item.donor.f_name}</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-3 d-flex align-items-center">
                            {item.status === 0 && (
                              <span>
                                <button
                                  onClick={() => {
                                    submitDonateBy(
                                      setDonor_id(item.accepted_donor)
                                    );
                                  }}
                                  className="btn btn-primary"
                                >
                                  {" "}
                                  Collect
                                </button>
                              </span>
                            )}
                          </div>
                        </div>
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
