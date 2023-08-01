import React from "react";
import Link from "next/link";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="container rounded bg-white mt-2 mb-5">
          <div className="row d-flex justify-content-between">
            <div className="col-md-3 border-right me-3">
              <div className="d-flex flex-column align-items-center  p-3 py-1">
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
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                  <h6 className="btn btn-primary">Update</h6>
                </div>

                <div className="row mt-3">
                
                  <div class="row col-md-12 mb-2">
                    <div class="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                      Gender
                    </div>
                    <div class="col-md-1 col-sm-1 mb-2">:</div>
                    <div class="col-md-4 col-sm-5 mb-2">Male</div>
                  </div>
                  <div class="row col-md-12 mb-2">
                    <div class="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                      Blood Group
                    </div>
                    <div class="col-md-1 col-sm-1 mb-2">:</div>
                    <div class="col-md-4 col-sm-5 mb-2">O+(ve)</div>
                  </div>
                  <div class="row col-md-12 mb-2">
                    <div class="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                      Date of Bath
                    </div>
                    <div class="col-md-1 col-sm-1 mb-2">:</div>
                    <div class="col-md-4 col-sm-5 mb-2">10 July 2021</div>
                  </div>
                  <div class="row col-md-12 mb-2">
                    <div class="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                      Country
                    </div>
                    <div class="col-md-1 col-sm-1 mb-2">:</div>
                    <div class="col-md-4 col-sm-5 mb-2">Bangladesh</div>
                  </div>
                  <div class="row col-md-12 mb-2">
                    <div class="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                      Division/State
                    </div>
                    <div class="col-md-1 col-sm-1 mb-2">:</div>
                    <div class="col-md-4 col-sm-5 mb-2">Rangpur</div>
                  </div>
                  <div class="row col-md-12 mb-2">
                    <div class="col-md-4 col-sm-5 mb-2 fs-6 fw-semibold">
                      District/City
                    </div>
                    <div class="col-md-1 col-sm-1 mb-2">:</div>
                    <div class="col-md-4 col-sm-5 mb-2">Nilphamari</div>
                  </div>

                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5  fs-6 fw-semibold">
                      Address
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">
                      Itakhola Dorbesh Para
                    </div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Name of the Institution
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">
                      Niphamari Medicle Collage
                    </div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Designation
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">Doctor</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      BMDC License No
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">24867424</div>
                  </div>

                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Available time Schedule for Online Service
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">12 July 2030 10 am</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Degree/Specialization
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">MBBS, MD</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Owner/Chairman/Manageing Director Name
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">Ashfaque Uddin</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Responsiible Person Name
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">Emyer Haque</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Vehicle License No
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">634375216965</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      National ID No
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">63470110878006</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Years of Experiance
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">5 year</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Trade License NO
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">55323577844</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      DGHS License No
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">8434434268</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Available Service
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">.....</div>
                  </div>
                  <div className="row col-md-12 mb-2">
                    <div className="col-md-4 col-sm-5 fs-6 fw-semibold">
                      Drivers Name
                    </div>
                    <div className="col-md-1 col-sm-1">:</div>
                    <div className="col-md-4 col-sm-5 ">Omair Haque</div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
