import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [randomJoke, setRandomJoke] = useState({});

  const fetchJoke = () => {
    try {
      fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRandomJoke(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h4>{randomJoke.joke}</h4>

        <button onClick={fetchJoke}>Joke</button>
      </div>
    </>
  );
}

export default App;
