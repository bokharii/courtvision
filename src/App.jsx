import TonightPage from "./TonightPage";
import HistoryPage from "./HistoryPage";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TonightPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </>
  );
}

export default App;
