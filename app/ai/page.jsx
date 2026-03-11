import Link from "next/link";

export default function AIPage() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <div className="section-head">
            <p className="kicker">AI Assistant</p>
            <h2>This is your appointment engine</h2>
            <p className="lead" style={{ marginTop: "16px" }}>
              The AI assistant is what makes IliriaConnect more than a static
              directory. It qualifies, guides, and pushes visitors toward
              appointment requests.
            </p>
          </div>

          <div className="feature-list">
            <div className="feature-item">Ask about the treatment needed</div>
            <div className="feature-item">
              Understand budget, language, and preferred city
            </div>
            <div className="feature-item">
              Recommend the best matching clinics
            </div>
            <div className="feature-item">
              Suggest Albania destinations and travel fit
            </div>
            <div className="feature-item">
              Convert the user into a booking request
            </div>
          </div>

          <div className="inline-actions">
            <Link href="/contact" className="btn btn-primary">
              Convert to Appointment
            </Link>
            <Link href="/clinics" className="btn btn-secondary">
              See Clinics
            </Link>
          </div>
        </div>

        <div className="chat-shell">
          <div className="kicker" style={{ color: "rgba(255,255,255,0.65)" }}>
            Example conversation
          </div>

          <div className="chat-stack">
            <div className="bubble-ai">
              Hello. I can help you find the best clinic in Albania based on
              treatment, budget, travel dates, and preferred city.
            </div>

            <div className="bubble-user">
              I’m coming from Italy. I need dental implants in Tirana next month
              and I want 3 trusted options.
            </div>

            <div className="bubble-ai">
              I found 3 clinics that fit your request. I can also suggest nearby
              hotels and help you request your consultation.
            </div>
          </div>

          <div className="tag-list">
            <span className="tag">Treatment type</span>
            <span className="tag">Budget range</span>
            <span className="tag">Preferred city</span>
            <span className="tag">Travel dates</span>
            <span className="tag">Language</span>
            <span className="tag">Urgency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
