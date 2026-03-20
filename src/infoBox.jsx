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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",

          // 💎 Premium Card Style
          padding: "25px 40px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          height: "150px",
          color: "black",
          minWidth: "370px",
          justifyContent: "space-between",
        }}
      >

        {/* LEFT SIDE */}
        <div>
          <h1 style={{
            fontSize: "3rem",
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