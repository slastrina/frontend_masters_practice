import React from "react";

export default function Pet({ name, animal, breed }) {
  const x = name.toUpperCase(name)

  return (
    <div>
      <h1>Name: {x}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
