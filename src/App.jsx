import TonightPage from "./TonightPage";
import HistoryPage from "./HistoryPage";
import ContactPage from "./ContactPage";
import PredictPage from "./PredictPage";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">CourtVision</div>
        <div className="navbar-links">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/history" className={navClass}>
            History
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
          <NavLink to="/predict" className={navClass}>
            Predict (NEW!)
          </NavLink>
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
