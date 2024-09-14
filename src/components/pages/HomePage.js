import About from "../About";
import BackToTop from "../BackToTop";
import Carousel from "../Carousel";
import Copyright from "../Copyright";
import Courses from "../Courses";
import Facts from "../Facts";
import Features from "../Features";
import Footer from "../Footer";
import Navbar from "../Navbar";
// import Spinner from "../Spinner";
import Team from "../Team";
import Testimonial from "../Testimonial";
import Topbar from "../Topbar";

const HomePage = ({
  about1,
  about2,
  courses1,
  courses2,
  courses3,
  team1,
  team2,
  team3,
  team4,
  testimonial1,
  testimonial2,
  testimonial3,
}) => {
  return (
    <>
      {/* <Spinner /> */}
      <Topbar />
      <Navbar />
      <Carousel />
      <Facts />
      <About about1={about1} about2={about2} />
      <Courses courses1={courses1} courses2={courses2} courses3={courses3} />
      <Features about1={about1} about2={about2} />
      <Team team1={team1} team2={team2} team3={team3} team4={team4} />
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

export default HomePage;
