import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All"); // initially

  function applyFilter(e) {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={applyFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {
          items.map( item => {
            if (item.category == selectedCategory || selectedCategory == "All"){
              return <Item key={item.id} name={item.name} category={item.category} />
            }
          })
        }
      </ul>
    </div>
  );
}

export default ShoppingList;

