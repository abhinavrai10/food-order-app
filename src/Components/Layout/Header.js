import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}>ShowCart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img
          src={mealsImage}
          alt="A table full of delicious food!"
          priority={1}
        ></img>
      </div>
    </>
  );
};

export default Header;
