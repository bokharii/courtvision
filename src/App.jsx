import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const fakeGames = [
    {
      id: 5,
      homeTeam: "New York Knicks",
      awayTeam: "Cleveland Cavaliers",
      homeScore: 124,
      awayScore: 102,
      status: "COMPLETED",
    },
    {
      id: 6,
      homeTeam: "Oklahoma City Thunder",
      awayTeam: "San Antonio Spurs",
      homeScore: 155,
      awayScore: 149,
      status: "COMPLETED",
    },
    {
      id: 231,
      homeTeam: "Boston Celtics",
      awayTeam: "Los Angeles Lakers",
      homeScore: 95,
      awayScore: 96,
      status: "IN PROGRESS",
    },
  ];

  const games = fakeGames.map((game) => {
    return (
      <div key={game.id}>
        <h1>
          {game.homeTeam} vs {game.awayTeam}
        </h1>
        <h2>
          {game.homeScore} - {game.awayScore}
        </h2>
        <h3>GAME: {game.status}</h3>
      </div>
    );
  });

  return (
    <div>
      <div>Tonight's NBA</div>
      {games}
    </div>
  );
}

export default App;
