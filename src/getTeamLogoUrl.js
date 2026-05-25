export default function getTeamLogoUrl(abbreviation) {
  if (!abbreviation) return null;
  return `https://a.espncdn.com/i/teamlogos/nba/500/${abbreviation.toLowerCase()}.png`;
}
