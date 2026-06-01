import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/issues", label: "Issues" },
  { href: "/insights", label: "Insights" },
  { href: "/consulting", label: "Consulting" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Cortex Signals home">
        <span className="brand-mark">CS</span>
        <span>Cortex Signals</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
