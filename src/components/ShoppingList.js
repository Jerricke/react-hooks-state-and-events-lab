import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All")
  const [foods, setFoods] = useState(items)


  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.category === filterBy;
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
