import "./GameCard.css";
import getTeamLogoUrl from "./getTeamLogoUrl";

export default function GameCard({ game }) {
  const visitorLogo = getTeamLogoUrl(game.visitor_team.abbreviation);
  const homeLogo = getTeamLogoUrl(game.home_team.abbreviation);
  return (
    <article className="game-card">
      <h1 className="game-card-matchup">
        {visitorLogo ? (
          <img
            src={visitorLogo}
            alt={`Logo for the ${game.visitor_team.full_name}`}
          />
        ) : null}
        {game.visitor_team.full_name} @
        {homeLogo ? (
          <img
            src={homeLogo}
            alt={`Logo for the ${game.home_team.full_name}`}
          />
        ) : null}
        {game.home_team.full_name}
      </h1>
      <h2>
        {game.visitor_team_score} - {game.home_team_score}
      </h2>
      <h3>GAME: {game.status}</h3>
    </article>
  );
}
