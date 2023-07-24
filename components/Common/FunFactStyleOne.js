import React from "react";

const FunFactStyleOne = () => {
  return (
    <>
      <div className="counter-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <i className="flaticon-man"></i>

                <h2>
                  540<span className="target">+</span>
                </h2>

                <p>Expert Doctors</p>
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <i className="flaticon-tick"></i>

                <h2>
                  990<span className="target">+</span>
                </h2>

                <p>Successful Story</p>
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <i className="flaticon-trophy"></i>

                <h2>
                  3500<span className="traget">+</span>
                </h2>

                <p>Global Presence</p>
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <i className="flaticon-experience"></i>

                <h2>
                  54<span className="traget">+</span>
                </h2>

                <p>Experiences</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-wrap">
          <div className="shape-1">
            <img src="/img/shape/counter-shape.png" alt="Image" />
          </div>
          <div className="shape-2">
            <img src="/img/shape/counter-shape.png" alt="Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactStyleOne;
