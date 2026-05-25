import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import GameCard from "./GameCard";
import "./App.css";

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNBAData = async () => {
      const today = new Date().toISOString().split("T")[0];
      const url = `https://api.balldontlie.io/v1/games?dates[]=${today}`;
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: import.meta.env.VITE_BALLDONTLIE_KEY,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setGames(data.data);
        } else setError(true);
      } catch (err) {
        console.error(
          "Error - something went wrong with fetch to balldontlie API",
          err,
        );
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchNBAData();
  }, []);

  return (
    <div>
      <div>Tonight's NBA</div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Something went wrong, probably too many API requests.</div>
      ) : (
        <GameCard games={games} />
      )}
    </div>
  );
}

export default App;
