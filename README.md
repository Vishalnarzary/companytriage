# Company Triage Simulator

A Vercel-ready Next.js web app for testing how a customer support triage agent
classifies and drafts replies for inbound messages.

## What it does

- Accepts one customer message at a time.
- Sends the message to Gemini 2.5 Flash through a server-side API route.
- Shows the exact raw JSON returned by the model.
- Parses the same JSON into a clean support-ops display with issues, urgency,
  human review status, flags, and draft reply.

## Environment variables

Create these locally in `.env.local` and add them in Vercel project settings:

```bash
GEMINI_API_KEY=your_google_ai_studio_key
GEMINI_MODEL=gemini-2.5-flash
```

`GEMINI_MODEL` is optional. If it is not set, the app uses
`gemini-2.5-flash`.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the GitHub repository in Vercel.
3. Add `GEMINI_API_KEY` in Vercel environment variables.
4. Deploy. Vercel will run `npm run build`.
