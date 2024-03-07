import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/manga")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data[0].title);
        setFact(data.data);
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
      <ul>
        {fact.map((manga) => (
          <img src={manga.images.jpg.image_url} alt="" />
        ))}
        <br />
      </ul>
    </>
  );
}

export default App;
