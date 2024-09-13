import { useEffect } from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import Topbar from "./components/Topbar";
import Carousel from "./components/Carousel";
import WOW from "wow.js";
import Facts from "./components/Facts";

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
    </div>
  );
}

export default App;
