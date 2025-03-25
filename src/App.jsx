import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import Kontakt from "./components/Kontakt";
import Cjenik from "./components/Cjenik";
import Projekti from "./components/Projekti";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cjenik" element={<Cjenik />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/projekti" element={<Projekti />} />
      </Routes>
    </Router>
  );
}

export default App;
