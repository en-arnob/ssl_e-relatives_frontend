import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import {
  FcPortraitMode,
  FcLike,
  FcManager,
  FcShop,
  FcSportsMode,
  FcShipped,
  FcPaid,
  FcAbout,
} from "react-icons/fc";
import { FaAmbulance } from "react-icons/fa";

const FeaturedService = () => {
  const [roles, setRoles] = useState([]);
  function getRoles() {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/roles/${5}`)
      .then((response) => {
        const allData = response.data.data;
        setRoles(allData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getRoles();
  }, []);

  return (
    <>
      <div className="second-facility-area six pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {roles?.length >= 0
              ? roles?.map((role) => (
                  <div key={role.id} className="col-lg-4 col-sm-6">
                    <div className="second-facility-item">
                      <h1>
                        {role.id === 3 ? (
                          <FcPortraitMode />
                        ) : role.id === 10 ? (
                          <FcLike />
                        ) : role.id === 11 ? (
                          <FcManager />
                        ) : role.id === 12 ? (
                          <FcSportsMode />
                        ) : role.id === 13 ? (
                          <FcPaid />
                        ) : role.id === 14 ? (
                          <FaAmbulance className="text-warning" />
                        ) : role.id === 15 ? (
                          <FcShop />
                        ) : (
                          <FcAbout />
                        )}
                      </h1>
                      <h3>{role?.name}</h3>
                      <p>{role.info}</p>
                      {/* <Link href="/service-details" className="read-more">
                        Read More <i className="bx bx-plus"></i>
                      </Link> */}
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedService;
