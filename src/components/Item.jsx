import React from "react";

const Item = ({ item, onDeleteItem, onUpdateToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item?.packed}
        onChange={() => onUpdateToggle(item?.id)}
      />
      <span style={item?.packed ? { textDecoration: "line-through" } : {}}>
        {item?.select} {item?.description}
      </span>
      <button onClick={() => onDeleteItem(item?.id)}>❌</button>
    </li>
  );
};

export default Item;
