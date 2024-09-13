import "./app.css";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Spinner />
      <Topbar />
      <Navbar />
    </div>
  );
}

export default App;
