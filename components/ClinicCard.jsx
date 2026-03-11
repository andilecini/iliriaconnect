import Link from "next/link";

export default function ClinicCard({ clinic }) {
  return (
    <div className="card clinic-card">
      <div className="card-media">
        <img src={clinic.image} alt={clinic.name} />
      </div>

      <div className="card-body">
        <div className="rating-pill">{clinic.rating} ★</div>

        <h3 style={{ marginTop: "14px" }}>{clinic.name}</h3>

        <div className="meta-line">
          <span>{clinic.city}</span>
          <span>{clinic.category}</span>
          <span>{clinic.reviews} reviews</span>
        </div>

        <p className="copy" style={{ marginTop: "14px" }}>
          {clinic.description}
        </p>

        <div className="tag-list">
          {clinic.specialties.slice(0, 3).map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>

        <div className="price">{clinic.price}</div>

        <div className="inline-actions">
          <Link href={`/clinics/${clinic.slug}`} className="btn btn-primary">
            View Clinic
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}
