export default function HomePage() {
            <p className="kicker">Services</p>
            <h2>A premium acquisition offer built for high-trust, high-value patient growth</h2>
          </div>
          <div className="card-grid three">
            {services.map((service) => (
              <div key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container two-col">
          <div>
            <p className="kicker alt">What you deliver</p>
            <h2>Everything needed to attract qualified inquiries and convert them into booked patients</h2>
          </div>
          <div className="feature-list">
            {features.map((item) => (
              <div key={item} className="feature-item">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">How it works</p>
            <h2>A refined growth system clinics can trust from first impression to booking</h2>
          </div>
          <div className="card-grid four">
            {process.map((item) => (
              <div key={item.step} className="card soft">
                <div className="step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="cta-box">
            <p className="kicker alt">Why this niche works</p>
            <h2>Albania has a real opportunity in clinic growth and cross-border patient demand</h2>
            <p className="cta-copy">
              IliriaConnect.com helps clinics turn Albania’s value, accessibility, and service quality into a clear growth engine.
            </p>
            <div className="cta-row center">
              <a className="btn btn-dark" href="mailto:hello@iliriaconnect.com">Attract More Local, Foreign Patients and Tourists</a>
              <a className="btn btn-light" href="mailto:hello@iliriaconnect.com">Request Proposal</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
