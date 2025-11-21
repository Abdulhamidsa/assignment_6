// src/KnownFor.jsx

export default function KnownFor({ item }) {
  const title = item.title || item.name || "Untitled";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "8px",
        marginBottom: "8px",
        borderRadius: "6px",
        backgroundColor: "#fafafa",
      }}
    >
      <h4 style={{ margin: "0 0 4px" }}>{title}</h4>
      {item.release_date && (
        <p style={{ margin: "0 0 4px", fontSize: "0.9rem" }}>
          <strong>Release date:</strong> {item.release_date}
        </p>
      )}
      <p style={{ margin: 0, fontSize: "0.9rem" }}>
        {item.overview || "No overview available."}
      </p>
    </div>
  );
}
