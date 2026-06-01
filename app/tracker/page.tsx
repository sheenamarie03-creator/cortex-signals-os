import { notFound } from "next/navigation";
import { TrackerSourceList } from "./TrackerSourceList";
import { blankSourceTemplate, editorialSources, sourceStatuses } from "../lib/tracker";

const statusCounts = sourceStatuses.map((status) => ({
  status,
  count: editorialSources.filter((source) => source.status === status).length,
}));

const categoryTags = Array.from(new Set(editorialSources.flatMap((source) => source.categoryTags))).sort();
const candidateIssues = Array.from(new Set(editorialSources.map((source) => source.candidateIssue))).sort();

export default function TrackerPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <>
      <section className="page-hero tracker-hero">
        <p className="eyebrow">Private prototype</p>
        <h1>Editorial source tracker</h1>
        <p>
          A lightweight workspace for collecting neurotechnology and brain-health sources for future newsletter issues, insights, reports, and consulting briefs.
        </p>
      </section>

      <aside className="tracker-warning" role="note">
        <strong>Prototype only:</strong> this page is not authenticated. Do not store confidential information here.
      </aside>

      <section className="section tracker-summary" aria-labelledby="tracker-summary-heading">
        <div>
          <p className="eyebrow">Local JSON file</p>
          <h2 id="tracker-summary-heading">Simple by design.</h2>
          <p>
            Source entries are stored in <code>data/editorial-sources.json</code>. For now, add or edit records directly in that file, then refresh this page.
          </p>
          <p>
            The search and filters below help you quickly find sources by title, organization, notes, status, category tag, or candidate issue.
          </p>
        </div>
        <div className="status-grid" aria-label="Source counts by status">
          {statusCounts.map(({ status, count }) => (
            <div className="status-card" key={status}>
              <span>{status}</span>
              <strong>{count}</strong>
            </div>
          ))}
        </div>
      </section>

      <TrackerSourceList
        sources={editorialSources}
        statuses={sourceStatuses}
        categoryTags={categoryTags}
        candidateIssues={candidateIssues}
      />

      <section className="section tracker-form-section" aria-labelledby="tracker-form-heading">
        <div>
          <p className="eyebrow">Add or edit</p>
          <h2 id="tracker-form-heading">Entry template</h2>
          <p>
            This prototype does not save from the browser yet. Copy this structure into <code>data/editorial-sources.json</code> and update the values. Keep entries non-confidential until authentication is added.
          </p>
        </div>

        <form className="tracker-form">
          <label>
            Source title
            <input type="text" defaultValue={blankSourceTemplate.title} />
          </label>
          <label>
            URL
            <input type="url" defaultValue={blankSourceTemplate.url} />
          </label>
          <label>
            Publication date
            <input type="date" defaultValue={blankSourceTemplate.publicationDate} />
          </label>
          <label>
            Company or organization
            <input type="text" defaultValue={blankSourceTemplate.companyOrOrganization} />
          </label>
          <label>
            Category tags
            <input type="text" defaultValue={blankSourceTemplate.categoryTags.join(", ")} />
          </label>
          <label>
            Source type
            <input type="text" defaultValue={blankSourceTemplate.sourceType} />
          </label>
          <label>
            Relevance score
            <input type="number" min="1" max="5" defaultValue={blankSourceTemplate.relevanceScore} />
          </label>
          <label>
            Novelty score
            <input type="number" min="1" max="5" defaultValue={blankSourceTemplate.noveltyScore} />
          </label>
          <label>
            Commercial relevance score
            <input type="number" min="1" max="5" defaultValue={blankSourceTemplate.commercialRelevanceScore} />
          </label>
          <label>
            Status
            <select defaultValue={blankSourceTemplate.status}>
              {sourceStatuses.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </label>
          <label>
            Candidate issue
            <input type="text" defaultValue={blankSourceTemplate.candidateIssue} />
          </label>
          <label className="full-width">
            Clinical relevance notes
            <textarea defaultValue={blankSourceTemplate.clinicalRelevanceNotes} />
          </label>
          <label className="full-width">
            Notes
            <textarea defaultValue={blankSourceTemplate.notes} />
          </label>
        </form>

        <pre className="json-template">{JSON.stringify(blankSourceTemplate, null, 2)}</pre>
      </section>
    </>
  );
}
