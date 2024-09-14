import React from "react";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";
import BackToTop from "../BackToTop";
import PageHeader from "../PageHeader";
import Appointment from "../Appointment";

const AppointmentPage = ({ about1, about2 }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader />
      <Appointment about1={about1} about2={about2} />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default AppointmentPage;
