export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="form-shell">
          <div>
            <div className="section-head">
              <p className="kicker">Contact / Booking</p>
              <h2>Request an appointment or let the AI guide the patient first</h2>
              <p className="lead" style={{ marginTop: "16px" }}>
                In the final real version, this form should send leads to
                clinics, route requests by treatment, and connect with WhatsApp
                or a CRM workflow.
              </p>
            </div>

            <div className="feature-list">
              <div className="feature-item">WhatsApp-first support</div>
              <div className="feature-item">Multilingual responses</div>
              <div className="feature-item">Italy and Europe ready</div>
              <div className="feature-item">AI pre-qualification flow</div>
            </div>
          </div>

          <div className="card card-soft">
            <div className="card-pad">
              <h3>Appointment Request</h3>

              <form className="form-grid">
                <input className="input" type="text" placeholder="Full name" />
                <input className="input" type="email" placeholder="Email address" />
                <input className="input" type="text" placeholder="Country / city" />
                <input className="input" type="text" placeholder="Treatment needed" />
                <input className="input" type="text" placeholder="Preferred travel dates" />
                <textarea
                  className="textarea"
                  placeholder="Tell us what you need and the AI or clinic team will guide you."
                />
                <button className="btn btn-primary" type="submit">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
