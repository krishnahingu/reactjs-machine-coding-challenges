import { useState } from "react";
import "./App.css";

function App() {
  const fruits = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "ugli fruit",
    "watermelon",
  ];

  const [list, setList] = useState(fruits);
  const [filteredList, setFilteredList] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    let searchTerm = e.target.value;
    setInput(searchTerm);
    let tempList = list.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(tempList);
  };

  return (
    <div className="App">
      <h2>Typeahead</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        onChange={(e) => handleChange(e)}
      />
      {input.length > 0 && (
        <div className="suggestions">
          {filteredList.length > 0 ? (
            filteredList.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;