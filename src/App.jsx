import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import GameCard from "./GameCard";
import TonightPage from "./TonightPage";
import "./App.css";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/history">History</Link>
      <TonightPage />
    </div>
  );
}

export default App;
