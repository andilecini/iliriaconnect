import Link from "next/link";
import ClinicCard from "../components/ClinicCard";
import {
  clinics,
  treatments,
  destinations,
  processSteps,
  testimonials
} from "../lib/data";

export default function HomePage() {
  const featuredClinics = clinics.slice(0, 3);
  const featuredTreatments = treatments.slice(0, 4);
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              Premium clinic discovery and AI-guided appointments
            </div>

            <h1 style={{ marginTop: "22px" }}>
              Find clinics, compare treatments, and book medical trips in
              Albania with AI.
            </h1>

            <p className="lead" style={{ marginTop: "22px", maxWidth: "760px" }}>
              IliriaConnect helps local patients and international visitors
              discover trusted clinics, request appointments, and combine
              treatment with tourism in Albania.
            </p>

            <div className="hero-actions">
              <Link href="/ai" className="btn btn-primary">
                Start with AI Assistant
              </Link>
              <Link href="/clinics" className="btn btn-secondary">
                Browse Clinics
              </Link>
            </div>

            <div className="badge-row">
              <span className="badge">Dental</span>
              <span className="badge">Aesthetic</span>
              <span className="badge">Diagnostics</span>
              <span className="badge">Albania</span>
              <span className="badge">Italy</span>
              <span className="badge">Europe</span>
            </div>

            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-label">Visitors</div>
                <div className="stat-value">Local + International</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Use Case</div>
                <div className="stat-value">Appointments + Tourism</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Cities</div>
                <div className="stat-value">Tirana, Durres, Vlora</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Core Engine</div>
                <div className="stat-value">AI Clinic Matching</div>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1640876772336-c8d6b2b3d9fc?auto=format&fit=crop&w=1400&q=80"
                alt="Premium clinic interior"
              />
            </div>

            <div className="duo-grid">
              <div className="card">
                <div className="card-pad">
                  <div className="copy">AI Concierge</div>
                  <h3 style={{ marginTop: "12px" }}>Smart clinic matching</h3>
                  <p className="copy" style={{ marginTop: "12px" }}>
                    Users describe their treatment, city, budget, and travel
                    dates. The platform helps match them with the right options.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-pad">
                  <div className="copy">Tourism Layer</div>
                  <h3 style={{ marginTop: "12px" }}>Treatment + destination</h3>
                  <p className="copy" style={{ marginTop: "12px" }}>
                    Make the platform feel like medical tourism, not just a
                    clinic directory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">How it works</p>
            <h2>A better journey from search to appointment</h2>
            <p className="lead" style={{ marginTop: "16px" }}>
              This homepage is built to guide visitors from interest to
              decision, with AI as the conversion engine.
            </p>
          </div>

          <div className="cards-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="card">
                <div className="card-pad">
                  <div className="kicker">0{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p className="copy" style={{ marginTop: "12px" }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#ffffff", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-head">
            <p className="kicker alt">Featured clinics</p>
            <h2>Show clinics like a premium marketplace</h2>
            <p className="lead" style={{ marginTop: "16px" }}>
              Each clinic should feel trustworthy, visual, and ready for
              booking.
            </p>
          </div>

          <div className="cards-3">
            {featuredClinics.map((clinic) => (
              <ClinicCard key={clinic.slug} clinic={clinic} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Treatments</p>
            <h2>Treatment pages help with SEO and lead generation</h2>
          </div>

          <div className="cards-2">
            {featuredTreatments.map((item) => (
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
                    <Link href="/treatments" className="btn btn-secondary">
                      View Treatments
                    </Link>
                    <Link href="/contact" className="btn btn-primary">
                      Request This
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#ffffff", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-head">
            <p className="kicker alt">Destinations</p>
            <h2>Let visitors explore Albania, not just book a clinic</h2>
            <p className="lead" style={{ marginTop: "16px" }}>
              The destination layer makes the website feel like medical tourism
              instead of a basic clinic site.
            </p>
          </div>

          <div className="cards-3">
            {featuredDestinations.map((place) => (
              <div key={place.name} className="card clinic-card">
                <div className="card-media">
                  <img src={place.image} alt={place.name} />
                </div>
                <div className="card-body">
                  <h3>{place.name}</h3>
                  <p className="copy" style={{ marginTop: "12px" }}>
                    {place.description}
                  </p>
                  <div className="inline-actions">
                    <Link href="/destinations" className="btn btn-secondary">
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Testimonials</p>
            <h2>Trust and clarity matter in healthcare decisions</h2>
          </div>

          <div className="cards-2">
            {testimonials.map((item) => (
              <div key={item.author} className="card">
                <div className="card-pad">
                  <p className="lead">“{item.quote}”</p>
                  <p className="kicker" style={{ marginTop: "20px" }}>
                    {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center-box">
            <p className="kicker">Next step</p>
            <h2>Use AI to qualify the visitor before they contact a clinic</h2>
            <p className="lead" style={{ marginTop: "16px", maxWidth: "760px", marginInline: "auto" }}>
              This is the real value proposition: fewer dead leads, faster
              appointments, and a better experience for both clinics and
              patients.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/ai" className="btn btn-primary">
                Open AI Assistant
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Request Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
