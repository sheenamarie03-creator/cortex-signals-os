import { PageHero } from "../components/PageHero";
import { insightTopics } from "../lib/content";

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Frameworks for interpreting the neurotechnology market."
        description="Short essays, strategic notes, and clinical-commercial frameworks will live here."
      />
      <section className="section grid two">
        {insightTopics.map((topic) => (
          <article className="card" key={topic}>
            <h3>{topic}</h3>
            <p>
              Placeholder insight summary describing how Cortex Signals evaluates this dimension of brain-health technology.
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
