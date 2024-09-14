import React from "react";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";
import BackToTop from "../BackToTop";
import PageHeader from "../PageHeader";
import Testimonial from "../Testimonial";

const TestimonialPage = ({ testimonial1, testimonial2, testimonial3 }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader />
      <Testimonial
        testimonial1={testimonial1}
        testimonial2={testimonial2}
        testimonial3={testimonial3}
      />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default TestimonialPage;
