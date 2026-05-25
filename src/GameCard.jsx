import "./GameCard.css";
import getTeamLogoUrl from "./getTeamLogoUrl";

export default function GameCard({ game }) {
  const visitorLogo = getTeamLogoUrl(game.visitor_team.abbreviation);
  const homeLogo = getTeamLogoUrl(game.home_team.abbreviation);

  return (
    <article className="game-card">
      <h1 className="game-card-teams">
        <div className="team-row">
          {visitorLogo ? (
            <img
            className="team-logo"
              src={visitorLogo}
              alt={`Logo for the ${game.visitor_team.full_name}`}
            />
          ) : null}
          <span className="team-name"> {game.visitor_team.full_name} </span>
        </div>
        <p className="team-matchup-at">@</p>
        <div className="team-row">
          {homeLogo ? (
            <img
            className="team-logo"
              src={homeLogo}
              alt={`Logo for the ${game.home_team.full_name}`}
            />
          ) : null}
          <span className="team-name"> {game.home_team.full_name} </span>
        </div>
      </h1>
      <h2 className="game-card-score">
        {game.visitor_team_score} - {game.home_team_score}
      </h2>
      <h3 className="game-card-status">GAME: {game.status}</h3>
    </article>
  );
}
