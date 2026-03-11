import ClinicCard from "../../components/ClinicCard";
import { clinics } from "../../lib/data";

export default function ClinicsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Clinics</p>
          <h2>Browse clinics by specialty and destination</h2>
          <p className="lead" style={{ marginTop: "16px" }}>
            This page is your marketplace layer. It should help patients compare
            clinics, understand their options, and move toward booking.
          </p>
        </div>

        <div className="cards-3">
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.slug} clinic={clinic} />
          ))}
        </div>
      </div>
    </section>
  );
}
