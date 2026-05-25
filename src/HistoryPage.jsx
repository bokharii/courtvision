import GameCard from "./GameCard";
import { useState } from "react";

export default function HistoryPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const formattedDate = yesterday.toISOString().split("T")[0];

  const fetchGamesByDate = async (date) => {
    const url = `https://api.balldontlie.io/v1/games?dates[]=${date}`;
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

  return (
    <div>
      <div>
        <input
          type="date"
          max={formattedDate}
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
          }}
        ></input>
        <button
          disabled={!selectedDate}
          onClick={() => {
            if (!selectedDate) return;
            setLoading(true);
            setError(false);
            setHasSearched(true);
            fetchGamesByDate(selectedDate);
          }}
        >
          Search
        </button>
      </div>

      <div>Past Games</div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Something went wrong, probably too many API requests.</div>
      ) : games.length === 0 && hasSearched ? (
        <div>No games on this date.</div>
      ) : (
        games.map((game) => <GameCard game={game} key={game.id} />)
      )}
    </div>
  );
}
