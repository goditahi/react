import "./App.css";
import { useContext } from "react";
import { CounterContex } from "./context/counterContext";
import Button from "./components/Button";

function App() {
  const { count, setCount } = useContext(CounterContex);
  // console.log(val);

  return (
    <>
      <h1>Hello useContext Hook</h1>
      <h2>Count is {count} </h2>
      <Button />
    </>
  );
}

export default App;
