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
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'


function App() {
  const [count, setCount] = useState(0)
  const QUERY = "spielberg";
const API_KEY = "81c722a8c9f90f6edec7e7c6b410de83";

const [persons, setPersons] = useState([]);

useEffect(() => {
  async function fetchPersons() {
    const url = `https://api.themoviedb.org/3/search/person?query=${QUERY}&api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log("Fetched data:", data);
    setPersons(data.results);
  }

  fetchPersons();
}, []);


  return (
    <div>
      <h1>TMDB Person Search</h1>

      {persons.length > 0 && <Person person={persons[index]} />}

      <div>
        <button disabled={index === 0} onClick={() => setIndex(index - 1)}>Prev</button>
        <button disabled={index === persons.length - 1} onClick={() => setIndex(index + 1)}>Next</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>Search results:</h2>
  {
    persons.map(p => (
    <Person key={p.id} person={p} />
    )
    )
  }

    </>
  )
import { useEffect } from "react";
import "./App.css";

function App() {
 
  const QUERY = "spielberg";

  useEffect(() => {
    // Fetch people once when the component mounts
    const fetchPeople = async () => {
      try {
        const response = await fetch(
          `https://swapi.py4e.com/api/people/?search=${QUERY}`
        );
        const data = await response.json();

        console.log("Fetched people:", data); 
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div className="App">
      <h1>Person Search</h1>
      <p>Searching for: <strong>{QUERY}</strong></p>
      <p>Open your browser console to see the fetched results.</p>
    </div>
  );
}

export default App






export default App;
