import React from "react";

const ComingSoon = () => {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const commingSoonTime = () => {
    let endTime = new Date("August 23, 2024 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <>
      <div className="coming-soon-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <h1>Coming Soon</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices.
                </p>

                <div id="timer">
                  <div id="days">
                    {days} <span>Days</span>
                  </div>
                  <div id="hours">
                    {hours} <span>Hours</span>
                  </div>
                  <div id="minutes">
                    {minutes} <span>Minutes</span>
                  </div>
                  <div id="seconds">
                    {seconds} <span>Seconds</span>
                  </div>
                </div>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter email address"
                    name="email"
                    required
                  />
                  <button type="submit" className="default-btn">
                    Notify Me
                  </button>
                </form>

                <ul className="header-content-right">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
