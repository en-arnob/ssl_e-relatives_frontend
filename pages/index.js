import React, { useContext, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeSix/MainBanner";
import FeaturedService from "../components/HomeSix/FeaturedService";
import OurMission from "../components/HomeSix/OurMission";
import AboutUs from "../components/HomeSix/AboutUs";
import ContactForm from "../components/ContactUs/ContactForm";
import Footer from "../components/_App/Footer";
import { UserContext } from "../Context/UserContextAPI";
import Profile from "./profile";

const Index6 = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <Navbar />
      {currentUser && currentUser?.id ? (
        <Profile />
      ) : (
        <>
          <MainBanner />

          <FeaturedService />

          <OurMission />

          <AboutUs />

          <ContactForm />
        </>
      )}

      <Footer />
    </>
  );
};

export default Index6;
