import React from "react";
import CartItems from "./CartItems";
import { useCartContext } from "../Store/context.js";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const { items } = useCartContext();

  const hasItems = items.length > 0;

  const amt = items
    .map((val) => val.amount * val.price)
    .reduce((acc, val) => acc + val, 0);

  const totalAmount = parseFloat(amt).toFixed(2).replace("NaN", "0");

  return (
    <>
      <Modal onClose={props.onClose}>
        <div className={classes["cart-items"]}>
          <CartItems />
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{`$${totalAmount}`}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            {hasItems && <button className={classes.button}>Order</button>}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
