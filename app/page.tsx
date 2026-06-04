import { IssueCard } from "./components/IssueCard";
import { audiences, coverageAreas, sampleIssues } from "./lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Independent neurotechnology intelligence</p>
        <h1>Cortex Signals</h1>
        <p className="hero-copy">
          Clinical signal for the people building, backing, and interpreting brain-health technology. Cortex Signals helps smart readers understand neurotechnology through a grounded clinical and strategic lens—without the hype cycle.
        </p>
        <div className="hero-highlights" aria-label="Cortex Signals focus areas">
          <span>Evidence-first analysis</span>
          <span>Commercial readiness</span>
          <span>Clinical adoption lens</span>
        </div>
        <div className="hero-actions">
          <a className="button primary" href="#newsletter">
            Join the brief
          </a>
          <a className="button secondary" href="/consulting">
            Explore briefings
          </a>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Coverage</p>
          <h2>What Cortex Signals covers</h2>
          <p>
            Selective analysis across clinically meaningful brain and behavior technologies, with attention to evidence, adoption, regulation, and commercial readiness.
          </p>
        </div>
        <div className="tag-grid">
          {coverageAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Audience</p>
        <h2>Who it is for</h2>
        <div className="grid two">
          {audiences.map((audience) => (
            <div className="card" key={audience}>
              <p>{audience}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Sample issues</p>
            <h2>Briefings built for judgment, not noise.</h2>
          </div>
          <a href="/issues">View issues</a>
        </div>
        <div className="grid three">
          {sampleIssues.map((issue) => (
            <IssueCard key={issue.title} {...issue} />
          ))}
        </div>
      </section>

      <section className="section feature-panel">
        <div>
          <p className="eyebrow">Consulting & briefings</p>
          <h2>Sharper context for neurotech decisions.</h2>
        </div>
        <p>
          Cortex Signals offers custom market scans, clinical landscape briefings, founder research support, and strategic context for investors, operators, and clinical teams.
        </p>
        <a className="button primary" href="/consulting">
          Request a conversation
        </a>
      </section>

      <section className="section newsletter" id="newsletter">
        <div>
          <p className="eyebrow">Newsletter</p>
          <h2>Get the signal in your inbox.</h2>
          <p>Signup integration placeholder for Beehiiv. Replace this block with the live embed when ready.</p>
        </div>
        <form>
          <label htmlFor="email">Email address</label>
          <div className="signup-row">
            <input id="email" type="email" placeholder="you@example.com" />
            <button type="button">Notify me</button>
          </div>
        </form>
      </section>

      <section className="section founder">
        <div className="portrait" aria-hidden="true">SL</div>
        <div>
          <p className="eyebrow">Founder</p>
          <h2>Sheena M. Lee, DMSc, PA-C</h2>
          <p>
            Sheena M. Lee is a clinician and educator with experience across psychiatry, neurology, intellectual and developmental disabilities, autism, and PA education. Cortex Signals reflects her interest in translating complex brain-health innovation into clinically informed, commercially useful intelligence.
          </p>
        </div>
      </section>
    </>
  );
}
