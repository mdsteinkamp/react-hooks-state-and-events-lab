import { waitForDomChange } from "@testing-library/react";
import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedItems, setItems] = useState(items)
  const [filterBy, setFilterBy] = useState("All")

  function handleFilterChange(e) {
    setFilterBy(e.target.value)
  }

  const itemList = items.filter(item => {
    if (filterBy === "All") {
      return true
    } else {
      return item.category === filterBy
    }
  })



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
