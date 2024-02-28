import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);

  const addCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else alert("couter reach maximum");
  };

  const removeCounter = () => {
    if (counter > 0) setCounter(counter - 1);
    else alert("counter reach minimum");
  };

  const addThrice = () => {
    if (counter <= 17) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      alert("exceed max limit");
    }
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="container">
        <h3>{counter}</h3>

        <button onClick={addThrice}>Add 3</button>

        <button onClick={addCounter}>Add 1</button>
        <button onClick={removeCounter}>remove 1</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

export default App;
