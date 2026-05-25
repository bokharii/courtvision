import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import GameCard from "./GameCard";
import "./App.css";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchNBAData = async () => {
      const today = new Date().toISOString().split("T")[0];
      const url = `https://api.balldontlie.io/v1/games?dates[]=${today}`;
      const response = await fetch(url, {
        headers: {
          Authorization: import.meta.env.VITE_BALLDONTLIE_KEY,
        },
      });
      const data = await response.json();
      setGames(data.data);
    };
    fetchNBAData();
  }, []);

  return (
    <div>
      <div>Tonight's NBA</div>
      <GameCard games={games} />
    </div>
  );
}

export default App;
