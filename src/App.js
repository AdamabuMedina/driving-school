import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import Topbar from "./components/Topbar";
import Carousel from "./components/Carousel";
import WOW from "wow.js";
import Facts from "./components/Facts";
import About from "./components/About";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import BackToTop from "./components/BackToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./app.css";

function App() {
  useEffect(() => {
    new WOW().init(); // Инициализация WOW.js
  }, []);

  return (
    <div className="App">
      <Spinner />
      <Topbar />
      <Navbar />
      <Carousel />
      <Facts />
      <About />
      <Courses />
      <Features />
      <Team />
      <Testimonial />
      <Footer />
      <Copyright />
      <BackToTop />
    </div>
  );
}

export default App;
