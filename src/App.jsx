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

export default App;
