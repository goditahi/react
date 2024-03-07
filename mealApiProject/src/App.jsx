import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data.meals);
        setMeals(res.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  const itemslist = meals.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });
  return (
    <>
      <h1>Meal Menu</h1>
      <div className="items-container">{itemslist}</div>;
    </>
  );
}

export default App;
