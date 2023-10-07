import React from "react";

function PizzaItem({ name, ingredients, price }) {
  return (
    <div className="secondaryPizza">
      <div>
        <h4 className={ingredients === "" ? "nop" : "withp"}>{name}</h4>
        <p>{ingredients}</p>
      </div>
      <p>{price}</p>
    </div>
  );
}

export default PizzaItem;
