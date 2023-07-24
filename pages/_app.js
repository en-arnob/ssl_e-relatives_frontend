import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/meanmenu.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Layout from "../components/_App/Layout";

const MyApp = ({ Component, pageProps }) => {

  React.useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
