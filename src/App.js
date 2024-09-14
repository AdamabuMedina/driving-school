import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import WOW from "wow.js";
import "./app.css";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import CoursesPage from "./components/pages/СoursesPage";
import FeaturesPage from "./components/pages/FeaturesPage";

import AppointmentPage from "./components/pages/AppointmentPage";
import TeamPage from "./components/pages/TeamPage";
import TestimonialPage from "./components/pages/TestimonialPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ContactPage from "./components/pages/ContactPage";

import about1 from "./img/about-1.jpg";
import about2 from "./img/about-2.jpg";
import courses1 from "./img/courses-1.jpg";
import courses2 from "./img/courses-2.jpg";
import courses3 from "./img/courses-3.jpg";
import team1 from "./img/team-1.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
import team4 from "./img/team-4.jpg";
import testimonial1 from "./img/testimonial-1.jpg";
import testimonial2 from "./img/testimonial-2.jpg";
import testimonial3 from "./img/testimonial-3.jpg";

function App() {
  useEffect(() => {
    new WOW().init(); // Инициализация WOW.js
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                about1={about1}
                about2={about2}
                courses1={courses1}
                courses2={courses2}
                courses3={courses3}
                team1={team1}
                team2={team2}
                team3={team3}
                team4={team4}
                testimonial1={testimonial1}
                testimonial2={testimonial2}
                testimonial3={testimonial3}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage about1={about1} about2={about2} />}
          />
          <Route
            path="/courses"
            element={
              <CoursesPage
                courses1={courses1}
                courses2={courses2}
                courses3={courses3}
              />
            }
          />
          appointment
          <Route
            path="/feature"
            element={<FeaturesPage about1={about1} about2={about2} />}
          />
          <Route
            path="/appointment"
            element={<AppointmentPage about1={about1} about2={about2} />}
          />
          <Route
            path="/team"
            element={
              <TeamPage
                team1={team1}
                team2={team2}
                team3={team3}
                team4={team4}
              />
            }
          />
          <Route
            path="/testimonial"
            element={
              <TestimonialPage
                testimonial1={testimonial1}
                testimonial2={testimonial2}
                testimonial3={testimonial3}
              />
            }
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
