import TonightPage from "./TonightPage";
import HistoryPage from "./HistoryPage";
import ContactPage from "./ContactPage";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<TonightPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
