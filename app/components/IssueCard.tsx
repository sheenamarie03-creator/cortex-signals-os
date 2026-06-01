type IssueCardProps = {
  eyebrow: string;
  title: string;
  summary: string;
};

export function IssueCard({ eyebrow, title, summary }: IssueCardProps) {
  return (
    <article className="card issue-card">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{summary}</p>
    </article>
  );
}
