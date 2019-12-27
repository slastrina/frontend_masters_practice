import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel"
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me</h1>
      <Pet name="luna" animal="Dog" breed="havanese" />
      <Pet name="Pepper" animal="bird" breed="cockatiel" />
      <Pet name="Doink" animal="cat" breed="mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
