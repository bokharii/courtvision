export default async function fetchGamesByDate(date) {
  const url = `https://api.balldontlie.io/v1/games?dates[]=${date}`;
  const response = await fetch(url, {
    headers: {
      Authorization: import.meta.env.VITE_BALLDONTLIE_KEY,
    },
  });
  if (response.ok) {
    const data = await response.json();
    return data.data ?? [];
  }
  throw new Error(`Request failed: ${response.status}`);
}
