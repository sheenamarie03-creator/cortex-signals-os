import sources from "../../data/editorial-sources.json";

export const sourceStatuses = ["inbox", "review", "shortlisted", "drafted", "used", "archived"] as const;

export type SourceStatus = (typeof sourceStatuses)[number];

export type EditorialSource = {
  id: string;
  title: string;
  url: string;
  publicationDate: string;
  companyOrOrganization: string;
  categoryTags: string[];
  sourceType: string;
  relevanceScore: number;
  noveltyScore: number;
  commercialRelevanceScore: number;
  clinicalRelevanceNotes: string;
  status: SourceStatus;
  candidateIssue: string;
  notes: string;
};

export const editorialSources = sources as EditorialSource[];

export const blankSourceTemplate: EditorialSource = {
  id: "src-005",
  title: "New source title",
  url: "https://example.com/source-url",
  publicationDate: "2026-06-01",
  companyOrOrganization: "Company or organization",
  categoryTags: ["category", "tag"],
  sourceType: "company announcement | regulatory update | peer-reviewed paper | investor note | interview",
  relevanceScore: 3,
  noveltyScore: 3,
  commercialRelevanceScore: 3,
  clinicalRelevanceNotes: "Clinical relevance notes and cautions go here.",
  status: "inbox",
  candidateIssue: "Candidate issue or brief name",
  notes: "Editorial notes, follow-up tasks, or source validation reminders.",
};
