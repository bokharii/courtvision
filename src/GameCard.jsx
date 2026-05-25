export default function GameCard({ games }) {
  return games.map((game) => (
    <div key={game.id}>
      <h1>
        {game.homeTeam} vs {game.awayTeam}
      </h1>
      <h2>
        {game.homeScore} - {game.awayScore}
      </h2>
      <h3>GAME: {game.status}</h3>
    </div>
  ));
}
