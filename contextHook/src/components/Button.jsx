import React from "react";
import { useContext } from "react";
import { CounterContex } from "../context/counterContext";

const Button = () => {
  const { count, setCount } = useContext(CounterContex);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Button;
