
import KnownFor from "./KnownFor.jsx";
import ImagesFor from "./ImagesFor.jsx";

export default function Person({ person }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "8px",
      }}
    >
      <h2>{person.name}</h2>
      <p>
        <strong>Department:</strong> {person.known_for_department}
      </p>

   
      {person.known_for && person.known_for.length > 0 && (
        <div style={{ marginTop: "12px" }}>
          <h3 style={{ marginBottom: "8px" }}>Known for:</h3>
          {person.known_for.map((item) => (
            <KnownFor key={item.id || item.credit_id} item={item} />
          ))}
        </div>
      )}

     
      <ImagesFor id={person.id} />
    </div>
  );
}
