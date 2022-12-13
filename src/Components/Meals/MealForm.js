import React, { useRef } from "react";
import { useCartContext } from "../Store/context";
import styles from "./MealForm.module.css";

const MealForm = (props) => {
  const amountInputRef = useRef();
  const { cartItems } = useCartContext();

  const submitHandler = (e) => {
    e.preventDefault();
    const amount = amountInputRef.current.value;
    const items = {
      name: props.name,
      amount,
      id: props.id,
      price: props.price,
    };
    cartItems(items);
  };

  return (
    <form onSubmit={submitHandler} className={styles.input}>
      <div>
        {props.children}
        <label>Amount</label>
        <input
          ref={amountInputRef}
          type="number"
          min={1}
          max={5}
          defaultValue="1"
          step="1"
        />
      </div>
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;
