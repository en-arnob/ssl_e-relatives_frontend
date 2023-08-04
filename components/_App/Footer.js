import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../../Context/UserContextAPI";

const Footer = () => {
  const { systemData } = useContext(UserContext);
  const currentYear = new Date().getFullYear();
  const tel = `tel:${systemData.mobile}`;
  const mailto = `mailto:${systemData?.email}`;

  return (
    <>
      <footer className="footer-top-area f-bg pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Link href="/">
                  {systemData?.logo_image ? (
                    <img
                      src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}/${systemData?.logo_image}`}
                      className="w-50 h-50"
                      alt="logo"
                    />
                  ) : (
                    `${systemData?.website_name}`
                  )}
                </Link>

                <p>{systemData?.tag_line}</p>

                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li> */}
                    {/* <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.facebyoutubeook.com/"
                        target="_blank"
                      >
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/services-2">Services</Link>
                  </li>
                  {/* <li>
                    <Link href="/doctors-2">Doctors</Link>
                  </li> */}
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-widget open-time"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h3>Opening Hours</h3>
                <ul>
                  <li>
                    <span>Mon-Tue:</span>
                    <span className="right">6:00 AM - 10:00 PM</span>
                  </li>
                  <li>
                    <span>Wed-Thu:</span>
                    <span className="right">6:00 AM - 10:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget contact"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <h3>Get In Touch</h3>
                <ul>
                  <li>
                    <a href={tel}>
                      <i className="bx bx-phone-call"></i>
                      <span>Hotline:</span>
                      Phone: {systemData?.mobile}
                    </a>
                  </li>
                  <li>
                    <a href={mailto}>
                      <i className="bx bx-envelope"></i>
                      <span>Email:</span>
                      {systemData?.email}
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>Address:</span>
                    {systemData?.address}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
              Copyright &copy; {currentYear} {systemData?.copyright}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
