import React, { useState } from "react";

function Item({ name, category }) {
  
  const [mode, setMode] = useState(false)

  const className = mode ? "in-cart" : ""

  function handleAddItem() {
    setMode(!mode)
    category = mode ? "Remove From Cart" : "Add to Cart"
  }


  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>Add to Cart</button>
    </li>
  );
}

export default Item;
