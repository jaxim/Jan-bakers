import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

function App() {
  return (
    <Router>
      <Timer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </Router>
  );
}

export default App;
