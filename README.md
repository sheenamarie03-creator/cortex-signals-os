# Cortex Signals OS

Cortex Signals OS is the operating system for Cortex Signals / Cortex Insights, an independent intelligence platform focused on neurotechnology, neurogenetics, neuromodulation, BCI, neurodiagnostics, cognitive devices, sensory devices, and clinically relevant brain-health tools.

The first build goal is a clean public-facing website and a simple private editorial/source tracker.

## Public website

This repository currently contains a clean Next.js website for Cortex Signals with these public pages:

- Home
- About
- Issues
- Insights
- Consulting
- Sponsorship
- Contact

The site uses placeholder editorial content and a placeholder newsletter signup block so the brand, navigation, and page structure are easy to edit before connecting production services such as Beehiiv.

## Private editorial/source tracker

A prototype private tracker is available at [http://localhost:3000/tracker](http://localhost:3000/tracker) while running the site locally with `npm run dev`. It is intentionally not linked from the public navigation and does not include authentication yet. Do not store confidential information in the tracker until authentication and a production-safe storage plan are added.

For safe public deployment, `/tracker` is temporarily disabled in production. Production requests to `/tracker` and any nested tracker path return a 404 response, and the tracker page also renders Next.js `notFound()` as a second safeguard when `NODE_ENV` is `production`. The tracker code and local JSON data remain in the repository so the internal tool can be restored later after authentication and production-safe storage are added.

The tracker helps collect neurotechnology and brain-health sources for future Cortex Signals newsletter issues, insights, reports, and consulting briefs. It currently includes placeholder/sample records with:

- Source title and URL
- Publication date
- Company or organization
- Category tags
- Source type
- Relevance, novelty, and commercial relevance scores from 1-5
- Clinical relevance notes
- Status: inbox, review, shortlisted, drafted, used, or archived
- Candidate issue
- Editorial notes

Source data is still stored locally in `data/editorial-sources.json`. To add or edit entries during this prototype phase, update that JSON file directly and refresh `/tracker`. The page includes a searchable/filterable table view, status counts, an entry form mockup, and a copyable JSON template for new records. You can search by title, company/organization, notes, and clinical relevance notes, then filter by status, category tag, or candidate issue.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
```
