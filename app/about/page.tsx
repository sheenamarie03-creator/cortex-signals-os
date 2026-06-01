import { PageHero } from "../components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A selective intelligence platform for clinically meaningful neurotechnology."
        description="Cortex Signals interprets brain-health innovation through a clinical, strategic, and commercially aware lens."
      />
      <section className="section prose-panel">
        <h2>Why it exists</h2>
        <p>
          Neurotechnology is moving quickly, but not every technical advance becomes a useful clinical product. Cortex Signals focuses on the questions that determine whether a brain-health technology matters: clinical utility, evidence quality, implementation fit, regulatory path, reimbursement pressure, and buyer behavior.
        </p>
        <p>
          The brief is written for readers who need more than headlines. It is grounded, discerning, and designed to help teams separate meaningful signal from market noise.
        </p>
      </section>
    </>
  );
}
