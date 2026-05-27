import GameCard from "./GameCard";
import { useState, useEffect } from "react";
import fetchGamesByDate from "./fetchGamesByDate";

export default function TonightPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTonightsGames = async () => {
    try {
      const today = new Intl.DateTimeFormat("en-CA").format(new Date());
      const gameData = await fetchGamesByDate(today);
      setError(false);
      setGames(gameData);
    } catch (err) {
      setError(true);
      setGames([]);
      console.error(
        "Error - something went wrong with fetch to balldontlie API",
        err,
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchTonightsGames();
    const interval = setInterval(() => {
      fetchTonightsGames();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <h1 className="page-title">Tonight&apos;s NBA</h1>
      {loading ? (
        <div className="status-message">Loading...</div>
      ) : error ? (
        <div className="status-message status-message--error">
          Something went wrong, probably too many API requests.
        </div>
      ) : games.length === 0 ? (
        <div className="status-message">No games scheduled for today!</div>
      ) : (
        <>
          <div className="game-list">
            {games.map((game) => (
              <GameCard game={game} key={game.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
