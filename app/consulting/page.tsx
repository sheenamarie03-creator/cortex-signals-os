import { PageHero } from "../components/PageHero";

const services = [
  "Custom neurotechnology landscape scans",
  "Clinical-commercial opportunity briefings",
  "Founder and investor diligence support",
  "Editorial research support for internal strategy teams",
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Consulting"
        title="Clinical and strategic context for high-conviction decisions."
        description="Cortex Signals supports teams that need to understand where brain-health innovation is credible, investable, or implementation-ready."
      />
      <section className="section grid two">
        {services.map((service) => (
          <article className="card" key={service}>
            <h3>{service}</h3>
            <p>Placeholder description for scope, deliverables, and ideal engagement fit.</p>
          </article>
        ))}
      </section>
    </>
  );
}
