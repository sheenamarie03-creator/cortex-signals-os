"use client";

import { useMemo, useState } from "react";
import type { EditorialSource, SourceStatus } from "../lib/tracker";

type TrackerSourceListProps = {
  sources: EditorialSource[];
  statuses: readonly SourceStatus[];
  categoryTags: string[];
  candidateIssues: string[];
};

const allStatuses = "all-statuses";
const allCategories = "all-categories";
const allIssues = "all-issues";

export function TrackerSourceList({ sources, statuses, categoryTags, candidateIssues }: TrackerSourceListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(allStatuses);
  const [selectedCategory, setSelectedCategory] = useState(allCategories);
  const [selectedIssue, setSelectedIssue] = useState(allIssues);

  const filteredSources = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return sources.filter((source) => {
      const searchableText = [
        source.title,
        source.companyOrOrganization,
        source.notes,
        source.clinicalRelevanceNotes,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = normalizedSearch === "" || searchableText.includes(normalizedSearch);
      const matchesStatus = selectedStatus === allStatuses || source.status === selectedStatus;
      const matchesCategory = selectedCategory === allCategories || source.categoryTags.includes(selectedCategory);
      const matchesIssue = selectedIssue === allIssues || source.candidateIssue === selectedIssue;

      return matchesSearch && matchesStatus && matchesCategory && matchesIssue;
    });
  }, [searchTerm, selectedStatus, selectedCategory, selectedIssue, sources]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedStatus(allStatuses);
    setSelectedCategory(allCategories);
    setSelectedIssue(allIssues);
  };

  return (
    <section className="section tracker-table-section" aria-labelledby="tracker-table-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Sources</p>
          <h2 id="tracker-table-heading">Current source list</h2>
          <p className="section-intro">
            Use the search box and filters to narrow the tracker without editing code. These controls only change what you see on this page; the source file stays JSON-based.
          </p>
        </div>
        <span className="tracker-count">
          Showing {filteredSources.length} of {sources.length} sources
        </span>
      </div>

      <div className="tracker-filters" aria-label="Search and filter sources">
        <label className="tracker-search-field">
          Search sources
          <input
            type="search"
            placeholder="Search title, organization, notes, or clinical relevance"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>
        <label>
          Status
          <select value={selectedStatus} onChange={(event) => setSelectedStatus(event.target.value)}>
            <option value={allStatuses}>All statuses</option>
            {statuses.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </label>
        <label>
          Category tag
          <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
            <option value={allCategories}>All category tags</option>
            {categoryTags.map((tag) => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </label>
        <label>
          Candidate issue
          <select value={selectedIssue} onChange={(event) => setSelectedIssue(event.target.value)}>
            <option value={allIssues}>All candidate issues</option>
            {candidateIssues.map((issue) => (
              <option key={issue} value={issue}>{issue}</option>
            ))}
          </select>
        </label>
        <button type="button" onClick={resetFilters}>Reset filters</button>
      </div>

      {filteredSources.length > 0 ? (
        <div className="tracker-table-wrap">
          <table className="tracker-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Organization</th>
                <th>Date</th>
                <th>Tags</th>
                <th>Type</th>
                <th>Scores</th>
                <th>Status</th>
                <th>Candidate issue</th>
              </tr>
            </thead>
            <tbody>
              {filteredSources.map((source) => (
                <tr key={source.id}>
                  <td>
                    <a href={source.url}>{source.title}</a>
                    <p><strong>Clinical note:</strong> {source.clinicalRelevanceNotes}</p>
                    <p><strong>Founder note:</strong> {source.notes}</p>
                  </td>
                  <td>{source.companyOrOrganization}</td>
                  <td>{source.publicationDate}</td>
                  <td>
                    <div className="mini-tags">
                      {source.categoryTags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td>{source.sourceType}</td>
                  <td>
                    <div className="score-stack" aria-label={`Scores for ${source.title}`}>
                      <span>Relevance {source.relevanceScore}/5</span>
                      <span>Novelty {source.noveltyScore}/5</span>
                      <span>Commercial {source.commercialRelevanceScore}/5</span>
                    </div>
                  </td>
                  <td>
                    <span className="status-pill">{source.status}</span>
                  </td>
                  <td>{source.candidateIssue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state">
          <h3>No sources match these filters.</h3>
          <p>Try clearing the search box or choosing “All” in the filter menus.</p>
          <button type="button" onClick={resetFilters}>Reset filters</button>
        </div>
      )}
    </section>
  );
}
