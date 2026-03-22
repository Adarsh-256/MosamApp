export default function InfoBox({ Info }) {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="info-card">

        {/* LEFT SIDE */}
        <div>
          <h1 style={{
            fontSize: "2.5rem",
            margin: "0",
            fontWeight: "600"
            ,color: "#333"
          }}>
            {Info.temp}°C
          </h1>

          <h2 style={{
            marginTop: "40px",
            fontWeight: "500",
            opacity: "0.8",
            color: "#333"
          }}>
            {Info.weather}
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div style={{ textAlign: "right" }}>
          <h2 style={{ margin: "0",color: "#333" }}>
            {Info.city}, {Info.country}
          </h2>

          <p style={{ marginTop: "40px" }}>
            💧 {Info.humidity}%
          </p>

          <p>
            🌪 {Info.pressure} hPa
          </p>
        </div>

      </div>
    </div>
  );
}