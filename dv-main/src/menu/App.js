import { useState } from "react";

import { DropDown } from "./DropDown";

const options = [
  { value: "goldfish", label: "Goldfish" },
  { value: "hamster", label: "Hamster" },
  { value: "parrot", label: "Parrot" },
  { value: "spider", label: "Spider" },
  { value: "cat", label: "Cat" },
  { value: "dog", label: "Dog" }
]

const initialValue = "hamster"

export const App = () => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  console.log(selectedValue);
  
  return (
    <div>
      <label for="pet-select">Choose a pet:</label>
      <DropDown 
        id="pet-select" 
        options={options} 
        selectedValue={selectedValue}
        onSelectValueChange={setSelectedValue}
      />
    </div>
  );
}