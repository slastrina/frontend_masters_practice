import React, {useState} from "react";
import {ANIMALS} from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location"
                 value={location}
                 placeholder="location"
                 onChange={event => setLocation(event.target.value)}/>
        </label>
        <label htmlFor="animal">
          Animal
          <select id="animal"
                 value={animal}
                 onBlur={event => setAnimal(event.target.value)}
                  onChange={event => setAnimal(event.target.value)}>
            <option>All</option>
            {ANIMALS.map(animal => (<option key={animal} value={animal}>{animal}</option>))}
          </select>
        </label>
        <label htmlFor="breed">
          Animal
          <select id="breed"
                  value={breed}
                  onBlur={event => setBreed(event.target.value)}
                  onChange={event => setBreed(event.target.value)}
                  disabled={breeds.length === 0}>
            <option>All</option>
            {breeds.map(breedString => ( <option key={breedString} value={breedString}>{breedString}</option> ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
