import React from "react";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";
import BackToTop from "../BackToTop";
import PageHeader from "../PageHeader";
import NotFound from "../NotFound";

const NotFoundPage = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader />
      <NotFound />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default NotFoundPage;
