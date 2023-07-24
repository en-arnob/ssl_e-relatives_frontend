import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/ContactUs/ContactInfo";
import ContactForm from "../components/ContactUs/ContactForm";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        imgClass="bg-2"
      />
      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
