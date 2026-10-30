# BuildMate

BuildMate promotes local service businesses and connects people with cleaning providers and general contracting partners.

## Run locally

Prerequisite: Node.js 22.12 or newer.

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env`.
3. Set `CONTACT_EMAIL`, `MS_TENANT_ID`, `MS_CLIENT_ID`, and `MS_CLIENT_SECRET` using the mailbox address and Microsoft Entra app registration values. The app must have Exchange Application RBAC `Application Mail.Send` access scoped to that mailbox. Never put app credentials in frontend code or commit them to source control.
4. Start the site with `npm run dev` and open `http://localhost:3000`.

Vercel serves the inquiry endpoints from `api/contact.ts` and `api/project-inquiry.ts`. Configure the same Graph environment variables in the Vercel project settings for each deployment environment. Project inquiry attachments are limited to 3 files of 700 KB each to stay within serverless request and Graph message limits.
