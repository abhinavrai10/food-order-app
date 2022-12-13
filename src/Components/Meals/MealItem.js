import React, { useEffect, useState } from "react";
import MealForm from "./MealForm";
import Card from "../UI/Card";
import styles from "./MealItem.module.css";

const MealItem = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-ab99f-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  // console.log(loadedMeals);
  const mealList = (
    <div className={styles.list}>
        <Card>
        {meals.map((val) => (
          <ul key={val.id} className={styles.meal}>
            <div>
              <h3>{val.name}</h3>
              <div className={styles.description}>{val.description}</div>
              <div className={styles.price}>{`$${val.price}`}</div>
            </div>
            <div>
              <MealForm
                name={val.name}
                price={val.price}
                id={val.id}
              ></MealForm>
            </div>
          </ul>
        ))}
    </Card>
      </div>
  );

  return <>{mealList}</>;
};

export default MealItem;
