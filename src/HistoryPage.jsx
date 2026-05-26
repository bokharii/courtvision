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
  const formattedDate = new Intl.DateTimeFormat("en-CA").format(yesterday)

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
    <div className="page">
      <div className="form-row">
        <input
          className="form-input"
          type="date"
          max={formattedDate}
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
          }}
        />
        <button
          type="button"
          className="btn"
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
        <div className="status-message">Loading...</div>
      ) : error ? (
        <div className="status-message status-message--error">
          Something went wrong, probably too many API requests.
        </div>
      ) : games.length === 0 && hasSearched ? (
        <div className="status-message">No games on this date.</div>
      ) : (
        <div className="game-list">
          {games.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      )}
    </div>
  );
}
