import React from "react";

const EmergencyArea = () => {
  return (
    <>
      <div className="emergency-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="emergency-content ptb-100">
                <h2>Emergency? For any Help Contact Us Now</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li className="active">
                    <i className="bx bx-phone-call"></i>
                    <span>Call Now</span>
                    <h3>
                      <a href="tel:+821-456-789">+821-456-789</a>
                    </h3>
                  </li>

                  <li>
                    <i className="bx bx-envelope"></i>
                    <span>Mail Us</span>
                    <h3>
                      <a href="mailto:hello@info.com">hello@info.com</a>
                    </h3>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="emergency-img"></div>
            </div>
          </div>
        </div>

        <div className="shape">
          <img src="/img/shape/emergency-shape.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default EmergencyArea;
