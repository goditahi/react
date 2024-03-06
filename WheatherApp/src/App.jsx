import { useEffect, useState } from "react";

function App() {
  let [city, setCity] = useState("");
  let [wheatherData, setWheatherData] = useState({});

  const api_key = `f53f917a8a58dd893be0ce33f0ea965c`;
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const fetchwheather = () => {
    try {
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          setWheatherData(data);
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
    setCity("");
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "150px",
        }}
      >
        <div>
          <input
            placeholder="Enter City Name"
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid red",
            }}
          />
        </div>

        <div>
          <button onClick={fetchwheather} style={{ margin: "20px" }}>
            Fetch
          </button>
        </div>

        {typeof wheatherData.main !== "undefined" ? (
          <div>
            <p>{wheatherData.name}</p>

            <p>{Math.floor(wheatherData.main.temp - 273.15)}°C</p>

            {wheatherData.weather[0].icon !== "undefined" ? (
              <img
                src={`https://openweathermap.org/img/wn/${wheatherData.weather[0].icon}@2x.png`}
                alt=""
              />
            ) : (
              <p>wheatherData.weather[0].icon</p>
            )}
            <p>{wheatherData.weather[0].main}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
