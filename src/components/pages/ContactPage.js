import React from "react";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";
import BackToTop from "../BackToTop";
import PageHeader from "../PageHeader";
import Contact from "../Contact";

const ContactPage = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader />
      <Contact />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default ContactPage;
