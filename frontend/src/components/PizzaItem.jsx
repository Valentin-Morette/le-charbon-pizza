import React from "react";
import PropTypes from "prop-types";

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

PizzaItem.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default PizzaItem;
