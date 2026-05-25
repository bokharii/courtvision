export default function GameCard({ game }) {
  return (
    <div key={game.id}>
      <h1>
        {game.visitor_team.full_name} @ {game.home_team.full_name}
      </h1>
      <h2>
        {game.visitor_team_score} - {game.home_team_score}
      </h2>
      <h3>GAME: {game.status}</h3>
    </div>
  );
}
