import { NBA_TEAMS } from "../teams";

export default function PredictPage() {
  return (
    <div className="page">
      <h1 className="page-title">
        Select Two Teams and Gemini Will Predict the Winner!
      </h1>
      <label className="form-label" htmlFor="team">
        Pick a team
      </label>
      <select className="form-select" name="team" id="team">
        <option value="">Select a Team</option>
        {NBA_TEAMS.map((team) => (
          <option key={team.teamId} value={team.teamName}>
            {team.teamName}
          </option>
        ))}
      </select>
    </div>
  );
}
