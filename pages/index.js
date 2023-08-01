import React, { useContext, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeSix/MainBanner";
import FeaturedService from "../components/HomeSix/FeaturedService";
import OurMission from "../components/HomeSix/OurMission";
import AboutUs from "../components/HomeSix/AboutUs";
import AppointmentForm from "../components/HomeSix/AppointmentForm";
import Footer from "../components/_App/Footer";
import { UserContext } from "../Context/UserContextAPI";
import { useRouter } from "next/navigation";

const Index6 = () => {
  const { currentUser } = useContext(UserContext);
  const { push } = useRouter();

  useEffect(() => {
    if (currentUser?.id) {
      push("/profile");
    }
  }, []);
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
