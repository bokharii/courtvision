import TonightPage from "./TonightPage";
import HistoryPage from "./HistoryPage";
import ContactPage from "./ContactPage";
import PredictPage from "./PredictPage";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/history" className="nav-link">
            History
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/predict" className="nav-link">
            Predict (NEW!)
          </Link>
        </div>
      </nav>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<TonightPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/predict" element={<PredictPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
