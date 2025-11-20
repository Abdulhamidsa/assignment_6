import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>Department: {person.known_for_department}</p>
    </div>
  );
}

export default Person;
