import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <div>
          <div className="brand">IliriaConnect</div>
          <p className="copy" style={{ maxWidth: "560px", marginTop: "10px" }}>
            A premium platform concept for clinic discovery, AI-guided
            appointments, and medical tourism in Albania.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/clinics">Clinics</Link>
          <Link href="/treatments">Treatments</Link>
          <Link href="/ai">AI Assistant</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
