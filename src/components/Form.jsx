import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, select, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription("");
    setSelect(1);
    onAddItems(newItem);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 style={{ margin: 0, padding: 0, letterSpacing: 'normal', wordSpacing: 0 }}>What do you need for your trip?</h3>
      <div className="form-body">
        <div className="form-select-input">
          <select
            value={select}
            onChange={(e) => setSelect(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
