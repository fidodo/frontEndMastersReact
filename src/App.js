import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

function App() {
  return (
    <div>
      <h1> Adopt me! </h1>
      <Pet name="Luna" animal="dog" breed="Havenese" />
      <Pet name="pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
      <SearchParams />
    </div>
  );
}

export default App;
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };

render(<App />, document.getElementById("root"));
