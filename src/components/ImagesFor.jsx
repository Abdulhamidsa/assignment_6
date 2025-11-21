// src/ImagesFor.jsx
import { useEffect, useState } from "react";

const API_KEY = "81c722a8c9f90f6edec7e7c6b410de83"; 
const BASE_URL = "https://image.tmdb.org/t/p/";
const FILE_SIZE = "w185"; 

export default function ImagesFor({ id }) {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchImages() {
      try {
        setIsLoading(true);
        setError(null);

        const url = `https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }

        const data = await response.json();
        console.log("Images for person", id, data);

        setProfiles(data.profiles || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [id]);

  if (!id) {
    return null;
  }

  return (
    <div style={{ marginTop: "12px" }}>
      <h3 style={{ marginBottom: "8px" }}>Images</h3>

      {isLoading && <p>Loading images…</p>}
      {error && (
        <p style={{ color: "red" }}>
          Error loading images: {error}
        </p>
      )}

      {!isLoading && !error && profiles.length === 0 && (
        <p>No images found for this person.</p>
      )}

      {!isLoading && !error && profiles.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {profiles.map((p, index) => (
            <img
              key={index}
              src={`${BASE_URL}${FILE_SIZE}${p.file_path}`}
              alt="Profile"
              style={{
                borderRadius: "6px",
                maxHeight: "180px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
