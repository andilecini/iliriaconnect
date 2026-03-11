import Link from "next/link";
import { treatments } from "../../lib/data";

export default function TreatmentsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Treatments</p>
          <h2>Treatment pages should capture search intent and convert it</h2>
          <p className="lead" style={{ marginTop: "16px" }}>
            These pages are important for SEO, education, and appointment
            requests. They help visitors understand what they need before they
            choose a clinic.
          </p>
        </div>

        <div className="cards-2">
          {treatments.map((item) => (
            <div key={item.name} className="card">
              <div className="card-pad">
                <h3>{item.name}</h3>
                <p className="copy" style={{ marginTop: "10px" }}>
                  Best audience: {item.audience}
                </p>
                <p className="copy" style={{ marginTop: "12px" }}>
                  {item.description}
                </p>
                <div className="inline-actions">
                  <Link href="/contact" className="btn btn-primary">
                    Request This Treatment
                  </Link>
                  <Link href="/ai" className="btn btn-secondary">
                    Ask AI
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
