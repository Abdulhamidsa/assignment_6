// src/Components/Person.jsx
import ImagesFor from "./ImagesFor";

export default function Person({ person, apiKey }) {
  if (!person) return <p>No person selected.</p>;

  return (
    <div>
      <h2>{person.name}</h2>
      <p>Department: {person.known_for_department}</p>

      {person.profile_path ? <img src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} alt={person.name} /> : <p>No image available</p>}

      <h3>Known for</h3>
      {person.known_for?.length ? (
        <ul>
          {person.known_for.map((item) => (
            <li key={item.id}>
              <strong>{item.title || item.name}</strong>
              {item.release_date && <> ({item.release_date})</>}
              <p>{item.overview}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No known works found.</p>
      )}

      {/* 🔥 task 7 here */}
      <ImagesFor id={person.id} apiKey={apiKey} />
    </div>
  );
}
