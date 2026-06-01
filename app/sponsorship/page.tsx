import { PageHero } from "../components/PageHero";

export default function SponsorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title="Reach a focused audience of neurotech decision-makers."
        description="Sponsorship opportunities will be designed for aligned organizations serving brain-health, neurotechnology, clinical innovation, and strategic capital markets."
      />
      <section className="section prose-panel">
        <h2>Partnership principles</h2>
        <p>
          Cortex Signals will prioritize clearly labeled sponsorships that respect editorial independence and reader trust. Placeholder inventory may include newsletter placements, sponsored research notes, and event or briefing partnerships.
        </p>
        <a className="button primary" href="/contact">Discuss sponsorship</a>
      </section>
    </>
  );
}
