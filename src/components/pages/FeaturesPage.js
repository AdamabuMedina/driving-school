import React from "react";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";
import BackToTop from "../BackToTop";
import PageHeader from "../PageHeader";
import Features from "../Features";

const FeaturesPage = ({ about1, about2 }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader />
      <Features about1={about1} about2={about2} />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default FeaturesPage;
