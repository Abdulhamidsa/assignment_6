import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from "react"
import Person from './Person'; 

const API_KEY = "81c722a8c9f90f6edec7e7c6b410de83";
const QUERY = "spielberg"; // test query

function App() {
  const [persons, setPersons] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/person?query=${QUERY}&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setPersons(data.results || []));
  }, []);

  return (
    <div>
      <h1>TMDB Person Search</h1>

      {persons.length > 0 && <Person person={persons[index]} />}

      <div>
        <button disabled={index === 0} onClick={() => setIndex(index - 1)}>Prev</button>
        <button disabled={index === persons.length - 1} onClick={() => setIndex(index + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App






