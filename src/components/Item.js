import React, {useState} from "react";

function Item({ name, category }) {
  const [added, setAdded] = useState("")
  const [cartText, setCartText] = useState("Add to Cart")

  function cartHandler(){
    if (added === "in-cart") {
      setCartText("Add to Cart")
      setAdded("")
    } else {
      setCartText("Remove from Cart")
      setAdded("in-cart")
    }
  }

  return (
    <li className={added}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => cartHandler()}
      className="add">
        {cartText}</button>
    </li>
  );
}

export default Item;
