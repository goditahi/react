import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setFact(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <>loading...</>;
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>Cat Fact</h1>
      {fact.fact}
    </>
  );
}

export default App;
