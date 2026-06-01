import { IssueCard } from "../components/IssueCard";
import { PageHero } from "../components/PageHero";
import { sampleIssues } from "../lib/content";

export default function IssuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Issues"
        title="Editorial briefings on neurotechnology and brain-health innovation."
        description="Issue archive placeholder for published and upcoming Cortex Signals briefs."
      />
      <section className="section grid three">
        {sampleIssues.map((issue) => (
          <IssueCard key={issue.title} {...issue} />
        ))}
      </section>
    </>
  );
}
