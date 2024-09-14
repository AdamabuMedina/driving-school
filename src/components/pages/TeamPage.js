import React from "react";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";
import BackToTop from "../BackToTop";
import PageHeader from "../PageHeader";
import Team from "../Team";

const TeamPage = ({ team1, team2, team3, team4 }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader />
      <Team team1={team1} team2={team2} team3={team3} team4={team4} />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default TeamPage;
