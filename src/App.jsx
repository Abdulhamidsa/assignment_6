import { useState, useEffect } from "react";
import "./App.css";
import Person from "./Components/Persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [index, setIndex] = useState(0);
  const QUERY = "kim";
  const API_KEY = "81c722a8c9f90f6edec7e7c6b410de83";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/person?query=${QUERY}&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setPersons(data.results || []);
        setIndex(0);
        console.log(data.results);
      });
  }, [QUERY]);

  const hasPersons = persons.length > 0;
  const currentPerson = hasPersons ? persons[index] : null;

  return (
    <div>
      <h1>Person Viewer</h1>

      {hasPersons && (
        <div style={{ marginBottom: "1rem" }}>
          <button onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
            Previous
          </button>

          <span style={{ margin: "0 1rem" }}>
            {index + 1} / {persons.length}
          </span>

          <button onClick={() => setIndex((i) => i + 1)} disabled={index === persons.length - 1}>
            Next
          </button>
        </div>
      )}

      <Person person={currentPerson} apiKey={API_KEY} />
    </div>
  );
}

export default App;
