import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../components/_App/Navbar";
import Footer from "../../components/_App/Footer";
import { UserContext } from "../../Context/UserContextAPI";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const HealthMan = () => {
  const Router = useRouter();
  const { currentUser } = useContext(UserContext);
  const [allPackage, setAllPackage] = useState([]);

  async function getAllPackage() {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/package-management`,
      );
      // console.log(res.data.data);
      if (res) {
        // console.log(res.data.data);
        setAllPackage(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPackage();
  }, []);
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
                      <h4 className="text-right mb-3">Health Manager Plans</h4>
                    </div>
                    <div className="row ">
                      {allPackage.map((item, i) => {
                        return (
                          <div className="col-lg-4 col-md-12 mb-4" key={i}>
                            <div className="card card1 h-100">
                              <div className="card-body">
                                <h5 className="card-title">{item?.name}</h5>
                                {/*<small className="text-muted">Account</small>*/}
                                <br />
                                <span className="h2">{item.price}৳</span>/
                                {item.duration}
                                <br />
                                <ul className="p-3">
                                  {item?.package_features.map((fr, i) => {
                                    return <li key={i}>Feature 1</li>;
                                  })}
                                </ul>
                                <div className="d-grid my-3">
                                  <Link
                                    className="btn btn-outline-dark btn-block"
                                    href={{
                                      pathname:
                                        "/health-manager/package-preview",
                                      query: { package: item.id },
                                    }}
                                  >
                                    Subscribe
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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

export default HealthMan;
