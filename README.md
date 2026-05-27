# CourtVision

A multi-page React app for browsing NBA games and experimenting with AI-powered matchup predictions.
<img width="811" height="527" alt="Screenshot 2026-05-26 at 8 44 20 PM" src="https://github.com/user-attachments/assets/ae515d01-5674-4051-8aee-20ba57f822dc" />
<img width="807" height="816" alt="Screenshot 2026-05-26 at 8 44 44 PM" src="https://github.com/user-attachments/assets/e9b5f553-9c6f-4f97-b1e4-58f7ded9de63" />
<img width="808" height="841" alt="Screenshot 2026-05-26 at 8 46 45 PM" src="https://github.com/user-attachments/assets/6162a2d7-1b2f-49eb-b0f9-a2fe3650bc52" />

## Live demo

Live demo is available on [Vercel](https://courtvision-kyk6.vercel.app/)

## Features

- **Tonight** — Fetches today's games from the [balldontlie](https://www.balldontlie.io/) API using your local date.
- **Past Games** — Search past games by date (up to yesterday).
- **Predict** — Pick two teams and get a short AI-written matchup preview via the Google Gemini API.
- **Contact** — Controlled contact form submitted through Formspree.

Shared UI includes team logos (ESPN CDN), loading/error/empty states, and responsive page layout.

## Tech stack

- React 19 + Vite
- React Router
- CSS (custom design system with light/dark support via `prefers-color-scheme`)
- [balldontlie API](https://www.balldontlie.io/) — game data
- [Formspree](https://formspree.io/) — contact form
- [@google/genai](https://www.npmjs.com/package/@google/genai) — Gemini predictions

## Getting started

### Prerequisites

- Node.js 18+
- API keys (see below)

### Install

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
VITE_BALLDONTLIE_KEY=your_balldontlie_api_key
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Restart the dev server after changing env vars.

> **Note:** Vite exposes `VITE_*` variables to the browser. The Gemini and balldontlie keys are visible in client-side code — fine for a personal learning project, but a production app would proxy sensitive calls through a backend.

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build   # production build
npm run preview # preview production build
npm run lint    # ESLint
```
## Known limitations

- Gemini predictions may reference outdated rosters; predictions are for entertainment only.
- balldontlie free tier has strict rate limits — repeated refreshes could lead to errors.

## License

Personal learning project — not affiliated with the NBA. Jalen Brunson is the GOAT.
