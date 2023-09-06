import React, { useEffect, useState, useContext } from "react";

import axios from "axios";
import { UserContext } from "../../Context/UserContextAPI";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const DiagAutoMode = (props) => {
  const { currentUser } = useContext(UserContext);
  const selectedReq = props.requ;
  const [table, setTable] = useState([]);
  const [investigationsList, setInvestigationsList] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [discountType, setDiscountType] = useState(0);
  const [discountValue, setDiscountValue] = useState(0);

  function getInvestigationsList() {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/services/req-for-test`)
      .then((response) => {
        const data = response.data.data;
        setInvestigationsList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const submitHandler = async () => {
    // console.log(discountType);
    // console.log(discountValue);
    const obj = {
      table: table,
      discountType: discountType,
      discountValue: discountValue,
    };
    console.log(obj);
    if (table[0].investigation === ``) {
      toast.error("You Must Enter Response!");
    } else {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/diagnosis-reqs/${selectedReq.req_no}`,
          obj,
        );
        if (res.status === 200) {
          toast.success(
            "Response Submitted Successfully. You may close this modal now.",
          );
          setSubmitted(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getInvestigationsList();
  }, [props.requ]);

  useEffect(() => {
    let invArray = props.requ?.investigation_ids?.split(",");
    let array = investigationsList.filter((item) =>
      invArray.includes(item.id.toString()),
    );
    const dataArray = array.map((item) => {
      return {
        ...item,
        investigation: item.id,
        cost: "",
        serviceCenterId: currentUser.id,
      };
    });
    // console.log(dataArray);
    setTable(dataArray);
  }, [investigationsList]);

  //   console.log(table);
  // useEffect(() => {
  //   setTable(dataArray);
  // }, [dataArray]);
  function incrementTableRow() {
    setTable((prevItems) => {
      return [
        ...prevItems,
        {
          id: uuidv4(),
          serviceCenterId: currentUser.id,
          investigation: "",
          cost: "",
        },
      ];
    });
  }

  function decrementTableRow(index) {
    setTable((prevItems) => {
      return prevItems.filter((_, i) => i !== index);
    });
  }

  function handleOnChange(e, index) {
    const tgName = e.target.name;
    const tgValue = e.target.value;
    // console.log(e.target.value);

    setTable((prevItems) => {
      prevItems[index][tgName] = tgValue;
      return [...prevItems];
    });
  }

  return (
    <div>
      {/*<h6>Auto Mode</h6>*/}
      {/* <p>{selectedReq.investigation_ids}</p> */}
      <div className="card-body">
        <div className="border p-3 rounded">
          <div className="card-box p-2 text-white rounded">
            <h6 className="mb-0 text-uppercase ">Investigation Price Table</h6>
          </div>
          <hr />
          <div className="mb-3 row">
            <div className="row col-md-12">
              <div className="col-md-12 col-sm-5 fs-6 fw-semibold ">
                <table className="table table-bordered">
                  <thead>
                    <tr className="bg-success">
                      <th className="fw-light text-white">Investigation</th>
                      <th className="fw-light text-white">Cost</th>
                      <th className="fw-light text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table?.map((feature, index) => (
                      <tr key={feature.id}>
                        <td>
                          <select
                            className="form-control"
                            onChange={(e) => handleOnChange(e, index)}
                            name="investigation"
                          >
                            <option value="" disable selected>
                              Select Investigation
                            </option>
                            {investigationsList?.map((role) => {
                              return (
                                <option
                                  value={role?.id}
                                  key={role?.id}
                                  selected={role?.id === feature?.id}
                                >
                                  {role?.name} - {role?.detailed_name}
                                </option>
                              );
                            })}
                          </select>
                        </td>
                        <td>
                          <input
                            type="number"
                            name="cost"
                            onChange={(e) => handleOnChange(e, index)}
                            className="form-control form-control-input"
                            placeholder="Enter cost"
                          />
                        </td>
                        <td className="">
                          <div className="d-flex gap-3">
                            {table.length === 1 ||
                            index === table.length - 1 ? (
                              <button
                                type="button"
                                className="btn btn-success"
                                onClick={incrementTableRow}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-plus-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => decrementTableRow(index)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-x-octagon"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="row col-md-12">
              <div className="col-md-6 col-sm-5 fs-6 fw-semibold ">
                <select
                  className="form-control"
                  onChange={(e) => setDiscountType(e.target.value)}
                  name="discountType"
                >
                  <option value="" disable selected>
                    Select Discount Type
                  </option>

                  <option value={1}>Percentage (%)</option>
                  <option value={2}>Fixed Amount</option>
                </select>
              </div>
              <div className="col-md-6 col-sm-5 fs-6 fw-semibold ">
                <input
                  type="number"
                  name="cost"
                  onChange={(e) => setDiscountValue(e.target.value)}
                  className="form-control form-control-input"
                  placeholder="Discount Value"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row col-md-12 mb-2 mt-4">
          <div className="justify-items-right align-items-right d-flex">
            {!submitted && (
              <button
                onClick={() => submitHandler(selectedReq)}
                type="submit"
                className="ms-auto btn btn-success"
                style={{
                  width: "6.25rem",
                }}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagAutoMode;
