import React from "react";

const FunFactStyleTwo = () => {
  return (
    <>
      <div className="counter-area two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <h2>
                  4,348,595<span className="target">+</span>
                </h2>

                <p>Total Confirmed</p>
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <h2>
                  147<span className="target">+</span>
                </h2>

                <p>Total Countries</p>
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <h2>
                  20<span className="traget">%</span>
                </h2>

                <p>Total Recovered</p>
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <h2>
                  80<span className="traget">%</span>
                </h2>

                <p>Confirm Deaths</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactStyleTwo;
