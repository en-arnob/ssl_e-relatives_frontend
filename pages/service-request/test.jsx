import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import { UserContext } from "../../Context/UserContextAPI";
import axios from "axios";
import Select from "react-select";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const Test = () => {
  const Router = useRouter();
  const { currentUser } = useContext(UserContext);

  const [investigationsList, setInvestigationsList] = useState([]);
  const [selectedInvestigations, setSelectedInvestigations] = useState([]);
  const [uploadFile, setUploadFile] = useState(false);
  const [selectFromList, setSelectFromList] = useState(false);
  const [image, setImage] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

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

  const submitHandler = async (e) => {
    setButtonDisabled(true);
    const investigationArr = selectedInvestigations.map((inv) => inv.value);
    if (uploadFile) {
      const obj = {
        userId: currentUser?.id,
        selectionType: 2,
      };
      const formData = new FormData();
      formData.append("image", image);
      // console.log(image);
      try {
        const imgUpload = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/request/test/upload-image`,
          formData,
        );
        const imagePath = imgUpload.data.filename;
        if (imagePath) {
          obj.file = imagePath;
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/request/test`,
            obj,
          );
          if (res.status === 200) {
            toast.success("Successfully submitted the request.");
            setButtonDisabled(false);
            Router.push("/service-response");
          }
        } else {
          toast.error("Please upload investigation image/file");
          setButtonDisabled(false);
        }
      } catch (error) {
        setButtonDisabled(false);
        console.log(error);
      }
    } else {
      const obj = {
        userId: currentUser?.id,
        selectionType: 1,
        investigationArr,
      };
      // console.log(obj);
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/request/test`,
          obj,
        );
        if (res.status === 200) {
          toast.success("Successfully submitted the request.");
          setButtonDisabled(false);
          Router.push("/service-response");
        }
      } catch (error) {
        toast.error("Error! Enter Investigations");
        setButtonDisabled(false);
        // console.log(error);
      }
    }
  };

  useEffect(() => {
    getInvestigationsList();
  }, []);
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "upload") {
      setUploadFile(true);
      setSelectFromList(false);
    } else if (selectedValue === "select") {
      setUploadFile(false);
      setSelectFromList(true);
    } else {
      setUploadFile(false);
      setSelectFromList(false);
    }
  };
  // console.log(uploadFile, selectFromList);
  return (
    <>
      <Navbar />
      <div className="min-vh-100">
        <div>
          <div>
            <div className="container rounded bg-white mt-2 mb-5">
              <div className="row d-flex justify-content-between">
                <div className="col-md-3 border-right me-3">
                  <div className="d-flex flex-column align-items-center  p-3 py-1">
                    {currentUser?.image ? (
                      <img
                        className="rounded-circle mt-5 border border-2"
                        width="150px"
                        src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/users/${currentUser?.image}`}
                      />
                    ) : (
                      <img
                        className="rounded-circle mt-5 border border-2"
                        width="150px"
                        src="/img/avatar-user.png"
                      />
                    )}
                    <div className="col-md-11 mt-1 text-center">
                      <label className="labels fs-6">
                        <span className="fw-semibold">
                          {currentUser?.f_name}
                        </span>{" "}
                        ({currentUser?.username})
                      </label>
                    </div>
                    <div className="col-md-11 text-center">
                      <label className="labels fs-6 fw-semibold">
                        {currentUser?.role?.name}
                      </label>
                    </div>

                    <div className="col-md-11 text-center">
                      <label className="labels fs-6 fw-semibold">
                        Phone: {currentUser?.mobile}
                      </label>
                    </div>
                    <div className="col-md-11 text-center">
                      <label className="labels fs-6 fw-semibold">
                        Email: {currentUser?.email}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 border-right">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right ">Request for Test</h4>
                    </div>

                    <div className="row mt-3">
                      <div className="row col-md-12 mb-2">
                        <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                          Selection Type:
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <select
                            className="form-control form-control-sm"
                            onChange={handleDropdownChange}
                          >
                            <option value="default">Select</option>
                            <option value="upload">
                              Upload Picture of Investigations List
                            </option>
                            <option value="select">
                              Select Investigations
                            </option>
                          </select>
                        </div>
                      </div>
                      {uploadFile && (
                        <div className="row col-md-12 mb-2">
                          <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                            Upload FIle:
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                              <input
                                className="form-control form-control-sm"
                                id="image"
                                name="image"
                                onChange={(e) => setImage(e.target.files[0])}
                                type="file"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {selectFromList && (
                        <div className="row col-md-12 mb-2">
                          <div className="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                            Select From List
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                              <Select
                                className="basic-multi-select"
                                isMulti
                                name="colors"
                                options={investigationsList.map((item) => ({
                                  value: item.id,
                                  label: `${item.code} - ${item.name}`,
                                }))}
                                onChange={(e) => {
                                  setSelectedInvestigations(e);
                                }}
                                classNamePrefix="select"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="col-12 mt-2 justify-content-center">
                        <button
                          disabled={isButtonDisabled}
                          className="default-btn btn-two"
                          type="submit"
                          onClick={submitHandler}
                        >
                          Send Request
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Test;
