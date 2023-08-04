import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContextAPI";

const TopHeader = () => {
  const { systemData } = useContext(UserContext);
  const tel = `tel:${systemData.mobile}`;
  const mailto = `mailto:${systemData?.email}`;
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-9 col-sm-6">
              <ul className="header-content-left">
                {/* <li>
                  <i className="bx bx-time"></i>
                  Mon-Fri 9am-5pm
                </li> */}
                <li>
                  <a href={tel}>
                    <i className="bx bx-phone-call"></i>
                    Call Us: {systemData?.mobile}
                  </a>
                </li>
                <li>
                  <a href={mailto}>
                    <i className="bx bxs-paper-plane"></i>
                    Email: {systemData?.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <ul className="header-content-right">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebyoutubeook.com/" target="_blank">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
