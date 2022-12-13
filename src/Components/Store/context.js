import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext({});

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const cartItems = (data) => {
    const checkIndex = items.findIndex((val) => val.id === data.id);

    const updatedAmount =
      items
        .filter((val) => val.id === data.id)
        .map((val) => val.amount)
        .reduce((acc, val) => acc + Number(val), 0) + Number(data.amount);

    if (checkIndex !== -1) {
      items[checkIndex].amount = updatedAmount;
      setItems((prevData) => [...prevData]);
    } else {
      setItems((prevData) => [...prevData, data]);
    }
  };

  const addClickHandler = (addId) => {
    const checkIndex = items.findIndex((val) => val.id === addId);
    if (checkIndex !== -1) {
      items[checkIndex].amount++;
      setItems((prevData) => [...prevData]);
    }
  };

  const removeClickHandler = (addId) => {
    const checkIndex = items.findIndex((val) => val.id === addId);
    if (items[checkIndex].amount <= 1) {
      return setItems((prevData) =>
        [...prevData].filter((val) => val.id !== addId)
      );
    }
    if (checkIndex !== -1) {
      items[checkIndex].amount--;
      setItems((prevData) => [...prevData]);
    }
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        items,
        addClickHandler,
        removeClickHandler,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  const { cartItems, items, addClickHandler, removeClickHandler } =
    useContext(cartContext);

  return { cartItems, items, addClickHandler, removeClickHandler };
};

export default CartContextProvider;
