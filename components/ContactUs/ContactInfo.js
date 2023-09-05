import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContextAPI";

const ContactInfo = () => {
  const { systemData } = useContext(UserContext);
  return (
    <>
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Address</h3>
                <p>{systemData?.address}</p>
                <span>Email: {systemData?.email || "sysconbd@gmail.com"}</span>
                <span>Tel: {systemData?.mobile}</span>
              </div>
            </div>

            <div className="col-lg-9 p-0">
              <div className="single-contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.1275753993945!2d90.42862966962699!3d23.7291754263928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b847b21911c1%3A0xb7a72857d23ad0b0!2s152%20S%20Mugdapara%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1693655621039!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
