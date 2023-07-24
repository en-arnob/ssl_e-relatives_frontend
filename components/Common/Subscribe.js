import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe-area">
        <div className="container">
          <div className="row align-items-center">
            <div 
              className="col-lg-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <h2>Subscribe Now</h2>
              <p>Get our latest news & update regularly</p>
            </div>

            <div className="col-lg-6">
              <form 
                className="newsletter-form"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="EMAIL"
                  required
                />

                <button className="default-btn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
