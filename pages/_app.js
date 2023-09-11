import React from "react";
import AOS from "aos";
import { Toaster } from "react-hot-toast";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/pricetab.css";
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
import UserContext from "../Context/UserContextAPI";

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />

      <UserContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext>
    </>
  );
};

export default MyApp;
