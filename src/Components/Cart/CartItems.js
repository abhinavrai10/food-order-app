import React from "react";
import { useCartContext } from "../Store/context";
import classes from "./CartItems.module.css";

const CartItems = () => {
  const { items, removeClickHandler, addClickHandler } = useCartContext();

  return items.map((value) => (
    <li key={value.id} className={classes["cart-item"]}>
      <div>
        <h3>{value.name}</h3>
        <div className={classes.summary}>
          <span className={classes.price}>{`$${value.price}`}</span>
          <span className={classes.amount}>{` x${value.amount}`}</span>
        </div>
      </div>
      <div className={classes.actions}>
      <button onClick={removeClickHandler.bind(null, value.id)}>-</button>
      <button onClick={addClickHandler.bind(null, value.id)}>+</button>
      </div>
    </li>
  ));
};

export default CartItems;
