import React from "react";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import About from "../About";
import Team from "../Team";
import Footer from "../Footer";
import Copyright from "../Copyright";
import BackToTop from "../BackToTop";
import PageHeader from "../PageHeader";

const AboutPage = ({ about1, about2 }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader />
      <About about1={about1} about2={about2} />
      <Team />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default AboutPage;
