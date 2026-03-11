export default function HomePage() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-row">
          <div>
            <div className="brand">IliriaConnect.com</div>
            <div className="brand-sub">
              Clinic Growth & Medical Tourism Marketing
            </div>
          </div>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              Iliria Connect | Albania Clinic Growth & Medical Tourism
            </div>

            <h1>
              Help dental and health clinics in Albania get more patients from
              Albania, Italy, and Europe.
            </h1>

            <p className="hero-text">
              We build premium patient acquisition systems for dental clinics,
              private health centers, and tourism-focused medical services in
              Albania — combining lead generation, trust-building, and
              international positioning.
            </p>

            <div className="cta-row">
              <a className="btn btn-dark" href="#contact">
                Attract More Local, Foreign Patients and Tourists
              </a>
              <a className="btn btn-light" href="#services">
                View Services
              </a>
            </div>

            <div className="tag-row">
              <span className="tag">Albania</span>
              <span className="tag">Italy</span>
              <span className="tag">Kosovo</span>
              <span className="tag">Germany</span>
              <span className="tag">Switzerland</span>
              <span className="tag">UK</span>
            </div>
          </div>

          <div className="panel">
            <div className="panel-grid">
              <div className="panel-card">
                <p className="muted">Core niche</p>
                <h3>Dental Clinics</h3>
                <p>Implants, veneers, aligners, smile design, oral surgery.</p>
              </div>

              <div className="panel-card">
                <p className="muted">Expansion</p>
                <h3>Health Clinics</h3>
                <p>
                  Aesthetic, diagnostic, rehab, fertility, and specialist care.
                </p>
              </div>

              <div className="panel-card wide">
                <p className="muted">Growth angle</p>
                <h3>Medical Tourism in Albania</h3>
                <p>
                  Attract foreign patients seeking quality treatment, lower
                  costs, and convenient travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Services</p>
            <h2>
              A premium acquisition offer built for high-trust, high-value
              patient growth
            </h2>
          </div>

          <div className="card-grid three">
            <div className="card">
              <h3>Dental Clinic Lead Generation</h3>
              <p>
                Attract more local and international patients with multilingual
                ads, local SEO, conversion-focused landing pages, and
                WhatsApp-first booking flows.
              </p>
            </div>

            <div className="card">
              <h3>Health Clinic Growth</h3>
              <p>
                Extend the same system to aesthetics, diagnostics, fertility,
                physiotherapy, and specialist clinics looking to grow patient
                volume consistently.
              </p>
            </div>

            <div className="card">
              <h3>Medical & Tourism Positioning</h3>
              <p>
                Combine healthcare marketing with Albania’s value advantage to
                appeal to patients from Italy and across Europe seeking
                affordable, high-quality treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container two-col">
          <div>
            <p className="kicker alt">What you deliver</p>
            <h2>
              Everything needed to attract qualified inquiries and convert them
              into booked patients
            </h2>
          </div>

          <div className="feature-list">
            <div className="feature-item">
              Google Ads and Meta Ads in Albanian, Italian, and English
            </div>
            <div className="feature-item">
              SEO for treatments, clinic locations, and treatment in Albania
              searches
            </div>
            <div className="feature-item">
              High-converting landing pages with trust signals and premium
              clinic messaging
            </div>
            <div className="feature-item">
              WhatsApp, form, and call tracking setup
            </div>
            <div className="feature-item">
              Review generation and local reputation management
            </div>
            <div className="feature-item">
              CRM-friendly lead handling and follow-up workflows
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">How it works</p>
            <h2>
              A refined growth system clinics can trust from first impression to
              booking
            </h2>
          </div>

          <div className="card-grid four">
            <div className="card soft">
              <div className="step">01</div>
              <h3>Positioning</h3>
              <p>
                Define your best treatments, ideal patient profiles, pricing
                edge, and why patients should choose Albania.
              </p>
            </div>

            <div className="card soft">
              <div className="step">02</div>
              <h3>Acquisition</h3>
              <p>
                Launch multilingual campaigns and treatment-focused pages
                designed to turn attention into inquiries.
              </p>
            </div>

            <div className="card soft">
              <div className="step">03</div>
              <h3>Conversion</h3>
              <p>
                Improve response speed, trust messaging, and booking flow so
                more leads become consultations.
              </p>
            </div>

            <div className="card soft">
              <div className="step">04</div>
              <h3>Scale</h3>
              <p>
                Double down on profitable treatments and countries while
                expanding into new clinic services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="cta-box">
            <p className="kicker alt">Why this niche works</p>
            <h2>
              Albania has a real opportunity in clinic growth and cross-border
              patient demand
            </h2>
            <p className="cta-copy">
              IliriaConnect.com helps clinics turn Albania’s value,
              accessibility, and service quality into a clear growth engine.
            </p>

            <div className="cta-row center">
              <a className="btn btn-dark" href="mailto:hello@iliriaconnect.com">
                Attract More Local, Foreign Patients and Tourists
              </a>
              <a
                className="btn btn-light"
                href="mailto:hello@iliriaconnect.com"
              >
                Request Proposal
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
