import Image from "next/image";

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

      <section className="section founder about-founder">
        <div className="founder-photo-card">
          <Image
            src="/images/founder/sheena-lee-founder.jpg"
            alt="Sheena M. Lee, DMSc, PA-C, founder of Cortex Signals"
            width={320}
            height={320}
            className="founder-headshot"
            sizes="(max-width: 860px) 180px, 160px"
          />
        </div>
        <div>
          <p className="eyebrow">Founder perspective</p>
          <h2>Sheena M. Lee, DMSc, PA-C</h2>
          <p>
            Cortex Signals is led by Sheena M. Lee, a clinician and educator whose work spans psychiatry, neurology, intellectual and developmental disabilities, autism, and PA education. Her lens keeps the platform focused on clinically meaningful innovation, practical adoption, and the commercial questions that shape whether neurotechnology reaches the people it is meant to serve.
          </p>
        </div>
      </section>
    </>
  );
}
