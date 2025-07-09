import React, { useEffect } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState(
    localStorage.getItem("TravelTodos")
      ? JSON.parse(localStorage.getItem("TravelTodos"))
      : []
  );

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items?.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure ypu want to delete the entire list?"
    );
    if (confirmed) setItems([]);
  }

  useEffect(() => {
    localStorage.setItem("TravelTodos", JSON.stringify(items));
  });

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateToggle={handleToggle}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
