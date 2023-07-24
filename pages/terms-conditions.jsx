import React, { useState, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import Parser from "html-react-parser";

const TermsConditions = () => {
  const router = useRouter();
  const role = router.query;
  const [tnCTitle, setTnCTitle] = useState("");
  const [tnC, setTnC] = useState("");

  const fetchTnC = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/terms-conditions/${role?.id}`
      )
      .then((response) => {
        if (response.data) {
          setTnCTitle(response.data.name);
          setTnC(response.data.info);
        } else {
          setTnCTitle("");
          setTnC("");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchTnC();
  }, []);
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={tnCTitle}
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
        imgClass="bg-1"
      />

      <div className="terms-conditions ptb-100">
        <div className="container">
          <div className="single-privacy">{Parser(tnC)}</div>
        </div>
      </div>

      {/* <Subscribe /> */}

      <Footer />
    </>
  );
};

export default TermsConditions;
