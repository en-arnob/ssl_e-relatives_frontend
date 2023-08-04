import React from "react";
import Navbar from "../components/_App/Navbar";

const UpdateProfile = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="container rounded bg-white mt-2 mb-5">
          <div className="row d-flex justify-content-between">
            <div className="col-md-3 border-right me-3">
              <div className="d-flex flex-column align-items-cEnter p-3 py-1">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <div className="col-md-11">
                  <label className="labels fs-6">
                    Name: John (john@gmail.com)
                  </label>
                </div>
                <div className="col-md-11">
                  <label className="labels fs-6">Roles: Doctor</label>
                </div>
                <div className="col-md-11">
                  <label className="labels fs-6">
                    Service Category: Surgery
                  </label>
                </div>
                <div className="col-md-11">
                  <label className="labels fs-6">Phone: 01521424233</label>
                </div>
                <div className="col-md-11">
                  <label className="labels fs-6">Email: john@gmail.com</label>
                </div>
              </div>
            </div>
            <div className="col-md-8 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-cEntermb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                  </div>

                  <div className="col-md-12">
                    <label className="labels">Gender</label>
                    <select className="form-select mb-3 form-control">
                      <option defaultValue="">Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Blood Group</label>
                    <select className="form-select mb-3 form-control">
                      <option defaultValue="">A+</option>
                      <option value="1">A-</option>
                      <option value="2">B+</option>
                      <option value="2">B-</option>
                      <option value="2">O+</option>
                      <option value="2">O-</option>
                    </select>
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Date of Bath</label>
                    <input type="date" class="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Country</label>
                    <select className="form-select mb-3 form-control">
                      <option defaultValue="">Select</option>
                      <option value="1">Bangladesh</option>
                      <option value="2">India</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Division/State</label>
                    <select className="form-select mb-3 form-control">
                      <option defaultValue="">Select</option>
                      <option value="1">Bangladesh</option>
                      <option value="2">India</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">District/City</label>
                    <select className="form-select mb-3 form-control">
                      <option defaultValue="">Select</option>
                      <option value="1">Bangladesh</option>
                      <option value="2">India</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label className="labels">Address:</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enteraddress "
                      value=""
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="labels">Name of the Institution:</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="EnterInstitution"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Designation</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="EnterDesignation "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">BMDC License No</label>
                    <input
                      type="number"
                      className="form-control mb-3"
                      placeholder="EnterBMDC License No "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">
                      Available time Schedule for Online Service
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="EnterAvailable time Schedule "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels"> Degree/Specialization</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter Degree/Specialization "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">
                      {" "}
                      Owner/Chairman/Managing Director Name
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter  Owner/Chairman/Managing Director Name "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels"> Responsible Person Name</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder=" Responsible Person Name "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels"> Vehicle License No</label>
                    <input
                      type="number"
                      className="form-control mb-3"
                      placeholder="Enter Vehicle License No "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels"> National ID No</label>
                    <input
                      type="number"
                      className="form-control mb-3"
                      placeholder="Enter National ID No "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels"> Years of Experience</label>
                    <input
                      type="number"
                      className="form-control mb-3"
                      placeholder="Enter Years of Experience "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels"> Trade License NO</label>
                    <input
                      type="number"
                      className="form-control mb-3"
                      placeholder="EnterTrade License NO "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels"> DGHS License No</label>
                    <input
                      type="number"
                      className="form-control mb-3"
                      placeholder="EnterDGHS License No "
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Available Service</label>
                    <select className="form-select mb-3 form-control">
                      <option defaultValue="">Select</option>
                      <option value="1">Heardwear</option>
                      <option value="2">Software</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="labels"> Drivers Name</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Enter Drivers Name "
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-cEnterexperience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value=""/></div> <br />
                                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value=""/></div>
                            </div>
                        </div> */}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
