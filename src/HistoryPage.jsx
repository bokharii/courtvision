import GameCard from "./GameCard";
import { useState } from "react";
import fetchGamesByDate from "./fetchGamesByDate";

export default function HistoryPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const formattedDate = new Intl.DateTimeFormat("en-CA").format(yesterday);

  const checkHistory = async () => {
    try {
      const gameData = await fetchGamesByDate(selectedDate);
      setGames(gameData);
    } catch (err) {
      setError(true);
      setGames([]);
      console.error("Error when fetching game data", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>Past Games</h1>
      <p>Search for previous games that have already happened</p>
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
            checkHistory();
          }}
        >
          Search
        </button>
      </div>

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
