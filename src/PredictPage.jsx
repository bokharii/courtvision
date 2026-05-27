import { useState } from "react";
import { NBA_TEAMS } from "./constants/teams";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export default function PredictPage() {
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validPrediction = teamA && teamB && teamA !== teamB;

  const handleClick = async () => {
    setError("");
    setGeminiResponse("");
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Predict a game matchup between the ${teamA} and the ${teamB} in a few sentences. Provide the final game score as well.`,
      });
      setGeminiResponse(response.candidates[0].content.parts[0].text);
    } catch (err) {
      setError(
        "Unexpected error encountered when trying to reach Gemini - please try again later",
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="page">
      <h1 className="page-title">
        Select Two Teams and Gemini Will Predict the Winner!
      </h1>
      <div className="matchup-fields">
        <label className="form-label" htmlFor="teamA">
          Team A
        </label>
        <select
          className="form-select"
          name="teamA"
          id="teamA"
          value={teamA}
          onChange={(e) => setTeamA(e.target.value)}
        >
          <option value="">Select a Team</option>
          {NBA_TEAMS.map((team) => (
            <option key={team.teamId} value={team.teamName}>
              {team.teamName}
            </option>
          ))}
        </select>

        <label className="form-label" htmlFor="teamB">
          Team B
        </label>
        <select
          className="form-select"
          name="teamB"
          id="teamB"
          value={teamB}
          onChange={(e) => setTeamB(e.target.value)}
        >
          <option value="">Select a Team</option>
          {NBA_TEAMS.map((team) => (
            <option key={team.teamId} value={team.teamName}>
              {team.teamName}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="btn"
          disabled={!validPrediction || loading}
          onClick={handleClick}
        >
          Submit
        </button>
      </div>

      <div className="prediction-output">
        {loading && <p className="status-message">Loading result...</p>}
        {error && (
          <p className="status-message status-message--error">{error}</p>
        )}
        {geminiResponse && !loading && (
          <p className="prediction-result">{geminiResponse}</p>
        )}
      </div>
    </div>
  );
}
