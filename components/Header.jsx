import Link from "next/link";

export default function Header() {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <div>
          <Link href="/" className="brand">
            IliriaConnect
          </Link>
          <div className="brand-sub">
            Clinics, Appointments & Medical Tourism in Albania
          </div>
        </div>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/clinics">Clinics</Link>
          <Link href="/treatments">Treatments</Link>
          <Link href="/ai">AI Assistant</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="btn btn-primary">
          Request Appointment
        </Link>
      </div>
    </header>
  );
}
