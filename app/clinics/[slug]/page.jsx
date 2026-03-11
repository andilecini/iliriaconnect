import Link from "next/link";
import { notFound } from "next/navigation";
import { clinics } from "../../../lib/data";

export default function ClinicProfilePage({ params }) {
  const clinic = clinics.find((item) => item.slug === params.slug);

  if (!clinic) {
    notFound();
  }

  return (
    <>
      <section className="profile-hero">
        <div className="container profile-grid">
          <div>
            <div className="badge-row">
              <span className="badge">{clinic.category}</span>
              <span className="badge">{clinic.city}</span>
              <span className="badge">{clinic.rating} ★</span>
            </div>

            <h1 style={{ marginTop: "22px" }}>{clinic.name}</h1>

            <p className="lead" style={{ marginTop: "22px", maxWidth: "760px" }}>
              {clinic.description}
            </p>

            <div className="tag-list">
              {clinic.specialties.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="inline-actions">
              <Link href="/contact" className="btn btn-primary">
                Request Appointment
              </Link>
              <Link href="/ai" className="btn btn-secondary">
                Ask AI About This Clinic
              </Link>
            </div>

            <div className="info-grid">
              <div className="info-box">
                <small>Address</small>
                <strong>{clinic.address}</strong>
              </div>
              <div className="info-box">
                <small>Languages</small>
                <strong>{clinic.languages.join(", ")}</strong>
              </div>
            </div>
          </div>

          <div className="profile-image">
            <img src={clinic.image} alt={clinic.name} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <div className="section-head">
              <p className="kicker">Clinic profile</p>
              <h2>What a real clinic page should contain</h2>
              <p className="lead" style={{ marginTop: "16px" }}>
                This page should sell trust: images, languages, specialties,
                pricing signals, and a frictionless booking action.
              </p>
            </div>

            <div className="cards-2">
              {clinic.specialties.map((item) => (
                <div key={item} className="card">
                  <div className="card-pad">
                    <h3>{item}</h3>
                    <p className="copy" style={{ marginTop: "12px" }}>
                      A detailed treatment page, FAQs, pricing guidance, recovery
                      details, and a strong appointment CTA should link from here.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="gallery-grid">
              {clinic.gallery.map((image, index) => (
                <div key={index} className={index === 0 ? "wide" : ""}>
                  <img src={image} alt={`${clinic.name} ${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="sidebar-box" style={{ marginTop: "16px" }}>
              <h3>Booking sidebar concept</h3>
              <div className="sidebar-list">
                <div className="sidebar-item">Treatment selector</div>
                <div className="sidebar-item">Preferred appointment date</div>
                <div className="sidebar-item">Country / travel origin</div>
                <div className="sidebar-item">WhatsApp / email contact</div>
              </div>
              <div className="inline-actions">
                <Link href="/contact" className="btn btn-primary">
                  Book This Clinic
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
