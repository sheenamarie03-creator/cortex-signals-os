import { PageHero } from "../components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with Cortex Signals."
        description="Use this placeholder page for newsletter, consulting, sponsorship, and editorial inquiries."
      />
      <section className="section contact-card">
        <div>
          <h2>Contact placeholder</h2>
          <p>Replace this with a live form, Beehiiv link, or dedicated inbox when ready.</p>
        </div>
        <a className="button primary" href="mailto:hello@cortexsignals.co">hello@cortexsignals.co</a>
      </section>
    </>
  );
}
