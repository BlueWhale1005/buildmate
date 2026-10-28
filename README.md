# BuildMate

BuildMate promotes local service businesses and connects people with cleaning providers and general contracting partners.

## Run locally

Prerequisite: Node.js 22.12 or newer.

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env`.
3. `CONTACT_EMAIL` defaults to `Info@buildmateusa.com`. Configure the `SMTP_*` values in `.env` for your mail provider. The current backend uses SMTP username/password authentication; Microsoft 365 disables Basic authentication, so Microsoft 365 delivery requires an OAuth-capable backend before it can send. Never put mailbox passwords or app credentials in frontend code or commit them to source control.
4. Start the site with `npm run dev` and open `http://localhost:3000`.

The phone and email links work without SMTP configuration. The inquiry form reports an error until SMTP is configured and a message can be sent.
