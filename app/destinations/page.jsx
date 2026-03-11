import { destinations } from "../../lib/data";

export default function DestinationsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="kicker alt">Destinations</p>
          <h2>Turn healthcare into a travel-worthy experience</h2>
          <p className="lead" style={{ marginTop: "16px" }}>
            This is what makes the platform feel like medical tourism instead of
            a standard clinic site.
          </p>
        </div>

        <div className="cards-3">
          {destinations.map((place) => (
            <div key={place.name} className="card clinic-card">
              <div className="card-media">
                <img src={place.image} alt={place.name} />
              </div>
              <div className="card-body">
                <h3>{place.name}</h3>
                <p className="copy" style={{ marginTop: "12px" }}>
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
