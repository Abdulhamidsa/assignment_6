// src/Components/ImagesFor.jsx
import { useEffect, useState } from "react";

const BASE_URL = "https://image.tmdb.org/t/p/";
const SIZE = "w185";

export default function ImagesFor({ id, apiKey }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.themoviedb.org/3/person/${id}/images?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data.profiles || []);
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, [id, apiKey]);

  if (!id) return null;

  return (
    <div>
      <h3>More images</h3>
      {profiles.length === 0 && <p>No extra images found.</p>}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {profiles.map((p, idx) => (
          <img key={idx} src={`${BASE_URL}${SIZE}${p.file_path}`} alt={`Profile ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}
