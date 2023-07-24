import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeSix/MainBanner";
import FeaturedService from "../components/HomeSix/FeaturedService";
import OurMission from "../components/HomeSix/OurMission";
import AboutUs from "../components/HomeSix/AboutUs";
import AppointmentForm from "../components/HomeSix/AppointmentForm";
import Footer from "../components/_App/Footer";

const Index6 = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <FeaturedService />

      <OurMission />

      <AboutUs />

      <AppointmentForm />

      <Footer />
    </>
  );
};

export default Index6;
