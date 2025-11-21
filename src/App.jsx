import { useEffect, useState } from "react";
import Person from "./components/Person.jsx";

const API_KEY = "81c722a8c9f90f6edec7e7c6b410de83";
const QUERY = "spielberg";

export default function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchPersons() {
      try {
        setIsLoading(true);
        setError(null);

        const url = `https://api.themoviedb.org/3/search/person?query=${encodeURIComponent(QUERY)}&api_key=${API_KEY}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }

        const data = await response.json();
        console.log("TMDB search:", data);

        setResults(data.results || []);
        setCurrentIndex(0);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPersons();
  }, []);

  const hasResults = results.length > 0;
  const currentPerson = hasResults ? results[currentIndex] : null;

  function goPrev() {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }

  function goNext() {
    setCurrentIndex((i) => Math.min(results.length - 1, i + 1));
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Task 5 — Show One Person with Navigation</h1>
      <p>
        Searching for: <strong>{QUERY}</strong>
      </p>

      {isLoading && <p>Loading…</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!isLoading && !error && !hasResults && <p>No persons found for this query.</p>}

      {!isLoading && !error && hasResults && (
        <>
          {/* Info about where we are in the list */}
          <p>
            Showing person <strong>{currentIndex + 1}</strong> of <strong>{results.length}</strong>
          </p>

          <Person person={currentPerson} />

          <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
            <button onClick={goPrev} disabled={currentIndex === 0}>
              Previous
            </button>
            <button onClick={goNext} disabled={currentIndex === results.length - 1}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
