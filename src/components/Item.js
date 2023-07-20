import React, {useState} from "react";

function Item({ name, category }) {

  const [added, setAdded] = useState(false)

  function handleAdd() {
    setAdded(!added);
  }

  return (
    <li className={added ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={added ? "remove" : "add"} onClick={handleAdd}>{added ? 'Remove from Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;

