export default function Person({ person }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3>{person.name}</h3>
      <p>Department: {person.known_for_department}</p>
    </div>
  );
}

