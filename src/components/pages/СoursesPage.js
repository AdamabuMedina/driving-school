import React from "react";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";
import BackToTop from "../BackToTop";
import PageHeader from "../PageHeader";
import Courses from "../Courses";

const СoursesPage = ({ courses1, courses2, courses3 }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader />
      <Courses courses1={courses1} courses2={courses2} courses3={courses3} />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default СoursesPage;
