# BuildMate

BuildMate promotes local service businesses and connects people with cleaning providers and general contracting partners.

## Run locally

Prerequisite: Node.js 22.12 or newer.

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env`.
3. Configure `CONTACT_EMAIL` and the `SMTP_*` values in `.env` to enable inquiry delivery. Use the sender address authorized by your email provider for `SMTP_FROM`.
4. Start the site with `npm run dev` and open `http://localhost:3000`.

The phone and email links work without SMTP configuration. The inquiry form reports an error until SMTP is configured and a message can be sent.
